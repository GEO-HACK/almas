const worries = [
  {
    question: "Is this title genuine?",
    answer: "Checked at the lands registry before any money moves.",
  },
  {
    question: "Is the build really happening?",
    answer: "Dated photos every month.",
  },
  {
    question: "Is my money going where I said?",
    answer: "Contractors are paid only against verified milestones.",
  },
  {
    question: "Is someone looking after the house?",
    answer: "Tenants, repairs and rent handled for you.",
  },
];

export default function WorriesBand() {
  return (
    <section aria-labelledby="worries-heading" className="bg-ink text-paper">
      <div className="container-site py-20 md:py-28">
        <h2 id="worries-heading" className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          The questions every owner abroad asks.
        </h2>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
          {worries.map((worry) => (
            <li key={worry.question} className="bg-ink p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold leading-snug md:text-[1.7rem]">
                {worry.question}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-white/75">{worry.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
