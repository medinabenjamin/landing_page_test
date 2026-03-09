import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Image from "next/image";

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa.",
    logo: "/Logos/LOGO CONSTRUCTORA BALKEN.jpg"
  },
  {
    name: "NutriFam Chile",
    project: "Planificación Estratégica.",
    logo: "/Logos/LOGO_NUTRIFAM_BAJADA (1).jpg"
  },
  {
    name: "After School Casa Arcoiris",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/logo Casa Arcoiris.jpeg"
  },
  {
    name: "Roperos Chile",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/LOGO ROPEROS CHILE .jpeg",
    logoClassName: "scale-[1.55]"
  },
  {
    name: "Centro Médico Fonte Di Vita",
    project: "Outsourcing Administrativo.",
    logo: "/Logos/LOGO FONTE DI VITA.jpeg"
  },
  {
    name: "AURAOM",
    project: "Asesoría Estratégica Directiva.",
    logo: "/Logos/LOGO AURAOM.jpeg"
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/LOGO VITAMIN HEALTH.jpeg"
  }
];

export default function ClientsSection() {
  return (
    <section id="clientes" data-section="clientes" className="scroll-mt-24 bg-[#F5F7F7]">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-12 px-6 py-20 md:gap-14">
        <Reveal className="max-w-3xl" sectionId="clientes">
          <h2 className="text-4xl font-bold tracking-tight text-[#0B5C5B] md:text-5xl">
            Clientes y Proyectos
          </h2>
          <p className="mt-4 text-base font-semibold text-slate-600">
            Red colaborativa con foco estratégico multisectorial.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          sectionId="clientes"
        >
          {clients.map((client) => (
            <StaggerItem key={client.name} className="h-full">
              <article className="group flex h-full flex-col items-center text-center">
                <div className="flex h-32 items-center justify-center px-2">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={360}
                    height={200}
                    className={`h-28 w-auto max-w-[15rem] object-contain transition duration-300 group-hover:scale-[1.03] ${client.logoClassName ?? ""}`}
                  />
                </div>

                <div className="mt-5">
                  <p className="text-base font-semibold leading-snug text-slate-800">{client.name}</p>
                  <p className="mx-auto mt-1 max-w-[32ch] text-sm leading-relaxed text-slate-500">
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
