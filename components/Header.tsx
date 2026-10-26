"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the home page the header floats over the hero photo until you scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        overHero
          ? "border-white/15 bg-transparent"
          : "border-line bg-paper"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" onClick={close} aria-label="Al-Mas Advisory, home" className="shrink-0">
          <Logo tone={overHero ? "light" : "dark"} />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      overHero
                        ? active
                          ? "bg-white/15 text-paper"
                          : "text-paper hover:bg-white/10"
                        : active
                          ? "bg-surface text-ink"
                          : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            onClick={close}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Book a consultation
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
              overHero ? "border-white/40 text-paper" : "border-line text-ink"
            }`}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <nav aria-label="Mobile" className="container-site py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-lg font-medium ${
                      active ? "bg-surface text-ink" : "text-ink"
                    }`}
                  >
                    {link.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 font-semibold text-paper"
          >
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
