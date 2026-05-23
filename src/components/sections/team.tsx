import type { CSSProperties } from "react";

type Member = {
  initials: string;
  name: string;
  role: string;
  accent: string;
  location: string;
  bio: string;
  signature: "orbit" | "radar";
};

const TEAM: Member[] = [
  {
    initials: "AP",
    name: "Anil Patel",
    role: "Managing Partner",
    accent: "#ed3237",
    location: "Helensvale, AU",
    bio: "Co-founder of VirtualMGR. Two decades scaling businesses across multiple continents — from corporate strategy to building a global operation, he's lived the entrepreneur's journey from startup chaos to sustainable growth.",
    signature: "orbit",
  },
  {
    initials: "SS",
    name: "Sam Stevens",
    role: "Senior Analyst",
    accent: "#0E0F12",
    location: "Brisbane, AU",
    bio: "Sharp analytical skills with startup intuition. Sam leads our due diligence process and portfolio support — the team member who spots opportunities others miss and helps founders navigate growth decisions.",
    signature: "radar",
  },
];

function Sig({
  kind,
  accent,
  initials,
}: {
  kind: Member["signature"];
  accent: string;
  initials: string;
}) {
  if (kind === "orbit") {
    return (
      <svg
        viewBox="0 0 240 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ps-orbit-r"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="240" height="320" fill="url(#ps-orbit-r)" />
        <g transform="translate(120 160)">
          <circle r="118" fill="none" stroke={accent} strokeOpacity="0.10" />
          <circle r="86" fill="none" stroke={accent} strokeOpacity="0.18" />
          <circle r="58" fill="none" stroke={accent} strokeOpacity="0.30" />
          <circle r="34" fill={accent} fillOpacity="0.95" />
          <circle cx="86" cy="-18" r="6" fill={accent} />
          <circle cx="-72" cy="44" r="4" fill={accent} fillOpacity="0.6" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="Fraunces, serif"
            fontWeight="600"
            fontSize="22"
            fill="#fff"
            letterSpacing="-0.02em"
          >
            {initials}
          </text>
        </g>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 240 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g transform="translate(120 160)">
        {[40, 80, 120].map((r) => (
          <circle
            key={r}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.18"
          />
        ))}
        <line
          x1="-130"
          x2="130"
          y1="0"
          y2="0"
          stroke="currentColor"
          strokeOpacity="0.18"
        />
        <line
          x1="0"
          x2="0"
          y1="-130"
          y2="130"
          stroke="currentColor"
          strokeOpacity="0.18"
        />
        <path
          d="M0 0 L130 0 A130 130 0 0 0 92 -92 Z"
          fill={accent}
          fillOpacity="0.10"
        />
        <line
          x1="0"
          y1="0"
          x2="92"
          y2="-92"
          stroke={accent}
          strokeWidth="1.5"
        />
        <circle cx="58" cy="-30" r="4" fill={accent} />
        <circle cx="-32" cy="46" r="3" fill={accent} fillOpacity="0.6" />
        <circle cx="78" cy="60" r="3" fill={accent} fillOpacity="0.6" />
        <circle r="34" fill={accent} />
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontWeight="600"
          fontSize="22"
          fill="#fff"
          letterSpacing="-0.02em"
        >
          {initials}
        </text>
      </g>
    </svg>
  );
}

export function Team() {
  return (
    <section className="kpl-section kpl-container">
      <div className="eyebrow">Our Team</div>
      <h2 className="section-title" style={{ marginTop: 14 }}>
        Founders and investors ready to help Aussie founders go from backyard
        shed to Silicon Valley.
      </h2>

      <ol className="tm-roster">
        {TEAM.map((m, i) => (
          <li
            key={m.name}
            className="tm-row"
            style={{ ["--c-accent" as string]: m.accent } as CSSProperties}
          >
            <span className="tm-num">{String(i + 1).padStart(2, "0")}</span>

            <div className="tm-id">
              <h3 className="tm-name">{m.name}</h3>
              <div className="tm-meta">
                <span className="tm-role">{m.role}</span>
                <span className="tm-sep" aria-hidden="true">
                  ·
                </span>
                <span className="tm-loc">{m.location}</span>
              </div>
            </div>

            <p className="tm-bio">{m.bio}</p>

            <div className="tm-sig" aria-hidden="true">
              <Sig kind={m.signature} accent={m.accent} initials={m.initials} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
