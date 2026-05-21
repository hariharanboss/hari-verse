"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "300K+ Files Indexed",
    description:
      "Built a massive file indexing system that organizes and serves over 300,000 files through Telegram.",
    icon: "🏆",
  },
  {
    title: "24/7 Ecosystem Uptime",
    description:
      "Maintained uninterrupted service across multiple Telegram platforms serving thousands of daily users.",
    icon: "⚡",
  },
  {
    title: "Community Building",
    description:
      "Grew and managed thriving Telegram communities with thousands of active members.",
    icon: "🌍",
  },
  {
    title: "Autofilter Innovation",
    description:
      "Developed custom autofilter technology that delivers instant search results across vast file databases.",
    icon: "💡",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-surface-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Milestones & <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Key accomplishments that define the journey.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 text-center group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
