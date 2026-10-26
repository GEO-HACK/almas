type DiamondMarkProps = {
  className?: string;
};

// Faceted gem: icy sapphire teal crown over a deep royal blue pavilion,
// with white facet lines for the metallic, cut stone look.
const crown = [
  { points: "2,12.5 8,5 11.5,12.5", fill: "#A9E2EA" },
  { points: "8,5 16,5 11.5,12.5", fill: "#5CC0CF" },
  { points: "11.5,12.5 16,5 20.5,12.5", fill: "#D4F1F5" },
  { points: "16,5 24,5 20.5,12.5", fill: "#3FB4C6" },
  { points: "20.5,12.5 24,5 30,12.5", fill: "#2A93AE" },
];

const pavilion = [
  { points: "2,12.5 11.5,12.5 16,28.5", fill: "#2D55C9" },
  { points: "11.5,12.5 20.5,12.5 16,28.5", fill: "#1D3FAF" },
  { points: "20.5,12.5 30,12.5 16,28.5", fill: "#132A78" },
];

export function DiamondMark({ className = "h-7 w-7" }: DiamondMarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      {[...crown, ...pavilion].map((facet) => (
        <polygon key={facet.points} points={facet.points} fill={facet.fill} />
      ))}
      <g fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeLinejoin="round" opacity="0.85">
        <polygon points="8,5 24,5 30,12.5 16,28.5 2,12.5" />
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

// Wordmark lockup. "dark" is for white backgrounds, "light" for navy bands and photos.
export function Logo({ tone = "dark" }: LogoProps) {
  const word = tone === "dark" ? "text-ink" : "text-paper";
  const sub = tone === "dark" ? "text-muted" : "text-silver";

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
