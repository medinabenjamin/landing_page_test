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
        className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20"
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
      </Reveal>
    </section>
  );
}
