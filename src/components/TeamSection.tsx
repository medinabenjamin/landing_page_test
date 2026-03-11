import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const teamMembers = [
  {
    name: "Daniela Roa Concha",
    role: "CEO & Consultora Principal",
    imageSrc: "/daniela-roa-concha.svg",
    imageAlt: "Retrato profesional de Daniela Roa Concha",
    credentials: "Ingeniera Comercial y Mg. en Planificación y Control de Gestión"
  },
  {
    name: "Carlos Garrido Rosas",
    role: "Consultor de Gestión y Administración",
    imageSrc: "/carlos-garrido-rosas.svg",
    imageAlt: "Retrato profesional de Carlos Garrido Rosas",
    credentials: "Ingeniero Comercial"
  },
  {
    name: "Marcela Salvo Muñoz",
    role: "Analista de Procesos y Estandarización",
    imageSrc: "/EQUIPO_MARCELA.webp",
    imageAlt: "Retrato profesional de Marcela Salvo Muñoz",
    credentials: "Ingeniera Cilvil Industrial Mención Bioprocesos"
  }
];

const teamImageClassName = "object-cover object-center";

export default function TeamSection() {
  return (
    <section
      id="equipo"
      data-section="equipo"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-12 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="equipo">
          <h2 className="text-4xl font-bold tracking-tight text-[#0B5C5B] md:text-5xl">
            Quiénes Somos
          </h2>
          <p className="mt-4 text-left text-2xl font-bold leading-tight text-brand md:text-3xl">
            Un equipo integrado por especialistas en estrategia, procesos y
            tecnología, enfocado en resultados de alto impacto.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <Reveal key={member.name} sectionId="equipo">
              <article className="group flex h-full flex-col bg-transparent">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F1F1F1]">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`${teamImageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold leading-tight text-[#0B5C5B]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand/70">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-brand/70">{member.credentials}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
