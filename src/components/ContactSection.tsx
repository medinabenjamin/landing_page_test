"use client";

import Reveal from "@/components/motion/Reveal";
import { type FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    // eslint-disable-next-line no-console
    console.log("Contacto enviado", payload);
    setSubmitState("sent");
    event.currentTarget.reset();
  };

  return (
    <section
      id="contacto"
      data-section="contacto"
      className="scroll-mt-24 bg-base"
    >
      <div className="mx-auto max-w-[83rem] px-6 py-20">
        <Reveal className="space-y-10" sectionId="contacto">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B5C5B]">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold text-[#0B5C5B] md:text-4xl">
              Transformamos tus desafíos en oportunidades
            </h2>
            <p className="text-base text-[#0B5C5B]/80">
              Diseñamos soluciones a medida que transforman tus obstáculos actuales en oportunidades y soluciones reales.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <form
              className="space-y-5 rounded-2xl bg-[#FAFAFA] p-6 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="fullName"
                  >
                    Nombre y Apellido
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Tu nombre completo"
                    required
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="company"
                  >
                    Empresa / Organización
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de la empresa"
                    required
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="role"
                  >
                    Cargo
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Ej: Gerencia General"
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nombre@empresa.com"
                    required
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="phone"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+56 9 0000 0000"
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="challenge"
                  >
                    ¿Qué desafío necesita resolver?
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option>Diagnóstico Express</option>
                    <option>Planificación Estratégica</option>
                    <option>Estandarización de Procesos</option>
                    <option>Outsourcing Administrativo (BPO)</option>
                    <option>Evaluación de Proyectos</option>
                    <option>Automatización</option>
                    <option>Otro / Consulta General</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#0B5C5B]"
                    htmlFor="message"
                  >
                    Mensaje adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Comparte detalles sobre tu necesidad"
                    className="mt-2 w-full rounded-lg border border-[#0B5C5B]/15 bg-white px-4 py-2 text-sm text-[#0B5C5B] transition focus:border-[#0B5C5B] focus:outline-none focus:ring-2 focus:ring-[#0B5C5B]/20"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#E4AF26] px-5 py-3 text-sm font-semibold text-[#0B5C5B] transition duration-300 ease-out hover:bg-[#E4AF26]/90"
              >
                SOLICITAR CONTACTO
              </button>
              <p className="text-xs text-[#0B5C5B]/70">
                Sus datos son tratados con confidencialidad.
              </p>
              {submitState === "sent" && (
                <p className="text-sm font-medium text-[#0B5C5B]">
                  ¡Gracias! Te contactaremos en breve.
                </p>
              )}
            </form>
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-[#0B5C5B] p-6 text-[#FAFAFA] shadow-sm">
              <div className="flex flex-col gap-8">
                <h3 className="text-center text-2xl font-semibold text-white md:text-[2.1rem] md:leading-tight">
                  ¿QUÉ PASA DESPUÉS
                  <br />
                  DE CONTACTARNOS?
                </h3>

                <div className="relative pl-12">
                  <div className="absolute left-5 top-2 h-[calc(100%-16px)] w-px bg-white/25" />

                  <div className="space-y-6 text-white/90">
                    <div className="relative">
                      <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#7CC8A6] text-base font-semibold text-white">
                        1
                      </div>
                      <p className="text-xl font-semibold leading-tight text-white">Revisamos tu mensaje</p>
                      <p className="text-sm text-white/80">Analizamos tus necesidades y objetivos.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#7CC8A6] text-base font-semibold text-white">
                        2
                      </div>
                      <p className="text-xl font-semibold leading-tight text-white">Coordinamos una llamada inicial</p>
                      <p className="text-sm text-white/80">Agendamos una conversación para conocerte mejor.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#7CC8A6] text-base font-semibold text-white">
                        3
                      </div>
                      <p className="text-xl font-semibold leading-tight text-white">Analizamos tu situación</p>
                      <p className="text-sm text-white/80">Evaluamos tus desafíos y oportunidades actuales.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#7CC8A6] text-base font-semibold text-white">
                        4
                      </div>
                      <p className="text-xl font-semibold leading-tight text-white">Te proponemos un plan claro</p>
                      <p className="text-sm text-white/80">Recibes una propuesta detallada y accionable.</p>
                    </div>
                  </div>
                </div>

                <p className="text-xl italic text-white/90">Sin compromiso.</p>
              </div>

              <div className="space-y-4 border-t border-white/25 pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">Síguenos</p>
                <div className="flex flex-wrap gap-6 text-sm font-medium text-white/90">
                  <a
                    href="https://www.instagram.com/danielaroa.consultora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="transition hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="transition hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#blog"
                    className="transition hover:text-white"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
