import { SOCIAL_LINKS } from "../data/content";
import FallbackImage from "./FallbackImage";

const IMPACT_STRIPS = [
  "Boardroom strategy",
  "Founder mindset",
  "Market-scale execution",
];

const HERO_METRICS = [
  { value: "100+", label: "Keynotes & private sessions" },
  { value: "50+", label: "Companies backed and guided" },
  { value: "30M+", label: "Audience reached across platforms" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-shell relative isolate overflow-hidden bg-[#07111f] px-6 pb-12 pt-28 text-white md:px-10 lg:px-16 lg:pt-32"
    >
      <div className="hero-aurora hero-aurora-left" />
      <div className="hero-aurora hero-aurora-right" />
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1440px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative">
          <div className="hero-intro-panel hero-enter hero-enter-1 max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="hero-kicker">
                India&apos;s most in-demand corporate trainer
              </span>
              <span className="hero-status">
                Live coaching. Strategic advisory. Founder acceleration.
              </span>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {IMPACT_STRIPS.map((item) => (
                <span key={item} className="hero-chip">
                  {item}
                </span>
              ))}
            </div>

            <h1 className="hero-title hero-enter hero-enter-2">
              Build leaders
              <span> people follow.</span>
              <br />
              Scale companies
              <span> people remember.</span>
            </h1>

            <p className="hero-copy hero-enter hero-enter-3 max-w-2xl">
              Khalid Wani helps founders, executives, and high-performance teams
              turn pressure into precision through leadership training,
              investment insight, and business strategy built for visible
              growth.
            </p>

            <div className="hero-actions hero-enter hero-enter-4">
              <a href="#contact" className="hero-primary-button">
                Book a strategy session
              </a>
              <a href="#about" className="hero-secondary-button">
                Explore the journey
              </a>
            </div>
          </div>

          <div className="hero-foot hero-enter hero-enter-5">
            <div className="hero-proof">
              <p className="hero-proof-label">
                Trusted in rooms where outcomes matter
              </p>
              <div className="hero-proof-grid">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="hero-proof-card">
                    <span className="hero-proof-value">{metric.value}</span>
                    <span className="hero-proof-text">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-socials">
              {SOCIAL_LINKS.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual-wrap hero-enter hero-enter-4">
          <div className="hero-visual-card">
            <div className="hero-visual-frame">
              <FallbackImage
                sources={["/profile2.jpg"]}
                alt="Khalid Wani portrait"
                className="hero-portrait"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="hero-image-sheen" />
              <div className="hero-image-grid" />
            </div>

            <div className="hero-floating-card hero-floating-card-top">
              <span className="hero-floating-label">Signature Focus</span>
              <p>
                Executive presence, decision clarity, and high-stakes growth.
              </p>
            </div>

            <div className="hero-floating-card hero-floating-card-bottom">
              <span className="hero-floating-value">KWCG</span>
              <p>Advisory for founders, boards, and ambitious teams.</p>
            </div>

            <div className="hero-side-note">
              <span className="hero-side-note-line" />
              <p>
                From keynote stage to operating room, the message stays
                actionable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
