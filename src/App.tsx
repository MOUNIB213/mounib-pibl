import { useEffect } from "react";
import { useActiveSection } from "./hooks/useActiveSection";
import { Header } from "./components/Header";
import { Mascot } from "./components/Mascot";
import { Marquee } from "./components/Marquee";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Socials } from "./sections/Socials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  const activeSection = useActiveSection();

  // Dynamic Page Title SEO update
  useEffect(() => {
    const formattedSection =
      activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    document.title = `Mounib Khaldi | ${
      activeSection === "hero" ? "Full Stack Developer" : formattedSection
    }`;
  }, [activeSection]);

  return (
    <div id="portfolio-root" className="bg-[#050505] text-neutral-100 min-h-screen selection:bg-purple-500/30 selection:text-white antialiased">
      {/* Dynamic Header */}
      <Header activeSection={activeSection} />

      {/* Main Layout Sections */}
      <main id="portfolio-main-content">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Socials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Interactive SVG Mascot */}
      <Mascot activeSection={activeSection} />
    </div>
  );
}
