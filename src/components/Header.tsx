"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const navItems = [
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Quiénes Somos", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Clientes y Proyectos", href: "#clientes", id: "clientes" },
  { label: "Contacto", href: "#contacto", id: "contacto" }
];

export default function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-base transition-shadow duration-300 ease-out ${
        isScrolled ? "shadow-[0_6px_18px_rgba(15,23,42,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/prosigo-logo.svg"
            alt="Prosigo consultora estratégica"
            width={180}
            height={64}
            className="h-12 w-auto"
            priority
          />
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(item.id, event)}
              className={`relative text-brand/80 transition duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent after:transition after:duration-300 after:content-[''] hover:text-brand focus-visible:text-brand focus-visible:outline-none ${
                activeSection === item.id
                  ? "text-brand after:opacity-100"
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
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 ease-out hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
        >
          Agendar llamada
        </a>
      </div>
    </header>
  );
}
