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
    <div className="min-h-screen overflow-x-hidden bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 md:max-w-7xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {projectMeta.category && (
                <Badge className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {projectMeta.category}
                </Badge>
              )}
              {projectMeta.status && (
                <Badge className={`rounded-full border text-[10px] uppercase tracking-[0.2em] ${
                  projectMeta.status === "Live"
                    ? "border-success/30 bg-success/10 text-success"
                    : "border-border bg-card text-muted-foreground"
                }`}>
                  {projectMeta.status}
                </Badge>
              )}
              {projectMeta.year && (
                <Badge className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {projectMeta.year}
                </Badge>
              )}
            </div>

            <h1 className="mt-6 break-words text-3xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-foreground">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {project.metrics?.map((metric, idx) => (
                <span key={`${project.slug}-detail-metric-${idx}`}>
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-muted p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Summary
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.engineeringSummary}
              </p>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <Badge
                  key={`${project.slug}-stack-${tech}-${idx}`}
                  className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {projectMeta.liveUrl && (
                <a href={projectMeta.liveUrl} target="_blank" rel="noreferrer">
                  <Button className="min-h-11 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/80">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Live App
                  </Button>
                </a>
              )}

              <a href={project.github} target="_blank" rel="noreferrer">
                <Button
                  className={`min-h-11 rounded-full px-6 ${
                    projectMeta.liveUrl
                      ? "border-border bg-card text-foreground hover:bg-muted"
                      : "bg-primary text-primary-foreground hover:bg-primary/80"
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
                  className="min-h-11 rounded-full border-border bg-card px-6 text-foreground hover:bg-muted"
                >
                  Related Notes
                </Button>
              </Link>
            </div>
          </div>

          {/* System flow card */}
          <Card className="overflow-hidden rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <Badge className="rounded-full border border-border bg-muted text-[10px] uppercase tracking-[0.3em] text-foreground">
                  Case Study
                </Badge>
                <Layers3 className="h-5 w-5 text-primary" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                System Flow
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.dataFlow}
              </p>

              {project.architectureImage && (
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Architecture Diagram
                  </p>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-muted">
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
          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">Problem</h2>
              <div className="mt-6 rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground">
                {project.problem}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">Solution</h2>
              <div className="mt-6 rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground">
                {project.solution}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture + Highlights/Learnings */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Architecture Flow
              </h2>

              <div className="mt-4 rounded-2xl border border-border bg-muted p-4 text-sm text-muted-foreground">
                {project.dataFlow}
              </div>

              <div className="mt-6 space-y-4">
                {project.architecture.map((step, index) => (
                  <div
                    key={`${project.slug}-architecture-${index}`}
                    className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                  >
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs text-primary">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Highlights
                </h2>
                <div className="mt-6 space-y-4">
                  {project.highlights.map((item, index) => (
                    <div
                      key={`${project.slug}-highlight-${index}`}
                      className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  What I Learned
                </h2>
                <div className="mt-6 space-y-4">
                  {project.learnings.map((item, index) => (
                    <div
                      key={`${project.slug}-learning-${index}`}
                      className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
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
          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Engineering Decisions
              </h2>
              <div className="mt-6 space-y-4">
                {project.engineeringDecisions.map((item, index) => (
                  <div
                    key={`${project.slug}-decision-${index}`}
                    className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Scaling Strategy
              </h2>
              <div className="mt-6 space-y-4">
                {project.scalingStrategy.map((item, index) => (
                  <div
                    key={`${project.slug}-scaling-${index}`}
                    className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
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
          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">Challenges</h2>
              <div className="mt-6 space-y-4">
                {project.challenges.map((item, index) => (
                  <div
                    key={`${project.slug}-challenge-${index}`}
                    className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Outcome / Impact
              </h2>
              <div className="mt-6 space-y-4">
                {project.outcome.map((item, index) => (
                  <div
                    key={`${project.slug}-outcome-${index}`}
                    className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
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
