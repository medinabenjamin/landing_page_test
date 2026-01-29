import Reveal from "@/components/motion/Reveal";

const teamMembers = [
  {
    name: "Daniela Roa Concha",
    role: "CEO & Consultora Principal",
    description:
      "Fundadora de PROSIGO. Lidera la visión estratégica, alineando los objetivos directivos con la realidad operativa de las organizaciones para garantizar un crecimiento sostenible y rentabilidad."
  },
  {
    name: "Carlos Garrido Rosas",
    role: "Consultor de Gestión y Administración",
    description:
      "Lidera el área de Administración Externa (BPO) asegurando el cumplimiento financiero y normativo de los clientes. Además, brinda soporte técnico clave en la planificación estratégica y evaluación de proyectos."
  },
  {
    name: "Marcela Salvo Muñoz",
    role: "Analista de Procesos y Estandarización",
    description:
      "Especialista en arquitectura de procesos. Se encarga del levantamiento, documentación y optimización de flujos de trabajo para asegurar la calidad, el orden y la continuidad operativa."
  },
  {
    name: "Benjamín Medina",
    role: "Analista de Automatización",
    description:
      "Encargado de la transformación digital de las operaciones. Implementa soluciones tecnológicas y automatizaciones para reducir tareas manuales, minimizar errores y agilizar la toma de decisiones."
  }
];

const avatarBackgrounds = [
  "bg-[#0B5C5B]/10",
  "bg-[#E4AF26]/20",
  "bg-[#0B5C5B]/15",
  "bg-[#E4AF26]/15"
];

export default function TeamSection() {
  return (
    <section
      id="equipo"
      data-section="equipo"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="equipo">
          <h2 className="text-3xl font-semibold text-[#0B5C5B] md:text-4xl">
            Liderazgo y Equipo Multidisciplinario
          </h2>
          <p className="mt-4 text-base text-brand/70">
            Un equipo integrado por especialistas en estrategia, procesos y
            tecnología, enfocado en resultados de alto impacto.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} sectionId="equipo">
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-black/5 bg-[#FAFAFA] p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${avatarBackgrounds[index]} text-[#0B5C5B] shadow-sm`}
                    aria-hidden="true"
                  >
                    <span className="text-lg font-semibold">
                      {member.name.slice(0, 1)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B5C5B]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#E4AF26]">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-brand/70">{member.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
