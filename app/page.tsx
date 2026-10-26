import Link from "next/link";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />

      <section aria-labelledby="services-preview-heading">
        <div className="container-site py-24 md:py-32">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="services-preview-heading"
              className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl"
            >
              Verify. Build. Keep.
            </h2>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-accent"
            >
              See all services
            </Link>
          </Reveal>

          <ul className="mt-12 border-b border-line">
            {services.map((service, index) => (
              <li key={service.id} className="border-t border-line">
                <Reveal delay={index * 120}>
                  <ServiceCard
                    name={service.name}
                    summary={service.summary}
                    includes={service.items.slice(0, 3).map((item) => item.title)}
                    href={`/services#${service.id}`}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ />
    </>
  );
}
