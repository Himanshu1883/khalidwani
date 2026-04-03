import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Function to handle Connect button click
  const handleConnectClick = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      // If already on contact page, scroll to the contact form
      const contactForm = document.getElementById('contact-form') || document.querySelector('.bg-gradient-to-br.from-\\[\\#111111\\]');
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }
    // If not on contact page, let the Link handle navigation normally
  };

  // Function to scroll to contact form after navigation
  useEffect(() => {
    if (location.pathname === "/contact") {
      const timer = setTimeout(() => {
        const hash = window.location.hash;
        if (hash === '#contact-form') {
          const contactForm = document.getElementById('contact-form') || document.querySelector('.bg-gradient-to-br.from-\\[\\#111111\\]');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ${
          visible ? "top-6 opacity-100" : "-top-24 opacity-0"
        }`}
      >
        <div className="w-[95%] max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-[#0B1220]/80 backdrop-blur-xl shadow-xl">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/KW_LOGO_D.png" className="h-8 transition-transform duration-300 group-hover:scale-105" alt="Logo" />
            <span className="hidden sm:block text-white font-medium group-hover:text-[#B0E4CC] transition-colors duration-300">
              Khalid <span className="text-[#B0E4CC] group-hover:text-white transition-colors duration-300">Wani</span>
            </span>
          </Link>

          {/* LINKS RIGHT - Desktop */}
          <div className="hidden lg:flex items-center gap-8 ml-auto mr-6">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-[12px] uppercase tracking-widest font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }` 
                }
              >
                {({ isActive }) => ( 
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#B0E4CC] transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Connect Desktop */}
          <Link
            to="/contact#contact-form"
            onClick={handleConnectClick}
            className="hidden lg:flex items-center px-5 py-2 rounded-full bg-[#B0E4CC] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#9AD4BC] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#B0E4CC]/50"
          >
            Connect
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-10 w-10 flex items-center justify-center border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={handleMobileLinkClick}
              className={({ isActive }) =>
                `text-center py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm ${
                  isActive ? "text-[#B0E4CC] bg-white/5" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact#contact-form"
          onClick={(e) => {
            handleMobileLinkClick();
            handleConnectClick(e);
          }}
          className="mt-5 flex justify-center py-3 rounded-full bg-[#B0E4CC] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#9AD4BC] hover:scale-105 transition-all duration-300 shadow-md"
        >
          Connect Now
        </Link>
      </div>
    </>
  );
}