import { sendMailWithSmtp } from "@/lib/smtp";
import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  challenge?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = ["fullName", "company", "email"];

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    for (const field of requiredFields) {
      if (!getString(body[field])) {
        return NextResponse.json({ error: `El campo ${field} es obligatorio.` }, { status: 400 });
      }
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL ?? smtpUser;

    if (!smtpUser || !smtpPass || !recipient) {
      return NextResponse.json(
        { error: "Faltan variables de entorno SMTP_USER, SMTP_PASS o CONTACT_RECEIVER_EMAIL." },
        { status: 500 }
      );
    }

    const payload = {
      fullName: getString(body.fullName),
      company: getString(body.company),
      role: getString(body.role),
      email: getString(body.email),
      phone: getString(body.phone),
      challenge: getString(body.challenge),
      message: getString(body.message),
    };

    const emailBody = [
      "Nuevo contacto desde la landing",
      "",
      `Nombre: ${payload.fullName}`,
      `Empresa: ${payload.company}`,
      `Cargo: ${payload.role || "-"}`,
      `Email: ${payload.email}`,
      `Teléfono: ${payload.phone || "-"}`,
      `Desafío: ${payload.challenge || "-"}`,
      "",
      "Mensaje:",
      payload.message || "-",
    ].join("\n");

    await sendMailWithSmtp({
      host: "smtp.gmail.com",
      port: 465,
      user: smtpUser,
      pass: smtpPass,
      from: smtpUser,
      to: recipient,
      subject: `Nuevo contacto: ${payload.fullName}`,
      text: emailBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando formulario de contacto", error);

    const errorCode =
      typeof error === "object" && error !== null && "code" in error && typeof error.code === "string"
        ? error.code
        : null;

    if (errorCode && ["ENETUNREACH", "ECONNREFUSED", "ETIMEDOUT", "EHOSTUNREACH"].includes(errorCode)) {
      return NextResponse.json(
        {
          error:
            "No se pudo conectar con el servidor de correo. Verifica la red del servidor o intenta nuevamente en unos minutos.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ error: "No se pudo enviar el formulario." }, { status: 500 });
  }
}
