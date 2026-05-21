"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "VS Code", "Telegram Bot API", "Linux", "Docker"],
  },
  {
    title: "Bot Development",
    icon: "🤖",
    skills: ["Autofilter Bots", "Telegram Bots", "Indexing Systems", "File Management", "Database Design"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Tools and technologies I use to build digital experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.title} variants={itemVariants}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 group">
                  <span className="text-3xl mb-4 block">{cat.icon}</span>
                  <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white/80 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
