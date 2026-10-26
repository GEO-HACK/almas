import Image from "next/image";
import Link from "next/link";

// Drop a photo into /public and set its path here, for example "/hero.jpg".
// While this is null, an empty image frame is shown instead.
const HERO_IMAGE: string | null = null;
const HERO_IMAGE_ALT = "A finished family home in Kenya";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site grid items-center gap-12 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            Own property in Kenya. Stop worrying about it.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">
            We verify, build and manage on your behalf, with proof at every step: registry
            searches, dated photos and payments tied to real progress.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-paper shadow-card transition-colors hover:bg-accent-hover"
            >
              Book a free consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-ink px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              See our services
            </Link>
          </div>

          <p className="mt-8 text-sm font-semibold text-ink">
            For Kenyans in the UK, US, Gulf and beyond.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-surface sm:aspect-[4/3] lg:aspect-[4/5]">
          {HERO_IMAGE ? (
            <Image
              src={HERO_IMAGE}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-2xl font-semibold text-ink">Image</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
