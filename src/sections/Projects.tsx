import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { fadeInUp, containerVariants } from "../animations/variants";
import { portfolioData, Project } from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";

type CategoryFilter = "All" | "Full Stack" | "Frontend" | "Backend" | "UI/UX";

const filterCategories: CategoryFilter[] = ["All", "Full Stack", "Frontend", "Backend", "UI/UX"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background soft glowing blur spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none z-0"></div>

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
            <FolderGit2 className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase font-display">
              PORTFOLIO SHOWCASE
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-5xl font-black font-syne uppercase leading-tight tracking-tight text-neutral-100 mb-6"
          >
            SELECTED ARCHITECTURES & <span className="text-transparent bg-gradient-to-r from-purple-400 via-magenta-400 to-cyan-400 bg-clip-text">CREATIONS</span>
          </motion.h2>
        </div>

        {/* Categorical Filtering Navigation */}
        <motion.div
          variants={fadeInUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2 mb-12 pb-2 border-b border-neutral-900"
        >
          <div className="flex items-center gap-1.5 text-neutral-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">FILTER:</span>
          </div>

          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 relative ${
                  isActive
                    ? "text-purple-400 bg-neutral-900/60"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                aria-label={`Filter projects by ${cat}`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="absolute -bottom-2.5 left-2 right-2 h-[2px] bg-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Smooth Layout Morphing */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="w-full flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
