"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 2 },
  { left: "18%", top: "62%", size: 1.5 },
  { left: "28%", top: "32%", size: 2 },
  { left: "46%", top: "14%", size: 1.5 },
  { left: "58%", top: "48%", size: 2 },
  { left: "72%", top: "22%", size: 1.5 },
  { left: "78%", top: "68%", size: 2 },
  { left: "88%", top: "38%", size: 1.5 },
  { left: "92%", top: "12%", size: 2 },
] as const;

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full text-accent/20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="72" y1="0" x2="38" y2="100" stroke="currentColor" strokeWidth="0.16" />
        <line x1="84" y1="0" x2="52" y2="100" stroke="currentColor" strokeWidth="0.16" />
        <line x1="96" y1="0" x2="68" y2="100" stroke="currentColor" strokeWidth="0.16" />
        <line x1="100" y1="8" x2="78" y2="100" stroke="currentColor" strokeWidth="0.13" />
      </svg>
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-accent"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.12, 0.35, 0.12] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
