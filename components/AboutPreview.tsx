import Link from "next/link";
import Reveal from "./Reveal";
import { DiamondMark } from "./Logo";

const roles = [
  { title: "Lands and legal", body: "Searches, advocates, surveyors" },
  { title: "Site and build", body: "Visits, photos, milestones" },
  { title: "Property care", body: "Tenants, rent, repairs" },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="20" cy="20" r="15" />
        <ellipse cx="20" cy="20" rx="6.5" ry="15" />
        <path d="M5 20h30M8 12.5h24M8 27.5h24" />
      </g>
    </svg>
  );
}

// Home page about preview: you abroad, connected to one Al-Mas team in Nairobi,
// which covers the three jobs on the ground.
export default function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[62%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,0,43,0.22),transparent_65%)]"
      />

      <div className="container-site relative py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <h2
              id="about-preview-heading"
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              One trusted team on the ground, working for you.
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:pt-3">
            <p className="text-xl leading-relaxed text-paper">
              Al-Mas Advisory helps Kenyans abroad buy, build and own property at home without the
              guesswork. Instead of juggling a cousin, a broker and a contractor who all report
              differently, you deal with one team that checks everything and shows you the proof.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Al-Mas means diamond. We treat your trust the same way.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-paper"
            >
              <span className="underline decoration-accent decoration-2 underline-offset-[6px]">
                Read more about us
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Diagram: a row on desktop, a column on phones. */}
        <Reveal fade={false} className="mt-20 md:mt-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center md:grid md:grid-cols-[auto_minmax(3rem,1fr)_auto_minmax(4rem,1fr)_18rem] md:items-center">
            {/* You, abroad */}
            <div className="fade-up relative flex flex-col items-center text-center" style={{ "--d": "100ms" } as React.CSSProperties}>
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-paper">
                <GlobeIcon />
              </span>
              <span className="mt-3 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 md:whitespace-nowrap">
                <span className="block font-semibold">You, abroad</span>
                <span className="block text-sm text-white/65">UK, US, Gulf and beyond</span>
              </span>
            </div>

            {/* Connector with a moving pulse */}
            <div className="relative my-4 h-16 w-px bg-white/25 md:mx-4 md:my-0 md:h-px md:w-auto">
              <span className="travel-y absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:hidden" />
              <span className="travel-x absolute top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block" />
            </div>

            {/* Al-Mas team */}
            <div className="fade-up relative flex flex-col items-center text-center" style={{ "--d": "400ms" } as React.CSSProperties}>
              <span className="relative flex h-28 w-28 items-center justify-center">
                <span className="pulse-ring absolute inset-0 rounded-full bg-accent/40" aria-hidden="true" />
                <span className="relative flex h-28 w-28 items-center justify-center rounded-full bg-paper shadow-lift">
                  <DiamondMark className="h-12 w-12" />
                </span>
              </span>
              <span className="mt-3 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 md:whitespace-nowrap">
                <span className="block font-semibold">Al-Mas team</span>
                <span className="block text-sm text-white/65">Nairobi</span>
              </span>
            </div>

            {/* Fan out to the three roles (desktop) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="wipe hidden h-full w-full md:mx-4 md:block"
              style={{ "--d": "800ms" } as React.CSSProperties}
              aria-hidden="true"
            >
              <g fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
                <path d="M0 50 C 55 50, 45 14.6, 100 14.6" vectorEffect="non-scaling-stroke" />
                <path d="M0 50 L 100 50" vectorEffect="non-scaling-stroke" />
                <path d="M0 50 C 55 50, 45 85.4, 100 85.4" vectorEffect="non-scaling-stroke" />
              </g>
            </svg>
            <div className="my-4 h-12 w-px bg-white/25 md:hidden" aria-hidden="true" />

            {/* Roles */}
            <ul className="flex w-full max-w-xs flex-col gap-4 md:max-w-none">
              {roles.map((role, index) => (
                <li
                  key={role.title}
                  className="slide-in flex h-[76px] items-center gap-4 rounded-2xl bg-white/[0.07] px-5"
                  style={{ "--d": `${1100 + index * 180}ms` } as React.CSSProperties}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">{role.title}</span>
                    <span className="block text-sm text-white/65">{role.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
