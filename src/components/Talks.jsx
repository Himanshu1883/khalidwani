import { TALKS } from '../data/content'
import SectionLabel from './SectionLabel'
import { useState, useRef, useEffect } from 'react'

function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

export default function Talks() {
  return (
    <section id="talks" className="relative overflow-hidden bg-gradient-to-b from-ink to-ink-darker px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#B0E4CC]/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse delay-1000" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#B0E4CC]/10 animate-float-particle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section - Enhanced */}
        <div className="reveal flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6 md:gap-8">
          {/* Left — heading with decorative elements */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-[#B0E4CC]/20" />
            <div>
              <SectionLabel>TEDx & Keynotes</SectionLabel>
              <h2
                className="font-cormorant font-light text-cream leading-tight mt-4"
                style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
              >
                Ideas That
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
                    Inspire Action
                  </span>
                  {/* Animated Underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-1 mt-1" viewBox="0 0 300 4" preserveAspectRatio="none">
                    <path d="M0 2 L300 2" stroke="url(#gradientLineTalks)" strokeWidth="2" strokeDasharray="6 6" />
                    <defs>
                      <linearGradient id="gradientLineTalks" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B0E4CC" stopOpacity="0" />
                        <stop offset="50%" stopColor="#B0E4CC" />
                        <stop offset="100%" stopColor="#B0E4CC" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          {/* Right — enhanced horizontal stats */}
          <div className="hidden md:flex items-center gap-0 mb-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            {[
              { number: '30M+', label: 'Views', icon: '👁️' },
              { number: '100+', label: 'Keynotes', icon: '🎤' },
            ].map((stat, i, arr) => (
              <div key={i} className="flex items-center group">
                <div className="flex flex-col items-center px-6 md:px-8 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl opacity-60 group-hover:opacity-100 transition-opacity">
                      {stat.icon}
                    </span>
                    <span
                      className="font-cormorant font-light bg-gradient-to-r from-[#B0E4CC] to-white bg-clip-text text-transparent leading-none"
                      style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                    >
                      {stat.number}
                    </span>
                  </div>
                  <span
                    className="text-cream/50 group-hover:text-cream/70 transition-colors text-[9px] tracking-[0.2em] uppercase"
                  >
                    {stat.label}
                  </span>
                </div>

                {/* Divider with animation */}
                {i < arr.length - 1 && (
                  <div
                    className="h-12 w-px bg-gradient-to-b from-transparent via-[#B0E4CC]/30 to-transparent"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TALKS.map((talk, i) => (
            <TalkCard key={talk.id} talk={talk} delay={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TalkCard({ talk, delay, index }) {
  const delayClass = delay === 0 ? 'delay-1' : delay === 1 ? 'delay-2' : 'delay-3'
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const hoverTimer = useRef(null)
  const videoId = getYouTubeId(talk.url)

  const handleMouseEnter = () => {
    if (!expanded) {
      hoverTimer.current = setTimeout(() => setHovered(true), 300)
    }
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current)
    if (!expanded && !isPlaying) setHovered(false)
  }

  const handleExpand = (e) => {
    e.stopPropagation()
    setExpanded(true)
    setHovered(true)
    setIsPlaying(true)
  }

  const handleCollapse = (e) => {
    e.stopPropagation()
    setExpanded(false)
    setHovered(false)
    setIsPlaying(false)
  }

  const handleYouTube = (e) => {
    e.stopPropagation()
    window.open(talk.url, '_blank')
  }

  const previewSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&disablekb=1&playsinline=1`
    : null

  const expandedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`
    : null

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-500`}
      style={{
        paddingTop: expanded ? '0' : '66%',
        height: expanded ? '420px' : undefined,
        transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered && !expanded ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#B0E4CC]/20 via-transparent to-[#B0E4CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${expanded ? 'opacity-100' : ''}`} />
      
      {/* Thumbnail with Parallax Effect */}
      <img
        src={talk.thumb}
        alt={talk.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
        style={{
          filter: 'brightness(0.75) saturate(0.9)',
          opacity: hovered && !expanded ? 0.4 : 1,
          transform: hovered && !expanded ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.6s ease-out, opacity 0.5s ease-out',
          pointerEvents: 'none',
        }}
      />

      {/* YouTube iframe with enhanced styling */}
      {hovered && videoId && (
        <iframe
          src={expanded ? expandedSrc : previewSrc}
          title={talk.title}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ 
            border: 'none', 
            pointerEvents: expanded ? 'auto' : 'none',
            borderRadius: expanded ? '0' : '12px',
          }}
        />
      )}

      {/* Enhanced Overlay Gradients */}
      {!expanded && (
        <>
          {/* Top Gradient */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 50%)',
              opacity: hovered ? 0 : 0.6,
            }}
          />
          
          {/* Bottom Gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 70%)',
            }}
          />
        </>
      )}

      {/* Animated Corner Accents */}
      {!expanded && (
        <>
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#B0E4CC]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#B0E4CC]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[#B0E4CC]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#B0E4CC]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}

      {/* Enhanced Controls */}
      {!expanded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5"
          style={{ 
            opacity: hovered ? 1 : 0, 
            transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: hovered ? 'blur(4px)' : 'none',
          }}
        >
          {/* Play Button with Pulse Effect */}
          <button
            onClick={handleExpand}
            className="group/play relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#B0E4CC]/25"
            style={{ 
              border: '2px solid rgba(176,228,204,0.8)', 
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Play video"
          >
            <div className="absolute inset-0 rounded-full bg-[#B0E4CC]/20 animate-ping opacity-75" />
            <span style={{ marginLeft: '4px', fontSize: '22px', }}>▶</span>
          </button>

          {/* YouTube Button with Icon */}
          <button
            onClick={handleYouTube}
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-cream transition-all duration-300 hover:text-[#B0E4CC] hover:scale-105 group/yt"
            style={{
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '30px',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Watch on YouTube"
          >
            <svg width="16" height="12" viewBox="0 0 14 10" fill="none">
              <path
                d="M13.716 1.562A1.76 1.76 0 0 0 12.478.316C11.38 0 7 0 7 0S2.62 0 1.522.316A1.76 1.76 0 0 0 .284 1.562C0 2.668 0 5 0 5s0 2.332.284 3.438a1.76 1.76 0 0 0 1.238 1.246C2.62 10 7 10 7 10s4.38 0 5.478-.316a1.76 1.76 0 0 0 1.238-1.246C14 7.332 14 5 14 5s0-2.332-.284-3.438Z"
                fill="#FF0000"
              />
              <path d="M5.6 7.143 9.227 5 5.6 2.857v4.286Z" fill="#fff" />
            </svg>
            <span className="relative">
              Watch on YouTube
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover/yt:w-full transition-all duration-300" />
            </span>
          </button>
        </div>
      )}

      {/* Enhanced Close Button */}
      {expanded && (
        <button
          onClick={handleCollapse}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cream hover:text-[#B0E4CC] transition-all duration-300 hover:rotate-90 hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.7)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            backdropFilter: 'blur(8px)',
            fontSize: '18px',
          }}
          aria-label="Close video"
        >
          ✕
        </button>
      )}

      {/* Enhanced Text Overlay */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
          {/* Badge with Glow Effect */}
          <div className="relative inline-block mb-3">
            <span className="block text-[9px] font-semibold tracking-[0.22em] uppercase text-[#B0E4CC] relative z-10">
              {talk.badge}
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-px bg-[#B0E4CC]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
          
          {/* Title with Hover Effect */}
          <div className="font-cormorant font-normal text-cream transition-all duration-300 group-hover:translate-y-[-4px]"
               style={{ fontSize: 'clamp(18px, 3vw, 22px)', lineHeight: '1.3' }}>
            {talk.title}
          </div>
          
          {/* Animated Play Indicator on Hover */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-[#B0E4CC] text-[10px] uppercase tracking-wider">
              <span>Watch Now</span>
              <svg className="w-3 h-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}