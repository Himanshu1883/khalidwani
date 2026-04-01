// about.jsx - Updated Mentorship Section
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaChartLine, 
  FaUsers, 
  FaGlobe, 
  FaBuilding,
  FaTrophy,
  FaRocket,
  FaGraduationCap,
  FaLandmark,
  FaEnvelope,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaBullseye,
  FaHeart,
  FaLightbulb,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSync
} from 'react-icons/fa';
import { KHALID_QUOTES } from '../data/content'; // Adjust the import path as needed

const About = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  // State for random quote
   // State for random quote
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Initialize random quote
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * KHALID_QUOTES.length);
    setCurrentQuote(KHALID_QUOTES[randomIndex]);
    setQuoteIndex(randomIndex);
  }, []);

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * KHALID_QUOTES.length);
      } while (newIndex === quoteIndex && KHALID_QUOTES.length > 1);
      
      setCurrentQuote(KHALID_QUOTES[newIndex]);
      setQuoteIndex(newIndex);
    }, 5000); // Change quote every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [quoteIndex]); // Re-run when quoteIndex changes


  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stats = [
    { number: "20+", label: "Years of Leadership", icon: FaChartLine },
    { number: "100+", label: "Global Keynotes", icon: FaGlobe },
    { number: "5", label: "Industry Sectors", icon: FaBuilding },
    { number: "2", label: "Leadership Positions", icon: FaUsers }
  ];

  const achievements = [
    { title: "40under40 Honoree", description: "Recognized as one of India's most influential young leaders", icon: FaTrophy },
    { title: "Strategic Investor", description: "Invested in 10+ startups across emerging technologies", icon: FaRocket },
    { title: "Global Mentor", description: "Mentored 3,00,000+ students across premier institutions", icon: FaGraduationCap },
    { title: "Capital Architect", description: "Steering ten-figure asset pool with strategic foresight", icon: FaLandmark }
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/khalidwani", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://www.instagram.com/khalidwani/", label: "Instagram" },
    { icon: FaTwitter, url: "https://x.com/khalidwani", label: "Twitter" },
    { icon: FaYoutube, url: "https://www.youtube.com/@wanikhalid", label: "YouTube" }
  ];

  return (
    <div className="min-h-screen bg-[#06070a] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <p className="inline-flex items-center gap-3 text-[10px] lg:text-[11px] font-medium tracking-[0.28em] uppercase text-[#2EC8C0] mb-6 lg:mb-8">
                  <span className="w-8 h-px bg-[#2EC8C0] inline-block" />
                  About Khalid Wani
                </p>
                <h1 
                  className="font-cormorant font-light leading-none tracking-tight text-white"
                  style={{
                    fontSize: "clamp(48px, 8vw, 90px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Great leaders are
                  <br />
                  guided by a
                  <br />
                  <em className="italic text-[#2EC8C0] not-italic">higher purpose.</em>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-2 pt-4">
                <p className="text-[#2EC8C0] font-cormorant text-2xl md:text-3xl font-light tracking-wide">
                  Shri Khalid Wani
                </p>
                <p className="text-gray-300 font-inter text-sm md:text-base tracking-wide">
                  Director, One Capital Ltd<br />
                  Founder & Managing Director, KWCG
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <blockquote className="border-l-2 border-[#2EC8C0] pl-6 py-2">
                  <FaQuoteLeft className="text-[#2EC8C0] text-xl mb-2 opacity-50" />
                  <p className="text-white font-inter text-base md:text-lg italic font-light leading-relaxed">
                    "True leadership is about vision, integrity, and empowering others to achieve greatness."
                  </p>
                  <cite className="text-[#2EC8C0] font-inter text-xs tracking-wide mt-3 block">
                    — Shri Khalid Wani
                  </cite>
                </blockquote>
              </motion.div>

              {/* Social Links - Desktop */}
              <motion.div variants={fadeInUp} className="hidden md:flex items-center gap-6 pt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2EC8C0] transition-colors duration-300"
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Image - Circular Format */}
            <motion.div
              variants={fadeInUp}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-2xl mx-auto group">
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 rounded-full bg-[#2EC8C0]/5 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                {/* Main Image Container */}
                <div className="relative rounded-full overflow-hidden shadow-xl">
                  <img
                    src="profile2.jpg"
                    alt="Shri Khalid Wani"
                    className="w-full h-auto rounded-full object-cover aspect-square transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x800/2EC8C0/FFFFFF?text=Shri+Khalid+Wani";
                    }}
                  />

                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#06070a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Minimalist Frame */}
                <div className="absolute inset-0 rounded-full border border-[#2EC8C0]/30 pointer-events-none group-hover:border-[#2EC8C0]/60 transition-colors duration-300"></div>

                {/* Subtle Accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-[#2EC8C0]/5 blur-xl -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <stat.icon className="text-[#2EC8C0] text-3xl md:text-4xl mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="text-[#2EC8C0] font-cormorant text-5xl md:text-6xl font-light mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-inter text-xs md:text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#2EC8C0]" />
                <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">The Journey</span>
              </div>
              <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight">
                The Beginning of a
                <br />
                <span className="text-[#2EC8C0]">Greater Vision</span>
              </h2>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid Wani, born into a modest background, understood the value of hard work and vision from an early age. His journey wasn't always easy, but each challenge laid the foundation for the remarkable leader he is today. From navigating complex industries to shaping India's entrepreneurial landscape, his story is a testament to determination and vision.
              </p>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                His path was fueled by the desire to create a lasting impact, not just for himself, but for others who shared similar struggles. His leadership story started with small steps, but his vision reached far beyond what he could ever have imagined.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#2EC8C0]" />
                <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">Impact & Legacy</span>
              </div>
              <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight">
                The Power of
                <br />
                <span className="text-[#2EC8C0]">Giving Back</span>
              </h2>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid Wani's life has been dedicated to more than just business success. His core belief is that giving back is the true essence of leadership. Just as early moments in his life shaped his resolve, he now uses his platform to guide others, transforming lives and industries globally.
              </p>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid believes in building sustainable solutions that address real-world issues, whether it's through strategic advice for companies or mentoring the next generation of leaders. He has built a career on ensuring that his success is not only for personal gain but for the betterment of society at large.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      {/* Achievements Grid */}
      <section className="relative bg-[#111111] overflow-hidden">

        {/* ── Full bleed background image ── */}
        <div className="absolute inset-0">
          <img
            src="/wani2.JPG"
            alt="Shri Khalid Wani"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "60% center",
              filter: "brightness(0.55) contrast(1.1) saturate(0.85)",
            }}
          />

          {/* Heavy dark tint ONLY over left half — where text lives */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.90) 30%, rgba(10,10,10,0.70) 48%, rgba(10,10,10,0.10) 65%, transparent 100%)",
            }}
          />

          {/* Top fade */}
          <div
            className="absolute inset-x-0 top-0 h-28"
            style={{ background: "linear-gradient(to bottom, #111111, transparent)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-28"
            style={{ background: "linear-gradient(to top, #111111, transparent)" }}
          />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-28">
          <div className="flex flex-col lg:flex-row items-start gap-0">

            {/* LEFT — text content over the pointing-hand side */}
            <div className="w-full lg:w-[52%] lg:pr-12">

              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-7 h-px bg-[#2EC8C0]" />
                <p className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.24em] uppercase font-medium">
                  Excellence Defined
                </p>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                viewport={{ once: true }}
                className="text-white font-cormorant font-light leading-none mb-6"
                style={{ fontSize: "clamp(44px, 5vw, 68px)", letterSpacing: "-1.5px" }}
              >
                Strategic<br />
                <span className="text-[#2EC8C0]">Excellence.</span>
              </motion.h2>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 font-inter text-sm font-light leading-relaxed mb-12 max-w-sm"
              >
                Board Member & Director at One Capital Ltd · Founder & Group
                CEO of KWCG, bridging global capital with strategic foresight
                across five industries.
              </motion.p>

              {/* ── Achievement rows — editorial list ── */}
              <div className="space-y-0">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.1 + 0.15 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-5 py-5 border-b border-white/[0.07]
                               hover:border-[#2EC8C0]/30 transition-colors duration-300 cursor-default"
                  >
                    {/* Index + icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1.5 pt-0.5 w-9">
                      <span
                        className="font-cormorant font-light leading-none
                                   text-[#2EC8C0]/35 group-hover:text-[#2EC8C0]/80
                                   transition-colors duration-300"
                        style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg border border-[#2EC8C0]/20
                                   flex items-center justify-center
                                   group-hover:border-[#2EC8C0]/55
                                   group-hover:bg-[#2EC8C0]/[0.08]
                                   transition-all duration-300"
                      >
                        <achievement.icon
                          className="text-[#2EC8C0] opacity-55
                                     group-hover:opacity-100 transition-opacity duration-300"
                          style={{ fontSize: "13px" }}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-white font-cormorant font-light tracking-wide
                                   group-hover:text-[#2EC8C0] transition-colors duration-300
                                   leading-tight mb-1"
                        style={{ fontSize: "clamp(17px, 1.8vw, 21px)" }}
                      >
                        {achievement.title}
                      </h3>
                      <p className="text-gray-500 font-inter text-xs font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div
                      className="flex-shrink-0 self-center text-[#2EC8C0]
                                 opacity-0 group-hover:opacity-100
                                 -translate-x-2 group-hover:translate-x-0
                                 transition-all duration-300"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-10 pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-6"
              >
                {[
                  { num: "20+", lbl: "Years Leading" },
                  { num: "₹10B+", lbl: "Assets Managed" },
                  { num: "5", lbl: "Industry Sectors" },
                ].map((s, i) => (
                  <div key={i} className="group cursor-default">
                    <div
                      className="font-cormorant font-light text-white leading-none mb-1
                                 group-hover:text-[#2EC8C0] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(26px, 2.8vw, 36px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {s.num}
                    </div>
                    <div className="text-gray-500 font-inter text-[9px] tracking-[0.15em] uppercase font-light">
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — empty breathing space, face is here in bg image */}
            <div className="hidden lg:block lg:w-[48%]" />
          </div>
        </div>

        {/* Quote — bottom right, floats near his face */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-10 right-4 md:right-8 lg:right-16 z-10 max-w-[240px]"
        >
          <div
            style={{
              borderRight: "2px solid rgba(46,200,192,0.4)",
              paddingRight: "16px",
              textAlign: "right",
            }}
          >
            <p className="text-white/55 font-cormorant text-sm font-light italic leading-relaxed">
              "Vision without integrity<br />is just ambition."
            </p>
            <p className="text-[#2EC8C0] font-inter text-[9px] tracking-[0.2em] uppercase font-medium mt-2">
              — Shri Khalid Wani
            </p>
          </div>
        </motion.div>

      </section>

      {/* Mentorship Section with Dynamic Quotes */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#2EC8C0]" />
                <span className="text-[#2EC8C0] font-inter text-[10px] tracking-[0.2em] uppercase">
                  Mentorship & Impact
                </span>
              </div>
              <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Inspiring Future Leaders.
                <br />
                <span className="text-[#2EC8C0]">Empowering Generations.</span>
              </h2>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                Shri Khalid Wani believes that the true measure of leadership
                lies in the leaders you help create. With over 300 sessions
                delivered worldwide, spanning Ivy League universities, IITs,
                IIMs, and state-level institutions, he has mentored more than
                three lakh students in just the last four years.
              </p>
              <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
                His sessions combine global business insights with practical,
                on-ground strategies, helping students bridge the gap between
                classroom learning and real-world application. Whether speaking
                to first-year college students or aspiring founders, Shri Wani's
                message remains constant: Think bigger, start sooner, and lead
                with purpose.
              </p>
            </div>
            
            {/* Dynamic Quote Section */}
            <div className="order-1 lg:order-2">
              <div className="bg-[#111111] rounded-2xl p-8 border border-[#2EC8C0]/10 relative group">
                <FaQuoteLeft className="text-[#2EC8C0] text-2xl mb-4 opacity-50" />
                
                {/* Animated Quote Text */}
                <motion.p 
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white font-inter text-lg italic font-light leading-relaxed min-h-[100px]"
                >
                  "{currentQuote}"
                </motion.p>
                
                <div className="mt-6 pt-4 border-t border-[#2EC8C0]/10 flex items-center justify-between">
                  <p className="text-[#2EC8C0] font-cormorant text-sm tracking-wide">
                    - Khalid Wani
                  </p>
                  
                  {/* Refresh Button */}
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Life Focused on Purpose */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="w-12 h-px bg-[#2EC8C0] mx-auto" />
            <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light">
              A Life Focused on Purpose
            </h2>
            <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
              Shri Khalid Wani's work is deeply intertwined with his mission to create lasting change. His work with global startups, multinational companies, and government institutions reflects his drive to make the world a better place.
            </p>
            <p className="text-gray-300 font-inter text-base leading-relaxed font-light">
              He believes in the power of education and mentorship. Over the years, he has forged strategic partnerships with leading educational institutions, playing a pivotal role in shaping the next wave of entrepreneurial talent. Whether it's addressing industry issues or guiding policy development, his life remains devoted to serving others.
            </p>
            <p className="text-white font-inter text-base leading-relaxed font-light border-l-2 border-[#2EC8C0] pl-6 mx-auto max-w-2xl">
              Through his contributions, Shri Khalid Wani stands as a symbol of leadership that does not rest until it has made a positive difference in the lives of others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#2EC8C0]/5 to-[#06070a] border border-[#2EC8C0]/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <FaEnvelope className="text-[#2EC8C0] text-4xl mx-auto mb-6 opacity-70" />
          <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light mb-4">
            Connect with Shri Khalid Wani
          </h2>
          <p className="text-gray-400 font-inter text-sm mb-8 max-w-2xl mx-auto font-light tracking-wide">
            For speaking engagements, mentorship opportunities, or strategic collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Info@khalidwani.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#2EC8C0] text-[#06070a] font-inter text-[10px] font-medium tracking-[0.2em] uppercase rounded hover:bg-[#2EC8C0]/90 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope className="text-sm" />
              Email: Info@khalidwani.com
            </a>
            <a
              href="https://www.khalidwani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#2EC8C0]/40 text-[#2EC8C0] font-inter text-[10px] font-medium tracking-[0.2em] uppercase rounded hover:border-[#2EC8C0] hover:bg-[#2EC8C0]/5 transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-sm" />
              Visit Website
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-[#2EC8C0]/10">
            <p className="text-gray-500 font-inter text-xs tracking-wide">
              Multi-Sector Focus: Mobility • Finance • Emerging Tech • Culture
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;