import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative scroll-mt-24 overflow-hidden bg-base text-brand"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/hero-background.svg')] bg-cover bg-center opacity-30"
      />
      <div className="relative z-10 mx-auto flex max-w-[83rem] flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <Stagger
          className="max-w-xl space-y-6"
          delayChildren={0.05}
          sectionId="hero"
        >
          <StaggerItem>
            <p className="text-sm uppercase tracking-[0.3em] text-brand/70">
              Consultoría estratégica
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl font-semibold leading-tight text-brand md:text-5xl">
              Gestión Estratégica y Eficiencia Operativa para Empresas y
              Organizaciones.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-brand/80">
              Optimizamos recursos, estandarizamos procesos y fortalecemos la toma
              de decisiones mediante sistemas de control de gestión.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-start gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand shadow-sm transition duration-300 ease-out hover:bg-accent/90"
              >
                SOLICITAR DIAGNÓSTICO INICIAL
              </a>
              <p className="text-sm text-brand/70">
                Análisis confidencial y contacto a la brevedad.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
        <Reveal
          className="max-w-xs rounded-3xl border border-brand/10 bg-brand p-6 text-base shadow-lg"
          sectionId="hero"
        >
          <a
            href="#servicios"
            className="inline-flex w-full items-center justify-center text-base font-semibold text-white transition duration-300 ease-out hover:text-white/90"
          >
            Conoce nuestros servicios
          </a>
        </Reveal>
      </div>
    </section>
  );
}
