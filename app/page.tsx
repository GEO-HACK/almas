import Link from "next/link";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />

      <section aria-labelledby="services-preview-heading">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="services-preview-heading"
              className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl"
            >
              What we do
            </h2>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              See all services
            </Link>
          </div>

          <ul className="mt-12 border-b border-line">
            {services.map((service) => (
              <li key={service.id} className="border-t border-line">
                <ServiceCard name={service.name} summary={service.summary} href={`/services#${service.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ />
    </>
  );
}
