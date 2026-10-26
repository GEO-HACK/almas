import Reveal from "./Reveal";

type Style = React.CSSProperties & { "--d"?: string };
const delay = (ms: number): Style => ({ "--d": `${ms}ms` });

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M5 10.5l3 3L15 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PLOT = "M150 96 L338 74 L366 236 L168 262 Z";
const BEACONS: [number, number][] = [
  [150, 96],
  [338, 74],
  [366, 236],
  [168, 262],
];

// Verify: a survey map. The plot boundary draws itself, then the beacons appear.
export function VerifyIllustration() {
  return (
    <Reveal fade={false}>
      <div className="relative overflow-hidden rounded-[2rem] bg-surface">
        <svg viewBox="0 0 480 380" className="block h-auto w-full" aria-hidden="true">
          <defs>
            <pattern id="survey-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="#E3E3E3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="480" height="380" fill="url(#survey-grid)" />

          {/* Neighbouring plots */}
          <g fill="none" stroke="#D2D2D2" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M24 52 L132 40 L146 270 L34 288 Z" />
            <path d="M356 70 L470 58 L470 230 L384 238 Z" />
            <path d="M150 14 L330 4 L336 66 L148 88 Z" />
          </g>

          {/* Access road */}
          <path d="M-10 330 C 140 296, 320 356, 490 306" fill="none" stroke="#FFFFFF" strokeWidth="28" />
          <path d="M-10 330 C 140 296, 320 356, 490 306" fill="none" stroke="#D2D2D2" strokeWidth="2" strokeDasharray="10 12" />

          {/* The plot */}
          <path d={PLOT} fill="#E4002B" fillOpacity="0.08" className="pop" style={delay(1500)} />
          <path
            d={PLOT}
            pathLength={1}
            fill="none"
            stroke="#0E0E0E"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="draw"
            style={delay(200)}
          />

          {BEACONS.map(([x, y], index) => (
            <g key={`${x}-${y}`} className="pop" style={delay(1200 + index * 160)}>
              <circle cx={x} cy={y} r="11" fill="#E4002B" opacity="0.35" className="pulse-ring" />
              <circle cx={x} cy={y} r="7" fill="#E4002B" stroke="#FFFFFF" strokeWidth="3" />
            </g>
          ))}
        </svg>

        <div
          className="fade-up absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
          style={delay(1900)}
        >
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper shadow-lift">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            Title and beacons verified
          </span>
        </div>
      </div>
    </Reveal>
  );
}

const milestones = [
  { label: "Foundation", status: "Paid", state: "done" },
  { label: "Walls", status: "Paid", state: "done" },
  { label: "Roof", status: "In progress", state: "current" },
  { label: "Finishes", status: "Next", state: "next" },
] as const;

