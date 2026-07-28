import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Eye, Send, Code, Shield, Terminal } from "lucide-react";
import { fadeInUp, fadeIn, containerVariants } from "../animations/variants";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic responsive particle count
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(80, Math.floor((width * height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Track container resizing dynamically
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle cybernetic neural lines
      ctx.strokeStyle = "rgba(168, 85, 247, 0.05)"; // Delicate purple
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw glowing nodes
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.shadowColor = "rgba(168, 85, 247, 0.4)";
        ctx.shadowBlur = p.radius > 1 ? 4 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance

        // Interactive mouse magnetic push effect
        if (isMouseOver) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (110 - dist) / 110;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Apply physical velocity
        p.x += p.vx;
        p.y += p.vy;

        // Soft screen wrapping
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Interactive Cyber Particle Canvas (Instant, 100% Reliable Fallback) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none opacity-40 transition-opacity duration-1000"
        poster="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200"
      >
        <source src="/assets/hero_background.mp4" type="video/mp4" />
        <source src="/assets/background.mp4" type="video/mp4" />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-space-glowing-particles-background-40017-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-[#050505]/60 z-10"></div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1717171a_1px,transparent_1px),linear-gradient(to_bottom,#1717171a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10 pointer-events-none"></div>

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none z-10"></div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center z-20 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow Label (Elegant and styled, not oversized) */}
          <motion.div
            variants={fadeInUp(0.1)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900/80 border border-neutral-800/80 rounded-full text-xs font-semibold tracking-wider text-purple-400 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
            AVAILABLE FOR PROJECTS
          </motion.div>

          {/* Strong Premium Headline */}
          <motion.h1
            variants={fadeInUp(0.2)}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05] font-syne uppercase"
          >
            <span className="text-neutral-100 block">CREATIVE CODE</span>
            <span className="bg-gradient-to-r from-purple-400 via-magenta-500 to-cyan-400 bg-clip-text text-transparent block mt-1">
              MOUNIB KHALDI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp(0.3)}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Full Stack Developer specializing in crafting interactive, high-performance web applications with React, TypeScript, and Node.js.
          </motion.p>

          {/* Call to Actions (CTA) */}
          <motion.div
            variants={fadeInUp(0.4)}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-magenta-600 hover:from-purple-500 hover:to-magenta-500 text-white text-sm font-bold tracking-wider uppercase rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <Eye className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-950/80 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-900/80 text-neutral-200 hover:text-white text-sm font-bold tracking-wider uppercase rounded-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Send className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-colors" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Specs Grid at bottom */}
      <div className="absolute bottom-12 inset-x-0 z-20 hidden md:block select-none pointer-events-none">
        <div className="max-w-7xl mx-auto px-12 flex justify-between text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-500/60" />
            <span>REACT 19 / TS 5+</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-magenta-500/60" />
            <span>NODE & EXPRESS APIS</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-500/60" />
            <span>SECURE, WCAG AA STANDARDS</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-500 hover:text-purple-400 transition-colors">
        <span className="text-[10px] font-bold tracking-widest uppercase select-none">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
