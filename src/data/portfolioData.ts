export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'UI/UX';
  stats: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; percentage: number; iconName: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "MOUNIB KHALDI",
    role: "Full Stack Developer",
    subtitle: "Architecting high-performance modern web experiences with clean code & creative design.",
    bio: "I am a passionate Full Stack Developer and Clean Code Advocate based in London, UK. I specialize in building visually stunning, accessible, and ultra-performant web applications. With a dual focus on engineering excellence and creative UI/UX design, I turn complex problems into elegant, production-ready digital solutions.",
    philosophy: "I believe that software engineering is an art form. Writing clean, self-documenting code and designing responsive, 60 FPS user interfaces is not just a job requirement—it's a commitment to crafting unforgettable experiences.",
    location: "London, UK / Remote",
    experienceYears: "5+",
    completedProjects: "24+",
    satisfactionRate: "100%",
  },
  skills: [
    {
      category: "Frontend Architecture",
      skills: [
        { name: "React / React 19", percentage: 95, iconName: "Code" },
        { name: "TypeScript", percentage: 92, iconName: "Shield" },
        { name: "JavaScript (ES6+)", percentage: 96, iconName: "Cpu" },
        { name: "Next.js", percentage: 88, iconName: "Layers" },
        { name: "Tailwind CSS", percentage: 95, iconName: "Palette" },
        { name: "Framer Motion", percentage: 90, iconName: "Sparkles" },
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js", percentage: 90, iconName: "Server" },
        { name: "Express", percentage: 93, iconName: "Globe" },
        { name: "REST APIs", percentage: 95, iconName: "GitMerge" },
        { name: "PostgreSQL", percentage: 85, iconName: "Database" },
        { name: "MongoDB", percentage: 87, iconName: "HardDrive" },
        { name: "Docker & Git", percentage: 88, iconName: "Terminal" },
      ]
    }
  ] as SkillGroup[],
  projects: [
    {
      id: "saas-analytics",
      title: "SaaS Analytics Engine",
      description: "A high-performance real-time data visualizer with dynamic multi-variable filtering, SVG charts, and advanced caching.",
      longDescription: "Designed and engineered a full-stack real-time analytics dashboard tracking user conversions and telemetry logs. Integrated custom D3.js chart utilities for 60 FPS rendering under heavy data loads, featuring robust client-side filtering and customizable layout matrices.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "D3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Full Stack",
      stats: [
        { label: "Rendering", value: "60 FPS" },
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Data Latency", value: "<15ms" }
      ]
    },
    {
      id: "ai-code-companion",
      title: "AI-Powered Code Assistant",
      description: "A secure playground-to-production IDE tool translating conversational commands into structured, refactored React files.",
      longDescription: "Developed an intelligent editor workspace powered by the Google Gemini API. Incorporates real-time syntax checking, local tree visualization, and contextual refactoring. Securely stores session contexts via server-side APIs to safeguard corporate credentials.",
      techStack: ["React", "TypeScript", "Framer Motion", "Gemini API", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Frontend",
      stats: [
        { label: "Refactor Speed", value: "~1.2s" },
        { label: "API Success", value: "99.8%" },
        { label: "Token Utility", value: "Optimized" }
      ]
    },
    {
      id: "ecom-core-api",
      title: "E-Commerce Core Microservice",
      description: "A distributed, highly secure order-processing and inventory API with integrated Stripe Webhooks and Redis cache.",
      longDescription: "Architected an enterprise-level API gateway capable of processing thousands of requests per second. Employs advanced rate-limiting, double-entry ledger security, and asynchronous queue structures to eliminate transaction collisions and guarantee data consistency.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Stripe API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Backend",
      stats: [
        { label: "Request Cap", value: "5k/sec" },
        { label: "Query Speed", value: "<8ms" },
        { label: "Reliability", value: "99.99%" }
      ]
    },
    {
      id: "design-system",
      title: "Pixel-Perfect Design System",
      description: "An open-source, highly accessible, keyboard-navigable UI kit strictly adhering to WCAG AA color and structure guidelines.",
      longDescription: "Created a robust library of animated, fully themeable React elements. Engineered with full screen-reader accessibility, dynamic focus management, and intuitive motion spring mechanics. Tested against strict accessibility validators with perfect audit reviews.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "UI/UX",
      stats: [
        { label: "Accessibility", value: "100%" },
        { label: "CSS Size", value: "12KB Gzip" },
        { label: "Focus Tested", value: "Perfect" }
      ]
    }
  ] as Project[],
  experiences: [
    {
      role: "Lead Full Stack Engineer",
      company: "Apex Tech Labs",
      period: "2024 - Present",
      description: [
        "Architected scalable microservice frameworks handling high traffic flows, decreasing server latency by 42%.",
        "Pioneered a company-wide design system built with React and Tailwind, reducing layout development time by half.",
        "Refactored relational database queries and introduced memory caches to optimize dashboard page loads."
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "System Design"]
    },
    {
      role: "Senior Frontend Developer",
      company: "Quantum Digital Agency",
      period: "2022 - 2024",
      description: [
        "Crafted premium marketing and software applications for high-profile clients, winning industry awards for UX design.",
        "Led a team of 4 frontend engineers, introducing modern code reviews and rigid TypeScript standard guidelines.",
        "Built responsive, high-fidelity interactive graphics using SVGs and custom physics-based animation controllers."
      ],
      tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "A11y"]
    }
  ] as Experience[],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  }
};
