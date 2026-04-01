import { useState, useEffect } from "react";
import { METRICS } from "../data/content";
import { useOnceVisible } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Metrics() {
  const [animate, setAnimate] = useState(false);
  const barsRef = useOnceVisible(() => setAnimate(true));

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-gradient-to-b from-ink to-ink-darker px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#B0E4CC]/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] animate-pulse delay-1000" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#B0E4CC]/10 animate-float-particle"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Diagonal Lines Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLinesMetrics" patternUnits="userSpaceOnUse" width="30" height="30">
              <path d="M0 30 L30 0" stroke="rgba(176,228,204,0.1)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLinesMetrics)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Left Side - Text Content */}
        <div className="reveal-left space-y-6 sm:space-y-8">
          <div>
            <SectionLabel>Proven Impact</SectionLabel>
            
            {/* Animated Title */}
            <div className="relative mt-4 mb-5">
              <h2
                className="font-cormorant font-light text-cream leading-[1.15] relative z-10"
                style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
              >
                Khalid Wani
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
                    Equals Results
                  </span>
                  {/* Animated Underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4" preserveAspectRatio="none">
                    <path d="M0 2 L200 2" stroke="url(#gradientLineMetrics)" strokeWidth="2" strokeDasharray="5 5" />
                    <defs>
                      <linearGradient id="gradientLineMetrics" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B0E4CC" stopOpacity="0" />
                        <stop offset="50%" stopColor="#B0E4CC" />
                        <stop offset="100%" stopColor="#B0E4CC" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
              
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-[#B0E4CC]/20" />
            </div>
          </div>
          
          <p className="text-sm sm:text-base font-light leading-relaxed sm:leading-[1.9] text-gray-400 hover:text-[#B0E4CC] transition-all duration-300 max-w-lg">
            Partner companies consistently report transformative growth across
            leadership, revenue, and team performance — with measurable, lasting
            change.
          </p>
          
          {/* Enhanced CTA Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-ink bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] px-8 sm:px-10 py-4 sm:py-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#B0E4CC]/25"
            >
              <span className="relative z-10">Book Free 30-Min Consultation</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Right Side - Enhanced Metric Bars */}
        <div ref={barsRef} className="reveal-right space-y-8 sm:space-y-10">
          {METRICS.map((m, index) => (
            <MetricBar 
              key={m.label} 
              metric={m} 
              animate={animate} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricBar({ metric, animate, index }) {
  const [count, setCount] = useState(0);
  
  // Extract numeric value from percentage string (e.g., "87%" -> 87)
  const getNumericValue = (pct) => {
    if (typeof pct === 'string') {
      return parseInt(pct.replace('%', ''), 10);
    }
    return parseInt(pct, 10);
  };

  const numericValue = getNumericValue(metric.pct);
  const isPercentage = metric.pct.toString().includes('%');

  // Animate number counting
  useEffect(() => {
    if (animate) {
      let startTime = null;
      const duration = 2000;
      
      const animateNumber = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOutCubic * numericValue);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateNumber);
        } else {
          setCount(numericValue);
        }
      };
      
      requestAnimationFrame(animateNumber);
    }
  }, [animate, numericValue]);

  return (
    <div className="group relative">
      {/* Card Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header with Enhanced Styling */}
      <div className="flex justify-between items-end mb-3 sm:mb-4">
        <span className="text-[13px] sm:text-[14px] font-medium text-cream group-hover:text-[#B0E4CC] transition-colors duration-300">
          {metric.label}
        </span>
        <div className="relative">
          <span
            className="font-cormorant font-light bg-gradient-to-r from-[#B0E4CC] to-white bg-clip-text text-transparent"
            style={{ fontSize: "clamp(20px, 4vw, 28px)" }}
          >
            {animate ? count : 0}{isPercentage ? '%' : ''}
          </span>
          {animate && (
            <div className="absolute -top-1 -right-6 w-2 h-2 rounded-full bg-[#B0E4CC] animate-ping" />
          )}
        </div>
      </div>
      
      {/* Enhanced Progress Bar */}
      <div className="relative">
        {/* Background Track */}
        <div className="h-[2px] bg-white/[0.05] rounded-full overflow-hidden relative">
          {/* Animated Fill */}
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: animate ? `${metric.width}%` : "0%",
              background: "linear-gradient(90deg, #B0E4CC, #9AD4BC, #B0E4CC)",
              backgroundSize: "200% 100%",
              animation: animate ? "gradientShift 2s ease-in-out infinite" : "none",
            }}
          />
        </div>
        
        {/* Glow Effect */}
        <div 
          className="absolute top-0 left-0 h-[2px] rounded-full blur-sm transition-all duration-1000"
          style={{ 
            width: animate ? `${metric.width}%` : "0%",
            background: "linear-gradient(90deg, transparent, #B0E4CC, transparent)",
          }}
        />
        
        {/* Animated Markers */}
        {animate && (
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B0E4CC] shadow-lg shadow-[#B0E4CC]/50"
            style={{ 
              left: `${metric.width}%`,
              transition: "left 1000ms ease-out",
              animation: "pulseMarker 1s ease-in-out infinite",
            }}
          />
        )}
      </div>
      
      {/* Decorative Dots */}
      <div className="absolute -bottom-4 left-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-1 h-1 rounded-full bg-[#B0E4CC]/40"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}