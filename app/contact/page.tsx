import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { emailHref, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30 minute consultation with Al-Mas Advisory.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-site py-16 md:py-20">
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Book a free consultation.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            Tell us a little about your property. We will set up a free 30 minute call at a time that
            suits your time zone.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site grid gap-10 py-16 md:py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <ContactForm />

          <aside aria-labelledby="direct-heading" className="space-y-6">
            <div className="rounded-3xl bg-ink p-8 text-paper">
              <h2 id="direct-heading" className="font-display text-2xl font-semibold">
                Prefer to talk directly?
              </h2>
              <p className="mt-2 text-white/75">Message us on WhatsApp or send an email.</p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-accent-hover"
                >
                  WhatsApp {site.whatsappDisplay}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Email {site.email}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-paper p-8">
              <h2 className="font-display text-xl font-semibold text-ink">Where we are</h2>
              <p className="mt-2 text-lg text-muted">{site.location}</p>
            </div>

            <div className="rounded-3xl border border-line bg-paper p-8">
              <h2 className="font-display text-xl font-semibold text-ink">What happens next</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We reply to agree a call time. On the call we listen, answer your questions and
                suggest next steps. Then you get a written quote and decide if and when to go ahead.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
