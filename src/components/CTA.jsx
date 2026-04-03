import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaWhatsapp,
  FaEnvelope,
  FaCheckCircle,
  FaUser,
  FaEnvelope as FaEmail,
  FaPhone,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";
import { MdStars } from "react-icons/md";

// WhatsApp number
const WHATSAPP_NUMBER = "919910609060";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "consultation",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsPopupOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    const inquiryTypeMap = {
      consultation: "Consultation Booking",
      speaking: "Speaking Engagement",
      mentorship: "Mentorship Request",
      media: "Media Interview",
      collaboration: "Strategic Collaboration",
      investment: "Investment Opportunity",
      general: "General Inquiry",
    };

    const message = `*New Consultation Request from Khalid Wani Website - CTA Section*

*━━━━━━━━━━━━━━━━━━━━*
*📋 CONSULTATION DETAILS*
*━━━━━━━━━━━━━━━━━━━━*

*👤 Name:* ${formData.name}
*📧 Email:* ${formData.email}
*📞 Phone:* ${formData.phone || "Not provided"}
*📌 Inquiry Type:* ${inquiryTypeMap[formData.eventType] || formData.eventType}

*━━━━━━━━━━━━━━━━━━━━*
*💬 MESSAGE*
*━━━━━━━━━━━━━━━━━━━━*

${formData.message || "No message provided"}

*━━━━━━━━━━━━━━━━━━━━*
*📅 Submitted:* ${new Date().toLocaleString()}
*━━━━━━━━━━━━━━━━━━━━*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "consultation",
        message: "",
      });
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
        setIsPopupOpen(false);
      }, 3000);
    }, 1000);
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-28 py-16 sm:py-20 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 min-h-[350px]"
        style={{
          background: "linear-gradient(135deg, #B0E4CC 0%, #9AD4BC 50%, #B0E4CC 50%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 5s ease infinite",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float-particle"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 12 + 6}s`,
                }}
              />
            ))}
          </div>

          {/* Animated Circles */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 animate-pulse-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 animate-pulse-slow animation-delay-1000"
            style={{
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            }}
          />

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-shift" />

          {/* Shimmer Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              transform: "skewX(-20deg)",
              animation: "shimmer 3s infinite",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1">
          {/* Animated Badge */}
          <div
            className={`inline-block mb-4 sm:mb-6 transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-ink text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ink"></span>
              </span>
              Limited Availability
            </span>
          </div>

          {/* Main Heading with Animated Text */}
          <h2
            className={`font-cormorant font-light text-ink leading-[1.1] max-w-2xl transform transition-all duration-700 delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
            style={{ fontSize: "clamp(28px, 5vw, 62px)" }}
          >
            Ready to
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Transform</span>
              <svg
                className="absolute bottom-1 left-0 w-full h-3 -z-0"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 C40,12 80,4 120,8 C160,12 200,6 200,6"
                  stroke="rgba(8,8,8,0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5 5"
                />
              </svg>
            </span>
            <br />
            Your Business?
          </h2>

          {/* Animated Subtext */}
          <p
            className={`mt-3 sm:mt-4 text-ink/70 text-xs sm:text-sm max-w-md transform transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Join hundreds of successful entrepreneurs who have transformed their businesses with Khalid's guidance.
          </p>

          {/* Counter/Stats */}
          <div
            className={`flex gap-4 sm:gap-6 mt-6 sm:mt-8 transform transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-ink/80 text-xs">500+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-ink/80 text-xs">24h Response Time</span>
            </div>
          </div>
        </div>

        {/* CTA Button with Advanced Animation */}
        <div
          className={`relative z-10 transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative inline-flex items-center justify-center px-8 sm:px-11 py-4 sm:py-5 bg-ink text-cream font-medium uppercase tracking-[0.2em] text-[10px] sm:text-[11px] overflow-hidden transition-transform duration-300 cursor-pointer`}
            style={{
              borderRadius: "4px",
              boxShadow: isHovered ? "0 20px 35px -10px rgba(0,0,0,0.3)" : "none",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink-soft to-ink animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              Schedule Your Session
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>

            {/* Ripple Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
                animation: "ripple 1s ease-out",
              }}
            />
          </button>

          {/* Additional Info */}
          <p className="text-center mt-3 text-ink/50 text-[8px] sm:text-[9px] uppercase tracking-wider">
            Free 30-min consultation
          </p>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </section>

      {/* Professional Popup Modal for Consultation - Mobile Responsive */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsPopupOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Popup Container - Scrollable on Mobile */}
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#07111f] border border-[#B0E4CC]/30 shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#B0E4CC30 #ffffff0D",
                }}
              >
                {/* Sticky Close Button */}
                <div className="sticky top-2 sm:top-4 right-0 z-30 flex justify-end pr-3 sm:pr-4 pt-3 sm:pt-4">
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 group border border-white/10"
                  >
                    <FaTimes className="text-white/60 text-base sm:text-lg group-hover:text-[#B0E4CC] transition-colors" />
                  </button>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#B0E4CC]/10 blur-3xl animate-pulse" />
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#8dc0ff]/10 blur-3xl animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col md:grid md:grid-cols-2">
                  {/* Left Side - Background Image with Overlay Content - Hidden on Mobile */}
                  <div className="hidden md:block relative min-h-[500px] overflow-hidden">
                    {/* Background Image */}
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img
                        src="/wani.JPG"
                        alt="Khalid Wani"
                        className="w-full h-full object-cover object-[center_20%]"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/80 via-transparent to-transparent" />
                    </motion.div>

                    {/* Content Overlay on Image */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-10">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-2 mb-4"
                        >
                          <MdStars className="text-[#B0E4CC] text-xl animate-pulse" />
                          <span className="text-[#B0E4CC] text-[10px] font-bold uppercase tracking-[0.2em]">
                            Exclusive Opportunity
                          </span>
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="font-cormorant text-2xl lg:text-3xl xl:text-4xl font-light text-white mb-3"
                        >
                          Schedule Your
                          <br />
                          <span className="text-[#B0E4CC]">Free Consultation</span>
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-300 text-xs leading-relaxed mb-4 max-w-xs"
                        >
                          Get personalized strategic guidance from Khalid Wani
                          to transform your business and leadership approach.
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-2 mb-6"
                        >
                          <div className="flex items-center gap-2 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>60-Minute Strategy Session</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>Personalized Action Plan</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>100% Free Consultation</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Quick Contact Options */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-2"
                      >
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                          Quick Connect
                        </p>
                        <div className="flex gap-2">
                          <a
                            href="https://wa.me/919910609060"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/20 backdrop-blur-sm border border-[#25D366]/30 text-[#25D366] text-[9px] font-semibold hover:bg-[#25D366]/30 transition-all hover:scale-105"
                          >
                            <FaWhatsapp className="text-xs" /> WhatsApp
                          </a>
                          <a
                            href="mailto:speaking@khalidwani.com"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B0E4CC]/10 backdrop-blur-sm border border-[#B0E4CC]/30 text-[#B0E4CC] text-[9px] font-semibold hover:bg-[#B0E4CC]/20 transition-all hover:scale-105"
                          >
                            <FaEnvelope className="text-xs" /> Email
                          </a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#B0E4CC]/30 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#B0E4CC]/30 rounded-br-2xl" />
                  </div>

                  {/* Right Side - Contact Form */}
                  <div className="p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-[#0a1628] to-[#07111f]">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                      <div className="w-6 h-px bg-[#B0E4CC]" />
                      <span className="text-[#B0E4CC] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase">
                        Request Free Consultation
                      </span>
                    </div>

                    <h4 className="text-white font-cormorant text-xl sm:text-2xl font-light mb-4 md:mb-6">
                      Let's Start a Conversation
                    </h4>

                    <AnimatePresence>
                      {formStatus.success && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mb-4 p-2.5 sm:p-3 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />
                          <p className="text-green-500 text-[10px] sm:text-xs">
                            Opening WhatsApp... Please send the message!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="text-gray-400 text-[10px] sm:text-xs block mb-1 sm:mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] sm:text-xs" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-8 sm:px-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-[10px] sm:text-xs block mb-1 sm:mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <FaEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] sm:text-xs" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-8 sm:px-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-[10px] sm:text-xs block mb-1 sm:mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] sm:text-xs" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-8 sm:px-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-[10px] sm:text-xs block mb-1 sm:mb-1.5">
                          Inquiry Type *
                        </label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] sm:text-xs" />
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-8 sm:px-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors appearance-none"
                          >
                            <option value="consultation">Free Consultation</option>
                            <option value="speaking">Speaking Engagement</option>
                            <option value="mentorship">Mentorship Request</option>
                            <option value="media">Media Interview</option>
                            <option value="collaboration">Strategic Collaboration</option>
                            <option value="investment">Investment Opportunity</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-[10px] sm:text-xs block mb-1 sm:mb-1.5">
                          Message *
                        </label>
                        <div className="relative">
                          <FaCommentDots className="absolute left-3 top-3 text-gray-500 text-[10px] sm:text-xs" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            required
                            rows="3"
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-8 sm:px-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors resize-none"
                            placeholder="Tell us about your inquiry..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus.loading}
                        className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] py-2.5 sm:py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {formStatus.loading ? (
                          <>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaWhatsapp className="text-sm sm:text-base" />
                            Send via WhatsApp
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-gray-600 text-[7px] sm:text-[8px] text-center mt-3 sm:mt-4">
                      Your message will be sent directly to our WhatsApp. We respond within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        
        @keyframes grid-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-grid-shift {
          animation: grid-shift 20s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(176, 228, 204, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}