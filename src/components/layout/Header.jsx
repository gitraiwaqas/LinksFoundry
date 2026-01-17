import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "../../lib/utils";

import { navigation } from "../../data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
        scrolled 
          ? "top-4 px-4" 
          : "top-0 px-0"
      )}
    >
      <div className={cn(
        "container mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
        scrolled ? "max-w-6xl" : "max-w-full"
      )}>
        <nav 
          className={cn(
            "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative",
            scrolled 
              ? "bg-foundry-navy/90 backdrop-blur-2xl py-2 padding-nav rounded-full border border-white/10 shadow-2xl h-16 sm:h-auto" 
              : "bg-transparent py-6 px-6 sm:px-12 md:px-16 border-b border-transparent h-20 sm:h-auto"
          )}
        >
          {/* Scroll Progress Indicator */}
          {scrolled && (
            <motion.div 
              className="absolute bottom-0 left-8 right-8 h-[2px] bg-solar-gold origin-left z-20 rounded-full"
              style={{ scaleX: scrollYProgress }}
            />
          )}

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 h-10 bg-linear-to-br from-solar-gold via-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-outfit font-extrabold text-foundry-navy text-xl shadow-lg shadow-solar-gold/30 relative overflow-hidden"
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full"
              />
              LF
            </motion.div>
            <span className={cn(
              "font-outfit text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-500",
              scrolled ? "text-white" : "text-foundry-navy"
            )}>
              Links<span className="text-solar-gold font-extrabold">Foundry</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10 mx-4">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    to={item.href}
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "relative px-4 xl:px-5 py-2 font-inter text-sm font-semibold transition-colors duration-300 z-10 block whitespace-nowrap",
                      location.pathname === item.href
                        ? "text-foundry-navy"
                        : scrolled ? "text-slate-200 hover:text-white" : "text-foundry-navy hover:text-foundry-navy/70"
                    )}
                  >
                    {item.name}
                    <AnimatePresence>
                      {(hoveredLink === item.name || location.pathname === item.href) && (
                        <motion.div
                          layoutId="nav-pill"
                          className={cn(
                            "absolute inset-0 rounded-full -z-10",
                            location.pathname === item.href 
                              ? "bg-solar-gold" 
                              : "bg-white/15"
                          )}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 z-10">
            <Link
              to="/contact"
              className={cn(
                "hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full font-outfit text-sm font-extrabold transition-all active:scale-95 whitespace-nowrap",
                scrolled
                  ? "bg-solar-gold text-foundry-navy hover:shadow-lg hover:shadow-solar-gold/30"
                  : "bg-foundry-navy text-white hover:bg-foundry-navy/90 shadow-xl"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile Toggle */}
            <button
              className={cn(
                "lg:hidden p-2.5 rounded-2xl transition-all active:scale-90 flex items-center justify-center",
                scrolled 
                  ? "text-white bg-white/10 border border-white/10" 
                  : "text-foundry-navy bg-foundry-navy/5"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </motion.div>
            </button>
          </div>
        </nav>
      </div>

      <style>{`
        .padding-nav {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        @media (min-width: 640px) {
          .padding-nav {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foundry-navy/85 backdrop-blur-xl z-60"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 35, stiffness: 400 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-foundry-navy z-70 p-6 sm:p-10 shadow-2xl border-l border-white/10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-solar-gold rounded-lg flex items-center justify-center font-outfit font-bold text-foundry-navy">
                    LF
                  </div>
                  <span className="font-outfit text-2xl font-bold text-white tracking-tight">
                    Links<span className="text-solar-gold">Foundry</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <HiX size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-3">
                {navigation.map((item, idx) => (
                  <motion.li 
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "font-outfit text-2xl font-bold py-3 px-6 rounded-2xl transition-all flex items-center justify-between group",
                        location.pathname === item.href 
                          ? "bg-solar-gold text-foundry-navy" 
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span>{item.name}</span>
                      <motion.span 
                        animate={{ 
                          x: location.pathname === item.href ? 0 : -10, 
                          opacity: location.pathname === item.href ? 1 : 0 
                        }}
                      >→</motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto space-y-6 pt-10">
                <div className="h-px bg-white/10 w-full" />
                <Link
                  to="/contact"
                  className="bg-solar-gold text-foundry-navy w-full py-4 rounded-2xl font-outfit text-lg font-black text-center block shadow-xl shadow-solar-gold/20 active:scale-95 transition-all"
                >
                  Get a Quote
                </Link>
                <div className="text-center text-slate-500 text-xs font-inter uppercase tracking-widest">
                  &copy; {new Date().getFullYear()} LINKSFOUNDRY
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
