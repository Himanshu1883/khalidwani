import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import SectionLabel from "./SectionLabel";
import {
  FaTrophy,
  FaStar,
  FaChartLine,
  FaMedal,
  FaArrowRight,
  FaQuoteRight,
  FaUserTie,
  FaTimes,
  FaWhatsapp,
  FaEnvelope,
  FaCheckCircle,
  FaRegClock,
  FaUser,
  FaEnvelope as FaEmail,
  FaPhone,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";
import { MdStars } from "react-icons/md";

const CONSULTED_COMPANIES = [
  { name: "HYUNDAI", logo: "/hyundai.png", color: "#00A1E0", delay: 0 },
  { name: "KPMG", logo: "/kpmg.png", color: "#00338D", delay: 1 },
  { name: "DESQWORX", logo: "/desq.jpg", color: "#B0E4CC", delay: 2 },
];

const RECOGNITIONS = [
  {
    name: "Forbes",
    icon: FaTrophy,
    color: "#B0E4CC",
    description: "Top Leadership",
    value: "Top 50",
    year: "2024",
    bgImage: "/profile.jpg",
  },
  {
    name: "FORTUNE",
    icon: FaStar,
    color: "#8dc0ff",
    description: "Global Impact",
    value: "Best 100",
    year: "2023",
    bgImage: "/one.jpg",
  },
  {
    name: "Inc.",
    icon: FaChartLine,
    color: "#B0E4CC",
    description: "Growth Champion",
    value: "5000 List",
    year: "2024",
    bgImage: "/profile.jpg",
  },
  {
    name: "SUCCESS",
    icon: FaMedal,
    color: "#f4efe5",
    description: "Excellence",
    value: "Hall of Fame",
    year: "2023",
    bgImage: "/one.jpg",
  },
];

const TESTIMONIALS = [
  {
    text: "Khalid's strategic insights transformed our business model completely.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
  },
  {
    text: "A visionary consultant who delivers beyond expectations.",
    author: "Michael Chen",
    role: "Director, Global Finance",
  },
  {
    text: "The most impactful business mentor I've ever worked with.",
    author: "Elena Rodriguez",
    role: "Founder, StartupX",
  },
];

// WhatsApp number
const WHATSAPP_NUMBER = "919910609060";

export default function ConsultedFor() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRecognition, setActiveRecognition] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "general",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const popupRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRecognition((prev) => (prev + 1) % RECOGNITIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
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

  const handleImageError = (companyName) => {
    setImageErrors((prev) => ({ ...prev, [companyName]: true }));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    const inquiryTypeMap = {
      general: "General Inquiry",
      speaking: "Speaking Engagement",
      mentorship: "Mentorship Request",
      media: "Media Interview",
      collaboration: "Strategic Collaboration",
      investment: "Investment Opportunity",
    };

    const message = `*New Contact Form Submission from Khalid Wani Website*

*━━━━━━━━━━━━━━━━━━━━*
*📋 INQUIRY DETAILS*
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
        eventType: "general",
        message: "",
      });
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
        setIsPopupOpen(false);
      }, 3000);
    }, 1000);
  };

  const slideUpSequence = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  const bounceIn = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
    },
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
        id="consulted"
        className="relative px-6 py-20 md:px-10 lg:px-16 overflow-x-hidden"
      >
        {/* Background Banner Image */}
        <div className="absolute inset-0 -z-10">
          <motion.img
            src="/quote5.JPG"
            alt="Banner Background"
            className="w-full h-full object-cover object-center"
            style={{
              x: useTransform(mouseX, (x) => -x / 50),
              y: useTransform(mouseY, (y) => -y / 50),
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#07111f]/70 via-[#0a1628]/50 to-[#07111f]/70" />
        </div>

        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #B0E4CC 0px, #B0E4CC 2px, transparent 2px, transparent 8px)`,
            }}
          />
          <motion.div
            animate={{ y: [0, -50, 0], x: [0, 30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border border-[#B0E4CC]/10 rounded-2xl"
          />
          <motion.div
            animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-10 w-24 h-24 border border-[#8dc0ff]/10 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B0E4CC]/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-[#B0E4CC] to-transparent mb-4"
            />
            <motion.div
              custom={0}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={slideUpSequence}
            >
              <SectionLabel>Trusted By Industry Leaders</SectionLabel>
            </motion.div>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={slideUpSequence}
              className="font-cormorant font-light text-[#f4efe5] mt-4 max-w-3xl"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.2" }}
            >
              Consulted top companies
              <span className="text-[#B0E4CC] block">
                and colleges worldwide.
              </span>
            </motion.h2>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-7">
              {/* Companies */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {CONSULTED_COMPANIES.map((company, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={bounceIn}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative"
                    onMouseMove={handleMouseMove}
                  >
                    <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-[#B0E4CC]/30 overflow-hidden">
                      <motion.div
                        className="absolute w-32 h-32 rounded-full bg-[#B0E4CC]/20 blur-2xl"
                        style={{
                          x: useTransform(mouseX, (x) => x - 64),
                          y: useTransform(mouseY, (y) => y - 64),
                          opacity: 0,
                        }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm">
                          {!imageErrors[company.name] ? (
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-16 h-16 object-contain"
                              onError={() => handleImageError(company.name)}
                            />
                          ) : (
                            <span className="text-3xl font-bold text-[#B0E4CC]">
                              {company.name[0]}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-bold uppercase tracking-wider text-white/80 group-hover:text-[#B0E4CC] transition-colors">
                          {company.name}
                        </p>
                        <div className="w-12 h-px bg-gradient-to-r from-[#B0E4CC] to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={rotateIn}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center overflow-hidden">
                    <div className="text-3xl md:text-4xl font-bold text-[#B0E4CC] font-cormorant">
                      100+
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mt-2">
                      Speaking Sessions
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B0E4CC] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8dc0ff]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center overflow-hidden">
                    <div className="text-3xl md:text-4xl font-bold text-[#8dc0ff] font-cormorant">
                      30M+
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mt-2">
                      Audience Reached
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8dc0ff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Recognition */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={rotateIn}
                className="relative"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#B0E4CC] rounded-full blur-xl" />
                <div className="relative rounded-2xl p-6 border border-white/10 overflow-hidden backdrop-blur-md min-h-[380px]">
                  <img
                    src={RECOGNITIONS[activeRecognition].bgImage}
                    alt="Recognition Background"
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-75 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07111f]/80 via-[#07111f]/50 to-[#07111f]/85" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-px bg-[#B0E4CC]" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B0E4CC]">
                        Global Recognition
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex p-4 rounded-full bg-white/[0.15] backdrop-blur-sm mb-4">
                        {RECOGNITIONS[activeRecognition].icon({
                          className: "text-4xl",
                          style: {
                            color: RECOGNITIONS[activeRecognition].color,
                          },
                        })}
                      </div>
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{ color: RECOGNITIONS[activeRecognition].color }}
                      >
                        {RECOGNITIONS[activeRecognition].name}
                      </h3>
                      <p className="text-sm text-white/80">
                        {RECOGNITIONS[activeRecognition].description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/10">
                        <span className="text-[8px] font-bold uppercase tracking-wider text-[#B0E4CC]">
                          {RECOGNITIONS[activeRecognition].value}
                        </span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-[8px] text-white/50">
                          {RECOGNITIONS[activeRecognition].year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRecognition}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none"
                    />
                  </AnimatePresence>
                  <div className="flex justify-center gap-2 mt-6 relative z-10">
                    {RECOGNITIONS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveRecognition(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          activeRecognition === idx
                            ? "w-6 h-1.5 bg-[#B0E4CC]"
                            : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={slideUpSequence}
                custom={2}
                className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                <FaQuoteRight className="absolute text-6xl text-[#B0E4CC]/10 top-4 right-4" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <p className="text-base md:text-lg leading-relaxed text-[#f4efe5] mb-4 italic">
                      "{TESTIMONIALS[activeTestimonial].text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B0E4CC] to-[#8dc0ff] flex items-center justify-center">
                        <FaUserTie className="text-[#07111f] text-sm" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#B0E4CC]">
                          {TESTIMONIALS[activeTestimonial].author}
                        </p>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">
                          {TESTIMONIALS[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center gap-1 mt-6">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeTestimonial === idx
                          ? "w-6 bg-[#B0E4CC]"
                          : "w-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Call to Action - Opens Popup */}
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={bounceIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between bg-gradient-to-r from-[#B0E4CC] to-[#8dc0ff] rounded-2xl p-5 group cursor-pointer"
              >
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#07111f]/60">
                    Let's Connect
                  </p>
                  <p className="text-sm font-bold text-[#07111f]">
                    Work with Khalid Wani →
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#07111f]/20 flex items-center justify-center group-hover:bg-[#07111f]/30 transition-colors">
                  <FaArrowRight className="text-[#07111f] text-sm" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Popup Modal - Made Scrollable */}
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

            {/* Popup Container - Scrollable */}
            <motion.div
              ref={popupRef}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#07111f] border border-[#B0E4CC]/30 shadow-2xl pointer-events-auto scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-[#B0E4CC]/30"
                onClick={(e) => e.stopPropagation()}
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#B0E4CC30 #ffffff0D",
                }}
              >
                {/* Close Button - Sticky */}
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="sticky top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 group border border-white/10 float-right mr-4 mt-4"
                >
                  <FaTimes className="text-white/60 text-lg group-hover:text-[#B0E4CC] transition-colors" />
                </button>

                {/* Clear float */}
                <div className="clear-both" />

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#B0E4CC]/10 blur-3xl animate-pulse" />
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#8dc0ff]/10 blur-3xl animate-pulse" />
                </div>

                <div className="relative z-10 grid md:grid-cols-2">
                  {/* Left Side - Background Image with Overlay Content */}
                  <div className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
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
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-2 mb-6"
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
                          className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4"
                        >
                          Work With
                          <br />
                          <span className="text-[#B0E4CC]">Khalid Wani</span>
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs"
                        >
                          Join the ranks of industry leaders who have
                          transformed their businesses with Khalid's strategic
                          guidance.
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-3 mb-8"
                        >
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>100+ Global Keynotes Delivered</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>Trusted by Fortune 500 Companies</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>30M+ Audience Reached Worldwide</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Quick Contact Options */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-3"
                      >
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                          Quick Connect
                        </p>
                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/919910609060"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 backdrop-blur-sm border border-[#25D366]/30 text-[#25D366] text-[10px] font-semibold hover:bg-[#25D366]/30 transition-all hover:scale-105"
                          >
                            <FaWhatsapp /> WhatsApp
                          </a>
                          <a
                            href="mailto:speaking@khalidwani.com"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#B0E4CC]/10 backdrop-blur-sm border border-[#B0E4CC]/30 text-[#B0E4CC] text-[10px] font-semibold hover:bg-[#B0E4CC]/20 transition-all hover:scale-105"
                          >
                            <FaEnvelope /> Email
                          </a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B0E4CC]/30 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#B0E4CC]/30 rounded-br-2xl" />
                  </div>

                  {/* Right Side - Contact Form */}
                  <div className="p-8 md:p-10 bg-gradient-to-br from-[#0a1628] to-[#07111f]">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-6 h-px bg-[#B0E4CC]" />
                      <span className="text-[#B0E4CC] text-[9px] tracking-[0.2em] uppercase">
                        Send a Message
                      </span>
                    </div>

                    <h4 className="text-white font-cormorant text-2xl font-light mb-6">
                      Let's Start a Conversation
                    </h4>

                    <AnimatePresence>
                      {formStatus.success && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mb-4 p-3 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <p className="text-green-500 text-xs">
                            Opening WhatsApp... Please send the message!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="text-gray-400 text-xs block mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-10 py-2.5 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-xs block mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <FaEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-10 py-2.5 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-xs block mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-10 py-2.5 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-xs block mb-1.5">
                          Inquiry Type *
                        </label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-10 py-2.5 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors appearance-none"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="speaking">
                              Speaking Engagement
                            </option>
                            <option value="mentorship">
                              Mentorship Request
                            </option>
                            <option value="media">Media Interview</option>
                            <option value="collaboration">
                              Strategic Collaboration
                            </option>
                            <option value="investment">
                              Investment Opportunity
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-xs block mb-1.5">
                          Message *
                        </label>
                        <div className="relative">
                          <FaCommentDots className="absolute left-3 top-3 text-gray-500 text-xs" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            required
                            rows="3"
                            className="w-full bg-[#06070a] border border-gray-700 rounded-xl px-10 py-2.5 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors resize-none"
                            placeholder="Tell us about your inquiry..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus.loading}
                        className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-[10px] font-semibold uppercase tracking-[0.15em] py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {formStatus.loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaWhatsapp className="text-base" />
                            Send via WhatsApp
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-gray-600 text-[8px] text-center mt-4">
                      Your message will be sent directly to our WhatsApp. We
                      respond within 24 hours.
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
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(176, 228, 204, 0.3);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(176, 228, 204, 0.5);
        }
      `}</style>
    </>
  );
}