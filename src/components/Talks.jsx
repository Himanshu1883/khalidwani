import { TALKS } from '../data/content'
import SectionLabel from './SectionLabel'
import { useState, useRef } from 'react'

function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

export default function Talks() {
  return (
    <section id="talks" className="px-8 md:px-16 py-28">
      <div className="reveal flex items-end justify-between mb-14">
        {/* Left — heading */}
        <div>
          <SectionLabel>TEDx & Keynotes</SectionLabel>
          <h2
            className="font-cormorant font-light text-cream leading-tight"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
          >
            Ideas That<br />
            Inspire Action
          </h2>
        </div>

        {/* Right — horizontal stats */}
        <div className="hidden md:flex items-center gap-0 mb-2">
          {[
            { number: '30M+', label: 'Views' },
            { number: '100+', label: 'Keynotes' },
          ].map((stat, i, arr) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center px-8">
                <span
                  className="font-cormorant font-light text-gold leading-none"
                  style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-cream opacity-50 mt-1"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  {stat.label}
                </span>
              </div>

              {/* Divider — not after last item */}
              {i < arr.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: '36px',
                    background: 'rgba(201,168,76,0.3)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TALKS.map((talk, i) => (
          <TalkCard key={talk.id} talk={talk} delay={i} />
        ))}
      </div>
    </section>
  )
}

function TalkCard({ talk, delay }) {
  const delayClass = delay === 0 ? 'delay-1' : delay === 1 ? 'delay-2' : 'delay-3'
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const hoverTimer = useRef(null)
  const videoId = getYouTubeId(talk.url)

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => setHovered(true), 300)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current)
    if (!expanded) setHovered(false)
  }

  const handleExpand = (e) => {
    e.stopPropagation()
    setExpanded(true)
    setHovered(true)
  }

  const handleCollapse = (e) => {
    e.stopPropagation()
    setExpanded(false)
    setHovered(false)
  }

  const handleYouTube = (e) => {
    e.stopPropagation()
    window.open(talk.url, '_blank')
  }

  const previewSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&disablekb=1`
    : null

  const expandedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`
    : null

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden bg-ink-mid cursor-pointer`}
      style={{
        paddingTop: expanded ? '0' : '60%',
        height: expanded ? '360px' : undefined,
        transition: 'padding 0.4s ease, height 0.4s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <img
        src={talk.thumb}
        alt={talk.title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{
          filter: 'brightness(0.72) saturate(0.85)',
          opacity: hovered ? 0 : 1,
          pointerEvents: 'none',
        }}
      />

      {/* YouTube iframe */}
      {hovered && videoId && (
        <iframe
          src={expanded ? expandedSrc : previewSrc}
          title={talk.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none', pointerEvents: expanded ? 'auto' : 'none' }}
        />
      )}

      {/* Black tint — visible by default, removed on hover */}
      {!expanded && (
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'rgba(0,0,0,0.55)',
            opacity: hovered ? 0 : 1,
          }}
        />
      )}

      {/* Bottom gradient */}
      {!expanded && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,8,0.82) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Controls */}
      {!expanded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}
        >
          <button
            onClick={handleExpand}
            className="w-14 h-14 rounded-full flex items-center justify-center text-gold transition-transform duration-300 hover:scale-110"
            style={{ border: '1.5px solid rgba(201,168,76,0.65)', background: 'rgba(0,0,0,0.35)' }}
            aria-label="Play video"
          >
            <span style={{ marginLeft: '3px', fontSize: '18px' }}>▶</span>
          </button>

          <button
            onClick={handleYouTube}
            className="flex items-center gap-2 px-4 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-cream transition-all duration-200 hover:text-gold"
            style={{
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(0,0,0,0.35)',
              borderRadius: '2px',
            }}
            aria-label="Watch on YouTube"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M13.716 1.562A1.76 1.76 0 0 0 12.478.316C11.38 0 7 0 7 0S2.62 0 1.522.316A1.76 1.76 0 0 0 .284 1.562C0 2.668 0 5 0 5s0 2.332.284 3.438a1.76 1.76 0 0 0 1.238 1.246C2.62 10 7 10 7 10s4.38 0 5.478-.316a1.76 1.76 0 0 0 1.238-1.246C14 7.332 14 5 14 5s0-2.332-.284-3.438Z"
                fill="#FF0000"
              />
              <path d="M5.6 7.143 9.227 5 5.6 2.857v4.286Z" fill="#fff" />
            </svg>
            Watch on YouTube
          </button>
        </div>
      )}

      {/* Close button */}
      {expanded && (
        <button
          onClick={handleCollapse}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-cream hover:text-gold transition-colors duration-200"
          style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '2px',
            fontSize: '14px',
          }}
          aria-label="Close video"
        >
          ✕
        </button>
      )}

      {/* Text overlay */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 p-7 pointer-events-none">
          <span className="block text-[9px] font-medium tracking-[0.2em] uppercase text-gold mb-2">
            {talk.badge}
          </span>
          <div className="font-cormorant font-normal text-cream text-[20px] leading-[1.3]">
            {talk.title}
          </div>
        </div>
      )}
    </div>
  )
}