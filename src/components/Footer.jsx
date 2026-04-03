import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaQuoteRight,
  FaStar,
  FaRegClock
} from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle navigation to home page sections from any page
  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home page first
      navigate("/");
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Increased delay to ensure page loads
    } else {
      // If already on home page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Function to handle navigation to Contact page with form
  const handleContactClick = () => {
    navigate("/contact#contact-form");
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/khalidwani", color: "#E4405F" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@wanikhalid", color: "#FF0000" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/khalidwani", color: "#0077B5" },
    { name: "X / Twitter", icon: FaTwitter, url: "https://x.com/khalidwani", color: "#1DA1F2" },
  ];

  const navLinks = [
    { label: "About", href: "/about", sectionId: null, isPage: true, onClick: null },
    { label: "Services", href: "/#services", sectionId: "services", isPage: false, onClick: () => handleNavClick("services") },
    { label: "Talks", href: "/#talks", sectionId: "talks", isPage: false, onClick: () => handleNavClick("talks") },
    { label: "Testimonials", href: "/#results", sectionId: "results", isPage: false, onClick: () => handleNavClick("results") },
    { label: "Contact", href: "/contact#contact-form", sectionId: null, isPage: false, onClick: handleContactClick },
  ];

  const stats = [
    { value: "100+", label: "Speaking Sessions", icon: FaStar },
    { value: "50+", label: "Companies Backed", icon: MdStars },
    { value: "30M+", label: "Audience Reached", icon: FaRegClock },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0A0F1A] via-[#0B1220] to-[#050a12] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#B0E4CC]/10 to-blue-500/10 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-500/10 to-[#B0E4CC]/10 blur-[120px]"
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Diagonal Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerDiagonal" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M0 50 L50 0" stroke="#B0E4CC" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerDiagonal)" />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#B0E4CC]"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0, 50, 0],
                x: [0, 30, -30, 20, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Gradient Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent"
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            {/* Left Column - Brand Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Logo */}
              <div className="relative">
                <a href="/" className="inline-block group">
                  <div className="relative">
                    <span className="font-cormorant text-4xl sm:text-5xl tracking-wide text-white group-hover:text-[#B0E4CC] transition-all duration-500">
                      Khalid <span className="bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] bg-clip-text text-transparent">Wani</span>
                    </span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#B0E4CC] to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </a>
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B0E4CC] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B0E4CC]"></span>
                  </span>
                </div>
              </div>
              
              <p className="text-[14px] text-gray-400 leading-relaxed max-w-sm hover:text-gray-300 transition-colors duration-300">
                Global consultant, investor, and mentor with 20+ years empowering
                entrepreneurs to reach their fullest potential.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 pt-2">
                <motion.a 
                  href="mailto:hello@khalidwani.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B0E4CC] transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#B0E4CC]/10 transition-all duration-300 group-hover:scale-110">
                    <FaEnvelope className="w-4 h-4 text-[#B0E4CC]" />
                  </div>
                  <span className="text-sm">hello@khalidwani.com</span>
                </motion.a>
                
                <motion.div 
                  className="flex items-center gap-3 text-gray-400"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#B0E4CC]" />
                  </div>
                  <span className="text-sm">Mumbai, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Column - Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6 relative inline-block">
                Navigate
                <motion.div 
                  className="absolute -bottom-2 left-0 h-0.5 bg-[#B0E4CC]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link, idx) => (
                  <li key={link.label}>
                    {link.isPage ? (
                      <motion.a
                        href={link.href}
                        className="text-[13px] text-gray-500 hover:text-[#B0E4CC] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
                        whileHover={{ x: 8 }}
                      >
                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 text-[#B0E4CC]">→</span>
                        {link.label}
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={link.onClick}
                        className="text-[13px] text-gray-500 hover:text-[#B0E4CC] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer bg-transparent border-none w-full text-left"
                        whileHover={{ x: 8 }}
                      >
                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 text-[#B0E4CC]">→</span>
                        {link.label}
                      </motion.button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - Social Media */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6 relative inline-block">
                Follow
                <motion.div 
                  className="absolute -bottom-2 left-0 h-0.5 bg-[#B0E4CC]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                      style={{ 
                        boxShadow: `0 0 20px ${social.color}20`,
                      }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#B0E4CC] transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      <div className="bg-[#B0E4CC] text-[#07111f] px-2 py-1 rounded text-[9px] font-semibold">
                        {social.name}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] font-bold uppercase tracking-wider text-gray-400">
                  ISO Certified
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] font-bold uppercase tracking-wider text-gray-400">
                  Global Award Winner
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative my-12 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 via-transparent to-[#B0E4CC]/20 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
                {/* Left Side - Stats */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                    <FaQuoteRight className="text-[#B0E4CC] text-lg" />
                    <h3 className="text-white text-lg font-semibold tracking-wide">Impact By Numbers</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mx-auto mb-3">
                          <stat.icon className="text-[#B0E4CC] text-xl" />
                        </div>
                        <p className="text-2xl font-bold text-[#B0E4CC] font-cormorant">{stat.value}</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden group">
                    <img 
                      src="/quote1.jpg" 
                      alt="Khalid Wani" 
                      className="w-full h-48 object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-semibold">Khalid Wani</p>
                      <p className="text-[#B0E4CC] text-[10px] uppercase tracking-wider">Global Consultant & Mentor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/5 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-[10px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#" className="text-[10px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#" className="text-[10px] text-gray-500 hover:text-[#B0E4CC] transition-colors relative group">
                  Cookie Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              
              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                © 2026 Khalid Wani · KWCG. 
                <span className="flex items-center gap-1 ml-1">
                  Made with <FaHeart className="text-[#B0E4CC] text-[9px] animate-pulse" /> in India
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#B0E4CC] text-[#07111f] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </footer>
  );
}