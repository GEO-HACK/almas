import Link from "next/link";

type ServiceCardProps = {
  name: string;
  summary: string;
  includes: string[];
  href: string;
};

// A full width row rather than a boxed card: big name, summary, arrow.
export default function ServiceCard({ name, summary, includes, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group grid gap-5 py-10 transition-colors md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto] md:items-center md:gap-12 md:py-12"
    >
      <h3 className="font-display text-5xl font-semibold tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
        {name}
      </h3>
      <div>
        <p className="text-lg leading-relaxed text-ink">{summary}</p>
        <p className="mt-3 text-sm text-muted">{includes.join("  ·  ")}</p>
      </div>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
        <svg viewBox="0 0 20 20" className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-45" aria-hidden="true">
          <path d="M4 10h11M11 5l5 5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">Explore {name}</span>
      </span>
    </Link>
  );
}
