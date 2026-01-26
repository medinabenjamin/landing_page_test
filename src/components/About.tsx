import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";

export default function About() {
  return (
    <section
      id="sobre-mi"
      data-section="sobre-mi"
      className="scroll-mt-24 bg-brand text-base"
    >
      <Reveal
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[2fr,1fr]"
        sectionId="sobre-mi"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-support">
            Sobre mí
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Experiencia para ordenar y proyectar
          </h2>
          <p className="mt-4 text-base/80">{siteConfig.about}</p>
        </div>
        <div className="rounded-2xl bg-base/10 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-base/15">
          <p className="text-sm uppercase tracking-[0.3em] text-support">
            Enfoque
          </p>
          <ul className="mt-4 space-y-2 text-sm text-base/80">
            <li>• Consultoría personalizada</li>
            <li>• Información clara para decisiones</li>
            <li>• Acompañamiento continuo</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
