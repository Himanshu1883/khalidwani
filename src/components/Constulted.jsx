import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "../data/content";
import { FaTrophy, FaStar, FaChartLine, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

const CONSULTED_COMPANIES = [
  { name: "HYUNDAI", logo: "/hyundai.png", color: "#00A1E0", delay: 0 },
  { name: "KPMG", logo: "/kpmg.png", color: "#00338D", delay: 1 },
  { name: "HYUNDAI", logo: "/hyundai.png", color: "#00A1E0", delay: 2 },
  { name: "KPMG", logo: "/kpmg.png", color: "#00338D", delay: 3 },
  { name: "HYUNDAI", logo: "/hyundai.png", color: "#00A1E0", delay: 4 },
  { name: "KPMG", logo: "/kpmg.png", color: "#00338D", delay: 5 },
];

const RECOGNITIONS = [
  { name: "Forbes", icon: FaTrophy, color: "#B0E4CC", description: "Top Leadership" },
  { name: "FORTUNE", icon: FaStar, color: "#8dc0ff", description: "Global Impact" },
  { name: "Inc.", icon: FaChartLine, color: "#B0E4CC", description: "Growth Champion" },
  { name: "SUCCESS", icon: FaMedal, color: "#f4efe5", description: "Excellence" },
];

export default function ConsultedFor() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageError = (companyName) => {
    setImageErrors(prev => ({ ...prev, [companyName]: true }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="consulted"
      className="relative bg-[#07111f] px-6 py-16 md:px-10 lg:px-16 lg:py-12 overflow-x-hidden"
    >
      {/* Premium Background with Banner Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          <img
            src="/quote3.JPG"
            alt="background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Secondary background image with opacity */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/khalidwani1.png"
            alt="background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/55 via-[#07111f]/55 to-[#07111f]/95" />

        {/* Animated Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#B0E4CC]/8 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8dc0ff]/8 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#B0E4CC]/5 blur-[80px] animate-pulse-slow" style={{ animationDelay: "4s" }} />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#B0E4CC]/20 animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Header Section - Compact */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-10 lg:mb-12"
        >
          <SectionLabel>Trusted By Industry Leaders</SectionLabel>
          <h2
            className="font-cormorant font-light text-[#f4efe5] mt-3"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Consulted top companies
            <br />
            <span className="text-[#B0E4CC]">and colleges worldwide.</span>
          </h2>
        </motion.div>

        {/* Companies Marquee - Smaller */}
        <div className="mb-12">
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07111f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07111f] to-transparent z-10" />

            <div className="animate-marquee whitespace-nowrap">
              {[...CONSULTED_COMPANIES, ...CONSULTED_COMPANIES].map((company, idx) => (
                <motion.div
                  key={idx}
                  className="inline-block mx-4 md:mx-6 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex flex-col items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-[#B0E4CC]/40">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden border border-white/20">
                      {!imageErrors[company.name] ? (
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                          onError={() => handleImageError(company.name)}
                        />
                      ) : (
                        <span className="text-2xl md:text-3xl font-bold text-[#B0E4CC]">
                          {company.name === "HYUNDAI" ? "H" : "K"}
                        </span>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent uppercase tracking-wide">
                      {company.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition & Quote Section - Compact */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Recognitions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-px bg-[#B0E4CC]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#B0E4CC]">
                Recognized At
              </p>
              <div className="w-6 h-px bg-[#B0E4CC]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {RECOGNITIONS.map((rec, index) => (
                <motion.div
                  key={rec.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4 backdrop-blur-xl transition-all duration-500 hover:border-[#B0E4CC]/50 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${rec.color}20, transparent)` }} />
                  
                  <div className="relative z-10 text-center">
                    <rec.icon className="text-3xl mb-2 mx-auto transform transition-transform duration-300 group-hover:scale-110" style={{ color: rec.color }} />
                    <p className="text-base md:text-lg font-bold mb-1" style={{ color: rec.color }}>
                      {rec.name}
                    </p>
                    <p className="text-[7px] uppercase tracking-[0.2em] text-white/40">
                      {rec.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats - Compact */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="group rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#B0E4CC]/50">
                <div className="text-xl md:text-2xl font-bold text-[#B0E4CC] font-cormorant">
                  100+
                </div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Speaking Sessions
                </p>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#B0E4CC]/50">
                <div className="text-xl md:text-2xl font-bold text-[#B0E4CC] font-cormorant">
                  30M+
                </div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Audience Reached
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Quote Card - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#B0E4CC]/10 to-[#07111f] p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.01] hover:border-[#B0E4CC]/30 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 text-5xl font-cormorant text-[#B0E4CC]/20">
                "
              </div>
              <p className="relative z-10 font-cormorant text-lg md:text-xl lg:text-2xl leading-[1.3] text-[#f4efe5] mb-3">
                We believe business growth equals success.
              </p>
              <p className="relative z-10 text-xs md:text-sm leading-relaxed text-white/70 mb-5">
                Meet Khalid Wani, a global consultant, investor, and mentor with 20+ years of 
                empowering entrepreneurs.
              </p>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#B0E4CC] blur-md opacity-50" />
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#B0E4CC] to-[#9AD4BC] flex items-center justify-center">
                      <span className="text-[#07111f] text-sm font-bold">KW</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#B0E4CC] font-semibold text-xs">Khalid Wani</p>
                    <p className="text-white/40 text-[8px] uppercase tracking-wide">
                      Global Consultant
                    </p>
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className="group/btn relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B0E4CC] text-[#07111f] text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10">Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}