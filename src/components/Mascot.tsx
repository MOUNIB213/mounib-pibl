import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Code, Heart, MessageSquare, ArrowRight, User } from "lucide-react";

interface MascotProps {
  activeSection: string;
}

export function Mascot({ activeSection }: MascotProps) {
  const [hovered, setHovered] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open speech bubble on section change
  useEffect(() => {
    setBubbleOpen(true);
    const timer = setTimeout(() => {
      setBubbleOpen(false);
    }, 6000); // Close after 6s to be non-intrusive
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Mascot dynamic copy depending on active section
  const getSpeechBubbleText = () => {
    switch (activeSection) {
      case "hero":
        return "Hey there! I'm Sparky, Mounib's assistant. Scroll down to see my master's work! 🚀";
      case "about":
        return "Mounib is obsessed with clean code and high performance. Let me show you his bio! 🧠";
      case "skills":
        return "TypeScript, Node, React... Mounib's tech stack is lethal! Click any card to interact. ⚡";
      case "projects":
        return "Proudly presenting Mounib's masterpieces! Hover over them for interactive tilt and glow. 💎";
      case "contact":
        return "Have an awesome idea? Send him a message now! He responds in lightning speed! ✉️";
      case "footer":
        return "Thanks for visiting! Hope we collaborate soon. Have a great day! Wave goodbye! 👋";
      default:
        return "Let's build something beautiful together! ✨";
    }
  };

  // Parallax calculations (subtle floating)
  const floatY = Math.sin(scrollProgress * Math.PI * 4) * 15;
  const rotateAngle = Math.cos(scrollProgress * Math.PI * 4) * 5;

  return (
    <div
      id="interactive-mascot-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none md:bottom-8 md:right-8"
      style={{
        transform: `translateY(${floatY}px) rotate(${rotateAngle}deg)`,
        transition: "transform 0.1s linear"
      }}
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {bubbleOpen && (
          <motion.div
            id="mascot-speech-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mb-3 max-w-[240px] bg-neutral-900/95 border border-purple-500/30 backdrop-blur-md rounded-2xl p-3 shadow-xl pointer-events-auto text-xs text-neutral-200 select-none relative"
          >
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-neutral-900 border-r border-b border-purple-500/30 rotate-45"></div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0 animate-pulse">
                {activeSection === "skills" ? <Code className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
              </span>
              <p className="leading-relaxed font-medium">{getSpeechBubbleText()}</p>
            </div>
            <button
              onClick={() => setBubbleOpen(false)}
              className="absolute top-1 right-2 text-neutral-500 hover:text-neutral-300 text-[10px] font-bold cursor-pointer transition-colors"
              aria-label="Close bubble"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Body */}
      <motion.button
        id="mascot-interactive-trigger"
        onClick={() => setBubbleOpen(!bubbleOpen)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-full"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Interactive Mascot Assistant"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          {/* Glowing Aura */}
          <circle cx="50" cy="45" r="32" fill="url(#auragrad)" opacity="0.15" />

          {/* Hover Propulsion Fire */}
          {activeSection !== "footer" && (
            <motion.path
              d="M45 72 L50 88 L55 72 Z"
              fill="url(#firegrad)"
              animate={{
                scaleY: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8],
                y: [0, 2, 0]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "50% 72%" }}
            />
          )}

          {/* Robot Base / Floating Ring */}
          <ellipse cx="50" cy="74" rx="20" ry="6" fill="#171717" stroke="#3b0764" strokeWidth="2" />
          <ellipse cx="50" cy="74" rx="14" ry="3.5" fill="none" stroke="#a21caf" strokeWidth="1" strokeDasharray="3 3" />

          {/* Body/Chassis */}
          <rect x="34" y="42" width="32" height="26" rx="10" fill="#171717" stroke="#8b5cf6" strokeWidth="3" />
          <line x1="50" y1="68" x2="50" y2="74" stroke="#8b5cf6" strokeWidth="4" />

          {/* Screen Face */}
          <rect x="38" y="46" width="24" height="18" rx="6" fill="#09090b" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Dynamic LED Screen Eyes */}
          <g>
            {/* Waving / Happy Eyes */}
            {activeSection === "hero" && (
              <>
                <motion.path
                  d="M41 52 Q44 48 47 52"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ y: [0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.path
                  d="M53 52 Q56 48 59 52"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ y: [0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </>
            )}

            {/* About: Sweet Grinning Smile Eyes */}
            {activeSection === "about" && (
              <>
                <path d="M41 51 Q44 46 47 51" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M53 51 Q56 46 59 51" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" fill="none" />
              </>
            )}

            {/* Skills: Analytical / Thinking Glasses */}
            {activeSection === "skills" && (
              <>
                {/* Square LED Matrix Eyes */}
                <rect x="40" y="50" width="6" height="4" rx="1" fill="#06b6d4" />
                <rect x="54" y="50" width="6" height="4" rx="1" fill="#06b6d4" />
                <line x1="46" y1="52" x2="54" y2="52" stroke="#06b6d4" strokeWidth="1" />
              </>
            )}

            {/* Projects: Proud Pointing (Star/Shining Eyes) */}
            {activeSection === "projects" && (
              <>
                {/* Sparkle Eyes */}
                <path d="M43 48 L45 51 L48 51 L45 53 L46 56 L43 54 L40 56 L41 53 L38 51 L41 51 Z" fill="#f97316" />
                <path d="M57 48 L59 51 L62 51 L59 53 L60 56 L57 54 L54 56 L55 53 L52 51 L55 51 Z" fill="#f97316" />
              </>
            )}

            {/* Contact: Encouraging Fluttering Eyes */}
            {activeSection === "contact" && (
              <>
                {/* Winking or excited hearts or round glowing nodes */}
                <circle cx="43" cy="52" r="2.5" fill="#ec4899" />
                <circle cx="57" cy="52" r="2.5" fill="#ec4899" />
              </>
            )}

            {/* Footer: Sleepy / Farewell Eyes */}
            {activeSection === "footer" && (
              <>
                <line x1="40" y1="52" x2="46" y2="52" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="54" y1="52" x2="60" y2="52" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </g>

          {/* Screen Mouth */}
          <path
            d={
              activeSection === "about" || activeSection === "contact" || activeSection === "hero"
                ? "M47 59 Q50 62 53 59" // Smile
                : activeSection === "skills"
                ? "M47 59 L53 59" // Straight Neutral line
                : activeSection === "footer"
                ? "M48 60 Q50 58 52 60" // Tiny sad/sleepy arc
                : "M47 59 Q50 61 53 59" // Standard soft arc
            }
            stroke={
              activeSection === "about" || activeSection === "contact"
                ? "#ec4899"
                : activeSection === "skills"
                ? "#06b6d4"
                : activeSection === "projects"
                ? "#f97316"
                : "#06b6d4"
            }
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ears / Side Antennas */}
          <rect x="30" y="49" width="4" height="12" rx="2" fill="#8b5cf6" />
          <rect x="66" y="49" width="4" height="12" rx="2" fill="#8b5cf6" />
          <circle cx="32" cy="49" r="1.5" fill="#06b6d4" />
          <circle cx="68" cy="49" r="1.5" fill="#06b6d4" />

          {/* Top Antenna */}
          <line x1="50" y1="42" x2="50" y2="34" stroke="#8b5cf6" strokeWidth="3" />
          <motion.circle
            cx="50"
            cy="32"
            r="3"
            fill={activeSection === "skills" ? "#f97316" : "#06b6d4"}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Left Arm & Hand */}
          <motion.g
            animate={
              activeSection === "skills"
                ? {
                    y: [0, -3, 0],
                    rotate: [0, -10, 0]
                  }
                : {}
            }
            transition={{ repeat: Infinity, duration: 0.3 }}
          >
            <path d="M34 50 Q24 54 28 62" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="62" r="2.5" fill="#06b6d4" />
          </motion.g>

          {/* Right Arm & Hand (Waving / Pointing / Gesturing) */}
          <g>
            {/* Waving Arm (Hero / Footer) */}
            {(activeSection === "hero" || activeSection === "footer") && (
              <motion.g
                animate={{
                  rotate: [15, -40, 15]
                }}
                transition={{
                  repeat: Infinity,
                  duration: activeSection === "footer" ? 1.5 : 1,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "66% 50%" }}
              >
                <path d="M66 50 Q78 44 80 34" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx="80" cy="34" r="2.5" fill="#06b6d4" />
              </motion.g>
            )}

            {/* Pointing Arm (Projects) */}
            {activeSection === "projects" && (
              <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: -25 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ transformOrigin: "66% 50%" }}
              >
                <path d="M66 50 L84 45" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Pointer finger shape */}
                <path d="M84 45 L89 42" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                <circle cx="84" cy="45" r="2.5" fill="#f97316" />
              </motion.g>
            )}

            {/* Encouraging Gesture Arm (Contact) */}
            {activeSection === "contact" && (
              <motion.g
                animate={{
                  scaleX: [1, 1.15, 1],
                  x: [0, 2, 0]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ transformOrigin: "66% 50%" }}
              >
                <path d="M66 50 Q76 56 82 50" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx="82" cy="50" r="2.5" fill="#ec4899" />
              </motion.g>
            )}

            {/* Thinking / Static Arm (About / Skills) */}
            {activeSection !== "hero" &&
              activeSection !== "footer" &&
              activeSection !== "projects" &&
              activeSection !== "contact" && (
                <motion.g
                  animate={
                    activeSection === "skills"
                      ? {
                          y: [0, -3, 0],
                          rotate: [0, 10, 0]
                        }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 0.3 }}
                >
                  <path d="M66 50 Q76 54 72 62" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <circle cx="72" cy="62" r="2.5" fill="#06b6d4" />
                </motion.g>
              )}
          </g>

          {/* Gradients definitions */}
          <defs>
            <radialGradient id="auragrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="firegrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>
    </div>
  );
}
