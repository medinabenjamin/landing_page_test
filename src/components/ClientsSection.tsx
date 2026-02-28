import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Image from "next/image";

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa.",
    logo: "/balken-logo.svg"
  },
  {
    name: "NutriFam Chile",
    project: "Planificación Estratégica.",
    logo: "/nutrifam-logo.svg"
  },
  {
    name: "After School Casa Arcoiris",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/casa-arcoiris-logo.svg"
  },
  {
    name: "Roperos Chile",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/roperos-chile-logo.svg"
  },
  {
    name: "Centro Médico Fonte Di Vita",
    project: "Outsourcing Administrativo.",
    logo: "/fonte-di-vita-logo.svg"
  },
  {
    name: "AURAOM",
    project: "Asesoría Estratégica Directiva.",
    logo: "/auraom-logo.svg"
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/vitamin-health-logo.svg"
  }
];

const CLIENT_LOGO_HEADER_HEIGHT_CLASS = "h-44";

function ClientLogoHeader({ logo, name }: { logo?: string; name: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-t-2xl bg-[#0B5C5B]/[0.04] p-6 ${CLIENT_LOGO_HEADER_HEIGHT_CLASS}`}
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
      className="scroll-mt-24 bg-[#0B5C5B]/[0.06]"
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
                  mx-auto flex h-full min-h-[28rem] w-full max-w-[22rem] flex-col overflow-hidden
                  rounded-2xl bg-white
                  border border-[#0B5C5B]/15
                  ring-1 ring-black/5
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-200 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]
                "
              >
                <ClientLogoHeader logo={client.logo} name={client.name} />

                <div className="flex flex-1 flex-col gap-3 p-7 text-sm leading-relaxed text-slate-600">
                  <p className="font-semibold text-[#0B5C5B]">{client.name}</p>
                  <p>{client.project}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
