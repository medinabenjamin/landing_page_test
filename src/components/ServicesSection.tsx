import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const diagnosticItems = [
  "Sesión Consultiva (1 hora).",
  "Análisis de Riesgo y FODA Táctico.",
  "Informe Ejecutivo con plan priorizado."
];

const corporatePillars = [
  {
    title: "Dirección Corporativa y Control de Gestión",
    focus: "Dirección Corporativa y Control de Gestión.",
    bullets: [
      "Planificación Estratégica",
      "Evaluación de Proyectos",
      "Diseño de KPIs y Dashboards"
    ]
  },
  {
    title: "Excelencia Operacional y Procesos",
    focus: "Excelencia Operacional y Procesos.",
    bullets: [
      "Estandarización de Procesos",
      "Automatización de Flujos",
      "Gestión del Cambio"
    ]
  },
  {
    title: "Gestión Financiera y Sostenibilidad",
    focus: "Gestión Financiera y Sostenibilidad.",
    bullets: [
      "Optimización de Costos",
      "Modelos de Presupuesto",
      "Cumplimiento Tributario"
    ]
  }
];

const bpoBullets = [
  "Control Financiero",
  "Gestión de Personas",
  "Cumplimiento Normativo"
];

const academyBullets = [
  "Entrenamiento Corporativo: Cursos de gestión y productividad para equipos (Próximamente).",
  "Herramientas Descargables: Plantillas y matrices de decisión (Próximamente)."
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      data-section="servicios"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto flex max-w-[83rem] flex-col gap-16 px-6 py-20">
        <Reveal className="max-w-3xl" sectionId="servicios">
          <h2 className="text-3xl font-semibold text-brand md:text-4xl">
            Soluciones de Consultoría Integral: De la Estrategia a la Acción
          </h2>
          <p className="mt-4 text-base text-brand/70">
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

        <Stagger className="grid gap-6 md:grid-cols-3" sectionId="servicios">
          {corporatePillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand/10 bg-base p-6 shadow-sm transition duration-300 hover:shadow-md hover:border-b-4 hover:border-[#B3E9CF]">
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
                  <h3 className="text-lg font-semibold text-[#0B5C5B]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#0B5C5B]/70">{pillar.focus}</p>
                <ul className="grid gap-2 text-sm text-[#0B5C5B]/80">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#E4AF26]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid items-center gap-8 rounded-3xl border border-brand/10 bg-base p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="order-last flex flex-col gap-4 md:order-first">
            <h3 className="text-2xl font-semibold text-brand">
              BPO: Outsourcing Administrativo y Financiero
            </h3>
            <p className="text-base text-brand/70">
              Enfócate en tu negocio, nosotros cuidamos el ‘Back Office’.
              Servicio de administración externa profesional para garantizar el
              cumplimiento normativo y el orden contable de tu empresa u
              organización.
            </p>
            <ul className="grid gap-2 text-sm text-brand/80">
              {bpoBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
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
          <div className="order-first md:order-last">
            <div className="overflow-hidden rounded-3xl border border-brand/10 bg-support/40 shadow-md">
              <Image
                src="/office-clean.svg"
                alt="Oficina moderna y ordenada"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0B5C5B] px-8 py-10 text-[#FAFAFA] shadow-lg">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-[#FAFAFA]">
              Academia PROSIGO &amp; Herramientas Digitales
            </h3>
            <ul className="grid gap-3 text-sm text-[#FAFAFA]/90">
              {academyBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#B3E9CF]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
