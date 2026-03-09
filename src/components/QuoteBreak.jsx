import FallbackImage from './FallbackImage'
import { IMAGES } from '../data/content'

export default function QuoteBreak() {
  return (
    <div className="relative overflow-hidden bg-ink-soft" style={{ height: '65vh' }}>
      <FallbackImage
        sources={IMAGES.quote}
        alt="Khalid Wani speaking on stage"
        className="w-full h-full object-cover object-[center_25%]"
        style={{ filter: 'brightness(0.45) contrast(1.1)', display: 'block' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.4) 65%)',
        }}
      />

      {/* Quote */}
      <div className="absolute inset-0 flex items-center px-8 md:px-28">
        <blockquote
          className="font-cormorant font-light italic leading-[1.35] text-cream max-w-[700px]"
          style={{
            fontSize: 'clamp(26px, 3.2vw, 50px)',
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '40px',
          }}
        >
          True leadership lies in empowering others, connecting visionary thinking
          with practical execution, and fostering growth while maintaining integrity.
          <cite
            className="block mt-7 font-dm font-medium not-italic text-gold"
            style={{ fontSize: '10px', letterSpacing: '0.22em' }}
          >
            — KHALID WANI, FOUNDER KWCG
          </cite>
        </blockquote>
      </div>
    </div>
  )
}
