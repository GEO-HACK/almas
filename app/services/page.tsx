import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Title verification, construction monitoring and rental management for Kenyans abroad.",
};

const services = [
  {
    id: "verify",
    name: "Verify",
    intro:
      "Before you send a deposit, we find out whether the land is what the seller says it is, and whether anyone else has a claim on it.",
    items: [
      "Title and ownership search",
      "Encumbrance and dispute check",
      "Site and beacon visit",
      "Written report with photos",
    ],
    price: "KES XX,XXX per property",
    billing: "Single fee, paid up front",
  },
  {
    id: "build",
    name: "Build",
    intro:
      "We watch your construction as if it were our own, so you always know what has been built and what your money has paid for.",
    items: [
      "Monthly photo and drone updates",
      "Contractor payments by milestone",
      "Cost and materials checks",
      "Progress reports",
    ],
    price: "KES XX,XXX per month",
    billing: "Agreed per project",
  },
  {
    id: "keep",
    name: "Keep",
    intro:
      "Your finished property should earn for you and stay in good shape. We handle the day to day so you do not have to.",
    items: [
      "Tenant sourcing and vetting",
      "Rent collection sent abroad",
      "Repairs and caretaking",
      "Monthly statement",
    ],
    price: "X% of monthly rent",
    billing: "Billed monthly",
  },
];

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

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-site py-16 md:py-24">
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Every stage of owning property in Kenya, covered.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            Use one service or all three. Each one is built around the same idea: you see proof
            before you take the next step.
          </p>
          <nav aria-label="Services on this page" className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="inline-flex rounded-full border border-line px-5 py-2.5 font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container-site space-y-6 py-16 md:py-24">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className="scroll-mt-28 grid gap-10 rounded-[2rem] border border-line bg-paper p-8 shadow-card md:p-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
          >
            <div className="flex flex-col">
              <h2 id={`${service.id}-heading`} className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                {service.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{service.intro}</p>

              <div className="mt-8 rounded-2xl bg-surface p-5 lg:mt-auto">
                <p className="text-sm text-muted">Indicative price</p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  From {service.price}
                </p>
                <p className="mt-1 text-sm text-muted">{service.billing}</p>
              </div>
            </div>

            <div>
              <h3 className="sr-only">What is included</h3>
              <ul className="divide-y divide-line border-y border-line">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 py-5 text-xl text-ink">
                    <svg viewBox="0 0 20 20" className="h-6 w-6 shrink-0" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" fill="#0E0E0E" />
                      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent"
              >
                Ask about {service.name}
              </Link>
            </div>
          </section>
        ))}

        <p className="px-2 pt-4 text-sm text-muted">
          Prices are indicative. Final fees are confirmed in writing
          after your consultation.
        </p>
      </div>

      <section aria-labelledby="how-heading" className="bg-ink text-paper">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 id="how-heading" className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              How it works
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <li key={step.title} className="border-t border-white/20 pt-6">
                <h3 className="font-display text-2xl font-semibold leading-snug">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 font-semibold text-paper transition-colors hover:bg-accent-hover"
            >
              Book your free 30 minute call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
