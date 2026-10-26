import Link from "next/link";

type ServiceCardProps = {
  name: string;
  summary: string;
  href: string;
};

export default function ServiceCard({ name, summary, href }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-paper p-8 shadow-card transition-shadow hover:shadow-lift">
      <h3 className="font-display text-4xl font-semibold tracking-tight text-ink">{name}</h3>
      <p className="mt-4 flex-1 text-lg leading-relaxed text-muted">{summary}</p>
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-ink after:absolute after:inset-0 after:rounded-3xl"
      >
        <span>
          Explore {name}
          <span className="sr-only"> service</span>
        </span>
        <svg viewBox="0 0 20 20" className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">
          <path d="M4 10h11M11 5l5 5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
}
