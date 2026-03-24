import About from "../components/About";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Metrics from "../components/Metrics";
import Portrait from "../components/Portrait";
import QuoteBreak from "../components/QuoteBreak";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Talks from "../components/Talks";
import Testimonials from "../components/Testimonials";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Services />
      <QuoteBreak />
      <Portrait />
      <Talks />
      <Metrics />
      <Testimonials />
      <CTA />
    </main>
  );
}
