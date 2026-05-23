import type { CSSProperties } from "react";

type Company = {
  id: string;
  name: string;
  tag: string;
  accent: string;
  blurb: string;
  url: string;
  signature: "health" | "trajectory" | "data";
};

const COMPANIES: Company[] = [
  {
    id: "metacare",
    name: "Metacare",
    tag: "Healthtech",
    accent: "#ed3237",
    blurb: "GP referrals, simplified — fast and free.",
    url: "https://www.metacareaustralia.com.au/",
    signature: "health",
  },
  {
    id: "ixcricket",
    name: "iXCricket",
    tag: "Sports science",
    accent: "#0E0F12",
    blurb: "Performance data for cricketers.",
    url: "#",
    signature: "trajectory",
  },
  {
    id: "acendis",
    name: "Acendis",
    tag: "Fintech · Data",
    accent: "#1f7a4d",
    blurb: "Financial signal from complex data.",
    url: "#",
    signature: "data",
  },
];

function Signature({
  kind,
  accent,
}: {
  kind: Company["signature"];
  accent: string;
}) {
  if (kind === "health") {
    return (
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="grid-h" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="480" fill="url(#grid-h)" />
        <g transform="translate(200 220)">
          <circle r="180" fill="none" stroke={accent} strokeOpacity="0.08" strokeWidth="1" />
          <circle r="130" fill="none" stroke={accent} strokeOpacity="0.14" strokeWidth="1" />
          <circle r="84" fill="none" stroke={accent} strokeOpacity="0.22" strokeWidth="1" />
          <path
            d="M-44 -12 H-12 V-44 H12 V-12 H44 V12 H12 V44 H-12 V12 H-44 Z"
            fill={accent}
            fillOpacity="0.95"
          />
        </g>
      </svg>
    );
  }
  if (kind === "trajectory") {
    return (
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="currentColor" strokeOpacity="0.10">
          {[60, 120, 180, 240, 300, 360, 420].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} />
          ))}
        </g>
        <g stroke="currentColor" strokeOpacity="0.06">
          {[80, 160, 240, 320].map((x) => (
            <line key={x} y1="0" y2="480" x1={x} x2={x} />
          ))}
        </g>
        <path
          d="M20 380 Q 140 380 200 240 T 390 50"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="390" cy="50" r="9" fill={accent} />
        <circle cx="390" cy="50" r="20" fill={accent} fillOpacity="0.18" />
      </svg>
    );
  }
  const bars = [40, 62, 28, 78, 50, 92, 70, 84, 46, 64, 52, 80];
  return (
    <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <line x1="0" x2="400" y1="380" y2="380" stroke="currentColor" strokeOpacity="0.18" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 32}
          y={380 - h * 3}
          width="22"
          height={h * 3}
          fill={accent}
          fillOpacity={i === 5 ? 1 : 0.22}
          rx="3"
        />
      ))}
    </svg>
  );
}

export function Portfolio() {
  return (
    <section className="kpl-section kpl-container" id="portfolio">
      <div className="eyebrow">Portfolio</div>
      <h2 className="section-title" style={{ marginTop: 14 }}>
        Check out the companies building the future and how we&rsquo;ve helped.
      </h2>
      <div className="portfolio-grid">
        {COMPANIES.map((c) => (
          <a
            key={c.id}
            className="pf-card"
            href={c.url}
            target="_blank"
            rel="noreferrer"
            style={{ ["--c-accent" as string]: c.accent } as CSSProperties}
          >
            <div className="pf-sig" aria-hidden="true">
              <Signature kind={c.signature} accent={c.accent} />
            </div>
            <div className="pf-overlay">
              <div className="pf-tag">
                <span className="pf-dot"></span>
                {c.tag}
              </div>
              <div className="pf-foot">
                <div>
                  <h3 className="pf-name">{c.name}</h3>
                  <p className="pf-blurb">{c.blurb}</p>
                </div>
                <span className="pf-arrow" aria-hidden="true">↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
