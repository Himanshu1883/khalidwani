import FallbackImage from './FallbackImage'
import { IMAGES } from '../data/content'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen grid md:grid-cols-[45%_55%] lg:grid-cols-[40%_60%]">
      {/* ── Left text pane with negative margin to overlap image ── */}
      <div className="relative flex flex-col justify-end px-8 lg:px-16 pb-24 pt-36 z-20 md:mr-[-5%] lg:mr-[-8%] bg-gradient-to-r from-ink/90 via-ink/70 to-transparent md:bg-none">
        {/* Vertical social rail — desktop only - repositioned */}
        <div className="absolute left-5 bottom-24 hidden md:flex flex-col items-center gap-6">
          <span className="w-px h-12 bg-gold/40" />
          {['Instagram','LinkedIn','YouTube'].map((s) => (
            <a
              key={s}
              href={`https://${s.toLowerCase()}.com/${s === 'YouTube' ? '@wanikhalid' : 'khalidwani'}`}
              target="_blank"
              rel="noreferrer"
              className="text-[9px] font-medium tracking-[0.22em] uppercase text-cream/60 hover:text-gold transition-colors duration-300 no-underline"
              style={{ writingMode: 'vertical-rl' }}
            >
              {s}
            </a>
          ))}
          <span className="w-px h-12 bg-gold/40" />
        </div>

        {/* Hero grid background */}
        <div className="hero-grid-overlay pointer-events-none opacity-30" />

        {/* Radial glow - adjusted */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-xl lg:max-w-2xl">
          <p className="hero-anim-1 inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-gold mb-6 lg:mb-8">
            <span className="w-8 h-px bg-gold inline-block" />
            India's Most Demanding Corporate Trainer
          </p>

          <h1 className="hero-anim-2 font-cormorant font-light leading-none tracking-tight text-cream"
            style={{ fontSize: 'clamp(48px, 8vw, 110px)', letterSpacing: '-0.02em' }}>
            Redefining<br />
            <em className="italic text-gold">Leadership.</em><br />
            Delivering<br />
            Impact.
          </h1>

          <p className="hero-anim-3 mt-6 lg:mt-7 text-sm lg:text-base font-light leading-relaxed text-cream/80 max-w-lg">
            Recognized among the world's top 10 business consultants — Khalid Wani
            transforms vision into action, and strategy into scalable, lasting success.
          </p>

          <div className="hero-anim-4 flex gap-4 mt-10 lg:mt-12 flex-wrap">
            <a
              href="#contact"
              className="text-[10px] lg:text-[11px] font-medium tracking-[0.2em] uppercase text-ink bg-gold px-8 lg:px-10 py-3 lg:py-4 no-underline hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
            >
              Book a Session
            </a>
            <a
              href="#about"
              className="text-[10px] lg:text-[11px] font-medium tracking-[0.2em] uppercase text-gold border border-gold/40 px-8 lg:px-10 py-3 lg:py-4 no-underline hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Scroll cue - repositioned */}
        <div className="scroll-anim absolute bottom-9 left-1/2 md:left-16 transform -translate-x-1/2 md:translate-x-0 hidden md:flex items-center gap-3 text-[9px] font-medium tracking-[0.24em] uppercase text-cream/50 z-10">
          Scroll to explore
          <div className="scroll-line" />
        </div>
      </div>

      {/* ── Right photo pane ── */}
      <div className="relative h-screen overflow-hidden bg-ink-soft">
        {/* Image container */}
        <div className="absolute inset-0">
          {!imageError ? (
            <img
              src="/khalidwani5.jpeg"
              alt="Khalid Wani — Business Consultant"
              className="w-full h-full object-cover object-left scale-105 hover:scale-100 transition-transform duration-7000"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <FallbackImage
              src="/khalidwani1.png"
              alt="Khalid Wani — Business Consultant"
              className="w-full h-full object-cover object-left"
            />
          )}
        </div>

        {/* Sophisticated overlay gradient for depth */}
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background: 'linear-gradient(105deg, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.1) 30%, transparent 50%)',
          }}
        />

        {/* Left-side gradient - enhanced for text overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 md:hidden"
          style={{
            background: 'linear-gradient(to right, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.4) 50%, transparent 80%)',
          }}
        />

        {/* Top gold bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold z-20" />

        {/* Gold frame */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{ inset: '28px', border: '1px solid rgba(201,168,76,0.25)' }}
        >
          {/* Bottom label on frame */}
          <span
            className="absolute -bottom-px left-1/2 -translate-x-1/2 text-[8px] font-medium tracking-[0.38em] uppercase text-gold whitespace-nowrap px-5"
            style={{ background: 'var(--ink-soft)' }}
          >
            KHALID WANI · KWCG
          </span>
        </div>

        {/* Corner text */}
        <div className="corner-anim absolute top-12 right-12 text-right z-30">
          <em className="block font-cormorant font-light not-italic text-[11px] text-gold/70 tracking-wider">
            Est. 20+ Years
          </em>
          <strong
            className="block font-cormorant font-light text-gold/20 leading-none"
            style={{ fontSize: '28px' }}
          >
            KWCG
          </strong>
        </div>
      </div>

      {/* Center divider line - adjusted */}
      <div
        className="absolute top-0 bottom-0 hidden md:block pointer-events-none z-15"
        style={{
          left: '45%',
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4) 25%, rgba(201,168,76,0.4) 75%, transparent)',
        }}
      />
    </section>
  )
}