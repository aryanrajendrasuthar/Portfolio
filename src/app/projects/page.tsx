import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { layerAProjects } from "@/data/projects";
import { TiltCard } from "@/components/ui/tilt-card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-slate-400">
            Projects
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Project Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            Layer A projects presented as engineering-focused case studies with
            architecture, highlights, and learnings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {layerAProjects.map((project) => (
            <TiltCard key={project.slug} className="h-full">
              <Card className="group relative h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(124,58,237,0.14),rgba(15,23,42,0.8))]">
                  <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_20%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:auto,22px_22px,22px_22px]" />

                  <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div className="absolute inset-x-4 top-4 flex justify-center">
                      <img
                        src={project.architectureImage}
                        alt={`${project.title} architecture`}
                        className="max-h-28 w-auto rounded-lg border border-white/10 shadow-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                    <Badge className="rounded-full border border-white/10 bg-black/30 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                      {project.type}
                    </Badge>
                    <Layers3 className="h-5 w-5 text-sky-200" />
                  </div>
                </div>

                <CardContent className="relative z-10 flex flex-col p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                    {project.metrics?.map((metric, idx) => (
                      <span key={`${project.slug}-projects-metric-${idx}`}>
                        {metric}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {project.engineeringSummary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={`${project.slug}-${tech}-${idx}`}
                        className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300 transition hover:border-sky-400 hover:bg-sky-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link href={`/projects/${project.slug}`}>
                      <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                        View Case Study
                      </Button>
                    </Link>

                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button
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
          ))}
        </div>
      </div>
    </div>
  );
}
