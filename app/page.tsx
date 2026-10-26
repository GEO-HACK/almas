import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";

const services = [
  {
    name: "Verify",
    summary: "We confirm the title, owner and boundaries are real before any money changes hands.",
    href: "/services#verify",
  },
  {
    name: "Build",
    summary: "Monthly dated photos and payments released only when the work is really done.",
    href: "/services#build",
  },
  {
    name: "Keep",
    summary: "Tenants found and vetted, rent sent to you abroad, repairs taken care of.",
    href: "/services#keep",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="about-preview-heading" className="bg-ink text-paper">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              id="about-preview-heading"
              className="font-display text-4xl font-semibold leading-tight sm:text-5xl"
            >
              One trusted team on the ground, working for you.
            </h2>
          </div>
          <div className="lg:pt-2">
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
              className="mt-8 inline-flex items-center gap-2 font-semibold text-paper underline decoration-accent decoration-2 underline-offset-[6px] hover:text-white/80"
            >
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-preview-heading" className="bg-surface">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2
                id="services-preview-heading"
                className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl"
              >
                Verify. Build. Keep.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              See all services
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <li key={service.name}>
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ />
    </>
  );
}
