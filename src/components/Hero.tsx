import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="scroll-mt-24 bg-base text-brand"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-20">
        <Stagger
          className="max-w-2xl space-y-6"
          delayChildren={0.05}
          sectionId="hero"
        >
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
      </div>
    </section>
  );
}
