import { TESTIMONIALS } from '../data/content'
import SectionLabel from './SectionLabel'
import { useState } from 'react'

export default function Testimonials() {
  // Define image paths with proper error handling
  const khalidImage = "testmonial.jpg" // Make sure this file exists in your public folder
  const fallbackImage = "testmonial.jpg"
  
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }))
  }

  const getImageSrc = (key) => {
    return imageErrors[key] ? fallbackImage : khalidImage
  }

  return (
    <section id="testimonials" className="bg-ink-mid px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Header */}
      <div className="reveal text-center mb-12 sm:mb-16">
        <div className="flex justify-center">
          <SectionLabel>Client Voices</SectionLabel>
        </div>
        <h2
          className="font-cormorant font-light text-cream"
          style={{ fontSize: 'clamp(32px, 6vw, 54px)' }}
        >
          Trusted by Leaders<br />
          Across India
        </h2>
      </div>

      {/* Responsive Bento grid - Mobile first approach */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout (default) */}
        <div className="block lg:hidden space-y-4">
          {/* Center Image - First on mobile */}
          <div
            className="relative overflow-hidden w-full"
            style={{
              borderRadius: '4px',
              border: '1px solid rgba(201,168,76,0.2)',
              aspectRatio: '3/4',
            }}
          >
            <img
              src={getImageSrc('mobile')}
              alt="Khalid Wani"
              className="w-full h-full object-cover object-top"
              onError={() => handleImageError('mobile')}
              style={{
                filter: 'brightness(0.68) saturate(0.45)',
                maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
              style={{
                background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)',
              }}
            >
              <p
                className="font-cormorant font-light text-cream"
                style={{ fontSize: 'clamp(18px, 5vw, 22px)', letterSpacing: '0.02em' }}
              >
                Khalid Wani
              </p>
              <p
                className="text-[8px] sm:text-[9px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-1"
                style={{ color: "#B0E4CC" }}
              >
                Entrepreneur · Investor · TEDx Speaker
              </p>
            </div>
          </div>

          {/* All testimonials in a single column on mobile */}
          {TESTIMONIALS.map((testimonial, index) => (
            <TestiCard key={index} t={testimonial} />
          ))}
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <TestiCard t={TESTIMONIALS[0]} />
              <div className="grid grid-cols-1 gap-4">
                <TestiCard t={TESTIMONIALS[1]} />
                <TestiCard t={TESTIMONIALS[4]} />
              </div>
            </div>

            {/* Center Image */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(201,168,76,0.2)',
                minHeight: '400px',
              }}
            >
              <img
                src={getImageSrc('tablet')}
                alt="Khalid Wani"
                className="w-full h-full object-cover object-top"
                onError={() => handleImageError('tablet')}
                style={{
                  filter: 'brightness(0.68) saturate(0.45)',
                  maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)',
                }}
              >
                <p
                  className="font-cormorant font-light text-cream"
                  style={{ fontSize: '20px', letterSpacing: '0.02em' }}
                >
                  Khalid Wani
                </p>
                <p
                  className="text-[8px] font-medium tracking-[0.2em] uppercase mt-1"
                  style={{ color: "#B0E4CC" }}
                >
                  Entrepreneur · Investor · TEDx Speaker
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <TestiCard t={TESTIMONIALS[2]} />
              <div className="grid grid-cols-1 gap-4">
                <TestiCard t={TESTIMONIALS[3]} />
                <TestiCard t={TESTIMONIALS[5]} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div
          className="hidden lg:grid gap-4"
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
              src={getImageSrc('desktop')}
              alt="Khalid Wani"
              className="w-full h-full object-cover object-top"
              onError={() => handleImageError('desktop')}
              style={{
                filter: 'brightness(0.68) saturate(0.45)',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              }}
            />
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
                style={{ color: "#B0E4CC" }}
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
      </div>
    </section>
  )
}

function TestiCard({ t }) {
  const [avatarError, setAvatarError] = useState(false)
  
  // Generate initials for avatar
  const getInitials = () => {
    return t.name.split(' ').map(n => n[0]).join('')
  }

  return (
    <div
      className="group bg-ink p-5 sm:p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '4px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(176,228,204,0.25)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top row — avatar + name + stars */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Avatar - using initials only to avoid missing images */}
          <div
            className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-[#B0E4CC]/50"
            style={{
              width: 'clamp(32px, 8vw, 36px)',
              height: 'clamp(32px, 8vw, 36px)',
              borderRadius: '50%',
              background: 'rgba(176,228,204,0.1)',
              border: '1px solid rgba(176,228,204,0.25)',
            }}
          >
            <span
              className="font-cormorant font-light text-[#B0E4CC]"
              style={{ fontSize: 'clamp(11px, 3vw, 13px)' }}
            >
              {getInitials()}
            </span>
          </div>
          <div>
            <strong 
              className="block text-[11px] sm:text-[12px] font-medium tracking-[0.05em] sm:tracking-[0.06em] text-cream group-hover:text-white transition-colors duration-300"
              style={{ lineHeight: '1.3' }}
            >
              {t.name}
            </strong>
            <span
              className="text-[8px] sm:text-[9px] font-medium tracking-[0.12em] sm:tracking-[0.14em] uppercase transition-colors duration-300"
              style={{ color: "#B0E4CC" }}
            >
              {t.role}
            </span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-[2px] sm:gap-[3px] mt-0.5 sm:mt-1">
          {Array.from({ length: t.stars }).map((_, i) => (
            <svg key={i} width="clamp(7px, 2.5vw, 9px)" height="clamp(7px, 2.5vw, 9px)" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 0l1.39 4.27H12L8.3 6.91l1.39 4.27L6 8.54l-3.69 2.64L3.7 6.91.01 4.27H4.61z"
                fill="#B0E4CC" 
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mb-3 sm:mb-4"
        style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}
      />

      {/* Quote */}
      <blockquote
        className="font-cormorant font-light italic leading-[1.5] sm:leading-[1.65] text-cream group-hover:text-white/90 transition-colors duration-300"
        style={{ 
          fontSize: 'clamp(13px, 4vw, 15px)',
          opacity: 0.85,
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        "{t.quote}"
      </blockquote>
    </div>
  )
}