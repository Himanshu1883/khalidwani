// about.jsx - Fixed version without FallbackImage dependency
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaChartLine, 
  FaUsers, 
  FaGlobe, 
  FaBuilding,
  FaTrophy,
  FaRocket,
  FaGraduationCap,
  FaLandmark,
  FaEnvelope,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaBullseye,
  FaHeart,
  FaLightbulb,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPlay,
  FaPause,
  FaArrowRight
} from 'react-icons/fa';
import { KHALID_QUOTES } from '../data/content';

// Image placeholder function
const getImageUrl = (imagePath, fallback) => {
  if (imagePath && imagePath !== "") {
    return imagePath;
  }
  return fallback || "https://via.placeholder.com/800x800/2EC8C0/FFFFFF?text=Khalid+Wani";
};

const About = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    { src: "/front.jpg", alt: "Khalid Wani Leadership", position: "object-center", fallback: "/api/placeholder/800/800" },
    { src: "/about2.jpg", alt: "Khalid Wani Portrait", position: "object-top", fallback: "/api/placeholder/800/800" },
    { src: "/about1.JPG", alt: "Khalid Wani Speaking", position: "object-center", fallback: "/api/placeholder/800/800" },
    { src: "/khalidwani5.jpeg", alt: "Khalid Wani Mentoring", position: "object-center", fallback: "/api/placeholder/800/800" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * KHALID_QUOTES.length);
    setCurrentQuote(KHALID_QUOTES[randomIndex]);
    setQuoteIndex(randomIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * KHALID_QUOTES.length);
      } while (newIndex === quoteIndex && KHALID_QUOTES.length > 1);
      
      setCurrentQuote(KHALID_QUOTES[newIndex]);
      setQuoteIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [quoteIndex]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % heroImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

   const handleInviteToSpeak = () => {
    // Navigate to contact page with hash
    navigate("/contact#contact-form");
    
    // Small delay to ensure navigation completes before scrolling
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

  const stats = [
    { number: "20+", label: "Years of Leadership", icon: FaChartLine },
    { number: "100+", label: "Global Keynotes", icon: FaGlobe },
    { number: "5", label: "Industry Sectors", icon: FaBuilding },
    { number: "3L+", label: "Students Mentored", icon: FaUsers }
  ];

  const achievements = [
    { title: "40 under 40 Honoree", description: "Recognized as one of India's most influential young leaders", icon: FaTrophy },
    { title: "Strategic Investor", description: "Invested in 50+ startups across emerging technologies", icon: FaRocket },
    { title: "Global Mentor", description: "Mentored 3,00,000+ students across premier institutions", icon: FaGraduationCap },
    { title: "Capital Architect", description: "Steering ten-figure asset pool with strategic foresight", icon: FaLandmark }
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/khalidwani", label: "LinkedIn", color: "#0077B5" },
    { icon: FaInstagram, url: "https://www.instagram.com/khalidwani/", label: "Instagram", color: "#E4405F" },
    { icon: FaTwitter, url: "https://x.com/khalidwani", label: "Twitter", color: "#1DA1F2" },
    { icon: FaYoutube, url: "https://www.youtube.com/@wanikhalid", label: "YouTube", color: "#FF0000" }
  ];

  return (
    <div className="min-h-screen bg-[#06070a] overflow-x-hidden">
      
      {/* Hero Section with Dynamic Image Grid */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#B0E4CC]/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[100px] animate-pulse-slow animation-delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(176,228,204,0.02)_40%,rgba(176,228,204,0.02)_60%,transparent_60%)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <p className="inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-[#B0E4CC] mb-6 lg:mb-8">
                  <span className="w-8 h-px bg-[#B0E4CC] inline-block" />
                  About Khalid Wani
                </p>
                <h1 
                  className="font-cormorant font-light leading-[1.1] tracking-tight text-white"
                  style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
                >
                  Great leaders are
                  <br />
                  guided by a
                  <br />
                  <span className="text-[#B0E4CC] relative inline-block">
                    higher purpose.
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#B0E4CC] to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                  </span>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-2 pt-4">
                <p className="text-[#B0E4CC] font-cormorant text-2xl md:text-3xl font-light tracking-wide">
                  Shri Khalid Wani
                </p>
                <p className="text-gray-300 font-inter text-sm md:text-base tracking-wide">
                  Director, One Capital Ltd<br />
                  Founder & Managing Director, KWCG
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <blockquote className="border-l-2 border-[#B0E4CC] pl-6 py-2">
                  <FaQuoteLeft className="text-[#B0E4CC] text-xl mb-2 opacity-50" />
                  <p className="text-white font-inter text-base md:text-lg italic font-light leading-relaxed">
                    "True leadership is about vision, integrity, and empowering others to achieve greatness."
                  </p>
                  <cite className="text-[#B0E4CC] font-inter text-xs tracking-wide mt-3 block">
                    — Shri Khalid Wani
                  </cite>
                </blockquote>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#B0E4CC] hover:border-[#B0E4CC]/50 transition-all duration-300"
                  >
                    <social.icon className="text-base" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Dynamic Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Featured Image with Slider */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#B0E4CC]/30 shadow-2xl group">
                <div className="relative h-[450px] md:h-[550px]">
                  {heroImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ 
                        opacity: activeImage === index ? 1 : 0,
                        scale: activeImage === index ? 1 : 1.1
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        onError={(e) => {
                          e.target.src = image.fallback;
                        }}
                        className={`w-full h-full object-cover object-[center_9%] ${image.position}`}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent" />
                  
                  {/* Slider Controls */}
                  {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => { setActiveImage(index); setIsAutoPlaying(false); }}
                        className={`transition-all duration-300 rounded-full ${
                          activeImage === index ? 'w-8 h-1.5 bg-[#B0E4CC]' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="ml-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#B0E4CC]/20 transition-all duration-300"
                    >
                      {isAutoPlaying ? <FaPause className="text-white/70 text-[8px]" /> : <FaPlay className="text-white/70 text-[8px]" />}
                    </button>
                  </div> */}
                </div>

                {/* Floating Info Card */}
                <div className="absolute bottom-0 left-4 right-1 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <p className="text-[#B0E4CC] text-[10px] font-semibold uppercase tracking-wider">Global Leader & Mentor</p>
                      <p className="text-white text-xs font-light">Transforming businesses & lives worldwide</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#B0E4CC]/20 flex items-center justify-center">
                      <FaTrophy className="text-[#B0E4CC] text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Small Images */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-[#B0E4CC] shadow-xl rotate-12 hover:rotate-0 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img
                  src={heroImages[1]?.src}
                  alt="Khalid Wani"
                  className="w-full h-full object-cover object-[center_50%]"
                  onError={(e) => {
                    e.target.src = heroImages[1]?.fallback;
                  }}
                />
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-[#B0E4CC] shadow-xl -rotate-12 hover:rotate-0 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 0 }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <img
                  src={heroImages[2]?.src}
                  alt="Khalid Wani Speaking"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = heroImages[2]?.fallback;
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#111111] to-[#06070a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center group relative"
              >
                <div className="absolute inset-0 bg-[#B0E4CC]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <stat.icon className="text-[#B0E4CC] text-3xl md:text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <motion.div 
                    className="text-[#B0E4CC] font-cormorant text-5xl md:text-6xl font-light mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-inter text-xs md:text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#B0E4CC]" />
                <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">The Journey</span>
              </div>
              <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight">
                The Beginning of a
                <br />
                <span className="text-[#B0E4CC]">Greater Vision</span>
              </h2>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid Wani, born into a modest background, understood the value of hard work and vision from an early age. His journey wasn't always easy, but each challenge laid the foundation for the remarkable leader he is today.
              </p>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                From navigating complex industries to shaping India's entrepreneurial landscape, his story is a testament to determination and vision. His path was fueled by the desire to create a lasting impact, not just for himself, but for others who shared similar struggles.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/khalidwani1.png"
                  alt="Khalid Wani Journey"
                  className="w-full h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/800/800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#06070a] via-[#06070a]/90 to-transparent z-10" />
          <img
            src="/wani2.JPG"
            alt="Khalid Wani Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.6)" }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-px bg-[#B0E4CC]" />
                <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">Excellence Defined</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight"
              >
                Strategic
                <br />
                <span className="text-[#B0E4CC]">Excellence.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 font-inter text-sm font-light leading-relaxed"
              >
                Board Member & Director at One Capital Ltd · Founder & Group CEO of KWCG, 
                bridging global capital with strategic foresight across five industries.
              </motion.p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#B0E4CC]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B0E4CC]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="text-[#B0E4CC] text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-cormorant text-lg font-light group-hover:text-[#B0E4CC] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light">{achievement.description}</p>
                  </div>
                  <FaArrowRight className="text-[#B0E4CC] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#B0E4CC]" />
                <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">Mentorship & Impact</span>
              </div>
              <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Inspiring Future Leaders.
                <br />
                <span className="text-[#B0E4CC]">Empowering Generations.</span>
              </h2>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid Wani believes that the true measure of leadership lies in the leaders you help create. 
                With over 300 sessions delivered worldwide, spanning Ivy League universities, IITs, IIMs, 
                and state-level institutions, he has mentored more than three lakh students.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <div className="w-12 h-12 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center">
                  <FaUsers className="text-[#B0E4CC] text-xl" />
                </div>
                <div>
                  <p className="text-[#B0E4CC] text-sm font-semibold">3,00,000+ Students Mentored</p>
                  <p className="text-gray-500 text-xs">Across 100+ Institutions</p>
                </div>
              </div>
            </div>
            
            {/* Dynamic Quote Section */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B0E4CC]/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative bg-gradient-to-br from-[#111111] to-[#06070a] rounded-2xl p-8 border border-[#B0E4CC]/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0E4CC]/5 rounded-full blur-3xl" />
                  <FaQuoteLeft className="text-[#B0E4CC] text-3xl mb-6 opacity-30" />
                  
                  <motion.p 
                    key={currentQuote}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-white font-inter text-lg italic font-light leading-relaxed min-h-[120px]"
                  >
                    "{currentQuote}"
                  </motion.p>
                  
                  <div className="mt-6 pt-4 border-t border-[#B0E4CC]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B0E4CC]">
                        <img
                          src="/khalidwani1.png"
                          alt="Khalid Wani"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/api/placeholder/40/40";
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-[#B0E4CC] font-cormorant text-sm font-light">Khalid Wani</p>
                        <p className="text-gray-500 text-[9px] uppercase tracking-wider">Global Mentor</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-[#B0E4CC]/30" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#B0E4CC]/10 to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B0E4CC]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-[#B0E4CC] text-2xl" />
            </div>
            
            <h2 className="text-white font-cormorant text-3xl md:text-4xl font-light mb-4">
              Connect with Shri Khalid Wani
            </h2>
            
            <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto font-light">
              For speaking engagements, mentorship opportunities, or strategic collaborations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Info@khalidwani.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#B0E4CC] text-[#06070a] text-[10px] font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-[#B0E4CC]/90 transition-all duration-300 hover:-translate-y-1"
              >
                <FaEnvelope className="text-sm" />
                Email: Info@khalidwani.com
              </a>
              <button
   onClick={handleInviteToSpeak}
  className="group inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#B0E4CC]/40 text-[#B0E4CC] text-[10px] font-medium tracking-[0.2em] uppercase rounded-lg hover:border-[#B0E4CC] hover:bg-[#B0E4CC]/5 transition-all duration-300 hover:-translate-y-1"
>
  <FaExternalLinkAlt className="text-sm" />
  Contact
</button>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default About;