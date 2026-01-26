import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      data-section="contacto"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal
          className="grid gap-10 md:grid-cols-[1.2fr,1fr]"
          sectionId="contacto"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-brand">
              Coordinemos una conversación estratégica
            </h2>
            <p className="mt-3 text-brand/70">{siteConfig.cta}</p>
            <div className="mt-6 rounded-2xl bg-support p-6 text-brand shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm uppercase tracking-[0.3em]">
                Email directo
              </p>
              <p className="mt-2 text-lg font-semibold">
                {siteConfig.contactEmail}
              </p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-brand/10 bg-base p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
            <div>
              <label className="text-sm font-medium text-brand/80" htmlFor="name">
                Nombre y apellido
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                className="mt-2 w-full rounded-lg border border-brand/10 bg-base px-4 py-2 text-sm text-brand transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-support"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand/80" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="mt-2 w-full rounded-lg border border-brand/10 bg-base px-4 py-2 text-sm text-brand transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-support"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand/80" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Contanos sobre tu proyecto"
                className="mt-2 w-full rounded-lg border border-brand/10 bg-base px-4 py-2 text-sm text-brand transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-support"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand transition duration-300 ease-out hover:bg-accent/90"
            >
              Enviar consulta
            </button>
            <p className="text-xs text-brand/60">
              Formulario sin envío real por el momento.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
