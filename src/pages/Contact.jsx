// contact.jsx
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
  FaCalendarAlt,
  FaRegClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaQuoteLeft,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import { MdBusiness, MdStars } from 'react-icons/md';
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

  const [activeField, setActiveField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true, error: null });
    
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        eventType: 'general'
      });
      
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          loading: false,
          success: false,
          error: null
        });
      }, 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 }
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/khalidwani/', icon: FaInstagram, color: '#E4405F', gradient: 'from-[#E4405F]/20 to-pink-500/20' },
    { name: 'Twitter', url: 'https://x.com/khalidwani', icon: FaTwitter, color: '#1DA1F2', gradient: 'from-[#1DA1F2]/20 to-blue-500/20' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/khalidwani', icon: FaLinkedin, color: '#0077B5', gradient: 'from-[#0077B5]/20 to-blue-600/20' },
    { name: 'Facebook', url: 'https://www.facebook.com/KhalidWaniofficial', icon: FaFacebook, color: '#1877F2', gradient: 'from-[#1877F2]/20 to-blue-700/20' },
    { name: 'Substack', url: 'https://khalidwani.substack.com', icon: SiSubstack, color: '#FF6719', gradient: 'from-[#FF6719]/20 to-orange-500/20' },
    { name: 'Crunchbase', url: 'https://www.crunchbase.com/person/khalid-wani', icon: SiCrunchbase, color: '#0288D1', gradient: 'from-[#0288D1]/20 to-cyan-500/20' }
  ];

  const contactMethods = [
    {
      title: 'For Queries & Approvals',
      contactPerson: 'Naina',
      email: 'contact@khalidwani.com',
      whatsapp: '+91 9910609060',
      note: 'WhatsApp preferred (No calls)',
      icon: FaEnvelope,
      description: 'For media inquiries, event coordination, and approval requests',
      gradient: 'from-[#B0E4CC]/10 to-emerald-500/10'
    },
    {
      title: 'General Inquiries',
      email: 'Info@khalidwani.com',
      website: 'www.khalidwani.com',
      icon: FaGlobe,
      description: 'For speaking engagements, mentorship, and strategic collaborations',
      gradient: 'from-[#B0E4CC]/10 to-blue-500/10'
    }
  ];

  const organizations = [
    {
      name: 'KWCG',
      description: 'Strategy | Advisory | Business Intelligence | Marketing',
      role: 'Founder & Group CEO',
      icon: MdBusiness,
      link: 'https://khalidwani.com',
      stats: '20+ Years Experience'
    },
    {
      name: 'One Capitall Ltd',
      description: 'NBFC - Investment & Credit Solutions',
      role: 'Board Member & Director',
      icon: FaChartLine,
      link: 'https://www.onecapitalllimited.com/',
      stats: '₹500Cr+ Managed'
    }
  ];

  const eventGuidelines = [
    'Must be addressed as "Shri Khalid Wani" in all official materials',
    'Social media handles must be tagged in all event-related posts',
    'All creatives and press releases require approval before publication',
    'Media interviews must be routed through the team',
    'Questions for interviews should be shared in advance for approval'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#06070a] via-[#080c12] to-[#06070a] overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#B0E4CC]/10"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, -100, null],
              x: [null, Math.random() * 100 - 50, null],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#B0E4CC]/5 blur-[120px] animate-pulse-slow" />
        <div 
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[100px] animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-[#B0E4CC] mb-6"
            >
              <span className="w-12 h-px bg-[#B0E4CC] animate-expand-width" />
              <span className="flex items-center gap-2">
                <MdStars className="animate-pulse" />
                Get in Touch
                <MdStars className="animate-pulse" />
              </span>
              <span className="w-12 h-px bg-[#B0E4CC] animate-expand-width" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-cormorant font-light leading-tight text-white"
              style={{
                fontSize: "clamp(48px, 8vw, 80px)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Create
              <br />
              <motion.span 
                className="text-[#B0E4CC] relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Impact Together
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 font-inter text-base leading-relaxed max-w-2xl mx-auto mt-6 font-light"
            >
              For speaking engagements, strategic collaborations, or media inquiries, 
              our team is here to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid with 3D Cards */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-8 hover:border-[#B0E4CC]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(135deg, ${method.gradient}, transparent)` }} />
                
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <method.icon className="text-[#B0E4CC] text-2xl" />
                </motion.div>
                
                <h3 className="text-white font-cormorant text-2xl font-light mb-3 tracking-wide">
                  {method.title}
                </h3>
                <p className="text-gray-400 font-inter text-sm mb-6 font-light">
                  {method.description}
                </p>
                
                {method.contactPerson && (
                  <motion.p 
                    className="text-gray-300 font-inter text-sm mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#B0E4CC]">Contact:</span> {method.contactPerson}
                  </motion.p>
                )}
                
                <motion.a 
                  href={`mailto:${method.email}`}
                  className="text-[#B0E4CC] font-inter text-sm hover:underline block mb-2 transition-all inline-flex items-center gap-2 group/link"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-xs" />
                  {method.email}
                  <FaArrowRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                </motion.a>
                
                {method.whatsapp && (
                  <motion.a 
                    href={`https://wa.me/${method.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B0E4CC] font-inter text-sm hover:underline block mb-2 inline-flex items-center gap-2 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp className="text-xs" />
                    {method.whatsapp}
                    <FaArrowRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                  </motion.a>
                )}
                
                {method.note && (
                  <p className="text-gray-500 font-inter text-xs mt-3 flex items-center gap-1">
                    <FaRegClock className="text-[#B0E4CC] animate-pulse" />
                    {method.note}
                  </p>
                )}
                
                {method.website && (
                  <motion.a 
                    href={`https://${method.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B0E4CC] font-inter text-sm hover:underline block inline-flex items-center gap-2 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <FaGlobe className="text-xs" />
                    {method.website}
                    <FaArrowRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form and Social Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#B0E4CC]/20 rounded-2xl p-8 hover:border-[#B0E4CC]/40 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent group-hover:animate-shimmer" />
              
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-8 h-px bg-[#B0E4CC]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">
                  Send a Message
                </span>
              </div>
              
              <h3 className="text-white font-cormorant text-3xl font-light mb-6">
                Let's Start a Conversation
              </h3>
              
              <AnimatePresence>
                {formStatus.success && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 text-xl animate-bounce" />
                    <p className="text-green-500 font-inter text-sm">Message sent successfully! We'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                      {field.charAt(0).toUpperCase() + field.slice(1)} {field !== 'phone' && '*'}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== 'phone'}
                      className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#B0E4CC] transition-all duration-300 hover:border-[#B0E4CC]/50"
                      placeholder={`Your ${field}`}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                    />
                  </div>
                ))}
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Inquiry Type *
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#B0E4CC] transition-all duration-300 cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="mentorship">Mentorship Request</option>
                    <option value="media">Media Interview</option>
                    <option value="collaboration">Strategic Collaboration</option>
                    <option value="investment">Investment Opportunity</option>
                  </motion.select>
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#B0E4CC] transition-all duration-300 hover:border-[#B0E4CC]/50"
                    placeholder="Brief subject"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#B0E4CC] transition-all duration-300 resize-none hover:border-[#B0E4CC]/50"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formStatus.loading}
                  variants={scaleOnHover}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#B0E4CC] text-[#06070a] font-inter text-[11px] font-medium tracking-[0.2em] uppercase py-3 rounded-lg hover:bg-[#B0E4CC]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 w-0 bg-white/20 group-hover/btn:w-full transition-all duration-500" />
                  {formStatus.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#06070a] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="bg-[#111111] border border-[#B0E4CC]/20 rounded-2xl p-8 hover:border-[#B0E4CC]/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-8 h-px bg-[#B0E4CC]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">
                    Connect
                  </span>
                </div>
                <h3 className="text-white font-cormorant text-2xl font-light mb-6">
                  Follow on Social Media
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={scaleOnHover}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative flex items-center gap-3 p-3 bg-[#06070a] rounded-lg hover:bg-[#B0E4CC]/5 transition-all duration-300 border border-transparent hover:border-[#B0E4CC]/30 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${social.gradient}, transparent)` }} />
                      <social.icon className="text-gray-400 text-lg group-hover:text-[#B0E4CC] transition-colors relative z-10" />
                      <span className="text-gray-400 font-inter text-xs group-hover:text-[#B0E4CC] transition-colors relative z-10">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Organizations */}
              <div className="bg-[#111111] border border-[#B0E4CC]/20 rounded-2xl p-8 hover:border-[#B0E4CC]/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-8 h-px bg-[#B0E4CC]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">
                    Leadership
                  </span>
                </div>
                <h3 className="text-white font-cormorant text-2xl font-light mb-6">
                  Associated Organizations
                </h3>
                <div className="space-y-6">
                  {organizations.map((org, index) => (
                    <motion.div 
                      key={index} 
                      className="group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                        >
                          <org.icon className="text-[#B0E4CC] text-lg" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-white font-cormorant text-lg font-light mb-1">
                            {org.name}
                          </h4>
                          <p className="text-[#B0E4CC] font-inter text-xs mb-2 tracking-wide">
                            {org.role}
                          </p>
                          <p className="text-gray-400 font-inter text-xs leading-relaxed font-light">
                            {org.description}
                          </p>
                          <motion.div 
                            className="mt-2 inline-flex items-center gap-1 text-[#B0E4CC]/50 text-[10px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <FaStar className="text-[8px]" />
                            <span>{org.stats}</span>
                          </motion.div>
                        </div>
                      </div>
                      {index < organizations.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-[#B0E4CC]/20 to-transparent mt-6"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B0E4CC]/5 to-transparent border border-[#B0E4CC]/20 rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#B0E4CC]/5 blur-3xl group-hover:blur-2xl transition-all duration-700" />
            
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaQuoteLeft className="text-[#B0E4CC] text-2xl opacity-50" />
              </motion.div>
              <div className="w-12 h-px bg-[#B0E4CC]" />
              <span className="text-[#B0E4CC] font-inter text-[10px] tracking-[0.2em] uppercase">
                Professional Protocol
              </span>
            </div>
            
            <h3 className="text-white font-cormorant text-3xl font-light mb-8">
              Event & Media Guidelines
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {eventGuidelines.map((guideline, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-5 h-5 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                  >
                    <FaCheckCircle className="text-[#B0E4CC] text-[10px]" />
                  </motion.div>
                  <p className="text-gray-300 font-inter text-sm leading-relaxed font-light">
                    {guideline}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#B0E4CC]/5 to-[#06070a] border border-[#B0E4CC]/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B0E4CC]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <motion.div 
            className="w-16 h-16 rounded-full bg-[#B0E4CC]/10 flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaUserTie className="text-[#B0E4CC] text-3xl" />
          </motion.div>
          
          <h2 className="text-white font-cormorant text-3xl md:text-4xl font-light mb-4">
            Book Khalid Wani for Your Event
          </h2>
          
          <p className="text-gray-400 font-inter text-sm mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            With over 100+ global keynotes and sessions delivered at prestigious institutions, 
            bring world-class insights to your next event.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:contact@khalidwani.com"
              variants={scaleOnHover}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#B0E4CC] text-[#06070a] font-inter text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-[#B0E4CC]/90 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 w-0 bg-white/20 group-hover/btn:w-full transition-all duration-500" />
              <FaEnvelope className="relative z-10" />
              <span className="relative z-10">Request Speaking Engagement</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/919919069060"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleOnHover}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#B0E4CC]/40 text-[#B0E4CC] font-inter text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:border-[#B0E4CC] hover:bg-[#B0E4CC]/5 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <FaWhatsapp className="relative z-10" />
              <span className="relative z-10">WhatsApp Inquiry</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;