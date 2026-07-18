"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers3, FolderOpen, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { layerAProjects, homepageFeaturedSlugs } from "@/data/projects";
import Link from "next/link";

type FeaturedProject = (typeof layerAProjects)[number] & {
  liveUrl?: string;
};

const featuredProjects = homepageFeaturedSlugs
  .map((slug) => layerAProjects.find((project) => project.slug === slug))
  .filter((project): project is FeaturedProject => Boolean(project));

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[calc(100vw-3rem)] overflow-x-hidden px-0 py-20 md:max-w-7xl md:px-6"
    >
      <SectionTitle
        eyebrow="Featured Projects"
        title="Flagship projects with product and systems depth"
        description="The strongest engineering stories across distributed systems, AI applications, cloud-native products, and real-world software delivery."
      />

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="w-full"
          >
            <Card className="relative flex h-full w-[calc(100vw-3rem)] max-w-full min-w-0 flex-col overflow-hidden rounded-[2rem] border-border bg-card md:w-full">
              <div className="relative h-32 overflow-hidden border-b border-border bg-muted">
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {"status" in project && project.status === "Live" && (
                      <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-success">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                        Live
                      </span>
                    )}
                  </div>
                  <Layers3 className="h-5 w-5 text-primary" />
                </div>
              </div>

              <CardContent className="relative z-10 flex flex-grow flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                <div className="mt-2 flex min-w-0 flex-wrap gap-3 text-sm text-muted-foreground">
                  {project.metrics?.map((metric, metricIdx) => (
                    <span key={`${project.slug}-metric-${metricIdx}`}>
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-3 break-words rounded-2xl border border-border bg-muted px-3 py-2 text-sm leading-6 text-muted-foreground">
                  {project.dataFlow}
                </div>

                <p className="mt-3 break-words text-sm leading-7 text-muted-foreground">
                  {project.engineeringSummary}
                </p>

                <div className="mt-5 flex min-w-0 flex-wrap gap-2">
                  {project.stack.map((tech, techIdx) => (
                    <Badge
                      key={`${project.slug}-${tech}-${techIdx}`}
                      className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <Link href={`/projects/${project.slug}`}>
                    <Button size="sm" className="min-h-11 rounded-full">
                      View Project
                    </Button>
                  </Link>

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="min-h-11 rounded-full"
                      >
                        Live
                      </Button>
                    </a>
                  )}

                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="min-h-11 rounded-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: featuredProjects.length * 0.08 }}
          className="w-full"
        >
          <Card className="relative flex h-full w-[calc(100vw-3rem)] max-w-full min-w-0 flex-col overflow-hidden rounded-[2rem] border-border bg-card md:w-full">
            <div className="relative h-32 overflow-hidden border-b border-border bg-muted">
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                <Badge className="rounded-full border border-border bg-background/60 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  More
                </Badge>
                <FolderOpen className="h-5 w-5 text-primary" />
              </div>
            </div>

            <CardContent className="flex flex-grow flex-col p-6">
              <h3 className="text-xl font-semibold text-foreground">
                Explore All Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Open the full projects page to explore the complete project
                archive, deeper case studies, and additional engineering work
                beyond the featured flagship builds.
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <Link href="/projects">
                  <Button className="min-h-11 rounded-full">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
