import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="scroll-mt-24 bg-base text-brand"
    >
      <div className="mx-auto flex max-w-[83rem] flex-col gap-8 px-6 py-16 md:items-center">
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
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contacto"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand shadow-sm transition duration-300 ease-out hover:bg-accent/90"
                >
                  SOLICITAR DIAGNÓSTICO INICIAL
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-brand/40 px-6 py-3 text-sm font-semibold text-brand transition duration-300 ease-out hover:border-brand/60 hover:bg-brand/5"
                >
                  Conoce nuestros servicios
                </a>
              </div>
              <p className="text-sm text-brand/70">
                Análisis confidencial y contacto a la brevedad.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
