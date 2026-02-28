import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Image from "next/image";

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa.",
    logo: "/balken-logo.svg",
    accentFrom: "#0B5C5B",
    accentTo: "#D4A017"
  },
  {
    name: "NutriFam Chile",
    project: "Planificación Estratégica.",
    logo: "/nutrifam-logo.svg",
    accentFrom: "#7A6AF3",
    accentTo: "#B7AEFF"
  },
  {
    name: "After School Casa Arcoiris",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/casa-arcoiris-logo.svg",
    accentFrom: "#8FD0C4",
    accentTo: "#5CB8A7"
  },
  {
    name: "Roperos Chile",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/roperos-chile-logo.svg",
    accentFrom: "#0B5C5B",
    accentTo: "#7CC8B5"
  },
  {
    name: "Centro Médico Fonte Di Vita",
    project: "Outsourcing Administrativo.",
    logo: "/fonte-di-vita-logo.svg",
    accentFrom: "#A7D8CC",
    accentTo: "#6FBFAE"
  },
  {
    name: "AURAOM",
    project: "Asesoría Estratégica Directiva.",
    logo: "/auraom-logo.svg",
    accentFrom: "#6E63D8",
    accentTo: "#36C6C6"
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/vitamin-health-logo.svg",
    accentFrom: "#0D4B63",
    accentTo: "#3D9AA0"
  }
];

const CLIENT_LOGO_HEADER_HEIGHT_CLASS = "h-40";

function ClientLogoHeader({ logo, name }: { logo?: string; name: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-t-2xl border-b border-black/5 bg-[#F4F7F7] p-7 ${CLIENT_LOGO_HEADER_HEIGHT_CLASS}`}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`Logo ${name}`}
          width={420}
          height={300}
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-[#0B5C5B] bg-base/95 p-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#0B5C5B]">
          Logo {name}
        </div>
      )}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clientes"
      data-section="clientes"
      className="scroll-mt-24 bg-[#F3F6F6]"
    >
      <div className="mx-auto flex max-w-[83rem] flex-col gap-12 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="clientes">
          <h2 className="text-3xl font-semibold text-[#0B5C5B] md:text-4xl">
            Clientes y Proyectos
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Experiencia multisectorial: Metodología PROSIGO aplicada en diversas
            industrias.
          </p>
        </Reveal>

        <Stagger
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          sectionId="clientes"
        >
          {clients.map((client) => (
            <StaggerItem key={client.name} className="h-full">
              <article
                className="
                  mx-auto flex h-full min-h-[22rem] w-full max-w-[22rem] flex-col overflow-hidden
                  rounded-2xl bg-white
                  border border-black/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-200 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]
                "
              >
                <div
                  className="h-1 w-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${client.accentFrom}, ${client.accentTo})`,
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem"
                  }}
                />
                <ClientLogoHeader logo={client.logo} name={client.name} />

                <div className="flex flex-col items-center gap-3 px-8 py-6 text-center">
                  <p className="text-lg font-semibold text-[#0B5C5B]">
                    {client.name}
                  </p>
                  <p className="max-w-[22ch] text-sm leading-relaxed text-slate-500">
                    {client.project}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
