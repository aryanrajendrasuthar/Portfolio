"use client";

import { motion } from "framer-motion";

export function SystemsNetworkBackground() {
  const nodes = [
    { id: 1, label: "API", x: "10%", y: "20%" },
    { id: 2, label: "Kafka", x: "28%", y: "48%" },
    { id: 3, label: "Workers", x: "48%", y: "26%" },
    { id: 4, label: "Redis", x: "65%", y: "56%" },
    { id: 5, label: "DB", x: "84%", y: "30%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.1)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.85)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0.15)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 10 20 C 18 28, 22 40, 28 48 S 40 34, 48 26 S 58 52, 65 56 S 76 40, 84 30"
          fill="none"
          stroke="url(#flowLine)"
          strokeWidth="0.55"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.08, 1] }}
          transition={{
            duration: 3 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/25 bg-slate-950/60 shadow-[0_0_35px_rgba(56,189,248,0.2)] backdrop-blur-md">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),rgba(0,0,0,0)_70%)]" />
            <div className="relative z-10 h-2.5 w-2.5 rounded-full bg-sky-300" />
          </div>
          <div className="mt-2 -translate-x-1/4 text-[10px] uppercase tracking-[0.3em] text-slate-400">
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[24%] top-[42%] h-2 w-2 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.9)]"
        animate={{
          x: [0, 140, 280, 420, 560],
          y: [0, -12, -72, 8, -58],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}