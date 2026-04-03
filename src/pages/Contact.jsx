import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaEnvelope, 
  FaWhatsapp,
  FaGlobe,
  FaChartLine,
  FaUserTie,
  FaRegClock,
  FaPaperPlane,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaArrowRight,
  FaMicrophoneAlt,
  FaChalkboardTeacher,
  FaHandshake,
  FaBuilding,
  FaUsers,
  FaAward,
  FaPlay,
  FaPause
} from 'react-icons/fa';
import { MdBusiness, MdStars, MdOutlineVideoCall, MdLocationOn } from 'react-icons/md';
import { SiSubstack, SiCrunchbase } from 'react-icons/si';
import { IoSparkles } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    eventType: 'general'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
    success: false
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const contactFormRef = useRef(null);

  const heroImages = [
    { src: "/quote1.jpg", alt: "Khalid Wani Speaking" },
    { src: "/quote3.JPG", alt: "Khalid Wani Portrait" },
    { src: "/khalidwani1.png", alt: "Khalid Wani Event" },
    { src: "/quote2.jpg", alt: "Khalid Wani Mentoring" },
  ];

  // WhatsApp number (without + or spaces)
  const WHATSAPP_NUMBER = "919910609060";
  
  // Email for speaking engagements
  const SPEAKING_EMAIL = "speaking@khalidwani.com";

  // Scroll to contact form when URL has #contact-form hash
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      setTimeout(() => {
        if (contactFormRef.current) {
          contactFormRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 300);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % heroImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true, error: null });
    
    // Format message for WhatsApp
    const inquiryTypeMap = {
      general: 'General Inquiry',
      speaking: 'Speaking Engagement',
      mentorship: 'Mentorship Request',
      media: 'Media Interview',
      collaboration: 'Strategic Collaboration',
      investment: 'Investment Opportunity'
    };

    const message = `*New Contact Form Submission from Khalid Wani Website*

*━━━━━━━━━━━━━━━━━━━━*
*📋 INQUIRY DETAILS*
*━━━━━━━━━━━━━━━━━━━━*

*👤 Name:* ${formData.name}
*📧 Email:* ${formData.email}
*📞 Phone:* ${formData.phone || 'Not provided'}
*📌 Inquiry Type:* ${inquiryTypeMap[formData.eventType] || formData.eventType}
*📝 Subject:* ${formData.subject || 'Not provided'}

*━━━━━━━━━━━━━━━━━━━━*
*💬 MESSAGE*
*━━━━━━━━━━━━━━━━━━━━*

${formData.message}

*━━━━━━━━━━━━━━━━━━━━*
*📅 Submitted:* ${new Date().toLocaleString()}
*━━━━━━━━━━━━━━━━━━━━*`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Simulate form submission success
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', eventType: 'general' });
      setTimeout(() => {
        setFormStatus({ submitted: false, loading: false, success: false, error: null });
      }, 5000);
    }, 1000);
  };

  // Function to scroll to contact form
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Function to open Gmail with pre-filled speaking engagement email and scroll to form
  const openSpeakingEmail = () => {
    const subject = encodeURIComponent("Speaking Engagement Request - Khalid Wani");
    const body = encodeURIComponent(`
Dear Khalid Wani Team,

I am interested in booking Khalid Wani for a speaking engagement at our event.

Event Details:
- Event Name: [Please add event name]
- Event Date: [Please add date]
- Expected Audience Size: [Please add size]
- Location: [Please add location]
- Theme/Topic: [Please add theme]

Please let me know about availability and speaking fees.

Looking forward to your response.

Best regards,
[Your Name]
[Your Title]
[Your Organization]
[Your Phone Number]
    `);
    
    window.location.href = `mailto:${SPEAKING_EMAIL}?subject=${subject}&body=${body}`;
    
    // Also scroll to contact form as backup
    setTimeout(() => {
      scrollToContactForm();
    }, 100);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/khalidwani/', icon: FaInstagram, color: '#E4405F' },
    { name: 'Twitter', url: 'https://x.com/khalidwani', icon: FaTwitter, color: '#1DA1F2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/khalidwani', icon: FaLinkedin, color: '#0077B5' },
    { name: 'Facebook', url: 'https://www.facebook.com/KhalidWaniofficial', icon: FaFacebook, color: '#1877F2' },
    { name: 'Substack', url: 'https://khalidwani.substack.com', icon: SiSubstack, color: '#FF6719' },
    { name: 'Crunchbase', url: 'https://www.crunchbase.com/person/khalid-wani', icon: SiCrunchbase, color: '#0288D1' }
  ];

  const contactMethods = [
    { title: 'Speaking Engagements', person: 'Naina', email: 'speaking@khalidwani.com', whatsapp: '+91 9910609060', icon: FaMicrophoneAlt, desc: 'Book for keynotes & corporate events' },
    { title: 'Media & Press', email: 'media@khalidwani.com', icon: FaQuoteLeft, desc: 'Interviews & press collaborations' },
    { title: 'Strategic Partnerships', email: 'partners@khalidwani.com', icon: FaHandshake, desc: 'Collaboration & investment opportunities' },
    { title: 'Mentorship', email: 'mentor@khalidwani.com', whatsapp: '+91 9910609060', icon: FaChalkboardTeacher, desc: '1-on-1 mentorship for leaders' }
  ];

  return (
    <div className="min-h-screen bg-[#06070a] overflow-x-hidden">
      
      {/* Hero Section with Image Slider and Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: activeSlide === index ? 1 : 0, scale: activeSlide === index ? 1 : 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-[center_20%]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06070a]/50 via-[#06070a]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => { setActiveSlide(index); setIsAutoPlaying(false); }}
              className={`transition-all duration-300 rounded-full ${activeSlide === index ? 'w-12 h-2 bg-[#B0E4CC]' : 'w-2 h-2 bg-white/30'}`}
            />
          ))}
          <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="ml-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#B0E4CC]/20">
            {isAutoPlaying ? <FaPause className="text-white/70 text-xs" /> : <FaPlay className="text-white/70 text-xs" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-[#B0E4CC] mb-6">
              <span className="w-12 h-px bg-[#B0E4CC]" />
              <span className="flex items-center gap-2"><MdStars className="animate-pulse" /> Connect With Khalid Wani <MdStars className="animate-pulse" /></span>
              <span className="w-12 h-px bg-[#B0E4CC]" />
            </div>
            
            <h1 className="font-cormorant font-light leading-[1.1] text-white" style={{ fontSize: "clamp(48px, 8vw, 90px)" }}>
              Let's Create<br />
              <span className="text-[#B0E4CC]">Impact Together</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 font-light">
              For speaking engagements, strategic collaborations, or media inquiries, our team is here to assist you.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </motion.div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-6 hover:border-[#B0E4CC]/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="text-[#B0E4CC] text-xl" />
                </div>
                <h3 className="text-white font-cormorant text-xl font-light mb-2">{method.title}</h3>
                <p className="text-gray-400 text-xs mb-4">{method.desc}</p>
                {method.person && <p className="text-gray-300 text-xs"><span className="text-[#B0E4CC]">Contact:</span> {method.person}</p>}
                <a href={`mailto:${method.email}`} className="text-[#B0E4CC] text-xs hover:underline block">{method.email}</a>
                {method.whatsapp && <a href={`https://wa.me/${method.whatsapp.replace(/[^0-9]/g, '')}`} className="text-[#B0E4CC] text-xs hover:underline block">{method.whatsapp}</a>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form with Image Gallery - Added ID for scrolling */}
      <section id="contact-form" ref={contactFormRef} className="py-12 px-4 md:px-8 lg:px-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-8 hover:border-[#B0E4CC]/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#B0E4CC]" />
                <span className="text-[#B0E4CC] text-[10px] tracking-[0.2em] uppercase">Send a Message</span>
              </div>
              
              <h3 className="text-white font-cormorant text-3xl font-light mb-6">Let's Start a Conversation</h3>
              
              <AnimatePresence>
                {formStatus.success && (
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <p className="text-green-500 text-sm">Opening WhatsApp... Please send the message!</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm block mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm block mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm block mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm block mb-2">Inquiry Type *</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors">
                      <option value="general">General Inquiry</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="mentorship">Mentorship Request</option>
                      <option value="media">Media Interview</option>
                      <option value="collaboration">Strategic Collaboration</option>
                      <option value="investment">Investment Opportunity</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm block mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors" placeholder="Brief subject" />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm block mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B0E4CC] transition-colors resize-none" placeholder="Tell us about your inquiry..." />
                </div>
                
                <button type="submit" disabled={formStatus.loading} className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-[11px] font-medium tracking-[0.2em] uppercase py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  {formStatus.loading ? (
                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                  ) : (
                    <><FaWhatsapp className="text-base" /> Send via WhatsApp</>
                  )}
                </button>
              </form>
              
              <p className="text-gray-500 text-[9px] text-center mt-4">
                Your message will be sent directly to our WhatsApp. We'll respond within 24 hours.
              </p>
            </motion.div>

            {/* Right Side - Image Gallery & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#B0E4CC]/20 group">
                  <img src="/khalidwani1.png" alt="Khalid" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#B0E4CC]/20 group">
                  <img src="/khalidwani2.jpg" alt="Khalid" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="col-span-2 relative h-56 rounded-2xl overflow-hidden border border-[#B0E4CC]/20 group">
                  <img src="/profile2.jpg" alt="Khalid" className="w-full h-full object-cover object-[center_20%] transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <p className="text-[#B0E4CC] text-xs font-semibold uppercase">Global Speaker & Mentor</p>
                    <p className="text-white text-xs">Transforming businesses worldwide</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MdOutlineVideoCall className="text-[#B0E4CC] text-2xl animate-pulse" />
                  <h4 className="text-white font-semibold text-sm">Quick Response Guarantee</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">Our team responds to all inquiries within 24-48 hours. For urgent matters, please use WhatsApp.</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-4"><FaRegClock /> Response Time: 24-48 hours</div>
              </div>

              {/* Direct WhatsApp Contact */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/5 border border-[#25D366]/30 rounded-2xl p-6 text-center">
                <FaWhatsapp className="text-[#25D366] text-3xl mx-auto mb-3" />
                <h4 className="text-white font-semibold text-sm mb-2">Direct WhatsApp Contact</h4>
                <p className="text-gray-400 text-xs mb-3">For immediate assistance, message us directly</p>
                <a 
                  href="https://wa.me/919910609060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-[10px] font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition"
                >
                  <FaWhatsapp /> Chat Now
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-6">
                <h3 className="text-white font-cormorant text-2xl font-light mb-4">Connect on Social Media</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#06070a] rounded-lg hover:bg-[#B0E4CC]/5 transition border border-transparent hover:border-[#B0E4CC]/30 group">
                      <social.icon className="text-gray-400 text-lg group-hover:text-[#B0E4CC] transition" />
                      <span className="text-gray-400 text-xs group-hover:text-[#B0E4CC] transition">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#B0E4CC]/10 to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mx-auto mb-6">
            <FaUserTie className="text-[#B0E4CC] text-3xl" />
          </div>
          <h2 className="text-white font-cormorant text-3xl md:text-4xl font-light mb-4">Book Khalid Wani for Your Event</h2>
          <p className="text-gray-400 text-sm mb-8">With 100+ global keynotes delivered at prestigious institutions, bring world-class insights to your next event.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Request Speaking Engagement - Opens Gmail AND scrolls to form */}
            <button
              onClick={openSpeakingEmail}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#B0E4CC] text-[#06070a] text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-[#B0E4CC]/90 transition hover:-translate-y-1"
            >
              <FaEnvelope /> Request Speaking Engagement
            </button>
            
            {/* WhatsApp Inquiry - Scrolls to form */}
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#B0E4CC]/40 text-[#B0E4CC] text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:border-[#B0E4CC] hover:bg-[#B0E4CC]/5 transition hover:-translate-y-1"
            >
              <FaWhatsapp /> WhatsApp Inquiry
            </button>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes scroll { 0%,100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(8px); opacity: 1; } }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Contact;