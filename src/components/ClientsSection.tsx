import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Image from "next/image";

const consistentCardStyles = {
  logoWrapperClassName:
    "flex h-52 w-full items-center justify-center rounded-t-2xl bg-[#0B5C5B]/90 p-6",
  logoClassName: "h-full w-full rounded-t-2xl object-contain"
};

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa.",
    logo: "/balken-logo.svg",
    ...consistentCardStyles
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
    logo: "/auraom-logo.svg",
    ...consistentCardStyles
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/vitamin-health-logo.svg",
    ...consistentCardStyles
  }
];

export default function ClientsSection() {
  return (
    <section
      id="clientes"
      data-section="clientes"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-[83rem] flex-col gap-12 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="clientes">
          <h2 className="text-3xl font-semibold text-[#0B5C5B] md:text-4xl">
            Clientes y Proyectos
          </h2>
          <p className="mt-4 text-base text-brand/70">
            Experiencia multisectorial: Metodología PROSIGO aplicada en diversas
            industrias.
          </p>
        </Reveal>

        <Stagger
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          sectionId="clientes"
        >
          {clients.map((client) => (
            <StaggerItem key={client.name} className="h-full">
              <article className="mx-auto flex h-full min-h-[28rem] w-[80%] flex-col rounded-2xl border border-brand/10 bg-[#FAFAFA] shadow-sm">
                <div
                  className={
                    client.logoWrapperClassName ??
                    "flex h-52 w-full items-center justify-center rounded-t-2xl bg-[#0B5C5B]/90 p-0"
                  }
                >
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      width={420}
                      height={300}
                      className={
                        client.logoClassName ??
                        "h-full w-full rounded-t-2xl object-contain"
                      }
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-[#0B5C5B] bg-base/95 p-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#0B5C5B]">
                      Logo {client.name}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6 text-sm leading-relaxed text-brand/80">
                  <p className="font-semibold text-brand">{client.name}</p>
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
