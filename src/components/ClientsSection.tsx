import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Image from "next/image";

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa.",
    logo: "/Logos/LOGO CONSTRUCTORA BALKEN.jpg",
    accentFrom: "#0B5C5B",
    accentTo: "#D4A017"
  },
  {
    name: "NutriFam Chile",
    project: "Planificación Estratégica.",
    logo: "/Logos/LOGO_NUTRIFAM_BAJADA (1).jpg",
    accentFrom: "#7A6AF3",
    accentTo: "#B7AEFF"
  },
  {
    name: "After School Casa Arcoiris",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/logo Casa Arcoiris.jpeg",
    accentFrom: "#8FD0C4",
    accentTo: "#5CB8A7"
  },
  {
    name: "Roperos Chile",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/LOGO ROPEROS CHILE .jpeg",
    accentFrom: "#0B5C5B",
    accentTo: "#7CC8B5"
  },
  {
    name: "Centro Médico Fonte Di Vita",
    project: "Outsourcing Administrativo.",
    logo: "/Logos/LOGO FONTE DI VITA.jpeg",
    accentFrom: "#A7D8CC",
    accentTo: "#6FBFAE"
  },
  {
    name: "AURAOM",
    project: "Asesoría Estratégica Directiva.",
    logo: "/Logos/LOGO AURAOM.jpeg",
    accentFrom: "#6E63D8",
    accentTo: "#36C6C6"
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos.",
    logo: "/Logos/LOGO VITAMIN HEALTH.jpeg",
    accentFrom: "#0D4B63",
    accentTo: "#3D9AA0"
  }
];

function ClientLogoHeader({ logo, name }: { logo?: string; name: string }) {
  return (
    <div className="mb-4 flex w-full justify-center">
      {logo ? (
        <Image
          src={logo}
          alt={`Logo ${name}`}
          width={420}
          height={300}
          className="h-16 max-h-16 w-auto object-contain"
        />
      ) : (
        <div className="flex h-16 w-32 items-center justify-center rounded-xl border-2 border-[#0B5C5B] bg-base/95 p-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#0B5C5B]">
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
          <h2 className="text-4xl font-bold tracking-tight text-[#0B5C5B] md:text-5xl">
            Clientes y Proyectos
          </h2>
          <p className="mt-4 text-base text-slate-600">Experiencia multisectorial</p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          sectionId="clientes"
        >
          {clients.map((client) => (
            <StaggerItem key={client.name}>
              <article
                className="
                  mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl bg-white
                  shadow-md transition hover:shadow-lg
                "
              >
                <div
                  className="h-1 w-full rounded-t-2xl"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${client.accentFrom}, ${client.accentTo})`
                  }}
                />
                <div className="px-6 pt-6 pb-6 text-center">
                  <ClientLogoHeader logo={client.logo} name={client.name} />

                  <p className="mb-1 text-lg font-semibold text-slate-800">
                    {client.name}
                  </p>
                  <p
                    className="mx-auto max-w-[26ch] text-sm leading-relaxed text-slate-500"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
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
