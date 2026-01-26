import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="scroll-mt-24 bg-brand text-base"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <Stagger
          className="max-w-xl space-y-6"
          delayChildren={0.05}
          sectionId="hero"
        >
          <StaggerItem>
            <p className="text-sm uppercase tracking-[0.3em] text-support">
              Consultoría estratégica
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {siteConfig.tagline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-base/85">
              {siteConfig.description}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand shadow-sm transition duration-300 ease-out hover:bg-accent/90"
              >
                {siteConfig.cta}
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-base/60 px-6 py-3 text-sm font-semibold text-base transition duration-300 ease-out hover:bg-base hover:text-brand"
              >
                Ver servicios
              </a>
            </div>
          </StaggerItem>
        </Stagger>
        <Reveal
          className="rounded-3xl bg-base/10 p-8 shadow-lg"
          sectionId="hero"
        >
          <div className="space-y-3 text-sm text-support">
            <p className="text-base font-semibold text-base">Enfoque integral</p>
            <ul className="space-y-2">
              <li>• Organización y procesos claros</li>
              <li>• Proyección financiera realista</li>
              <li>• Tableros e indicadores accionables</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
