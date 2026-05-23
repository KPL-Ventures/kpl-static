import Image from "next/image";

export function Footer() {
  return (
    <footer className="kpl-footer" id="contact">
      <div className="kpl-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="row">
              <Image src="/kpl-logo.svg" alt="KPL" width={32} height={32} />
              KPL Ventures
            </div>
            <p>
              Backing Australia&rsquo;s boldest founders to scale from backyard
              shed to Silicon Valley.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#contact">Get Investment</a>
              </li>
              <li>
                <a href="#contact">Invest with KPL</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Menu</h5>
            <ul>
              <li>
                <a href="#portfolio">Our Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>20 Kingston Drive, Helensvale</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KPL Ventures</span>
          <span>Founder&#8209;first.</span>
        </div>
      </div>
    </footer>
  );
}
