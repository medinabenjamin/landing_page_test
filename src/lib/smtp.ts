import { Buffer } from "node:buffer";
import { randomBytes } from "node:crypto";
import tls from "node:tls";

type SendMailParams = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
  subject: string;
  text: string;
};

const CRLF = "\r\n";

const normalizeHeaderValue = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const dotStuff = (value: string) => value.replace(/(^|\n)\./g, "$1..");

const formatMessage = ({ from, to, subject, text }: Pick<SendMailParams, "from" | "to" | "subject" | "text">) => {
  const boundary = `----=_Part_${randomBytes(8).toString("hex")}`;
  const safeSubject = normalizeHeaderValue(subject);
  const safeFrom = normalizeHeaderValue(from);
  const safeTo = normalizeHeaderValue(to);

  return [
    `From: ${safeFrom}`,
    `To: ${safeTo}`,
    `Subject: ${safeSubject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary=\"${boundary}\"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    dotStuff(text),
    "",
    `--${boundary}--`,
    "",
  ].join(CRLF);
};

const readResponse = (socket: tls.TLSSocket): Promise<{ code: number; message: string }> =>
  new Promise((resolve, reject) => {
    let buffer = "";

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split(CRLF);
      if (!buffer.endsWith(CRLF)) {
        return;
      }

      const completedLines = lines.filter(Boolean);
      if (!completedLines.length) {
        return;
      }

      const lastLine = completedLines[completedLines.length - 1];
      if (!/^\d{3} /.test(lastLine)) {
        return;
      }

      socket.off("data", onData);
      const code = Number.parseInt(lastLine.slice(0, 3), 10);
      resolve({ code, message: completedLines.join("\n") });
    };

    const onError = (error: Error) => {
      socket.off("data", onData);
      reject(error);
    };

    socket.on("data", onData);
    socket.once("error", onError);
  });

const sendCommand = async (
  socket: tls.TLSSocket,
  command: string,
  validCodes: number[]
): Promise<void> => {
  socket.write(`${command}${CRLF}`);
  const response = await readResponse(socket);
  if (!validCodes.includes(response.code)) {
    throw new Error(`SMTP command failed (${command}): ${response.message}`);
  }
};

export const sendMailWithSmtp = async ({ host, port, user, pass, from, to, subject, text }: SendMailParams) => {
  const socket = tls.connect({ host, port, servername: host });

  await new Promise<void>((resolve, reject) => {
    socket.once("secureConnect", () => resolve());
    socket.once("error", reject);
  });

  try {
    const greeting = await readResponse(socket);
    if (greeting.code !== 220) {
      throw new Error(`SMTP greeting failed: ${greeting.message}`);
    }

    await sendCommand(socket, "EHLO localhost", [250]);
    await sendCommand(socket, "AUTH LOGIN", [334]);
    await sendCommand(socket, Buffer.from(user).toString("base64"), [334]);
    await sendCommand(socket, Buffer.from(pass).toString("base64"), [235]);
    await sendCommand(socket, `MAIL FROM:<${from}>`, [250]);
    await sendCommand(socket, `RCPT TO:<${to}>`, [250, 251]);
    await sendCommand(socket, "DATA", [354]);

    const message = formatMessage({ from, to, subject, text });
    socket.write(`${message}${CRLF}.${CRLF}`);

    const dataResponse = await readResponse(socket);
    if (dataResponse.code !== 250) {
      throw new Error(`SMTP DATA failed: ${dataResponse.message}`);
    }

    await sendCommand(socket, "QUIT", [221]);
  } finally {
    socket.end();
  }
};
