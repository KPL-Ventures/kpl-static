"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";

const LINKS = [
  { id: "home", label: "Your Story", href: "#home" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  // { id: "blog", label: "Blog", href: "#blog" },
  // { id: "contact", label: "Contact", href: "#contact" },
];

export function Nav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const onHashChange = () =>
      setActiveHash(window.location.hash.slice(1) || "home");
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className="kpl-nav">
      <a
        href="#home"
        className="kpl-nav-brand"
        onClick={() => setMobileOpen(false)}
      >
        <Image src="/kpl-logo.svg" alt="KPL" width={30} height={30} priority />
        <span>KPL Ventures</span>
      </a>

      <div className="kpl-nav-links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={l.href}
            className={activeHash === l.id ? "active" : ""}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="kpl-nav-right">
        <button
          type="button"
          className="kpl-icon-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href="#contact" className="btn btn-primary kpl-nav-cta">
          Pitch your idea
        </a>
        <button
          type="button"
          className="kpl-icon-btn kpl-nav-burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={"kpl-mobile-menu" + (mobileOpen ? " open" : "")}>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={l.href}
            className={activeHash === l.id ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Pitch your idea
        </a>
      </div>
    </nav>
  );
}
