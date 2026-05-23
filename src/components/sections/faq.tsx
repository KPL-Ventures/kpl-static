"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "How do I submit my pitch deck?",
    a: "Send a clear, focused deck through our founders portal. We read every submission and reply within a week.",
  },
  {
    q: "What types of startups do you invest in?",
    a: "Tech ventures with global ambition — software, healthtech, fintech, deep tech. We're stage-flexible from pre-seed through Series A.",
  },
  {
    q: "How long does the pitch review process take?",
    a: "From first contact to a clear yes/no, expect under three weeks. We move fast on purpose.",
  },
  {
    q: "Can I submit a pitch if I'm outside Australia?",
    a: "Our thesis is Aussie founders going global, but we'll consider exceptional teams with strong Australian links.",
  },
  {
    q: "What support do you offer beyond capital?",
    a: "Resources, advisory services, US & UK connections, technology partners, and forward-thinking team members on the ground in different markets.",
  },
  {
    q: "What sets KPL Ventures apart from other teams?",
    a: "We're operators first. We've built and scaled companies ourselves, so we know what it actually takes — not just what looks good in a deck.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="kpl-section kpl-container">
      <div className="eyebrow">FAQ</div>
      <h2 className="section-title" style={{ marginTop: 14 }}>
        Here are the top questions investors and founders ask about us.
      </h2>
      <div className="faq">
        {QUESTIONS.map((item, i) => (
          <div key={i} className={"faq-row " + (open === i ? "open" : "")}>
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <h4>{item.q}</h4>
              <span className="icon" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
