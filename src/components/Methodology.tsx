import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { siteConfig } from "@/content/site";

export default function Methodology() {
  return (
    <section
      id="metodologia"
      data-section="metodologia"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
          sectionId="metodologia"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              Metodología
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Trabajo colaborativo con foco en resultados
            </h2>
            <p className="mt-3 text-slate-600">
              Cada etapa está pensada para ordenar, medir y sostener el avance
              estratégico sin perder agilidad.
            </p>
          </div>
          <div className="rounded-3xl bg-brand-100 px-8 py-6 text-brand-900 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em]">Tiempo promedio</p>
            <p className="mt-2 text-3xl font-semibold">4 a 8 semanas</p>
            <p className="mt-1 text-sm text-brand-900/80">
              para entregar un plan accionable.
            </p>
          </div>
        </Reveal>
        <Stagger
          as="ol"
          className="mt-12 grid gap-6 md:grid-cols-2"
          sectionId="metodologia"
        >
          {siteConfig.methodologySteps.map((step, index) => (
            <StaggerItem
              as="li"
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-100 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-brand-600">
                Paso {index + 1}
              </span>
              <p className="mt-3 text-lg font-medium text-slate-900">{step}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
