import SectionLabel from './SectionLabel'

const COLLABORATORS = [
  { name: 'BITS Pilani',           logo: '/BITS_Pilani-Logo.svg.png' },
  { name: 'IIM Raipur',            logo: '/iim_raipur_logo.png'      },
  { name: 'IMS Ghaziabad',         logo: '/IMS-logo.webp'            },
  { name: 'Hansraj College',       logo: '/logo_hansraj.png'         },
  { name: 'IIT',                   logo: '/logo-iit.png'             },
  { name: 'Lovely Professional',   logo: '/LPU-logo-Dark.png'        },
]

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="bg-ink px-8 md:px-16 py-28"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* ── Left — text ── */}
        <div className="flex-shrink-0 md:w-[380px]">
          <SectionLabel>The Ultimate Collaboration</SectionLabel>

          <h2
            className="font-cormorant font-light text-cream leading-tight mt-4 mb-6"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
          >
            Khalid Wani<br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>And Colleges</span><br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Or Companies</span>
          </h2>

          {/* [#B0E4CC] divider */}
          <div
            className="mb-6"
            style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.5)' }}
          />

          <p
            className="text-cream leading-relaxed mb-10"
            style={{ fontSize: '14px', opacity: 0.55, maxWidth: '320px' }}
          >
            "The Ultimate Collaboration" unites Khalid Wani with colleges and companies to drive innovation, leadership and growth.
          </p>

          {/* CTA button */}
          <button
            className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:text-[#B0E4CC]"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 28px',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            View All
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M9 1l4 4-4 4M1 5h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ── Right — logo grid ── */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {COLLABORATORS.map((c, i) => (
            <LogoCard key={i} c={c} />
          ))}
        </div>

      </div>
    </section>
  )
}

function LogoCard({ c }) {
  return (
    <div
      className="group flex items-center justify-center p-4 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        minHeight: '72px',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
        e.currentTarget.style.background = 'rgba(201,168,76,0.04)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <img
        src={c.logo}
        alt={c.name}
        style={{
          maxHeight: '38px',
          maxWidth: '110px',
          objectFit: 'contain',
          transition: 'opacity 0.3s ease',
          opacity: 0.85,
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
      />
    </div>
  )
}