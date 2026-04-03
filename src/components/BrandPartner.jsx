import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import FallbackImage from "./FallbackImage";
import { IMAGES } from "../data/content";

const BRAND_PARTNERS = [
  { 
    name: "Mercedes-Benz", 
    logo: "/mercedes.jpg",
    color: "#00A1E0",
    gradient: "from-[#00A1E0]/20 to-transparent",
    side: "left",
    delay: 0
  },
  { 
    name: "instax", 
    logo: "/instax.jpg",
    color: "#FF6B6B",
    gradient: "from-[#FF6B6B]/20 to-transparent",
    side: "right",
    delay: 0.1
  },
  { 
    name: "JEETINDER SANDHU", 
    logo: "/js.png",
    color: "#B0E4CC",
    gradient: "from-[#B0E4CC]/20 to-transparent",
    side: "left",
    delay: 0.2
  },
  { 
    name: "MARGN", 
    logo: "/margn.png",
    color: "#B0E4CC",
    gradient: "from-[#B0E4CC]/20 to-transparent",
    side: "right",
    delay: 0.3
  },
];

export default function BrandPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleImageError = (brandName) => {
    setImageErrors(prev => ({ ...prev, [brandName]: true }));
  };

  // Variants for scroll animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const leftCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    },
  };

  const rightCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
    },
  };

  const imageHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: 2,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    },
  };

  return (
    <section
      ref={sectionRef}
      id="brand-partners"
      className="relative bg-[#07111f] px-6 py-24 md:px-10 lg:px-16 lg:py-20 overflow-x-hidden"
    >
      {/* Professional Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: backgroundLoaded ? 1 : 1.1, 
            opacity: backgroundLoaded ? 1 : 0 
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/quote4.JPG"
            alt="Background"
            className="w-full h-full object-cover"
            onLoad={() => setBackgroundLoaded(true)}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop";
              setBackgroundLoaded(true);
            }}
          />
        </motion.div>

        {/* Multi-layer Gradient Overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f]/65 via-[#07111f]/45 to-[#07111f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/55 via-transparent to-[#07111f]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#07111f_100%)] opacity-60" />
        
        {/* Diagonal stripes pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #B0E4CC 0px, #B0E4CC 1px, transparent 1px, transparent 12px)`,
        }} />
        
        {/* Enhanced Background Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B0E4CC]/5 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#8dc0ff]/5 blur-[140px]"
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#B0E4CC]/20"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 20, -20, 20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Light leak effect */}
        <motion.div
          animate={{ x: ["-100%", "100%"], opacity: [0, 0.05, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Header Section with advanced animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUpVariants}
          className="text-center mb-16 lg:mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent mx-auto mb-4"
          />
          <SectionLabel>Strategic Alliances</SectionLabel>
          
          <motion.h2
            className="font-cormorant font-light text-[#f4efe5] mt-4"
            style={{ fontSize: "clamp(38px, 4.8vw, 72px)" }}
            variants={fadeInUpVariants}
          >
            Brand Partners
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#B0E4CC] to-transparent mx-auto mt-6"
          />
        </motion.div>

        {/* Partners Grid with Left/Right Slide Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {BRAND_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={partner.side === "left" ? leftCardVariants : rightCardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group perspective-1000"
            >
              <motion.div
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091321]/80 backdrop-blur-sm transition-all duration-500 cursor-pointer"
                animate={{
                  borderColor: hoveredCard === index ? `${partner.color}60` : "rgba(255,255,255,0.1)",
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                />
                
                {/* Animated Border Gradient Flow */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    x: hoveredCard === index ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === index ? Infinity : 0,
                    ease: "linear",
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: hoveredCard === index ? "100%" : "-100%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Content */}
                <div className="relative p-8 md:p-10 text-center">
                  {/* Brand Logo Circle with 3D Animation */}
                  <div className="mb-8 flex justify-center">
                    <motion.div
                      className="relative"
                      variants={imageHoverVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#B0E4CC]/20 blur-xl"
                        animate={{
                          scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                          opacity: hoveredCard === index ? [0.3, 0.6, 0.3] : 0.3,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredCard === index ? Infinity : 0,
                        }}
                      />
                      <motion.div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}05)`,
                          border: `2px solid ${partner.color}40`,
                          boxShadow: `0 0 40px ${partner.color}20`
                        }}
                        animate={{
                          rotateY: hoveredCard === index ? [0, 10, 0] : 0,
                          scale: hoveredCard === index ? 1.05 : 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {!imageErrors[partner.name] ? (
                          <motion.img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-16 h-16 object-contain"
                            onError={() => handleImageError(partner.name)}
                            animate={{
                              rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        ) : (
                          <motion.span 
                            className="text-4xl font-bold"
                            style={{ color: partner.color }}
                            animate={{
                              scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                            }}
                          >
                            {partner.name === "Mercedes-Benz" && "MB"}
                            {partner.name === "instax" && "IN"}
                            {partner.name === "JEETINDER SANDHU" && "JS"}
                            {partner.name === "MARGN" && "MG"}
                          </motion.span>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Brand Name with Typing Animation on Hover */}
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
                    style={{ color: partner.color }}
                    animate={{
                      letterSpacing: hoveredCard === index ? "2px" : "0px",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {partner.name}
                  </motion.h3>
                  
                  {/* Partnership Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em]"
                    animate={{
                      borderColor: hoveredCard === index ? `${partner.color}50` : "rgba(255,255,255,0.1)",
                      backgroundColor: hoveredCard === index ? `${partner.color}10` : "rgba(255,255,255,0.05)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: partner.color }}
                      animate={{
                        scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredCard === index ? Infinity : 0,
                      }}
                    />
                    Strategic Partner
                  </motion.div>

                  {/* Reveal Line on Hover */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent"
                    animate={{
                      width: hoveredCard === index ? "60%" : "0%",
                      x: hoveredCard === index ? "-50%" : "-50%",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Khalid's Partnership Section with Scroll Animations */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image Card with complex animation */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={leftCardVariants}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <FallbackImage
                sources={IMAGES?.about1 || ["/khalidwani1.png"]}
                alt="Khalid Wani with Partners"
                className="h-[400px] w-full rounded-[24px] object-cover object-top transition duration-700"
                style={{ filter: "brightness(0.88)" }}
              />
              
              {/* Animated Overlay */}
              <motion.div
                className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute left-4 bottom-4 rounded-[22px] border border-white/10 bg-[#07111f]/82 px-5 py-3 backdrop-blur-xl"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B0E4CC]">
                  Global Partnerships
                </p>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute right-4 top-4 rounded-full bg-[#B0E4CC]/20 backdrop-blur-xl px-3 py-1.5"
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-[8px] font-bold uppercase text-[#B0E4CC]">Featured</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Content with sliding animation */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={rightCardVariants}
            className="space-y-6"
          >
            <motion.p 
              className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B0E4CC]"
              variants={fadeInUpVariants}
            >
              Building Together
            </motion.p>
            
            <motion.h3 
              className="font-cormorant text-[36px] md:text-[44px] leading-[1.1] text-[#f4efe5]"
              variants={fadeInUpVariants}
            >
              Partnerships that
              <br />
              <motion.span 
                className="text-[#B0E4CC] inline-block"
                animate={{
                  textShadow: isInView ? ["0 0 0px #B0E4CC", "0 0 10px #B0E4CC", "0 0 0px #B0E4CC"] : "0 0 0px #B0E4CC",
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                drive excellence
              </motion.span>
            </motion.h3>
            
            <motion.p 
              className="text-white/66 text-sm md:text-[15px] leading-[2]"
              variants={fadeInUpVariants}
            >
              Khalid Wani collaborates with globally recognized brands to create 
              transformative business solutions and deliver exceptional value to 
              partners and clients alike.
            </motion.p>
            
            {/* Partner stats with count animation */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl text-center overflow-hidden relative group"
                variants={fadeInUpVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/10 to-[#B0E4CC]/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-[#B0E4CC] font-cormorant"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                >
                  15+
                </motion.p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Active Partners
                </p>
              </motion.div>
              
              <motion.div 
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl text-center overflow-hidden relative group"
                variants={fadeInUpVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/10 to-[#B0E4CC]/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-[#B0E4CC] font-cormorant"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                >
                  8+
                </motion.p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Years of Trust
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section with advanced animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUpVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="/contact#contact-form"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#B0E4CC] px-8 text-[10px] font-bold uppercase tracking-[0.26em] text-[#07111f] transition duration-300 cursor-pointer relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Partnerships</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
          
          <motion.div 
            className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl"
            whileHover={{ scale: 1.05, borderColor: "#B0E4CC30" }}
          >
            Collaboration / Innovation / Growth
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.8, 0, 0.6, 1) infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}