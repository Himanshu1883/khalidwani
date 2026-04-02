import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import FallbackImage from "./FallbackImage";
import { IMAGES } from "../data/content";

const BRAND_PARTNERS = [
  { 
    name: "Mercedes-Benz", 
    logo: "/mercedes.jpg",
    color: "#00A1E0",
    delay: 0
  },
  { 
    name: "instax", 
    logo: "/instax.jpg",
    color: "#FF6B6B",
    delay: 1
  },
  { 
    name: "JEETINDER SANDHU", 
    logo: "/js.png",
    color: "#B0E4CC",
    delay: 2
  },
  { 
    name: "MARGN", 
    logo: "/margn.png",
    color: "#B0E4CC",
    delay: 3
  },
];

export default function BrandPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageError = (brandName) => {
    setImageErrors(prev => ({ ...prev, [brandName]: true }));
  };

  return (
    <section
      ref={sectionRef}
      id="brand-partners"
      className="relative bg-[#07111f] px-6 py-24 md:px-10 lg:px-16 lg:py-10 overflow-x-hidden"
    >
      {/* Background Effects - Matching existing design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B0E4CC]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#8dc0ff]/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-10">
          <div className="reveal">
            <SectionLabel>Strategic Alliances</SectionLabel>
          </div>
          
          <h2
            className={`font-cormorant font-light text-[#f4efe5] mt-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontSize: "clamp(38px, 4.8vw, 72px)" }}
          >
            Brand Partners
          </h2>
          
          <div className="flex justify-center mt-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#B0E4CC]/50 to-transparent" />
          </div>
        </div>

        {/* Partners Grid - Matching Services card design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BRAND_PARTNERS.map((partner, index) => (
            <div
              key={partner.name}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091321] transition-all duration-500 hover:-translate-y-1 hover:border-[${partner.color}]/35 ${
                index === 0 ? "reveal-left" : index === 1 ? "reveal" : index === 2 ? "reveal-right" : "reveal-left"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[${partner.color}]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[${partner.color}]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-8 md:p-10 text-center">
                {/* Brand Logo Circle with Animation */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full  blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div 
                      className="relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden"
                      style={{ 
                        background: `white`,
                        border: `2px solid ${partner.color}40`,
                        boxShadow: `0 0 40px ${partner.color}20`
                      }}
                    >
                      {!imageErrors[partner.name] ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-16 h-16 object-contain"
                          onError={() => handleImageError(partner.name)}
                        />
                      ) : (
                        <span 
                          className="text-4xl font-bold"
                          style={{ color: partner.color }}
                        >
                          {partner.name === "Mercedes-Benz" && "MB"}
                          {partner.name === "instax" && "IN"}
                          {partner.name === "JEETINDER SANDHU" && "JS"}
                          {partner.name === "MARGN" && "MG"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Brand Name */}
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </h3>
                
                {/* Partnership Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] group-hover:border-[${partner.color}]/30 group-hover:text-white/70 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: partner.color }} />
                  Strategic Partner
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khalid's Partnership Section - Matching existing design */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image Card like existing design */}
          <div className="reveal-left overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="relative">
              <FallbackImage
                sources={IMAGES?.about1 || ["/khalidwani1.png"]}
                alt="Khalid Wani with Partners"
                className="h-[400px] w-full rounded-[24px] object-cover  object-top transition duration-700 hover:scale-[1.03]"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute left-4 bottom-4 rounded-[22px] border border-white/10 bg-[#07111f]/82 px-5 py-3 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B0E4CC]">
                  Global Partnerships
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="reveal-right space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B0E4CC]">
              Building Together
            </p>
            <h3 className="font-cormorant text-[36px] md:text-[44px] leading-[1.1] text-[#f4efe5]">
              Partnerships that
              <br />
              <span className="text-[#B0E4CC]">drive excellence</span>
            </h3>
            <p className="text-white/66 text-sm md:text-[15px] leading-[2]">
              Khalid Wani collaborates with globally recognized brands to create 
              transformative business solutions and deliver exceptional value to 
              partners and clients alike.
            </p>
            
            {/* Partner stats like existing design */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#B0E4CC] font-cormorant">
                  15+
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Active Partners
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#B0E4CC] font-cormorant">
                  8+
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-1">
                  Years of Trust
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="reveal delay-2 mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#B0E4CC] px-8 text-[10px] font-bold uppercase tracking-[0.26em] text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B0E4CC]"
          >
            Explore Partnerships
          </a>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl">
            Collaboration / Innovation / Growth
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes revealLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes revealRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .reveal {
          animation: reveal 0.8s ease-out forwards;
        }
        
        .reveal-left {
          animation: revealLeft 0.8s ease-out forwards;
        }
        
        .reveal-right {
          animation: revealRight 0.8s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        .opacity-0 { opacity: 0; }
        .translate-y-10 { transform: translateY(10px); }
        .translate-y-0 { transform: translateY(0); }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}