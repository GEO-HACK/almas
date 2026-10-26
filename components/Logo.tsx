type DiamondMarkProps = {
  className?: string;
};

export function DiamondMark({ className = "h-7 w-7" }: DiamondMarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <polygon points="8,5 24,5 30,12.5 16,28.5 2,12.5" fill="#E4002B" />
      <g fill="none" stroke="#FFFFFF" strokeWidth="1.1" strokeLinejoin="round" opacity="0.9">
        <polyline points="2,12.5 30,12.5" />
        <polyline points="8,5 11.5,12.5 16,5 20.5,12.5 24,5" />
        <polyline points="11.5,12.5 16,28.5 20.5,12.5" />
      </g>
    </svg>
  );
}

type LogoProps = {
  tone?: "dark" | "light";
};

// Wordmark lockup. "dark" is for white backgrounds, "light" for black bands.
export function Logo({ tone = "dark" }: LogoProps) {
  const word = tone === "dark" ? "text-ink" : "text-paper";
  const sub = tone === "dark" ? "text-muted" : "text-white/70";

  return (
    <span className="inline-flex items-center gap-2.5">
      <DiamondMark />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className={`font-display text-xl font-semibold tracking-tight ${word}`}>Al-Mas</span>
        <span className={`text-sm font-medium uppercase tracking-[0.18em] ${sub}`}>Advisory</span>
      </span>
    </span>
  );
}
