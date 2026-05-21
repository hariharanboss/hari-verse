"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const ecosystemItems = [
  {
    title: "Hari's Garage",
    handle: "@haris_garage",
    description: "Official announcement channel for updates, new releases, and ecosystem notifications.",
    type: "Channel",
    color: "from-blue-500 to-blue-600",
    link: "https://t.me/haris_garage",
    features: ["Bot updates", "New releases", "Announcements"],
    icon: "📢",
  },
  {
    title: "TYPE IT 1™",
    handle: "Search Group",
    description: "Primary search group where users can instantly find any movie, series, or anime.",
    type: "Group",
    color: "from-emerald-500 to-cyan-500",
    link: "https://t.me/+oLvCDNTpvGI5MmNl",
    features: ["Instant search", "Direct downloads", "All qualities"],
    icon: "🔍",
    featured: true,
  },
  {
    title: "Mrunalini Bot",
    handle: "@mrunalini3bot",
    description: "Custom-built autofilter bot that powers the entire ecosystem with lightning-fast search.",
    type: "Bot",
    color: "from-pink-500 to-violet-600",
    link: "https://t.me/mrunalini3bot",
    features: ["24/7 online", "Ultra-fast", "30 Lakh+ files"],
    icon: "🤖",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TelegramEcosystem() {
  return (
    <SectionWrapper id="ecosystem" className="bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            TELEGRAM ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Telegram <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            An interconnected digital network of channels, groups, and bots working in harmony.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {ecosystemItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <TiltCard>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-2xl p-6 md:p-8 group block relative overflow-hidden ${
                    item.featured ? "neon-border" : ""
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold rounded-full z-10">
                      MAIN HUB
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/70 uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary-light text-sm font-medium mb-3">{item.handle}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-light group-hover:gap-3 transition-all">
                    Open in Telegram
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
