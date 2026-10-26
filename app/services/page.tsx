import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BuildIllustration, KeepIllustration, VerifyIllustration } from "@/components/ServiceIllustrations";
import { services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Title verification, construction monitoring and rental management for Kenyans abroad.",
};

const steps = [
  {
    title: "Tell us what you own or want",
    body: "A free 30 minute call to understand your property, your plans and your worries.",
  },
  {
    title: "We check on the ground",
    body: "Our team visits the site and the registry, and coordinates the advocates and surveyors needed.",
  },
  {
    title: "You get a clear report",
    body: "Findings in plain language, with photos, documents and our honest recommendation.",
  },
  {
    title: "You decide, we deliver",
    body: "You stay in control of every decision. We carry it out and keep you updated.",
  },
];

const illustrations: Record<Service["id"], React.ReactNode> = {
  verify: <VerifyIllustration />,
  build: <BuildIllustration />,
  keep: <KeepIllustration />,
};

const themes: Record<Service["id"], { section: string; muted: string; rule: string; reverse: boolean }> = {
  verify: { section: "bg-paper text-ink", muted: "text-muted", rule: "border-line", reverse: false },
  build: { section: "bg-ink text-paper", muted: "text-white/70", rule: "border-white/15", reverse: true },
  keep: { section: "bg-surface text-ink", muted: "text-muted", rule: "border-line", reverse: false },
};

function ServiceSection({ service }: { service: Service }) {
  const theme = themes[service.id];

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className={`scroll-mt-20 ${theme.section}`}
    >
      <div className="container-site py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className={theme.reverse ? "lg:order-2" : ""}>
            <h2
              id={`${service.id}-heading`}
              className="font-display text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl"
            >
              {service.name}
            </h2>
            <p className="mt-5 max-w-lg font-display text-2xl leading-snug sm:text-3xl">{service.promise}</p>
            <p className={`mt-6 max-w-lg text-lg leading-relaxed ${theme.muted}`}>{service.intro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-accent-hover"
              >
                Ask about {service.name}
              </Link>
              <p className="text-sm">
                <span className="block font-semibold">{service.price}</span>
                <span className={theme.muted}>{service.billing}</span>
              </p>
            </div>
          </Reveal>

          <div className={theme.reverse ? "lg:order-1" : ""}>{illustrations[service.id]}</div>
        </div>

        <Reveal fade={false} className="mt-20">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {service.items.map((item, index) => (
              <li
                key={item.title}
                className={`fade-up border-t pt-6 ${theme.rule}`}
                style={{ "--d": `${index * 120}ms` } as React.CSSProperties}
              >
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                <p className={`mt-3 leading-relaxed ${theme.muted}`}>{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container-site py-20 md:py-28">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Every stage of owning property in Kenya, covered.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              Use one service or all three. Each one is built around the same idea: you see proof
              before you take the next step.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <nav aria-label="Services on this page" className="mt-12">
              <ul className="grid gap-3 sm:grid-cols-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className="group flex items-center justify-between rounded-2xl bg-surface px-6 py-5 transition-colors hover:bg-ink hover:text-paper"
                    >
                      <span>
                        <span className="block font-display text-2xl font-semibold">{service.name}</span>
                        <span className="mt-1 block text-sm text-muted transition-colors group-hover:text-white/70">
                          {service.summary}
                        </span>
                      </span>
                      <svg viewBox="0 0 20 20" className="ml-4 h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                        <path d="M10 4v11M5 10l5 5l5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      <section aria-labelledby="how-heading">
        <div className="container-site py-24 md:py-32">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="how-heading" className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                How it works
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted">You stay in control at every step.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-7 py-4 font-semibold text-paper transition-colors hover:bg-accent-hover"
            >
              Book your free 30 minute call
            </Link>
          </Reveal>

          <Reveal fade={false} className="mt-16">
            <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
              <span className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" aria-hidden="true" />
              <span
                className="grow-x absolute left-0 top-[6px] hidden h-[3px] w-full bg-accent md:block"
                style={{ "--d": "200ms" } as React.CSSProperties}
                aria-hidden="true"
              />
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="fade-up relative border-l border-line pl-8 md:border-l-0 md:pl-0 md:pt-12"
                  style={{ "--d": `${300 + index * 220}ms` } as React.CSSProperties}
                >
                  <span
                    className="absolute -left-[8px] top-1 h-[15px] w-[15px] rounded-full bg-ink ring-4 ring-paper md:left-0 md:top-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl font-semibold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <p className="mt-16 text-sm text-muted">
            Prices are indicative. Final fees are confirmed in writing after your consultation.
          </p>
        </div>
      </section>
    </>
  );
}
