"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Mrunalini Bot",
    description:
      "A powerful autofilter bot for Telegram that indexes and serves millions of files with lightning-fast search responses.",
    tags: ["Python", "Telegram API", "Autofilter", "Database"],
    link: "https://t.me/mrunalini3bot",
    icon: "🤖",
  },
  {
    title: "TYPE IT 1™ Search Group",
    description:
      "High-traffic Telegram community where users can instantly search and discover movies, series, and anime.",
    tags: ["Community", "Automation", "Search"],
    link: "https://t.me/+oLvCDNTpvGI5MmNl",
    icon: "🔍",
  },
  {
    title: "Hari&apos;s Garage Channel",
    description:
      "Official announcement channel providing updates, new releases, and ecosystem notifications.",
    tags: ["Channel", "Updates", "Community"],
    link: "https://t.me/haris_garage",
    icon: "📢",
  },
  {
    title: "Hari Verse",
    description:
      "This digital universe — a premium interactive personal website built with Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "3D"],
    icon: "🌐",
    highlight: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works & <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Digital products and platforms I&apos;ve built.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <TiltCard>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-2xl p-6 md:p-8 group block ${project.highlight ? "neon-border" : ""}`}
                >
                  <span className="text-4xl mb-4 block">{project.icon}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-primary-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    View Project
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
