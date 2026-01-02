import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      data-section="contacto"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal
          className="grid gap-10 md:grid-cols-[1.2fr,1fr]"
          sectionId="contacto"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Coordinemos una conversación estratégica
            </h2>
            <p className="mt-3 text-slate-600">{siteConfig.cta}</p>
            <div className="mt-6 rounded-2xl bg-brand-100 p-6 text-brand-900 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm uppercase tracking-[0.3em]">
                Email directo
              </p>
              <p className="mt-2 text-lg font-semibold">
                {siteConfig.contactEmail}
              </p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Nombre y apellido
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Contanos sobre tu proyecto"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:bg-brand-900"
            >
              Enviar consulta
            </button>
            <p className="text-xs text-slate-500">
              Formulario sin envío real por el momento.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
