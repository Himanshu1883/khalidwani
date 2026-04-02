import { SOCIAL_LINKS } from "../data/content";
import FallbackImage from "./FallbackImage";
import { useEffect, useState } from "react";

const IMPACT_STRIPS = [
  "Boardroom strategy",
  "Founder mindset",
  "Market-scale execution",
];

const HERO_METRICS = [
  { value: "100+", label: "Keynotes & private sessions" },
  { value: "50+", label: "Companies backed and guided" },
  { value: "30M+", label: "Audience reached across platforms" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate overflow-x-hidden overflow-y-visible bg-[#07111f] text-white min-h-[100vh] w-full"
    >
      {/* ---------------- Enhanced Background Banner ---------------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full">
        {/* Gradient base with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0a1425] to-[#050a12]" />
        
        {/* Background image banner with parallax */}
        <div 
          className="absolute inset-0 w-full"
          style={{
            transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.1})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="one.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Animated glowing orbs - Added overflow-hidden parent */}
        <div className="absolute inset-0 overflow-hidden w-full">
          <div
            className="absolute top-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-[120px]"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div
            className="absolute bottom-0 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-cyan-300/30 to-green-300/30 blur-[140px]"
            style={{ 
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          />
        </div>
        
        {/* Animated wave pattern - Prevent overflow */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="rgba(176,228,204,0.3)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </path>
          </svg>
        </div>
        
        {/* Floating particles - Already contained */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#B0E4CC] to-cyan-400"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 8}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Twinkling stars */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated grid pattern - Prevent overflow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Diagonal Lines Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLinesHero" patternUnits="userSpaceOnUse" width="30" height="30">
              <path d="M0 30 L30 0" stroke="rgba(176,228,204,0.1)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLinesHero)" />
        </svg>
      </div>

      {/* ---------------- Main Content with Animations ---------------- */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        {/* Left Panel with Staggered Animations */}
        <div className="w-full">
          {/* Kicker & Status */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="relative overflow-hidden bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-[#B0E4CC] text-xs sm:text-sm group hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative whitespace-nowrap">✨ India's most in-demand corporate trainer</span>
            </span>
            <span className="text-white/60 text-xs sm:text-sm">
              Live coaching • Strategic advisory • Founder acceleration
            </span>
          </div>

          {/* Impact strips with hover effects */}
          <div className="flex flex-wrap gap-2 mb-6">
            {IMPACT_STRIPS.map((item, index) => (
              <span
                key={item}
                className="group relative overflow-hidden px-3 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wide rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative whitespace-nowrap">{item}</span>
              </span>
            ))}
          </div>

          {/* Hero Title with gradient animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6 break-words">
            Build leaders{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
              people follow.
            </span>
            <br />
            Scale companies{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
              people remember.
            </span>
          </h1>

          {/* Copy with fade in */}
          <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-xl break-words">
            Khalid Wani helps founders, executives, and high-performance teams
            turn pressure into precision through leadership training, investment
            insight, and business strategy built for visible growth.
          </p>

          {/* Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#B0E4CC]/50 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap"
            >
              <span className="relative z-10">Book a strategy session</span>
              <svg className="relative z-10 ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a 
              href="#about"
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap"
            >
              <span>Explore the journey</span>
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Metrics with hover effects */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
            {HERO_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 text-center sm:text-left overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/10 to-[#B0E4CC]/0 translate-x-[-100%] group-hover:translate-x-100 transition-transform duration-1000" />
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#B0E4CC] to-white bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-white/60 text-xs sm:text-sm break-words">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Social Links with underline animation */}
          <div className="flex flex-wrap gap-4 mt-4">
            {SOCIAL_LINKS.slice(0, 3).map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative text-white/50 hover:text-[#B0E4CC] transition duration-300 text-sm sm:text-base"
              >
                <span>{social.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel - Two Stacked Images (Large and Small) */}
        <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-purple-500/20 rounded-3xl blur-3xl" />
            
            {/* Large Main Image (Bottom/Back) */}
            <div
              className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 group"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.005}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <FallbackImage
                sources={["front.jpg"]}
                alt="Khalid Wani Main"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Corner accents - hide on mobile */}
              <div className="hidden sm:block absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-[#B0E4CC]/40" />
              <div className="hidden sm:block absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-[#B0E4CC]/40" />
              <div className="hidden sm:block absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-[#B0E4CC]/40" />
              <div className="hidden sm:block absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-[#B0E4CC]/40" />
            </div>

            {/* Small Overlay Image (Top/Front - Positioned on top right) */}
            <div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-12 md:-right-12 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm transform rotate-12 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10 group"
              style={{
                transform: `rotate(${12 + mousePosition.x * 0.05}deg) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <FallbackImage
                sources={["large.JPG"]}
                alt="Khalid Wani Featured"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold shadow-lg">
                Featured
              </div>
            </div>

            {/* Decorative floating elements - hide on mobile */}
            <div className="hidden sm:block absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#B0E4CC]/20 blur-xl" />
            <div className="hidden sm:block absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-purple-500/20 blur-xl" />
            <div className="hidden sm:block absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-blue-500/20 blur-xl" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}