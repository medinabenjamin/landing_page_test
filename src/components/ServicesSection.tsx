import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const diagnosticItems = [
  "Sesión Consultiva (1 hora).",
  "Análisis de Riesgo y FODA Táctico.",
  "Informe Ejecutivo con plan priorizado."
];

type ServiceBullet = {
  title: string;
  description: string;
};

const corporatePillars: {
  title: string;
  focus: string;
  bullets: ServiceBullet[];
}[] = [
  {
    title: "Dirección Corporativa y Control de Gestión",
    focus:
      "Enfoque: Visión Integral y Estrategia. Transformamos la intuición en decisiones basadas en datos reales de toda la organización y objetivos claros.",
    bullets: [
      {
        title: "Planificación Estratégica",
        description:
          "Definición de los objetivos estratégicos a 1 o 3 años, alineando a todas las áreas de trabajo."
      },
      {
        title: "Evaluación de Proyectos",
        description:
          "Estudios de factibilidad técnica y económica para validar nuevas inversiones y minimizar riesgos."
      },
      {
        title: "Diseño de KPIs y Dashboards",
        description:
          "Implementación de tableros de control para monitorear el desempeño operativo, comercial y financiero en tiempo real."
      }
    ]
  },
  {
    title: "Excelencia Operacional y Procesos",
    focus:
      "Enfoque: Eficiencia y Tiempo. Preparamos tu estructura para soportar el crecimiento sin caos operativo.",
    bullets: [
      {
        title: "Estandarización de Procesos",
        description:
          "Levantamiento y documentación de procedimientos clave para asegurar calidad y continuidad."
      },
      {
        title: "Automatización de Flujos",
        description:
          "Integración de tecnología para reducir tareas manuales repetitivas y liberar talento humano."
      },
      {
        title: "Gestión del Cambio",
        description:
          "Acompañamiento para asegurar que los nuevos procesos sean adoptados por el equipo."
      }
    ]
  }
];

const bpoBullets = [
  "Control Financiero",
  "Gestión de Personas",
  "Cumplimiento Normativo"
];

function renderHighlightedBullet(bullet: ServiceBullet) {
  return (
    <span>
      <strong className="font-bold text-[#0B5C5B]">{bullet.title}:</strong>{" "}
      <span className="text-[#0B5C5B]">{bullet.description}</span>
    </span>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      data-section="servicios"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-[83rem] flex-col gap-16 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="servicios">
          <h2 className="text-4xl font-bold tracking-tight text-brand md:text-5xl">
            Servicios
          </h2>
          <p className="mt-4 text-base text-brand/70">
            Soluciones de Consultoría Integral: De la Estrategia a la Acción.
          </p>
          <p className="mt-3 text-base text-brand/70">
            Metodología probada para escalar operaciones, minimizar riesgos y
            garantizar resultados medibles en empresas y organizaciones.
          </p>
        </Reveal>

        <Reveal
          className="rounded-3xl border-2 border-brand bg-support/70 p-8 text-brand shadow-lg md:p-10"
          sectionId="servicios"
        >
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-brand">
                Asesoría Express
              </h3>
              <p className="mt-3 text-base text-brand">
                Sesión intensiva para obtener claridad inmediata, detectar
                riesgos críticos y definir un plan de acción priorizado sin
                procesos largos.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-brand md:text-base">
              {diagnosticItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                  <span className="text-brand">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                AGENDAR DIAGNÓSTICO AHORA
              </button>
            </div>
          </div>
        </Reveal>

        <div className="rounded-3xl border border-[#B3E9CF]/70 bg-gradient-to-b from-[#F4FFF9] to-[#FFFFFF] p-4 shadow-sm md:p-6">
          <div className="mb-5 text-center md:mb-6">
            <p className="text-base font-semibold uppercase tracking-[0.12em] text-[#0B5C5B]/70">
              Servicios Integrales para la Transformación de Negocios.
            </p>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2" sectionId="servicios">
            {corporatePillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="relative flex h-full min-h-[420px] flex-col gap-4 rounded-2xl border-2 border-[#B3E9CF]/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="absolute left-6 right-6 top-0 h-1 rounded-full bg-[#E4AF26]" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4AF26]/15 text-[#E4AF26]">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 12h16M12 4v16"
                        />
                      </svg>
                    </span>
                    <h3 className="text-xl font-bold text-[#0B5C5B] md:text-[1.38rem]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#0B5C5B]/80">
                    {pillar.focus}
                  </p>
                  <ul className="grid gap-2.5 text-base leading-relaxed text-[#0B5C5B]">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet.title} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#E4AF26]" />
                        {renderHighlightedBullet(bullet)}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="relative grid items-center gap-8 rounded-3xl border-2 border-[#B3E9CF]/80 bg-white p-8 text-brand shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="pointer-events-none absolute left-8 right-8 top-0 z-0 h-1 rounded-full bg-[#E4AF26]" />
          <div className="relative z-10 order-last flex flex-col gap-4 md:order-first">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4AF26]/15 text-[#E4AF26]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h16M12 4v16"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-brand">
                BPO: Outsourcing Administrativo
              </h3>
            </div>
            <p className="text-base text-brand/80">
              Enfócate en tu negocio, nosotros cuidamos el ‘Back Office’.
              Servicio de administración externa profesional para garantizar el
              cumplimiento normativo y el orden contable de tu empresa u
              organización.
            </p>
            <ul className="grid gap-2.5 text-base leading-relaxed text-brand">
              {bpoBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#E4AF26]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#FAFAFA] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                COTIZAR GESTIÓN DELEGADA
              </button>
            </div>
          </div>
          <div className="relative z-10 order-first md:order-last">
            <div className="relative aspect-[52/42] w-full overflow-hidden rounded-3xl border border-[#B3E9CF]/80 bg-support/40 shadow-md">
              <Image
                src="/Imagen-BPO-hd.png"
                alt="Equipo de trabajo en reunión administrativa"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0B5C5B] px-8 py-10 text-[#FAFAFA] shadow-lg">
          <h3 className="text-2xl font-semibold text-[#FAFAFA]">
            RECURSOS Y HERRAMIENTAS DIGITALES
          </h3>
        </div>
      </div>
    </section>
  );
}
