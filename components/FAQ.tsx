type FaqItem = {
  question: string;
  answer: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "Which areas do you cover?",
    answer:
      "We are starting in Nairobi and the surrounding counties. Tell us where your property is and we will confirm coverage on the call.",
  },
  {
    question: "Do you sell property?",
    answer:
      "No. We don’t sell land or take commission from sellers, so our advice stays on your side. We only work for the buyer or owner.",
  },
  {
    question: "How do I pay, and when?",
    answer:
      "Verification is a one time fee, paid up front. Monitoring is agreed per project. Management is billed monthly. Contractor payments are released only against verified milestones.",
  },
  {
    question: "Who actually does the legal work?",
    answer:
      "Our network of licensed advocates and surveyors. We coordinate them and report back to you in plain language.",
  },
];

type FAQProps = {
  items?: FaqItem[];
};

// Native <details> elements give keyboard and screen reader support for free.
// The shared name attribute keeps only one answer open at a time.
export default function FAQ({ items = defaultItems }: FAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="bg-paper">
      <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 id="faq-heading" className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Straight answers before you commit.
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
            Something else on your mind? Ask us on the free consultation call.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map((item, index) => (
            <details key={item.question} name="faq" className="group" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left">
                <span className="font-display text-xl font-semibold text-ink sm:text-2xl">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:border-ink group-open:bg-ink"
                >
                  <span className="absolute h-0.5 w-3.5 bg-ink group-open:bg-paper" />
                  <span className="absolute h-3.5 w-0.5 bg-ink transition-transform group-open:scale-y-0" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-12 text-lg leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
