"use client";

import { useMemo } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const navItems = [
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Metodología", href: "#metodologia", id: "metodologia" },
  { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Contacto", href: "#contacto", id: "contacto" }
];

export default function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const scrollToSection = useScrollToSection();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.18em] text-brand-900">
            PROSIGO
          </span>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-slate-500">
            Consultora estratégica
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(item.id, event)}
              className={`relative text-slate-700 transition duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-600 after:transition after:duration-300 after:content-[''] hover:text-brand-600 focus-visible:text-brand-600 focus-visible:outline-none ${
                activeSection === item.id
                  ? "text-brand-600 after:opacity-100"
                  : "after:opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          onClick={(event) => scrollToSection("contacto", event)}
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 ease-out hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100 focus-visible:ring-offset-2"
        >
          Agendar llamada
        </a>
      </div>
    </header>
  );
}
