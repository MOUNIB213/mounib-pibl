import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact", "footer"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Trigger when section occupies the middle 50% of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback scroll tracker in case IntersectionObserver has issues with dense content
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
