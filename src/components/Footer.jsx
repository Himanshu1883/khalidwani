import { FOOTER_LINKS, SOCIAL_LINKS } from "../data/content";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0A0F1A] via-[#0B1220] to-[#07111f] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B0E4CC]/10 to-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-500/10 to-[#B0E4CC]/10 blur-[120px] animate-pulse delay-1000" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#B0E4CC]/20 animate-float-particle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent animate-shimmer" />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-12 lg:mb-20">
            
            {/* Brand Section - Takes 4 columns */}
            <div className="lg:col-span-4 space-y-5">
              <div className="relative">
                <a
                  href="#"
                  className="inline-block group"
                >
                  <div className="relative">
                    <span className="font-cormorant text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white group-hover:text-[#B0E4CC] transition-all duration-500">
                      Khalid <span className="bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] bg-clip-text text-transparent">Wani</span>
                    </span>
                    {/* Animated Underline */}
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B0E4CC] to-transparent group-hover:w-full transition-all duration-500" />
                  </div>
                </a>
                <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-[#B0E4CC] animate-ping" />
                <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-[#B0E4CC]" />
              </div>
              
              <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed max-w-sm hover:text-gray-300 transition-colors duration-300">
                Global consultant, investor, and mentor with 20+ years empowering
                entrepreneurs to reach their fullest potential.
              </p>
              
              {/* Contact Info with Icons */}
              <div className="space-y-3 pt-2">
                <a href="mailto:hello@khalidwani.com" className="flex items-center gap-3 text-gray-500 hover:text-[#B0E4CC] transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#B0E4CC]/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">hello@khalidwani.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Link Columns - Each takes 2 columns on desktop */}
            {Object.entries(FOOTER_LINKS).map(([heading, links], idx) => (
              <div key={heading} className="lg:col-span-2 group">
                <h4 className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6 relative inline-block">
                  {heading}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#B0E4CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIdx) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-[13px] sm:text-[14px] text-gray-500 hover:text-[#B0E4CC] transition-all duration-300 no-underline hover:translate-x-2 inline-flex items-center gap-2 group/link"
                        style={{ transitionDelay: `${linkIdx * 50}ms` }}
                      >
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Premium Newsletter Section */}
          <div className="relative my-12 sm:my-16 lg:my-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/5 via-transparent to-[#B0E4CC]/5 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-6 sm:p-8 md:p-10 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#B0E4CC]/20 to-transparent animate-shimmer" />
              
              <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    <svg className="w-5 h-5 text-[#B0E4CC] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                      The Inner Circle
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm max-w-md">
                    Join 10,000+ leaders receiving weekly insights on strategy, leadership, and exponential growth.
                  </p>
                </div>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full sm:w-80 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B0E4CC] focus:ring-2 focus:ring-[#B0E4CC]/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B0E4CC]/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#B0E4CC]/25 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Subscribe
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </form>
              </div>
              
              {/* Success Message */}
              {isSubscribed && (
                <div className="absolute top-4 right-4 animate-slide-down">
                  <div className="bg-[#B0E4CC] text-[#07111f] px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    ✓ Subscribed successfully!
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar - Premium Design */}
          <div className="pt-8 sm:pt-10 border-t border-white/[0.05]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-center">
                <p className="text-[11px] sm:text-[12px] text-gray-500">
                  © 2026 Khalid Wani · KWCG. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-[11px] sm:text-[12px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                    Privacy
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                  </a>
                  <a href="#" className="text-[11px] sm:text-[12px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                    Terms
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                  </a>
                  <a href="#" className="text-[11px] sm:text-[12px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                    Cookies
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                  </a>
                </div>
              </div>
              
              {/* Enhanced Social Links with Icons */}
              <div className="flex gap-4 sm:gap-5">
                {SOCIAL_LINKS.slice(0, 3).map((s, idx) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#B0E4CC] group-hover:border-[#B0E4CC] group-hover:scale-110">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase text-gray-400 group-hover:text-[#07111f] transition-colors">
                        {s.label[0]}
                      </span>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-[#B0E4CC] text-[#07111f] px-2 py-1 rounded text-[10px] font-semibold whitespace-nowrap">
                        {s.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}