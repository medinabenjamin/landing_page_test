import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { siteConfig } from "@/content/site";

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Soluciones estratégicas para crecer con control
          </h2>
          <p className="mt-3 text-slate-600">
            Acompaño a empresas y equipos directivos a ordenar su gestión,
            proyectar escenarios y tomar decisiones con información confiable.
          </p>
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2">
          {siteConfig.services.map((service) => (
            <StaggerItem key={service}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-brand-900">
                  {service}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
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
