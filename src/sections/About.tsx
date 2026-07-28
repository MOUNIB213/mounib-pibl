import { motion } from "motion/react";
import { User, ShieldCheck, Heart, Sparkles, Award, Box, Zap } from "lucide-react";
import { fadeInUp, fadeIn, containerVariants } from "../animations/variants";
import { portfolioData } from "../data/portfolioData";

export function About() {
  const { name, bio, philosophy, location, experienceYears, completedProjects, satisfactionRate } =
    portfolioData.personalInfo;

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Radial Light Orbs */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none z-0"></div>

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
            <User className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase font-display">
              ABOUT THE CRAFTSMAN
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-5xl font-black font-syne uppercase leading-tight tracking-tight text-neutral-100"
          >
            BEHIND THE SCREEN & <span className="text-transparent bg-gradient-to-r from-purple-400 to-magenta-500 bg-clip-text">THE CODE</span>
          </motion.h2>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Avatar Placeholder Shield */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <motion.div
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Spinning Premium Outer Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-purple-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-magenta-500/20"
              />

              {/* Glowing Ambient Card */}
              <div className="absolute inset-2 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800/80 p-6 flex flex-col items-center justify-center glow-purple overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none"></div>

                {/* Developer Monogram Icon */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 via-magenta-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg mb-6">
                  <div className="w-full h-full rounded-[14px] bg-neutral-950 flex flex-col items-center justify-center text-white font-syne font-extrabold text-2xl tracking-tighter">
                    <span>MK</span>
                    <span className="text-[10px] text-purple-400 font-sans tracking-widest font-normal uppercase mt-0.5">DEV</span>
                  </div>
                </div>

                {/* Personal Info tags */}
                <span className="text-base font-bold text-neutral-100 tracking-wide font-display">{name}</span>
                <span className="text-xs text-purple-400 font-semibold tracking-wider mt-1">{portfolioData.personalInfo.role}</span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-wide mt-3">{location}</span>
              </div>
            </motion.div>
          </div>

          {/* Biography and Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              {/* Bio block */}
              <motion.p
                variants={fadeInUp(0.1)}
                className="text-lg text-neutral-300 leading-relaxed font-light tracking-wide"
              >
                {bio}
              </motion.p>

              {/* Philosophy block */}
              <motion.div
                variants={fadeInUp(0.2)}
                className="p-5 rounded-2xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-200 tracking-wide mb-1.5 uppercase font-display">Development Philosophy</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {philosophy}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Metric counters / Experience Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "Experience", value: experienceYears, icon: Award, color: "text-purple-400" },
                { label: "Projects", value: completedProjects, icon: Box, color: "text-magenta-400" },
                { label: "Satisfaction", value: satisfactionRate, icon: Zap, color: "text-orange-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp(0.15 * idx)}
                  className="bg-neutral-950 border border-neutral-900/40 hover:border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all group"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-2.5 opacity-80 group-hover:scale-110 transition-transform`} />
                  <span className="text-2xl sm:text-3xl font-black font-syne text-neutral-100">{stat.value}</span>
                  <span className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
