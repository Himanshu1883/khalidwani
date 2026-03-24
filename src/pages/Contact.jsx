// contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  FaQuoteLeft
} from 'react-icons/fa';
import { SiSubstack, SiCrunchbase } from 'react-icons/si';
import { MdBusiness } from 'react-icons/md';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true, error: null });
    
    // Simulate form submission - Replace with your actual form handling
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/khalidwani/',
      icon: FaInstagram,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'Twitter (X)',
      url: 'https://x.com/khalidwani',
      icon: FaTwitter,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khalidwani',
      icon: FaLinkedin,
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/KhalidWaniofficial',
      icon: FaFacebook,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'Substack',
      url: 'https://khalidwani.substack.com',
      icon: SiSubstack,
      color: 'hover:text-[#FF6719]'
    },
    {
      name: 'Crunchbase',
      url: 'https://www.crunchbase.com/person/khalid-wani',
      icon: SiCrunchbase,
      color: 'hover:text-[#0288D1]'
    }
  ];

  const contactMethods = [
    {
      title: 'For Queries & Approvals',
      contactPerson: 'Naina',
      email: 'contact@khalidwani.com',
      whatsapp: '+91 9910609060',
      note: 'WhatsApp preferred (No calls)',
      icon: FaEnvelope,
      description: 'For media inquiries, event coordination, and approval requests'
    },
    {
      title: 'General Inquiries',
      email: 'Info@khalidwani.com',
      website: 'www.khalidwani.com',
      icon: FaGlobe,
      description: 'For speaking engagements, mentorship, and strategic collaborations'
    }
  ];

  const organizations = [
    {
      name: 'KWCG',
      description: 'Strategy | Advisory | Business Intelligence | Marketing',
      role: 'Founder & Group CEO',
      icon: MdBusiness,
      link: 'https://khalidwani.com'
    },
    {
      name: 'One Capitall Ltd',
      description: 'NBFC - Investment & Credit Solutions',
      role: 'Board Member & Director',
      icon: FaChartLine,
      link: 'https://www.onecapitalllimited.com/'
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
    <div className="min-h-screen bg-[#06070a] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-[#2EC8C0] mb-6">
              <span className="w-8 h-px bg-[#2EC8C0] inline-block" />
              Get in Touch
              <span className="w-8 h-px bg-[#2EC8C0] inline-block" />
            </p>
            <h1 
              className="font-cormorant font-light leading-tight text-white"
              style={{
                fontSize: "clamp(48px, 8vw, 80px)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Create
              <br />
              <span className="text-[#2EC8C0]">Impact Together</span>
            </h1>
            <p className="text-gray-300 font-inter text-base leading-relaxed max-w-2xl mx-auto mt-6 font-light">
              For speaking engagements, strategic collaborations, or media inquiries, 
              our team is here to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-[#111111] to-[#06070a] border border-[#2EC8C0]/20 rounded-2xl p-8 hover:border-[#2EC8C0]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#2EC8C0]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="text-[#2EC8C0] text-2xl" />
                </div>
                <h3 className="text-white font-cormorant text-2xl font-light mb-3 tracking-wide">
                  {method.title}
                </h3>
                <p className="text-gray-400 font-inter text-sm mb-6 font-light">
                  {method.description}
                </p>
                {method.contactPerson && (
                  <p className="text-gray-300 font-inter text-sm mb-2">
                    <span className="text-[#2EC8C0]">Contact:</span> {method.contactPerson}
                  </p>
                )}
                <a 
                  href={`mailto:${method.email}`}
                  className="text-[#2EC8C0] font-inter text-sm hover:underline block mb-2 transition-all"
                >
                  <FaEnvelope className="inline mr-2" />
                  {method.email}
                </a>
                {method.whatsapp && (
                  <a 
                    href={`https://wa.me/${method.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2EC8C0] font-inter text-sm hover:underline block mb-2"
                  >
                    <FaWhatsapp className="inline mr-2" />
                    {method.whatsapp}
                  </a>
                )}
                {method.note && (
                  <p className="text-gray-500 font-inter text-xs mt-3 flex items-center gap-1">
                    <FaRegClock className="text-[#2EC8C0]" />
                    {method.note}
                  </p>
                )}
                {method.website && (
                  <a 
                    href={`https://${method.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2EC8C0] font-inter text-sm hover:underline block"
                  >
                    <FaGlobe className="inline mr-2" />
                    {method.website}
                  </a>
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#2EC8C0]/20 rounded-2xl p-8 hover:border-[#2EC8C0]/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#2EC8C0]" />
                <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">
                  Send a Message
                </span>
              </div>
              <h3 className="text-white font-cormorant text-3xl font-light mb-6">
                Let's Start a Conversation
              </h3>
              
              {formStatus.success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <p className="text-green-500 font-inter text-sm">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <FaExclamationCircle className="text-red-500 text-xl" />
                  <p className="text-red-500 font-inter text-sm">{formStatus.error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 hover:border-gray-600"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 hover:border-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 hover:border-gray-600"
                    placeholder="+91 1234567890"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Inquiry Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="mentorship">Mentorship Request</option>
                    <option value="media">Media Interview</option>
                    <option value="collaboration">Strategic Collaboration</option>
                    <option value="investment">Investment Opportunity</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 hover:border-gray-600"
                    placeholder="Brief subject"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-inter text-sm block mb-2 font-light">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#06070a] border border-gray-700 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-[#2EC8C0] transition-all duration-300 resize-none hover:border-gray-600"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-[#2EC8C0] text-[#06070a] font-inter text-[11px] font-medium tracking-[0.2em] uppercase py-3 rounded-lg hover:bg-[#2EC8C0]/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#06070a] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Social Links & Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="bg-[#111111] border border-[#2EC8C0]/20 rounded-2xl p-8 hover:border-[#2EC8C0]/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#2EC8C0]" />
                  <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">
                    Connect
                  </span>
                </div>
                <h3 className="text-white font-cormorant text-2xl font-light mb-6">
                  Follow on Social Media
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 bg-[#06070a] rounded-lg hover:bg-[#2EC8C0]/5 transition-all duration-300 border border-transparent hover:border-[#2EC8C0]/30"
                    >
                      <social.icon className={`text-gray-400 text-lg group-hover:${social.color} transition-colors`} />
                      <span className="text-gray-400 font-inter text-xs group-hover:text-[#2EC8C0] transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Organizations */}
              <div className="bg-[#111111] border border-[#2EC8C0]/20 rounded-2xl p-8 hover:border-[#2EC8C0]/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#2EC8C0]" />
                  <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">
                    Leadership
                  </span>
                </div>
                <h3 className="text-white font-cormorant text-2xl font-light mb-6">
                  Associated Organizations
                </h3>
                <div className="space-y-6">
                  {organizations.map((org, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#2EC8C0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <org.icon className="text-[#2EC8C0] text-lg" />
                        </div>
                        <div>
                          <h4 className="text-white font-cormorant text-lg font-light mb-1">
                            {org.name}
                          </h4>
                          <p className="text-[#2EC8C0] font-inter text-xs mb-2 tracking-wide">
                            {org.role}
                          </p>
                          <p className="text-gray-400 font-inter text-xs leading-relaxed font-light">
                            {org.description}
                          </p>
                        </div>
                      </div>
                      {index < organizations.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-[#2EC8C0]/20 to-transparent mt-6"></div>
                      )}
                    </div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2EC8C0]/5 to-transparent border border-[#2EC8C0]/20 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaQuoteLeft className="text-[#2EC8C0] text-2xl opacity-50" />
              <div className="w-12 h-px bg-[#2EC8C0]" />
              <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">
                Professional Protocol
              </span>
            </div>
            <h3 className="text-white font-cormorant text-3xl font-light mb-8">
              Event & Media Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {eventGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#2EC8C0]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <FaCheckCircle className="text-[#2EC8C0] text-[10px]" />
                  </div>
                  <p className="text-gray-300 font-inter text-sm leading-relaxed font-light">
                    {guideline}
                  </p>
                </div>
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
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#2EC8C0]/5 to-[#06070a] border border-[#2EC8C0]/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#2EC8C0]/10 flex items-center justify-center mx-auto mb-6">
            <FaUserTie className="text-[#2EC8C0] text-3xl" />
          </div>
          <h2 className="text-white font-cormorant text-3xl md:text-4xl font-light mb-4">
            Book Shri Khalid Wani for Your Event
          </h2>
          <p className="text-gray-400 font-inter text-sm mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            With over 100+ global keynotes and sessions delivered at prestigious institutions, 
            bring world-class insights to your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@khalidwani.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#2EC8C0] text-[#06070a] font-inter text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:bg-[#2EC8C0]/90 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope />
              Request Speaking Engagement
            </a>
            <a
              href="https://wa.me/919919069060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#2EC8C0]/40 text-[#2EC8C0] font-inter text-[11px] font-medium tracking-[0.2em] uppercase rounded-lg hover:border-[#2EC8C0] hover:bg-[#2EC8C0]/5 transition-all duration-300"
            >
              <FaWhatsapp />
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;