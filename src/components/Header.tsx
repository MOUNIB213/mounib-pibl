import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle header background density on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 border-b border-neutral-900/60 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-neutral-100 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          aria-label="Mounib Khaldi Homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-magenta-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Terminal className="w-4.5 h-4.5 text-white stroke-[2.5]" />
          </div>
          <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            MOUNIB.K
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none focus:text-purple-400 ${
                activeSection === link.id
                  ? "text-purple-400 font-semibold"
                  : "text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-purple-500 to-magenta-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 rounded-xl text-xs font-semibold tracking-wider text-neutral-200 hover:text-white flex items-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#050505] border-b border-neutral-900 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold tracking-wide py-2 border-b border-neutral-900 transition-colors ${
                    activeSection === link.id
                      ? "text-purple-400"
                      : "text-neutral-300 hover:text-neutral-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-500 hover:to-magenta-500 text-sm font-bold text-center text-white rounded-xl shadow-lg transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
