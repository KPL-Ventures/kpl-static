"use client";

import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false },
);

const globeConfig = {
  pointSize: 4,
  globeColor: "#1a1b1f",
  showAtmosphere: true,
  atmosphereColor: "#ed3237",
  atmosphereAltitude: 0.12,
  emissive: "#7a1518",
  emissiveIntensity: 0.4,
  shininess: 0.9,
  polygonColor: "rgba(237, 50, 55, 0.85)",
  ambientLight: "#ed3237",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ed3237",
  arcTime: 1200,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: -33.8688, lng: 151.2093 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#ed3237", "#d2272c", "#ff5a5f"];
const c = () => colors[Math.floor(Math.random() * colors.length)];

const SYD = { lat: -33.8688, lng: 151.2093 };
const cities = [
  { lat: 37.7749, lng: -122.4194 }, // SF
  { lat: 40.7128, lng: -74.006 }, // NY
  { lat: 51.5072, lng: -0.1276 }, // London
  { lat: 1.3521, lng: 103.8198 }, // Singapore
  { lat: 35.6762, lng: 139.6503 }, // Tokyo
  { lat: -37.8136, lng: 144.9631 }, // Melbourne
  { lat: 22.3193, lng: 114.1694 }, // HK
  { lat: 28.6139, lng: 77.209 }, // Delhi
  { lat: 48.8566, lng: 2.3522 }, // Paris
  { lat: 34.0522, lng: -118.2437 }, // LA
];

const sampleArcs = cities.flatMap((dest, i) => [
  {
    order: i + 1,
    startLat: SYD.lat,
    startLng: SYD.lng,
    endLat: dest.lat,
    endLng: dest.lng,
    arcAlt: 0.25 + (i % 4) * 0.1,
    color: c(),
  },
  {
    order: i + 1,
    startLat: dest.lat,
    startLng: dest.lng,
    endLat: cities[(i + 3) % cities.length].lat,
    endLng: cities[(i + 3) % cities.length].lng,
    arcAlt: 0.2 + (i % 5) * 0.08,
    color: c(),
  },
]);

export function Hero() {
  return (
    <section id="home" className="hero kpl-container">
      <div className="hero-eyebrow">
        — Turning ideas into global ventures with KPL
      </div>
      <h1>We back Australia&rsquo;s boldest founders to go global</h1>
      <p className="hero-lead">
        We invest in tech ventures creating the future today, helping them punch
        above their weight and scale from Australia to the US &amp; UK.
      </p>
      <div className="hero-cta">
        <a href="#contact" className="btn btn-primary">
          Pitch your idea <ArrowRight size={16} />
        </a>
        <a href="#investors" className="btn btn-ghost">
          Back Aussie&rsquo;s best
        </a>
      </div>
      <div className="hero-media" aria-hidden="true">
        <div className="hero-globe-wrap">
          <div className="hero-globe-stage">
            <World globeConfig={globeConfig} data={sampleArcs} />
          </div>
        </div>
      </div>
    </section>
  );
}
