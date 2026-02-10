"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const navItems = [
  { label: "Inicio", href: "#hero", id: "hero" },
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Quiénes Somos", href: "#equipo", id: "equipo" },
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
      <div className="mx-auto flex w-full max-w-[84rem] items-center justify-between gap-12 px-10 py-5">
        <div className="flex items-center">
          <Image
            src="/prosigo-logo.svg"
            alt="Prosigo consultora estratégica"
            width={234}
            height={83}
            className="h-[4.8rem] w-auto"
            priority
          />
        </div>
        <nav className="hidden flex-1 items-center justify-end gap-9 text-base font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(item.id, event)}
              className={`relative text-brand/85 transition duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-brand after:transition after:duration-300 after:content-[''] hover:text-brand focus-visible:text-brand focus-visible:outline-none ${
                activeSection === item.id
                  ? "text-brand after:opacity-100"
                  : "after:opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