// Build: the house rises stage by stage, with payments tied to milestones below.
export function BuildIllustration() {
  return (
    <Reveal fade={false}>
      <div className="rounded-[2rem] bg-white/[0.06] p-6 sm:p-10">
        <svg viewBox="0 0 480 290" className="block h-auto w-full" aria-hidden="true">
          {/* Crane */}
          <g fill="none" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round">
            <path d="M412 270 L412 40" pathLength={1} className="draw" style={delay(100)} />
            <path d="M330 44 L456 44" pathLength={1} className="draw" style={delay(500)} />
            <path d="M412 40 L360 44 M412 40 L450 44" pathLength={1} className="draw" style={delay(700)} />
            <path d="M352 44 L352 92" pathLength={1} className="draw" style={delay(1100)} />
          </g>
          <rect x="340" y="92" width="24" height="12" rx="2" fill="#E4002B" className="pop" style={delay(1400)} />

          {/* Ground */}
          <path d="M24 270 L456 270" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="2" />

          {/* Foundation */}
          <rect x="70" y="252" width="270" height="18" rx="2" fill="#FFFFFF" className="rise" style={delay(200)} />

          {/* Walls, windows and door */}
          <g className="rise" style={delay(700)}>
            <rect x="88" y="150" width="234" height="102" fill="#FFFFFF" fillOpacity="0.12" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M88 184 H322 M88 218 H322" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="116" y="176" width="42" height="34" fill="#0E0E0E" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
            <rect x="252" y="176" width="42" height="34" fill="#0E0E0E" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
            <rect x="186" y="196" width="38" height="56" fill="#0E0E0E" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
          </g>

          {/* Roof: planned, in progress */}
          <path
            d="M74 152 L205 76 L336 152"
            fill="none"
            stroke="#E4002B"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeDasharray="10 9"
            className="fade-up"
            style={delay(1500)}
          />
        </svg>

        <ol className="relative mt-8 grid grid-cols-4">
          <span className="absolute left-[12.5%] right-[12.5%] top-[11px] h-0.5 bg-white/20" aria-hidden="true" />
          <span
            className="grow-x absolute left-[12.5%] top-[11px] h-0.5 w-1/2 bg-accent"
            style={delay(900)}
            aria-hidden="true"
          />
          {milestones.map((milestone, index) => (
            <li
              key={milestone.label}
              className="fade-up relative flex flex-col items-center text-center"
              style={delay(600 + index * 250)}
            >
              {milestone.state === "done" && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper text-ink">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              )}
              {milestone.state === "current" && (
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-accent/60" aria-hidden="true" />
                  <span className="relative h-6 w-6 rounded-full bg-accent" />
                </span>
              )}
              {milestone.state === "next" && <span className="h-6 w-6 rounded-full bg-ink ring-2 ring-inset ring-white/40" />}
              <span className="mt-3 text-sm font-semibold text-paper">{milestone.label}</span>
              <span className="text-xs text-white/65">{milestone.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

const ROUTE = "M236 150 C 290 40, 344 40, 372 92";

// Keep: a finished, tenanted home with rent travelling to you abroad.
export function KeepIllustration() {
  return (
    <Reveal fade={false}>
      <div className="relative overflow-hidden rounded-[2rem] bg-paper shadow-card">
        <svg viewBox="0 0 480 340" className="block h-auto w-full" aria-hidden="true">
          {/* Ground and tree */}
          <path d="M28 272 L300 272" stroke="#E3E3E3" strokeWidth="2" />
          <g className="pop" style={delay(700)}>
            <path d="M272 272 V236" stroke="#6B6B6B" strokeWidth="3" />
            <circle cx="272" cy="220" r="24" fill="#F5F5F5" />
          </g>

          {/* House */}
          <g className="rise" style={delay(150)}>
            <rect x="70" y="168" width="160" height="104" fill="#0E0E0E" />
            <rect x="92" y="190" width="28" height="26" rx="2" fill="#FFFFFF" />
            <rect x="180" y="190" width="28" height="26" rx="2" fill="#FFFFFF" />
            <rect x="134" y="214" width="32" height="58" rx="2" fill="#FFFFFF" />
          </g>
          <path d="M54 172 L150 98 L246 172 Z" fill="#E4002B" className="pop" style={delay(600)} />

          {/* Route to you abroad */}
          <path d={ROUTE} pathLength={1} fill="none" stroke="#0E0E0E" strokeOpacity="0.35" strokeWidth="2" className="draw" style={delay(900)} />
          <circle r="7" fill="#E4002B" className="motion-dot">
            <animateMotion dur="2.8s" repeatCount="indefinite" path={ROUTE} />
          </circle>

          {/* Globe */}
          <g className="pop" style={delay(1300)} fill="none" stroke="#0E0E0E" strokeWidth="2">
            <circle cx="404" cy="122" r="44" fill="#F5F5F5" />
            <ellipse cx="404" cy="122" rx="18" ry="44" />
            <path d="M360 122 H448 M366 100 Q404 110 442 100 M366 144 Q404 134 442 144" />
          </g>
        </svg>

        <span
          className="fade-up absolute left-[13%] top-[86%] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink"
          style={delay(1100)}
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Tenanted
        </span>
        <span
          className="fade-up absolute right-[6%] top-[55%] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-3.5 py-1.5 text-sm font-semibold text-paper"
          style={delay(1600)}
        >
          Rent sent to you
        </span>
      </div>
    </Reveal>
  );
}
