"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const socials = [
  {
    name: "Telegram Channel",
    handle: "@haris_garage",
    link: "https://t.me/haris_garage",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: "hover:bg-blue-500",
  },
  {
    name: "Search Group",
    handle: "TYPE IT 1™",
    link: "https://t.me/+oLvCDNTpvGI5MmNl",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: "hover:bg-emerald-500",
  },
  {
    name: "Email",
    handle: "Contact via Telegram",
    link: "https://t.me/haris_garage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    color: "hover:bg-violet-500",
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

export default function SocialLinks() {
  return (
    <SectionWrapper id="social" className="bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            CONNECT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Social <span className="text-gradient">Presence</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Find me across the digital landscape.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              variants={itemVariants}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass rounded-2xl p-5 flex items-center gap-4 hover:neon-border transition-all duration-300 group ${social.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {social.icon}
              </div>
              <div className="text-left">
                <p className="font-semibold">{social.name}</p>
                <p className="text-sm text-white/50">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
