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
    <div className="relative h-[28rem] overflow-hidden rounded-[1.75rem] border border-border bg-muted">
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M12 62 C22 50, 26 32, 34 28 S46 48, 52 62 S62 42, 70 28 S80 48, 86 62"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          opacity="0.35"
        />
      </svg>

      <motion.div
        className="absolute left-[12%] top-[62%] h-2 w-2 rounded-full bg-primary"
        animate={{
          x: [0, 120, 220, 330, 420],
          y: [0, -86, 0, -86, 0],
          opacity: [0, 0.9, 0.9, 0.9, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
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
          <div className="w-28 -translate-x-1/2 -translate-y-1/2 rounded-[1.1rem] border border-border bg-popover p-3">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-[11px] font-semibold text-primary">
              0{index + 1}
            </div>
            <h4 className="text-[13px] font-semibold text-foreground">
              {node.title}
            </h4>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
              {node.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="System Design"
        title="Interactive distributed systems architecture"
        description="A visual systems flow that reinforces backend, cloud-native, and event-driven engineering depth."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden rounded-[2rem] border-border bg-card backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-primary">Architecture View</p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  Event-driven systems flow
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A simplified view of the kind of backend architecture used in
                  scalable, production-minded systems.
                </p>
              </div>

              <Badge className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Distributed Systems
              </Badge>
            </div>

            <AnimatedArchitectureGraph />
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
          <CardContent className="p-8">
            <p className="text-sm text-primary">Why this architecture matters</p>
            <h3 className="mt-1 text-2xl font-semibold text-foreground">
              Backend engineering depth, made visible
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <div className="rounded-2xl border border-border bg-muted p-4">
                Communicates real backend system design thinking beyond CRUD
                applications by showing ingestion, asynchronous processing,
                caching, and persistence as separate concerns.
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                Highlights event-driven architecture using Kafka-style pipelines,
                worker-based execution, and durable storage patterns commonly
                used in scalable systems.
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                Demonstrates production-oriented engineering choices such as
                decoupling, performance optimization, and fault-tolerant service
                boundaries.
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                This same systems thinking carries across flagship projects
                like the Distributed AI Simulation Platform, AI Knowledge
                Assistant, and SmartQuote ERP quotation management.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
