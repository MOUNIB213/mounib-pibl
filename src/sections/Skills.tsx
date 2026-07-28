import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, Sparkles, Layers, Shield, Database, Layout, Server, ArrowRight } from "lucide-react";
import { fadeInUp, containerVariants } from "../animations/variants";

interface SkillItem {
  name: string;
  percentage: number;
  icon: React.ElementType;
  color: string;
  details: string;
}

const skillsList: SkillItem[] = [
  { name: "React", percentage: 95, icon: Cpu, color: "text-purple-400 border-purple-500/20", details: "State management, React 19 hooks, Context API, Concurrent Rendering." },
  { name: "TypeScript", percentage: 92, icon: Shield, color: "text-blue-400 border-blue-500/20", details: "Strict typing, generic interfaces, advanced utility types, schemas." },
  { name: "JavaScript", percentage: 96, icon: Terminal, color: "text-yellow-400 border-yellow-500/20", details: "ES6+, Async/Await, closures, prototypal inheritance, DOM manipulation." },
  { name: "Next.js", percentage: 88, icon: Layers, color: "text-zinc-300 border-zinc-500/20", details: "App Router, SSR/SSG/ISR, React Server Components, server actions." },
  { name: "HTML & CSS", percentage: 95, icon: Layout, color: "text-orange-400 border-orange-500/20", details: "Semantic structure, responsive Grid & Flexbox layouts, transition controls." },
  { name: "Node.js", percentage: 90, icon: Server, color: "text-green-400 border-green-500/20", details: "Event loop optimization, file system streaming, cluster processing." },
  { name: "Express", percentage: 93, icon: Cpu, color: "text-cyan-400 border-cyan-500/20", details: "RESTful endpoints, middleware chains, error controllers, rate limiters." },
  { name: "PostgreSQL", percentage: 85, icon: Database, color: "text-blue-300 border-blue-400/20", details: "Relational queries, index optimization, connection pooling, joins." },
  { name: "MongoDB", percentage: 87, icon: Database, color: "text-emerald-400 border-emerald-500/20", details: "Aggregation pipelines, schema validation, indexing, NoSQL schemas." },
  { name: "Git", percentage: 91, icon: Terminal, color: "text-red-400 border-red-500/20", details: "Branching architectures, rebase loops, stash setups, merge resolving." },
  { name: "Docker", percentage: 84, icon: Server, color: "text-cyan-400 border-cyan-400/20", details: "Image builds, multi-stage builds, container networks, docker-compose." }
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="relative py-24 bg-black/95 overflow-hidden">
      {/* Background Radial Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              variants={fadeInUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-2 mb-3"
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
                TECHNICAL CAPABILITIES
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl sm:text-5xl font-black font-syne uppercase leading-tight tracking-tight text-neutral-100"
            >
              CRAFTED TECH <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">STACK</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-neutral-400 max-w-md text-sm leading-relaxed font-light"
          >
            Click on any technology card to reveal advanced specializations, engineering standards, and custom use cases.
          </motion.p>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Grid: Col Span 7 */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {skillsList.map((skill, index) => {
                const Icon = skill.icon;
                const isSelected = selectedSkill?.name === skill.name;

                return (
                  <motion.button
                    key={skill.name}
                    variants={fadeInUp(index * 0.05)}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`glass-card p-5 rounded-2xl border text-left flex flex-col justify-between h-40 group relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/80 ${
                      isSelected
                        ? "border-cyan-500/40 bg-neutral-900/80 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                        : "border-neutral-900 bg-neutral-950/40"
                    }`}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`View details for ${skill.name}`}
                  >
                    {/* Glowing highlight point */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-cyan-400 transition-colors"></div>

                    {/* Header: Icon & Name */}
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-850 flex items-center justify-center mb-3">
                        <Icon className={`w-4.5 h-4.5 ${skill.color}`} />
                      </div>
                      <h3 className="text-sm font-bold text-neutral-200 group-hover:text-neutral-100 transition-colors font-display tracking-wide uppercase">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Progress indicator */}
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-semibold mb-1.5 uppercase tracking-wider">
                        <span>PROFICIENCY</span>
                        <span className={`${skill.color}`}>{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Interactive Details Panel: Col Span 4 */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-neutral-950 border border-cyan-500/20 shadow-xl relative overflow-hidden"
                >
                  {/* Subtle decorative grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1717171a_1px,transparent_1px),linear-gradient(to_bottom,#1717171a_1px,transparent_1px)] bg-[size:1rem_1rem] z-0"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        {<selectedSkill.icon className={`w-5 h-5 ${selectedSkill.color}`} />}
                      </div>
                      <div>
                        <h3 className="text-lg font-black font-syne text-neutral-100 uppercase tracking-wide">
                          {selectedSkill.name}
                        </h3>
                        <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
                          SPECIALIZED FOCUS
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                      {selectedSkill.details}
                    </p>

                    <div className="border-t border-neutral-900 pt-5">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                          ENGINEERING METRIC
                        </span>
                        <span className="text-xs font-bold text-neutral-200 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                          {selectedSkill.percentage === 95 || selectedSkill.percentage === 96 ? "Expert Level" : "Advanced"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors">
                        <span>Production verified across multiple apps</span>
                        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-neutral-950/40 border border-dashed border-neutral-850 p-8 text-center flex flex-col items-center justify-center h-64 select-none"
                >
                  <Sparkles className="w-8 h-8 text-neutral-600 mb-4 animate-bounce" />
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2 font-display">
                    Interactive Console
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-light">
                    Select any capability to inspect structural specializations, architectural techniques, and detailed proficiency metrics.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
