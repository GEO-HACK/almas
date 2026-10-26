import Link from "next/link";
import { Logo } from "./Logo";
import { emailHref, navLinks, site, whatsappHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-paper">
            {site.tagline}.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Title verification, construction monitoring and rental management for Kenyans
            living abroad.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white/60">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/85 transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white/60">Talk to us</h2>
          <ul className="mt-5 space-y-4 text-white/85">
            <li>
              <span className="block text-sm text-white/60">Email</span>
              <a href={emailHref} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <span className="block text-sm text-white/60">WhatsApp</span>
              <a href={whatsappHref} className="hover:text-paper" target="_blank" rel="noopener noreferrer">
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="text-sm text-white/70">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>Under {site.parentCompany}.</p>
        </div>
      </div>
    </footer>
  );
}
