"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";

const architectureNodes = [
  {
    id: "api",
    title: "Client/API",
    subtitle: "Request entry point.",
    x: "12%",
    y: "62%",
  },
  {
    id: "kafka",
    title: "Kafka",
    subtitle: "Event stream backbone.",
    x: "34%",
    y: "28%",
  },
  {
    id: "workers",
    title: "Workers",
    subtitle: "Concurrent job processing.",
    x: "52%",
    y: "62%",
  },
  {
    id: "redis",
    title: "Redis",
    subtitle: "Fast caching layer.",
    x: "70%",
    y: "28%",
  },
  {
    id: "db",
    title: "Database",
    subtitle: "Durable storage.",
    x: "86%",
    y: "62%",
  },
];

function AnimatedArchitectureGraph() {
  return (
    <div className="relative h-[28rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="architectureLine"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.9)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0.2)" />
          </linearGradient>
        </defs>

        <path
          d="M12 62 C22 50, 26 32, 34 28 S46 48, 52 62 S62 42, 70 28 S80 48, 86 62"
          fill="none"
          stroke="url(#architectureLine)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          opacity="0.7"
        />

        <path
          d="M12 62 C22 50, 26 32, 34 28 S46 48, 52 62 S62 42, 70 28 S80 48, 86 62"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.2"
        />
      </svg>

      <motion.div
        className="absolute left-[12%] top-[62%] h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.95)]"
        animate={{
          x: [0, 120, 220, 330, 420],
          y: [0, -86, 0, -86, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-[12%] top-[62%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.95)]"
        animate={{
          x: [0, 120, 220, 330, 420],
          y: [0, -86, 0, -86, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "linear",
          delay: 1.1,
        }}
      />

      <motion.div
        className="absolute left-[12%] top-[62%] h-2 w-2 rounded-full bg-green-300 shadow-[0_0_18px_rgba(134,239,172,0.95)]"
        animate={{
          x: [0, 120, 220, 330, 420],
          y: [0, -86, 0, -86, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {architectureNodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(56,189,248,0.15)",
                "0 0 32px rgba(56,189,248,0.28)",
                "0 0 20px rgba(56,189,248,0.15)",
              ],
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-28 -translate-x-1/2 -translate-y-1/2 rounded-[1.1rem] border border-white/10 bg-[#0b1220]/90 p-3 backdrop-blur-xl"
          >
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-[11px] font-semibold text-sky-200">
              0{index + 1}
            </div>
            <h4 className="text-[13px] font-semibold text-white">
              {node.title}
            </h4>
            <p className="mt-1 text-[11px] leading-4 text-slate-400">
              {node.subtitle}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function ArchitectureSection({
  recruiterMode,
}: {
  recruiterMode: boolean;
}) {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="System Design"
        title="Interactive distributed systems architecture"
        description={
          recruiterMode
            ? "A recruiter-friendly systems snapshot showing backend, event-driven, and scalable architecture thinking."
            : "A visual systems flow that reinforces your backend, cloud-native, and event-driven engineering identity for recruiters and hiring managers."
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-sky-300">Architecture View</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Event-driven systems flow
                </h3>
              </div>

              <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-slate-300">
                Distributed Systems
              </Badge>
            </div>

            <AnimatedArchitectureGraph />
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8">
            <p className="text-sm text-violet-300">Why this section matters</p>
            <h3 className="mt-1 text-2xl font-semibold text-white">
              Big Tech-facing storytelling
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {recruiterMode ? (
                <>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Highlights backend architecture and distributed systems
                    thinking quickly.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Reinforces experience with Kafka, workers, Redis, APIs, and
                    scalable system design.
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    It immediately communicates system design thinking instead of
                    a generic portfolio layout.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    It visually reinforces your strengths in APIs, Kafka,
                    workers, caching, and scalable backend systems.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Later, each Layer A project can reuse this pattern with its
                    own customized architecture flow.
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}