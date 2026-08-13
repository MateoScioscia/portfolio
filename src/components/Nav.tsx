"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/site";

// Absolute hrefs so the nav also works from /proyectos/[slug].
const links = [
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#skills", label: "Skills" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50"
      data-scrolled={scrolled}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/#inicio" className="font-display text-xl tracking-tight">
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="pressable rounded-full bg-ink px-4 py-2 text-paper"
          >
            Descargar CV
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="pressable rounded-full border border-line px-4 py-2 text-sm md:hidden"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4 text-ink-soft">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              className="pressable rounded-full bg-ink px-4 py-2 text-center text-paper"
            >
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
