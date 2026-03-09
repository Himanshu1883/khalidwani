import FallbackImage from './FallbackImage'
import SectionLabel from './SectionLabel'
import { IMAGES } from '../data/content'

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-32 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Text */}
      <div className="reveal-left">
        <SectionLabel>The Khalid Wani Story</SectionLabel>
        <h2
          className="font-cormorant font-light text-cream leading-[1.15] mb-7"
          style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
        >
          Owner of KWCG.<br />
          Entrepreneur.<br />
          Investor. Mentor.
        </h2>
        <p className="text-sm font-light leading-[1.95] text-muted mb-5">
          Born into a modest background, Khalid Wani understood the value of hard work and
          vision from an early age. Each challenge laid the foundation for the remarkable
          leader he is today — navigating complex industries and reshaping India's
          entrepreneurial landscape.
        </p>
        <p className="text-sm font-light leading-[1.95] text-muted mb-5">
          He has delivered 100+ speaking sessions, reached 30M+ viewers through All India
          Radio and Doordarshan, invested in 50+ companies, and mentored over 10,000
          entrepreneurs. His 200K+ social following reflects influence built on authenticity
          and results.
        </p>
        <a
          href="#contact"
          className="inline-block mt-5 text-[10px] font-medium tracking-[0.2em] uppercase text-ink bg-gold px-10 py-4 no-underline hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
        >
          Work with Khalid
        </a>
      </div>

      {/* Image collage */}
      <div className="reveal-right relative h-[420px] md:h-[620px]">
        {/* Main image */}
        <FallbackImage
          sources={IMAGES.about1}
          alt="Khalid Wani"
          className="absolute right-0 top-0 object-cover object-top"
          style={{ width: '72%', height: '88%', filter: 'brightness(0.84)' }}
        />

        {/* Secondary image */}
        <FallbackImage
          sources={IMAGES.about2}
          alt="Khalid Wani Speaking"
          className="absolute left-0 bottom-0 object-cover z-10"
          style={{
            width: '48%',
            height: '52%',
            filter: 'brightness(0.8)',
            border: '5px solid var(--ink)',
          }}
        />

        {/* Gold bar accent */}
        <div
          className="absolute left-0 z-20"
          style={{
            top: '70px',
            width: '3px',
            height: '130px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
          }}
        />

        {/* Chip badge */}
        <div
          className="absolute right-0 bottom-[90px] bg-gold text-ink text-[10px] font-medium tracking-[0.18em] uppercase px-7 py-4 z-20"
        >
          KWCG · Director
        </div>

        {/* Floating stat card */}
        <div
          className="absolute left-5 top-6 z-30 px-5 py-[18px]"
          style={{
            background: 'rgba(8,8,8,0.9)',
            border: '1px solid rgba(201,168,76,0.25)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="font-cormorant font-light text-gold leading-none" style={{ fontSize: '36px' }}>
            10K+
          </div>
          <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-light mt-1">
            Entrepreneurs Mentored
          </div>
        </div>
      </div>
    </section>
  )
}
