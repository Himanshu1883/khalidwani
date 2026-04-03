import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const COLLABORATORS = [
  { name: 'BITS Pilani', logo: '/BITS_Pilani-Logo.svg.png', shape: 'circle', color: '#FF6B6B', delay: 0 },
  { name: 'IIM Raipur', logo: '/iim.jpg', shape: 'hexagon', color: '#4ECDC4', delay: 1 },
  { name: 'IMS Ghaziabad', logo: '/ims.jpg', shape: 'square', color: '#45B7D1', delay: 2 },
  { name: 'Hansraj College', logo: '/hansraj.jpg', shape: 'circle', color: '#96CEB4', delay: 3 },
  { name: 'IIT', logo: '/iit.jpg', shape: 'hexagon', color: '#FFEAA7', delay: 4 },
  { name: 'Lovely Professional University', logo: '/lpu.png', shape: 'square', color: '#DDA0DD', delay: 5 },
  { name: 'IIM Bangalore', logo: '/iim.jpg', shape: 'circle', color: '#98D8C8', delay: 6 },
  { name: 'NIET', logo: '/niet.png', shape: 'hexagon', color: '#F7D794', delay: 7 },
  { name: 'Jamia Millia Islamia', logo: '/jmi.jpg', shape: 'square', color: '#778BEB', delay: 8 },
  { name: 'E-Cell', logo: '/ecell.jpg', shape: 'circle', color: '#E77F67', delay: 9 },
]

export default function Collaborations() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative px-8 md:px-16 py-28 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a25] overflow-hidden"
    >
      {/* Eye-catching Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {/* Animated Gradient Orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[120px]"
            style={{
              width: `${200 + i*100}px`,
              height: `${200 + i*100}px`,
              background: `radial-gradient(circle at center, #B0E4CC/${20+i*10} 0%, transparent 70%)`,
              top: `${i*20}%`,
              left: `${i*25}%`,
            }}
            animate={{
              x: [0, 50 - i*20, -30 + i*10, 0],
              y: [0, -50 + i*10, 50 - i*20, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 20 + i*5, repeat: Infinity, ease: "easeInOut", delay: i }}
          />
        ))}

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #B0E4CC 0px, #B0E4CC 1px, transparent 1px, transparent 60px),
                             repeating-linear-gradient(0deg, #B0E4CC 0px, #B0E4CC 1px, transparent 1px, transparent 60px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative z-10" style={{ opacity }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B0E4CC]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B0E4CC]">
              Academic Partners
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B0E4CC]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-cormorant text-[#f4efe5] mb-4">
            Our Collaborations
          </h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Partnering with prestigious institutions worldwide to foster innovation and excellence
          </p>
        </motion.div>

        {/* Floating Logos Grid */}
        <div className="relative max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
          {COLLABORATORS.map((c, i) => (
            <FloatingLogo key={i} c={c} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-wrap justify-center gap-8"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-[#B0E4CC]">50+</div>
          <div className="text-xs uppercase tracking-wider text-white/40 mt-1">Partner Institutions</div>
        </div>
        <div className="w-px h-12 bg-white/10" />
        <div className="text-center">
          <div className="text-3xl font-bold text-[#B0E4CC]">100+</div>
          <div className="text-xs uppercase tracking-wider text-white/40 mt-1">Collaborative Projects</div>
        </div>
        <div className="w-px h-12 bg-white/10" />
        <div className="text-center">
          <div className="text-3xl font-bold text-[#B0E4CC]">10k+</div>
          <div className="text-xs uppercase tracking-wider text-white/40 mt-1">Students Impacted</div>
        </div>
      </motion.div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .rounded-circle { border-radius: 50%; }
        .rounded-square { border-radius: 16px; }
      `}</style>
    </section>
  )
}

function FloatingLogo({ c, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  let shapeClass = ''
  if (c.shape === 'circle') shapeClass = 'rounded-circle'
  else if (c.shape === 'square') shapeClass = 'rounded-square'
  else if (c.shape === 'hexagon') shapeClass = 'clip-hexagon'

  // Truncate long names for display
  const displayName = c.name.length > 20 ? c.name.substring(0, 18) + '...' : c.name

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: ['0%', '-12%', '0%', '12%', '0%'],
        x: ['0%', '8%', '0%', '-8%', '0%'],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5 + (index % 3) * 1.5,
        ease: 'easeInOut',
        delay: index * 0.2,
      }}
      whileHover={{ scale: 1.15, zIndex: 50 }}
    >
      {/* Glow Background */}
      <div className={`absolute inset-0 ${shapeClass} bg-gradient-to-r from-[#B0E4CC] to-[#8dc0ff] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />

      {/* Logo container */}
      <div className={`relative w-28 h-28 md:w-32 md:h-32 bg-white flex items-center justify-center ${shapeClass} overflow-hidden border border-white/10 backdrop-blur-xl shadow-lg`}>
        <img
          src={c.logo}
          alt={c.name}
          className="w-full h-full object-contain p-4"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/100?text=Logo' }}
        />
      </div>

      {/* Label - Tooltip Style on Hover */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
        initial={{ opacity: 0, y: -10, bottom: '-40px' }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : -10,
          bottom: isHovered ? '-45px' : '-40px'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Tooltip Arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#07111f] rotate-45 border-l border-t border-[#B0E4CC]/30" />
          
          {/* Tooltip Content */}
          <div className="bg-[#07111f]/95 backdrop-blur-md px-4 py-2 rounded-lg border border-[#B0E4CC]/30 shadow-xl whitespace-nowrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B0E4CC] block text-center">
              {c.name}
            </span>
            <span className="text-[8px] text-white/40 text-center block mt-0.5">
              Academic Partner
            </span>
          </div>
        </div>
      </motion.div>

      {/* Alternative: Bottom Label with Animation */}
      {/* <motion.div 
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full pointer-events-none z-10"
        animate={{
          opacity: isHovered ? 0 : 0.8,
          y: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-[8px] font-medium uppercase tracking-wider text-white/60 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full block text-center mx-auto w-fit">
          {displayName}
        </span>
      </motion.div> */}
    </motion.div>
  )
}