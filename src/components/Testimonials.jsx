import { TESTIMONIALS } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-mid px-8 md:px-16 py-28">
      {/* Header */}
      <div className="reveal text-center mb-16">
        <div className="flex justify-center">
          <SectionLabel>Client Voices</SectionLabel>
        </div>
        <h2
          className="font-cormorant font-light text-cream"
          style={{ fontSize: 'clamp(36px, 4vw, 54px)' }}
        >
          Trusted by Leaders<br />
          Across India
        </h2>
      </div>

      {/* Bento grid */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: '1fr 360px 1fr',
          gridTemplateRows: 'auto auto',
        }}
      >
        {/* Top-left card */}
        <TestiCard t={TESTIMONIALS[0]} />

        {/* Center image — spans both rows */}
        <div
          className="relative overflow-hidden"
          style={{
            gridColumn: '2',
            gridRow: '1 / 3',
            borderRadius: '4px',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <img
            src="/DSC01812.jpg"
            alt="Khalid Wani"
            className="w-full h-full object-cover object-top"
            style={{
              filter: 'brightness(0.68) saturate(0.45)',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            }}
          />
          {/* Name overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)',
            }}
          >
            <p
              className="font-cormorant font-light text-cream"
              style={{ fontSize: '22px', letterSpacing: '0.02em' }}
            >
              Khalid Wani
            </p>
            <p
              className="text-[9px] font-medium tracking-[0.22em] uppercase mt-1"
              style={{ color: 'rgba(201,168,76,0.7)' }}
            >
              Entrepreneur · Investor · TEDx Speaker
            </p>
          </div>
        </div>

        {/* Top-right card */}
        <TestiCard t={TESTIMONIALS[2]} />

        {/* Bottom-left — 2 cards side by side */}
        <div className="grid grid-cols-1 gap-4">
          <TestiCard t={TESTIMONIALS[1]} />
          <TestiCard t={TESTIMONIALS[4]} />
        </div>

        {/* Bottom-right — 2 cards side by side */}
        <div className="grid grid-cols-1 gap-4">
          <TestiCard t={TESTIMONIALS[3]} />
          <TestiCard t={TESTIMONIALS[5]} />
        </div>
      </div>
    </section>
  )
}

function TestiCard({ t }) {
  return (
    <div
      className="group bg-ink p-7 transition-all duration-300 hover:-translate-y-1"
      style={{
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '4px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top row — avatar + name + stars */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Initials avatar */}
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.25)',
            }}
          >
            <span
              className="font-cormorant font-light text-gold"
              style={{ fontSize: '13px' }}
            >
              {t.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <strong className="block text-[12px] font-medium tracking-[0.06em] text-cream">
              {t.name}
            </strong>
            <span
              className="text-[9px] font-medium tracking-[0.14em] uppercase"
              style={{ color: 'rgba(201,168,76,0.6)' }}
            >
              {t.role}
            </span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-[3px] mt-1">
          {Array.from({ length: t.stars }).map((_, i) => (
            <svg key={i} width="9" height="9" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 0l1.39 4.27H12L8.3 6.91l1.39 4.27L6 8.54l-3.69 2.64L3.7 6.91.01 4.27H4.61z"
                fill="rgba(201,168,76,0.85)"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mb-4"
        style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}
      />

      {/* Quote */}
      <blockquote
        className="font-cormorant font-light italic leading-[1.65] text-cream"
        style={{ fontSize: '15px', opacity: 0.85 }}
      >
        "{t.quote}"
      </blockquote>
    </div>
  )
}