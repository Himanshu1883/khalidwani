import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "../data/content";
import FallbackImage from "./FallbackImage";
import SectionLabel from "./SectionLabel";
import { FaQuoteLeft, FaArrowRight, FaMicrophoneAlt, FaStar, FaPlay } from "react-icons/fa";

export default function Portrait() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.getElementById('portrait-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInviteToSpeak = () => {
    navigate("/contact#contact-form");
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 300);
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <section 
      id="portrait-section"
      className="relative bg-gradient-to-br from-[#07111f] via-[#0a1628] to-[#07111f] px-4 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#B0E4CC]/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#8dc0ff]/5 blur-3xl"
        />
        
        {/* Mouse Follow Light */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(176,228,204,0.15), transparent 50%)`,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Diagonal Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 40 L40 0" stroke="#B0E4CC" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>

        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#B0E4CC]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, -20, 10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        
        {/* Left Side - Image Collage with Advanced Effects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            
            {/* Main Portrait with Glow Effect */}
            <motion.div 
              className="absolute left-0 top-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: "68%", height: "100%" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/50 via-transparent to-transparent z-10 pointer-events-none" />
              <FallbackImage
                sources={IMAGES.portrait1}
                alt="Khalid Wani"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out hover:scale-110"
                style={{ filter: "brightness(0.92) contrast(1.05)" }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-[#B0E4CC]/30 rounded-2xl pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Secondary Image with Rotation and Glow */}
            <motion.div 
              className="absolute right-0 bottom-8 md:bottom-16 z-20 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: "35%",
                height: "58%",
                border: "3px solid rgba(176,228,204,0.3)",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
            >
              <FallbackImage
                sources={IMAGES.portrait2}
                alt="Khalid Wani at event"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                style={{ filter: "brightness(0.85) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Quote Card - Enhanced Design */}
            <motion.div
              className="absolute -left-4 md:-left-8 bottom-0 md:bottom-8 z-30 bg-gradient-to-br from-[#B0E4CC] to-[#8dc0ff] text-[#07111f] px-5 md:px-8 py-4 md:py-6 font-cormorant text-xs md:text-base italic leading-relaxed md:leading-[1.5] shadow-2xl rounded-2xl"
              style={{ width: "clamp(200px, 55%, 320px)" }}
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: -5 }}
            >
              <FaQuoteLeft className="absolute top-3 left-3 text-[#07111f]/20 text-xl" />
              <p className="relative z-10 pl-6">
                "Business growth is not a destination — it is a discipline practiced
                daily with unwavering clarity of purpose."
              </p>
              <div className="absolute -bottom-2 right-4 w-8 h-8 bg-[#07111f]/10 rounded-full blur-md" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#B0E4CC]/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#B0E4CC]/30 rounded-br-2xl" />
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 right-0 z-25 bg-[#B0E4CC]/90 backdrop-blur-sm text-[#07111f] px-3 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-wider shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              <FaStar className="inline mr-1 text-[10px]" /> Featured Speaker
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Text Content with Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
          variants={staggerChildren}
          className="space-y-6"
        >
          <motion.div variants={fadeInRight}>
            <SectionLabel />
          </motion.div>
          
          <motion.h2
            variants={fadeInRight}
            className="font-cormorant font-light text-[#f4efe5] leading-[1.2]"
            style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
          >
            Shaping India's Next
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#B0E4CC] via-[#8dc0ff] to-[#B0E4CC] bg-clip-text text-transparent">
                Generation of Leaders
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#B0E4CC] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.div variants={fadeInRight} className="space-y-4">
            <p className="text-sm sm:text-base font-light leading-relaxed sm:leading-[1.8] text-white/70 hover:text-white/90 transition-colors duration-300">
              Khalid Wani's work is deeply intertwined with his mission to create
              lasting change. His engagement with global startups, multinational
              companies, and government institutions reflects a drive to make a
              real, measurable difference.
            </p>
            <p className="text-sm sm:text-base font-light leading-relaxed sm:leading-[1.8] text-white/70 hover:text-white/90 transition-colors duration-300">
              He believes in the power of education and mentorship — forging
              strategic partnerships with leading institutions to shape the next
              wave of entrepreneurial talent across India and beyond.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={fadeInRight}
            className="flex flex-wrap gap-6 pt-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center">
                <FaMicrophoneAlt className="text-[#B0E4CC] text-sm" />
              </div>
              <div>
                <p className="text-[#B0E4CC] font-bold text-lg">100+</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wider">Keynotes Delivered</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center">
                <FaStar className="text-[#B0E4CC] text-sm" />
              </div>
              <div>
                <p className="text-[#B0E4CC] font-bold text-lg">50+</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wider">Institutions</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button with Advanced Hover Effect */}
          <motion.div variants={fadeInRight} className="pt-4">
            <motion.button
              onClick={handleInviteToSpeak}
              className="group relative inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#07111f] bg-gradient-to-r from-[#B0E4CC] to-[#8dc0ff] px-8 md:px-10 py-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "100%" : "-100%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                Invite Khalid to Speak
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="text-[11px]" />
                </motion.div>
              </span>
              
              {/* Ripple Effect on Click */}
              <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-150 transition-transform duration-500" />
              </div>
            </motion.button>
            
            <p className="text-white/30 text-[8px] uppercase tracking-wider mt-3 text-center md:text-left">
              Limited Slots Available for 2025
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Border Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}