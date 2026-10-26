import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/hero.jpeg";

export default function Hero() {
  return (
    // Pulled up under the sticky header so the transparent nav sits on the photo.
    <section className="relative -mt-16 flex min-h-[88svh] items-center overflow-hidden bg-ink text-paper md:-mt-20">
      <Image
        src={heroImage}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/55 to-ink/80" aria-hidden="true" />

      <div className="container-site relative flex flex-col items-center pb-20 pt-36 text-center md:pt-44">
        <h1 className="max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Own property in Kenya. Stop worrying about it.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          We verify, build and manage on your behalf, with proof at every step: registry searches,
          dated photos and payments tied to real progress.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-paper shadow-card transition-colors hover:bg-accent-hover"
          >
            Book a free consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-paper px-7 py-4 text-base font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            See our services
          </Link>
        </div>

        <p className="mt-8 text-sm font-semibold">For Kenyans in the UK, US, Gulf and beyond.</p>
      </div>
    </section>
  );
}
