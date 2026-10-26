import Link from "next/link";

type ServiceCardProps = {
  name: string;
  summary: string;
  href: string;
};

// A full width row rather than a boxed card.
export default function ServiceCard({ name, summary, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group grid gap-3 py-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_auto] md:items-baseline md:gap-12"
    >
      <h3 className="font-display text-4xl font-semibold text-ink sm:text-5xl">{name}</h3>
      <p className="text-lg leading-relaxed text-ink">{summary}</p>
      <span className="text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors group-hover:decoration-accent">
        Details<span className="sr-only"> about {name}</span>
      </span>
    </Link>
  );
}
