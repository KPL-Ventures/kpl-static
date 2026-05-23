const STEPS = [
  {
    n: "01",
    t: "Connect",
    d: "Share your deck with us. We love bold ideas that show sharp and clear thinking, an eye on a global market, and good ol' Aussie grit.",
  },
  {
    n: "02",
    t: "Deep Dive",
    d: "Expect a prompt, clear review with an in-depth look into your team, the viability of your idea, and your current tech options.",
  },
  {
    n: "03",
    t: "Decision",
    d: "We'll let you know what we think about your idea — fast.",
  },
  {
    n: "04",
    t: "Partnership",
    d: "Once you're in, we go all in with capital, resources, advisory services, the right connections, and team members in the US & UK.",
  },
];

export function Process() {
  return (
    <section className="kpl-section kpl-container">
      <div className="eyebrow">Our Process</div>
      <h2 className="section-title" style={{ marginTop: 14 }}>
        The KPL 4&#8209;step launchpad for backing the founders shaping
        tomorrow&rsquo;s tech today.
      </h2>
      <p className="section-lead">
        We move quickly to support startups at different stages of their
        journey. With us, it&rsquo;s lean, fast, and founder&#8209;friendly.
      </p>
      <div className="process-grid">
        {STEPS.map((s) => (
          <div key={s.n} className="process-step">
            <div className="num">{s.n}</div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48 }}>
        <a href="#contact" className="btn btn-secondary">
          Send in your idea today
        </a>
      </div>
    </section>
  );
}
