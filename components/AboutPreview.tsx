import Link from "next/link";

// Home page about preview, linking through to the full About page.
export default function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="bg-ink text-paper">
      <div className="container-site py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2
            id="about-preview-heading"
            className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl"
          >
            One trusted team on the ground.
          </h2>
          <div className="lg:pt-2">
            <p className="text-lg leading-relaxed text-paper sm:text-xl">
              Al-Mas Advisory helps Kenyans abroad buy, build and own property at home without the
              guesswork. Instead of juggling a cousin, a broker and a contractor who all report
              differently, you deal with one team that checks everything and shows you the proof.
            </p>
            <p className="mt-5 leading-relaxed text-white/75">
              Al-Mas means diamond. We treat your trust the same way.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block font-semibold text-paper underline decoration-white/40 underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              Read more about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
