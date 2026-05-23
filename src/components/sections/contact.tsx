import { ArrowRight, Mail } from "lucide-react";

const EMAIL = "anil.patel@virtualmgr.com";
const SUBJECT = "KPL Ventures — Pitch / Enquiry";
const BODY =
  "Hi Anil,%0D%0A%0D%0AA few quick details about us:%0D%0A%0D%0A• Founder(s):%0D%0A• Company:%0D%0A• Stage:%0D%0A• What we're building (one sentence):%0D%0A• Deck link:%0D%0A%0D%0AThanks!";

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${BODY}`;

export function Contact() {
  return (
    <section className="kpl-section kpl-container" id="pitch">
      <div className="eyebrow">Get in touch</div>
      <h2 className="section-title" style={{ marginTop: 14 }}>
        Pitching, partnering, or just saying hi — drop us a line.
      </h2>
      <p className="section-lead">
        We read every email. If you&rsquo;re a founder, share a sentence on what
        you&rsquo;re building, your stage, and a deck link. If you&rsquo;re an
        investor, tell us a little about your thesis.
      </p>
      <div
        style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}
      >
        <a href={MAILTO} className="btn btn-primary">
          <Mail size={16} /> Reach out <ArrowRight size={16} />
        </a>
        {/* <a href={MAILTO} className="btn btn-ghost">
          Open in mail app
        </a> */}
      </div>
    </section>
  );
}
