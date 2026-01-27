import Reveal from "@/components/motion/Reveal";

const teamMembers = [
  {
    name: "Daniela",
    role: "CEO & Consultora Principal",
    description:
      "Lidera la visión estratégica y acompaña a los clientes en la toma de decisiones clave."
  },
  {
    name: "Carlos",
    role: "Consultor de Gestión y Administración",
    description:
      "Optimiza la gestión corporativa con foco en orden financiero y control operativo."
  },
  {
    name: "Marcela",
    role: "Analista de Procesos y Estandarización",
    description:
      "Diseña procesos claros y repetibles para sostener el crecimiento con eficiencia."
  },
  {
    name: "Benjamín",
    role: "Analista de Automatización",
    description:
      "Impulsa la transformación digital con flujos automatizados y mejoras continuas."
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
