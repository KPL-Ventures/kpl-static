import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <div className="kpl-container" id="investors">
      <div className="cta-strip">
        <div>
          <div className="eyebrow">For investors</div>
          <h3>
            Want to invest in the startups building tomorrow&rsquo;s world today?
          </h3>
        </div>
        <a href="#contact" className="btn btn-primary">
          Back the next big idea <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
