"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      glow.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      container.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.12)_0%,_transparent_60%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

      <div
        ref={containerRef}
        className="container-custom relative z-10 text-center transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            ref={glowRef}
            className="inline-block px-5 py-2 text-xs md:text-sm font-medium text-primary-light bg-primary/10 border border-primary/25 rounded-full mb-6 tracking-wider uppercase animate-pulse-glow"
          >
            Welcome to the Digital Universe
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={textRef}
          className="mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none mb-2">
            <span className="block" style={{ transform: "translateZ(40px)" }}>HARI</span>
          </h1>
          <div className="relative inline-block" style={{ transform: "translateZ(20px)" }}>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] text-gradient">
              VERSE
            </span>
            <span className="absolute -top-2 -right-8 w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          style={{ transform: "translateZ(10px)" }}
        >
          A premium personal digital universe — exploring identity, projects,
          ecosystems, and the future of interconnected systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <a
            href="#ecosystem"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Ecosystem</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center p-1">
              <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-primary to-cyan-500 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
