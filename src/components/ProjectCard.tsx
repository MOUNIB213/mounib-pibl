import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Github, ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for smooth 3D tilt interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring physics configuration
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  // Track mouse coordinates on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  // Pre-mapped high-quality unsplash images matching the tech profile
  const getImageForProject = (id: string) => {
    switch (id) {
      case "saas-analytics":
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600";
      case "ai-code-companion":
        return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600";
      case "ecom-core-api":
        return "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600";
      case "design-system":
        return "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600";
      default:
        return "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600";
    }
  };

  // Color theme indicator depending on the project category
  const getThemeColors = (category: string) => {
    switch (category) {
      case "Full Stack":
        return {
          glow: "shadow-[0_0_40px_rgba(139,92,246,0.3)]",
          border: "group-hover:border-purple-500/50",
          accent: "text-purple-400 bg-purple-500/10",
        };
      case "Frontend":
        return {
          glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
          border: "group-hover:border-magenta-500/50",
          accent: "text-magenta-400 bg-magenta-500/10",
        };
      case "Backend":
        return {
          glow: "shadow-[0_0_40px_rgba(6,182,212,0.3)]",
          border: "group-hover:border-cyan-500/50",
          accent: "text-cyan-400 bg-cyan-500/10",
        };
      case "UI/UX":
        return {
          glow: "shadow-[0_0_40px_rgba(249,115,22,0.3)]",
          border: "group-hover:border-orange-500/50",
          accent: "text-orange-400 bg-orange-500/10",
        };
      default:
        return {
          glow: "shadow-[0_0_40px_rgba(139,92,246,0.2)]",
          border: "group-hover:border-purple-500/40",
          accent: "text-purple-400 bg-purple-500/10",
        };
    }
  };

  const theme = getThemeColors(project.category);

  return (
    <div className="perspective-[1000px] w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`bg-neutral-950/80 rounded-2xl border border-neutral-900 overflow-hidden group transition-all duration-300 w-full flex flex-col relative ${
          hovered ? `${theme.border} ${theme.glow} scale-[1.02]` : ""
        }`}
      >
        {/* Animated Card Border Highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>

        {/* Project Thumbnail Image */}
        <div className="relative h-48 overflow-hidden bg-neutral-900 select-none pointer-events-none">
          <img
            src={getImageForProject(project.id)}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
          />
          {/* Subtle vignette/fade bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>

          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-neutral-800/80 backdrop-blur-md ${theme.accent}`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex-grow">
            <h3 className="text-lg font-black font-syne text-neutral-100 tracking-wide uppercase mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Technical Metrics Stats */}
            <div className="grid grid-cols-3 gap-2 py-3.5 px-4 bg-neutral-950/50 border border-neutral-900/60 rounded-xl mb-5">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-center">
                  <span className="text-xs font-black text-neutral-200 font-syne">{stat.value}</span>
                  <span className="text-[8px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] font-bold text-neutral-400 bg-neutral-900 border border-neutral-850 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Footer */}
          <div className="flex items-center justify-between border-t border-neutral-900 pt-4 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-100 flex items-center gap-1.5 text-xs font-semibold focus:outline-none focus:text-neutral-100"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1.5 text-xs font-bold focus:outline-none focus:text-purple-300"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
