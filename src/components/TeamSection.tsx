import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const teamMembers = [
  {
    name: "Daniela Roa Concha",
    role: "CEO & Consultora Principal",
    imageSrc: "/placeholder.svg",
    imageAlt: "Retrato profesional de Daniela Roa Concha",
    description:
      "Fundadora de PROSIGO. Lidera la visión estratégica, alineando los objetivos directivos con la realidad operativa de las organizaciones para garantizar un crecimiento sostenible y rentabilidad."
  },
  {
    name: "Carlos Garrido Rosas",
    role: "Consultor de Gestión y Administración",
    imageSrc: "/carlos-garrido-rosas.svg",
    imageAlt: "Retrato profesional de Carlos Garrido Rosas",
    description:
      "Lidera el área de Administración Externa (BPO) asegurando el cumplimiento financiero y normativo de los clientes. Además, brinda soporte técnico clave en la planificación estratégica y evaluación de proyectos."
  },
  {
    name: "Marcela Salvo Muñoz",
    role: "Analista de Procesos y Estandarización",
    imageSrc: "/placeholder.svg",
    imageAlt: "Retrato profesional de Marcela Salvo Muñoz",
    description:
      "Especialista en arquitectura de procesos. Se encarga del levantamiento, documentación y optimización de flujos de trabajo para asegurar la calidad, el orden y la continuidad operativa."
  }
];

const avatarBackgrounds = [
  "bg-[#0B5C5B]/10",
  "bg-[#E4AF26]/20",
  "bg-[#0B5C5B]/15"
];

const teamImageClassName = "object-cover object-top";

export default function TeamSection() {
  return (
    <section
      id="equipo"
      data-section="equipo"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-12 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="equipo">
          <h2 className="text-3xl font-semibold text-[#0B5C5B] md:text-4xl">
            NUESTRO EQUIPO
          </h2>
          <p className="mt-4 text-base text-brand/70">
            Un equipo integrado por especialistas en estrategia, procesos y
            tecnología, enfocado en resultados de alto impacto.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} sectionId="equipo">
              <article className="flex h-full min-h-[35rem] flex-col rounded-2xl border border-black/5 bg-[#FAFAFA] shadow-sm">
                <div className="relative h-80 w-full overflow-hidden rounded-t-2xl lg:h-96">
                  <div
                    className={`absolute inset-0 ${avatarBackgrounds[index]}`}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={teamImageClassName}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B5C5B]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#E4AF26]">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-brand/70">{member.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
