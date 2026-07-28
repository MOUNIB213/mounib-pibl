import { motion } from "motion/react";
import { Terminal, Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { github, linkedin, twitter, instagram } = portfolioData.socials;

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: github, icon: Github },
    { label: "LinkedIn", href: linkedin, icon: Linkedin },
    { label: "Twitter", href: twitter, icon: Twitter },
    { label: "Instagram", href: instagram, icon: Instagram },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-black border-t border-neutral-900/60 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 items-start">
          {/* Brand/Monogram */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-2.5 text-neutral-100 group w-fit focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-magenta-500 flex items-center justify-center shadow-md">
                <Terminal className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="font-display font-bold text-base tracking-wider">
                MOUNIB KHALDI
              </span>
            </a>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed font-light">
              Crafting premium, highly accessible, and ultra-performant modern web experiences using the latest software engineering practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-display">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-neutral-500 hover:text-purple-400 transition-colors focus:outline-none focus:text-purple-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-display">
              Social Channels
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:border-purple-500/30 transition-all focus:outline-none focus:border-purple-500/40"
                    aria-label={`Mounib Khaldi's ${soc.label}`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
            <p className="text-[10px] text-neutral-600 font-medium">
              Open to standard roles, global contracts, and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-neutral-950 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-neutral-600 font-medium tracking-wide">
            © {currentYear} MOUNIB KHALDI. All rights reserved. Designed & Engineered with precision.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-200 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
