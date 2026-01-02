import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-slate-900 text-white">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[2fr,1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-100">
            Sobre mí
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Experiencia para ordenar y proyectar
          </h2>
          <p className="mt-4 text-slate-200">{siteConfig.about}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/15">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">
            Enfoque
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• Consultoría personalizada</li>
            <li>• Información clara para decisiones</li>
            <li>• Acompañamiento continuo</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
