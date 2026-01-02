import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">
            Consultoría estratégica
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg text-slate-100/90">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-100 hover:text-brand-900"
            >
              {siteConfig.cta}
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-brand-100/60 px-6 py-3 text-sm font-semibold text-brand-100 transition hover:bg-brand-100 hover:text-brand-900"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-8 shadow-lg">
          <div className="space-y-3 text-sm text-brand-100">
            <p className="text-base font-semibold text-white">Enfoque integral</p>
            <ul className="space-y-2">
              <li>• Organización y procesos claros</li>
              <li>• Proyección financiera realista</li>
              <li>• Tableros e indicadores accionables</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
