"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers3, FolderOpen, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { layerAProjects } from "@/data/projects";
import Link from "next/link";
import { TiltCard } from "../ui/tilt-card";

type Props = {
  recruiterMode: boolean;
};

export function FeaturedProjectsSection({ recruiterMode }: Props) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Featured Projects"
        title={
          recruiterMode
            ? "Layer A project portfolio"
            : "Flagship projects with product and systems depth"
        }
        description={
          recruiterMode
            ? "Recruiter Mode keeps the focus on your top projects, impact, and engineering range."
            : "Layer A highlights the strongest engineering stories across distributed systems, AI applications, cloud-native products, and real-world software delivery."
        }
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {layerAProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="w-full"
          >
            <TiltCard className="h-full">
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(124,58,237,0.14),rgba(15,23,42,0.8))]">
                  <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_20%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:auto,22px_22px,22px_22px]" />

                  <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div className="absolute inset-x-4 top-4 flex justify-center">
                      <img
                        src={project.architectureImage}
                        alt={`${project.title} architecture`}
                        className="max-h-36 w-auto rounded-lg border border-white/10 shadow-xl object-contain"
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pointer-events-none absolute inset-x-4 top-1/2 z-10 -translate-y-1/2 text-center text-xs tracking-[0.2em] text-slate-200"
                  >
                    {project.dataFlow}
                  </motion.div>

                  <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                    <Badge className="rounded-full border border-white/15 bg-black/30 text-[10px] uppercase tracking-[0.3em] text-slate-200">
                      {project.type}
                    </Badge>

                    <Layers3 className="h-5 w-5 text-sky-200" />
                  </div>
                </div>

                <CardContent className="relative z-10 flex flex-grow flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                    {project.metrics?.map((metric, metricIdx) => (
                      <span key={`${project.slug}-metric-${metricIdx}`}>
                        {metric}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {recruiterMode
                      ? project.recruiterSummary
                      : project.engineeringSummary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <Badge
                        key={`${project.slug}-${tech}-${techIdx}`}
                        className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300 transition hover:border-sky-400 hover:bg-sky-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <Link href={`/projects/${project.slug}`}>
                      <Button
                        size="sm"
                        className="rounded-full bg-white text-slate-950 hover:bg-slate-200"
                      >
                        View Project
                      </Button>
                    </Link>

                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: layerAProjects.length * 0.08 }}
          className="w-full"
        >
          <TiltCard className="h-full">
            <Card className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(56,189,248,0.12),rgba(15,23,42,0.8))]">
                <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_20%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:auto,22px_22px,22px_22px]" />

                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                  <Badge className="rounded-full border border-white/15 bg-black/30 text-[10px] uppercase tracking-[0.3em] text-slate-200">
                    More
                  </Badge>

                  <FolderOpen className="h-5 w-5 text-violet-300" />
                </div>
              </div>

              <CardContent className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-semibold text-white">
                  Explore All Projects
                </h3>

                <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                  <span>📂 Full archive</span>
                  <span>🧠 Layer A + more</span>
                  <span>🔍 Case studies</span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Open the full projects page to explore the complete project archive, deeper case studies, and additional engineering work beyond the featured flagship builds.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    Layer A
                  </Badge>
                  <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    Layer B
                  </Badge>
                  <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    Case Studies
                  </Badge>
                  <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    Archive
                  </Badge>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-8">
                  <Link href="/projects">
                    <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}