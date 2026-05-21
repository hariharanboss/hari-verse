"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import SectionWrapper from "./SectionWrapper";

const contactMethods = [
  {
    title: "Telegram",
    description: "Reach out directly via Telegram for quick responses.",
    action: "Message Now",
    link: "https://t.me/haris_garage",
    icon: "✈️",
  },
  {
    title: "Join the Community",
    description: "Be part of the growing Telegram ecosystem.",
    action: "Join Now",
    link: "https://t.me/+oLvCDNTpvGI5MmNl",
    icon: "👥",
  },
  {
    title: "Visit Bot",
    description: "Interact with Mrunalini Bot directly.",
    action: "Start Bot",
    link: "https://t.me/mrunalini3bot",
    icon: "🤖",
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

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-surface-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Ready to connect? Reach out through any of these channels.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div key={method.title} variants={itemVariants}>
              <TiltCard>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 md:p-8 text-center group block"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {method.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-light group-hover:gap-3 transition-all">
                    {method.action}
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
