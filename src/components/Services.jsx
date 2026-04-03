import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../data/content";
import SectionLabel from "./SectionLabel";
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
  FaCalendarCheck,
} from "react-icons/fa";
import { MdStars } from "react-icons/md";

const SERVICE_BACKGROUNDS = [
  "/khalidwani1.png",
  "/khalidwani2.jpg",
  "/profile2.jpg",
  "/khalidwani5.jpeg",
  "/profile.jpg",
  "/quote2.jpg",
];

const IMAGE_POSITIONS = [
  "object-[62%_center]",
  "object-[70%_center]",
  "object-[52%_top]",
  "object-[68%_center]",
  "object-[62%_center]",
  "object-[60%_center]",
];

// WhatsApp number
const WHATSAPP_NUMBER = "919910609060";

export default function Services() {
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

    const message = `*New Consultation Request from Khalid Wani Website*

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
        id="services"
        className="bg-[#07111f] px-6 py-24 md:px-10 lg:px-16 lg:py-28 overflow-x-hidden"
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="reveal max-w-3xl w-full">
              <SectionLabel>What Khalid Offers</SectionLabel>
              <h2
                className="font-cormorant font-light leading-[0.96] text-[#f4efe5] break-words"
                style={{ fontSize: "clamp(38px, 4.8vw, 72px)" }}
              >
                Master every
                <br />
                business challenge.
              </h2>
            </div>

            <div className="reveal-right delay-1 w-full max-w-2xl lg:text-right">
              <p className="text-sm leading-[1.95] text-white/62 md:text-[15px] break-words">
                Strategic support across training, investing, coaching,
                speaking, consulting, and media, presented in a darker
                editorial system that stays aligned with the hero while keeping
                every card clear.
              </p>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="mt-6 inline-flex h-14 items-center justify-center rounded-full bg-[#B0E4CC] px-6 sm:px-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9ed4bb] whitespace-nowrap cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                image={SERVICE_BACKGROUNDS[index % SERVICE_BACKGROUNDS.length]}
                imagePosition={
                  IMAGE_POSITIONS[index % IMAGE_POSITIONS.length]
                }
                delay={index % 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Popup Modal for Consultation */}
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

            {/* Popup Container */}
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-5xl bg-gradient-to-br from-[#0a1628] to-[#07111f] rounded-3xl border border-[#B0E4CC]/30 shadow-2xl overflow-hidden pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 group border border-white/10"
                >
                  <FaTimes className="text-white/60 text-lg group-hover:text-[#B0E4CC] transition-colors" />
                </button>

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
                          Book Your
                          <br />
                          <span className="text-[#B0E4CC]">Consultation</span>
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs"
                        >
                          Get personalized strategic guidance from Khalid Wani
                          to transform your business and leadership approach.
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-3 mb-8"
                        >
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>60-Minute Strategy Session</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>Personalized Action Plan</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B0E4CC]" />
                            <span>Post-Consultation Support</span>
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
                        Request Consultation
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
                            <option value="consultation">
                              Consultation Booking
                            </option>
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
                            <option value="general">General Inquiry</option>
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
    </>
  );
}

function ServiceCard({ service, image, imagePosition, delay }) {
  const delayClass =
    delay === 0 ? "delay-1" : delay === 1 ? "delay-2" : "delay-3";

  return (
    <article
      className={`reveal ${delayClass} group relative min-h-[340px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#091321] transition duration-500 hover:-translate-y-1 hover:border-[#8dc0ff]/35`}
    >
      {/* Image - Full brightness, no darkening */}
      <img
        src={image}
        alt={service.title}
        className={`absolute inset-0 h-full w-full object-cover object-[center_20%] ${imagePosition} transition duration-700 group-hover:scale-[1.04]`}
      />

      {/* Lighter gradient overlays - removed heavy dark gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,16,0.4)_0%,rgba(3,8,16,0.3)_42%,rgba(3,8,16,0.15)_68%,rgba(3,8,16,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,16,0.05)_0%,rgba(3,8,16,0.1)_38%,rgba(3,8,16,0.25)_100%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8dc0ff]/60 to-transparent opacity-80" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-sm text-[#B0E4CC] backdrop-blur-xl">
            {service.icon}
          </div>
          <span className="font-cormorant text-[28px] leading-none text-white/90 shrink-0">
            {service.number}
          </span>
        </div>

        <div className="w-full">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B0E4CC] break-words">
            Signature Service
          </p>
          <h3 className="font-cormorant text-[28px] md:text-[32px] leading-[0.98] text-[#f4efe5] break-words">
            {service.title}
          </h3>
          <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] leading-[1.85] text-white/90 break-words">
            {service.desc}
          </p>
        </div>
      </div>
    </article>
  );
}