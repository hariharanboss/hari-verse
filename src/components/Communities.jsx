"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const communities = [
  {
    name: "Movie & Entertainment",
    description:
      "Active Telegram community for movie enthusiasts with instant search and downloads.",
    members: "10K+",
    link: "https://t.me/+oLvCDNTpvGI5MmNl",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Tech & Development",
    description:
      "Community focused on bot development, automation, and technical discussions.",
    members: "5K+",
    link: "https://t.me/haris_garage",
    color: "from-cyan-500 to-blue-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function Communities() {
  return (
    <SectionWrapper id="communities" className="bg-surface-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            COMMUNITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Communities & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Connected communities built around shared interests.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {communities.map((com) => (
            <motion.div key={com.name} variants={itemVariants}>
              <TiltCard>
                <a
                  href={com.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 md:p-8 group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${com.color} flex items-center justify-center text-xl shadow-lg`}>
                      👥
                    </div>
                    <span className="text-sm font-semibold text-primary-light">{com.members} members</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {com.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{com.description}</p>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
