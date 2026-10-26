import type { Metadata } from "next";
import Link from "next/link";
import { DiamondMark } from "@/components/Logo";
import WorriesBand from "@/components/WorriesBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Al-Mas Advisory is one trusted team on the ground for Kenyans abroad who buy, build or own property in Kenya.",
};

const model = [
  {
    title: "Lands and legal",
    body: "We coordinate licensed advocates and surveyors for searches, agreements and transfers, then explain what they found in plain language.",
  },
  {
    title: "Site and build",
    body: "Our people visit the plot, photograph progress, check materials and confirm each milestone before any contractor is paid.",
  },
  {
    title: "Property care",
    body: "Once the house is finished we find and vet tenants, collect rent, arrange repairs and send you a clear monthly statement.",
  },
];

const promises = [
  "We don’t sell land or take commission from sellers. We only work for the buyer or owner.",
  "You approve every payment. Nothing moves without your say so.",
  "Everything comes in writing, with dated photos you can keep.",
  "We tell you plainly when something is wrong, even if it means walking away from a deal.",
  "One point of contact who knows your property and answers your messages.",
];

const team = ["Founder and lead adviser", "Site and construction lead", "Property management lead"];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-site py-16 md:py-24">
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Your eyes, ears and honest adviser in Kenya.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            Al-Mas Advisory exists for one reason: so that Kenyans living abroad can invest at home
            with the same confidence they would have if they were standing on the plot themselves.
          </p>
        </div>
      </section>

      <section aria-labelledby="who-heading">
        <div className="container-site grid gap-10 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="who-heading" className="font-display text-4xl font-semibold leading-tight text-ink">
            Who we are
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p className="text-xl text-ink">
              We are a Nairobi based property services firm working for clients in the UK, the US,
              the Gulf and everywhere else Kenyans have built their lives.
            </p>
            <p>
              Too many people in the diaspora have sent money home for land that turned out to have
              a disputed title, or for a house that was never built. Often the problem is not bad
              luck. It is distance, and relying on people who have no duty to tell you the truth.
            </p>
            <p>
              Our name, Al-Mas, means diamond. A diamond is valued because it is rare, tested and
              trusted. That is the standard we hold our advice to.
            </p>
            <p className="pt-2">
              Al-Mas Advisory operates under {site.parentCompany}.{" "}
              Registration number PVTXXXXXXX.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="bg-ink text-paper">
        <div className="container-site py-20 md:py-28">
          <DiamondMark className="h-10 w-10" />
          <h2 id="mission-heading" className="sr-only">
            Our mission
          </h2>
          <p className="mt-8 max-w-4xl font-display text-3xl font-medium leading-snug sm:text-5xl sm:leading-tight">
            Our mission is to take the risk out of buying, building and owning property in Kenya
            from abroad.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            We do it by checking facts on the ground, tying every shilling to proof, and reporting
            to you in plain language you can act on.
          </p>
        </div>
      </section>

      <section aria-labelledby="model-heading" className="bg-surface">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 id="model-heading" className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              One team on the ground.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Instead of separate people for the land, the build and the tenants, you have one team
              that sees the whole picture and is accountable to you for all of it.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {model.map((item) => (
              <li key={item.title} className="rounded-xl bg-paper p-8 shadow-card">
                <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WorriesBand />

      <section aria-labelledby="side-heading">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 id="side-heading" className="font-display text-4xl font-semibold leading-tight text-ink">
              How we stay on your side
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We act for you, the buyer or owner. These are the habits that keep it that way.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {promises.map((promise) => (
              <li key={promise} className="flex gap-4 py-5 text-lg text-ink">
                <DiamondMark className="mt-1 h-5 w-5 shrink-0" />
                <span>{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="border-t border-line">
        <div className="container-site py-20 md:py-28">
          <h2 id="team-heading" className="font-display text-4xl font-semibold leading-tight text-ink">
            The team
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((role) => (
              <li key={role} className="rounded-xl bg-surface p-6">
                <div
                  className="aspect-[4/3] rounded-2xl bg-line"
                  aria-hidden="true"
                />
                <p className="mt-5 font-display text-xl font-semibold text-ink">Full Name</p>
                <p className="mt-1 font-semibold text-ink">{role}</p>
                <p className="mt-1 text-muted">Short bio and qualifications go here.</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-xl bg-surface p-8">
            <h3 className="font-display text-2xl font-semibold text-ink">Our office</h3>
            <address className="mt-3 not-italic text-lg text-muted">
              Building name, Street, Nairobi, Kenya
            </address>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Let us look at your property together.
            </h2>
            <p className="mt-3 text-lg text-white/75">Start with a free 30 minute call. No obligation.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-7 py-4 font-semibold text-paper transition-colors hover:bg-accent-hover"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
