import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { layerAProjects, layerBProjects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = [...layerAProjects, ...layerBProjects].find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  const projectMeta = project as typeof project & {
    version?: string;
    category?: string;
    status?: string;
    year?: number;
    liveUrl?: string;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 md:max-w-7xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-sky-200">
                {project.type}
              </Badge>
              {projectMeta.category && (
                <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  {projectMeta.category}
                </Badge>
              )}
              {projectMeta.status && (
                <Badge className={`rounded-full border text-[10px] uppercase tracking-[0.2em] ${
                  projectMeta.status === "Live"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}>
                  {projectMeta.status}
                </Badge>
              )}
              {projectMeta.year && (
                <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  {projectMeta.year}
                </Badge>
              )}
            </div>

            <h1 className="mt-6 break-words text-3xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-slate-200">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
              {project.metrics?.map((metric, idx) => (
                <span key={`${project.slug}-detail-metric-${idx}`}>
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Summary
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.recruiterSummary}
              </p>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <Badge
                  key={`${project.slug}-stack-${tech}-${idx}`}
                  className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {projectMeta.liveUrl && (
                <a href={projectMeta.liveUrl} target="_blank" rel="noreferrer">
                  <Button className="min-h-11 rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Live App
                  </Button>
                </a>
              )}

              <a href={project.github} target="_blank" rel="noreferrer">
                <Button
                  className={`min-h-11 rounded-full px-6 ${
                    projectMeta.liveUrl
                      ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                      : "bg-white text-slate-950 hover:bg-slate-200"
                  }`}
                  variant={projectMeta.liveUrl ? "outline" : "default"}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open GitHub
                </Button>
              </a>

              <Link href="/notes">
                <Button
                  variant="outline"
                  className="min-h-11 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                >
                  Related Notes
                </Button>
              </Link>
            </div>
          </div>

          {/* System flow card */}
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <Badge className="rounded-full border border-white/15 bg-black/40 text-[10px] uppercase tracking-[0.3em] text-slate-200">
                  Case Study
                </Badge>
                <Layers3 className="h-5 w-5 text-sky-200" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                System Flow
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.dataFlow}
              </p>

              {project.architectureImage && (
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    Architecture Diagram
                  </p>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-white/8 bg-black/30">
                    <Image
                      src={project.architectureImage}
                      alt={`${project.title} architecture diagram`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Problem / Solution */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">Problem</h2>
              <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                {project.problem}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">Solution</h2>
              <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                {project.solution}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture + Highlights/Learnings */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">
                Architecture Flow
              </h2>

              <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 p-4 text-sm text-slate-300">
                {project.dataFlow}
              </div>

              <div className="mt-6 space-y-4">
                {project.architecture.map((step, index) => (
                  <div
                    key={`${project.slug}-architecture-${index}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-xs text-sky-200">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white">
                  Highlights
                </h2>
                <div className="mt-6 space-y-4">
                  {project.highlights.map((item, index) => (
                    <div
                      key={`${project.slug}-highlight-${index}`}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white">
                  What I Learned
                </h2>
                <div className="mt-6 space-y-4">
                  {project.learnings.map((item, index) => (
                    <div
                      key={`${project.slug}-learning-${index}`}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Engineering Decisions / Scaling */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">
                Engineering Decisions
              </h2>
              <div className="mt-6 space-y-4">
                {project.engineeringDecisions.map((item, index) => (
                  <div
                    key={`${project.slug}-decision-${index}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">
                Scaling Strategy
              </h2>
              <div className="mt-6 space-y-4">
                {project.scalingStrategy.map((item, index) => (
                  <div
                    key={`${project.slug}-scaling-${index}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Challenges / Outcome */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">Challenges</h2>
              <div className="mt-6 space-y-4">
                {project.challenges.map((item, index) => (
                  <div
                    key={`${project.slug}-challenge-${index}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">
                Outcome / Impact
              </h2>
              <div className="mt-6 space-y-4">
                {project.outcome.map((item, index) => (
                  <div
                    key={`${project.slug}-outcome-${index}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
