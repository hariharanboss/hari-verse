"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px)`;
    };

    const animate = () => {
      if (trail) {
        trailX += (mouseX - trailX - 24) * 0.1;
        trailY += (mouseY - trailY - 24) * 0.1;
        trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
      if (trail) trail.style.opacity = "0";
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
      if (trail) trail.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 mix-blend-difference pointer-events-none z-[9998] transition-opacity duration-300 hidden lg:block"
        style={{ transform: "translate(0, 0)" }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/20 pointer-events-none z-[9997] transition-opacity duration-300 hidden lg:block"
        style={{ transform: "translate(0, 0)" }}
      />
    </>
  );
}
