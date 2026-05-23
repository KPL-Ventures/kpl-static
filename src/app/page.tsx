import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Portfolio } from "@/components/sections/portfolio";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="kpl-app">
      <Nav />
      <Hero />
      <Process />
      <Team />
      <CtaStrip />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
