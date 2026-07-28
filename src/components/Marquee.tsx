import { Sparkles } from "lucide-react";

const marqueeItems = [
  "React Developer",
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Clean Code",
  "Problem Solver",
  "JavaScript Expert",
  "Node.js",
  "API Integration",
];

export function Marquee() {
  return (
    <section id="marquee" className="relative py-10 bg-black/90 overflow-hidden border-y border-neutral-900 select-none">
      {/* Background radial soft light gradient */}
      <div className="absolute inset-y-0 left-1/4 right-1/4 bg-radial from-purple-500/10 via-transparent to-transparent blur-2xl pointer-events-none"></div>

      <div className="flex w-full overflow-hidden">
        {/* We use double lists for continuous looping with no layout jump */}
        <div className="flex whitespace-nowrap min-w-full shrink-0 gap-16 items-center animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div key={`m1-${index}`} className="flex items-center gap-4">
              <span className="text-xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent font-display">
                {item}
              </span>
              <Sparkles className="w-5 h-5 text-orange-400 shrink-0 animate-pulse" />
            </div>
          ))}
        </div>

        <div className="flex whitespace-nowrap min-w-full shrink-0 gap-16 items-center animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div key={`m2-${index}`} className="flex items-center gap-4">
              <span className="text-xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent font-display">
                {item}
              </span>
              <Sparkles className="w-5 h-5 text-orange-400 shrink-0 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
