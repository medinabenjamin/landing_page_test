import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { siteConfig } from "@/content/site";

export default function Services() {
  return (
    <section
      id="servicios"
      data-section="servicios"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-10 max-w-2xl" sectionId="servicios">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-brand">
            Soluciones estratégicas para crecer con control
          </h2>
          <p className="mt-3 text-brand/70">
            Acompaño a empresas y equipos directivos a ordenar su gestión,
            proyectar escenarios y tomar decisiones con información confiable.
          </p>
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2" sectionId="servicios">
          {siteConfig.services.map((service) => (
            <StaggerItem key={service}>
              <div className="rounded-2xl border border-brand/10 bg-base p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-support hover:shadow-md">
                <h3 className="text-lg font-semibold text-brand">
                  {service}
                </h3>
                <p className="mt-2 text-sm text-brand/70">
                  Diseño e implementación de un proceso claro con seguimiento y
                  resultados medibles.
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
