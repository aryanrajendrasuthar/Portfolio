import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { layerAProjects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = layerAProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-sky-200">
              {project.type}
            </Badge>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
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

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <Badge
                  key={`${project.slug}-stack-${tech}-${idx}`}
                  className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300 transition hover:bg-sky-500/20 hover:border-sky-400"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open GitHub
                </Button>
              </a>

              <Link href="/notes">
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                >
                  Related Notes
                </Button>
              </Link>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="relative h-[24rem] overflow-hidden bg-black">
              <img
                src={project.architectureImage}
                alt={`${project.title} architecture`}
                className="absolute inset-0 h-full w-full object-contain"
              />

              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                <Badge className="rounded-full border border-white/15 bg-black/40 text-[10px] uppercase tracking-[0.3em] text-slate-200">
                  Case Study
                </Badge>
                <Layers3 className="h-5 w-5 text-sky-200" />
              </div>
            </div>
          </Card>
        </div>

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

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-white">Screenshots</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.screenshots.map((shot, index) => (
              <Card
                key={`${project.slug}-screenshot-${index}`}
                className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative h-64 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(124,58,237,0.14),rgba(15,23,42,0.8))]">
                  <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
                  <div className="absolute inset-6 rounded-[1.5rem] border border-dashed border-white/20 bg-black/20 p-4 text-sm text-slate-300">
                    Placeholder screenshot:
                    <div className="mt-2 break-all text-slate-400">{shot}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
