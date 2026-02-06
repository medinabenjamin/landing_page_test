import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const clients = [
  {
    name: "Constructora Balken",
    sector: "Construcción e inmobiliario",
    project: "Optimización de costos y planificación de obra."
  },
  {
    name: "NutriFam Chile",
    sector: "Alimentos saludables",
    project: "Estructuración financiera y control de inventarios."
  },
  {
    name: "After School Casa Arcoiris",
    sector: "Educación y cuidado infantil",
    project: "Diseño de modelo operativo y mejora de procesos."
  },
  {
    name: "Roperos Chile",
    sector: "Moda y retail",
    project: "Profesionalización de gestión y KPI de ventas."
  },
  {
    name: "Centro Médico Fonte Di Vita",
    sector: "Salud y bienestar",
    project: "Optimización de agenda y flujo de pacientes."
  },
  {
    name: "AURAOM",
    sector: "Bienestar holístico",
    project: "Definición de estrategia comercial y escalamiento."
  },
  {
    name: "Vitamin Health Centro Médico",
    sector: "Salud preventiva",
    project: "Implementación de control de gestión y reporting."
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
                <div className="flex flex-col gap-4">
                  <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-brand/20 bg-base text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
                    Logo {client.name}
                  </div>
                  <span className="h-0.5 w-16 rounded-full bg-[#E4AF26]" />
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-brand/80">
                  <p>
                    <span className="font-semibold text-brand">Sector:</span>{" "}
                    {client.sector}
                  </p>
                  <p>
                    <span className="font-semibold text-brand">Proyecto:</span>{" "}
                    {client.project}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
