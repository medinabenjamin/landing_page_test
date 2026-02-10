import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const clients = [
  {
    name: "Constructora Balken",
    project: "Planificación Estratégica Corporativa."
  },
  {
    name: "NutriFam Chile",
    project: "Planificación Estratégica."
  },
  {
    name: "After School Casa Arcoiris",
    project: "Planificación Estratégica y Estandarización de Procesos."
  },
  {
    name: "Roperos Chile",
    project: "Planificación Estratégica y Estandarización de Procesos."
  },
  {
    name: "Centro Médico Fonte Di Vita",
    project: "Outsourcing Administrativo."
  },
  {
    name: "AURAOM",
    project: "Asesoría Estratégica Directiva."
  },
  {
    name: "Vitamin Health Centro Médico",
    project: "Planificación Estratégica y Estandarización de Procesos."
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
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand/10 bg-[#FAFAFA] p-6 shadow-sm">
                <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-brand/20 bg-base text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
                  Logo {client.name}
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-brand/80">
                  <p className="font-semibold text-brand">{client.name}</p>
                  <p>{client.project}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
