import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Instagram, Share2, ArrowUpRight } from "lucide-react";
import { fadeInUp, containerVariants } from "../animations/variants";
import { portfolioData } from "../data/portfolioData";

interface SocialPlatform {
  name: string;
  url: string;
  icon: React.ElementType;
  colorClass: string;
  hoverGlow: string;
  description: string;
  tagline: string;
}

export function Socials() {
  const { github, linkedin, twitter, instagram } = portfolioData.socials;

  const socialPlatforms: SocialPlatform[] = [
    {
      name: "GitHub",
      url: github,
      icon: Github,
      colorClass: "text-neutral-100 hover:text-white",
      hoverGlow: "shadow-[0_0_35px_rgba(255,255,255,0.08)] hover:border-neutral-700",
      description: "Code repositories, software utilities, and open source architectures.",
      tagline: "@mounibkhaldi"
    },
    {
      name: "LinkedIn",
      url: linkedin,
      icon: Linkedin,
      colorClass: "text-[#0a66c2]",
      hoverGlow: "shadow-[0_0_35px_rgba(10,102,194,0.15)] hover:border-[#0a66c2]/40",
      description: "Professional networking, enterprise experiences, and careers.",
      tagline: "Mounib Khaldi"
    },
    {
      name: "Twitter / X",
      url: twitter,
      icon: Twitter,
      colorClass: "text-sky-400",
      hoverGlow: "shadow-[0_0_35px_rgba(14,165,233,0.15)] hover:border-sky-500/40",
      description: "Technical discourses, modern web insights, and tech trends.",
      tagline: "@mounib_codes"
    },
    {
      name: "Instagram",
      url: instagram,
      icon: Instagram,
      colorClass: "text-pink-500",
      hoverGlow: "shadow-[0_0_35px_rgba(236,72,153,0.15)] hover:border-pink-500/40",
      description: "Visual design portfolios, UI aesthetics, and behind-the-scenes.",
      tagline: "@mounib.dev"
    }
  ];

  return (
    <section id="socials" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative floating grids */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-2 mb-3"
          >
            <Share2 className="w-5 h-5 text-magenta-400" />
            <span className="text-xs font-bold tracking-widest text-magenta-400 uppercase font-display">
              DIGITAL CONNECTIONS
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-5xl font-black font-syne uppercase leading-tight tracking-tight text-neutral-100"
          >
            CONNECT ACROSS <span className="text-transparent bg-gradient-to-r from-magenta-400 to-orange-400 bg-clip-text">PLATFORMS</span>
          </motion.h2>
        </div>

        {/* Social Platforms Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {socialPlatforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp(0.1 * idx)}
                className={`glass-card p-6 rounded-2xl border border-neutral-900/60 flex flex-col justify-between h-56 transition-all group relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-magenta-500/80 ${platform.hoverGlow}`}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Visit Mounib Khaldi's ${platform.name} profile`}
              >
                {/* Visual Header */}
                <div className="flex justify-between items-start">
                  <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className={`w-5.5 h-5.5 ${platform.colorClass}`} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Card copy */}
                <div>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                    {platform.name}
                  </span>
                  <h3 className="text-base font-extrabold text-neutral-100 group-hover:text-magenta-400 transition-colors font-display tracking-wide mb-2">
                    {platform.tagline}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
