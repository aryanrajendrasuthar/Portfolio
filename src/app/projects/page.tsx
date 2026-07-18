import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers3, FolderKanban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { layerAProjects, layerBProjects } from "@/data/projects";

function getProjectMeta(project: (typeof layerAProjects)[number]) {
  return project as typeof project & {
    liveUrl?: string;
  };
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 md:max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Projects
          </p>
          <h1 className="mx-auto max-w-[18rem] break-words text-3xl font-semibold tracking-tight sm:max-w-none md:text-6xl">
            Engineering Project Archive
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            Flagship case studies with deeper system and product storytelling,
            plus additional engineering work across compilers, semantic web,
            RAG systems, and software quality.
          </p>
        </div>

        <section>
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Featured Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              Flagship Case Studies
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              High-impact projects selected for deeper architecture, engineering,
              and business storytelling.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {layerAProjects.map((project) => {
              const projectMeta = getProjectMeta(project);

              return (
                <Card
                  key={project.slug}
                  className="relative h-full w-[calc(100vw-3rem)] max-w-full min-w-0 overflow-hidden rounded-[2rem] border-border bg-card md:w-full"
                >
                  <div className="relative h-28 overflow-hidden border-b border-border bg-muted">
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

                  <CardContent className="relative z-10 flex flex-col p-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {project.metrics?.map((metric, idx) => (
                        <span key={`${project.slug}-projects-metric-${idx}`}>
                          {metric}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {project.engineeringSummary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech, idx) => (
                        <Badge
                          key={`${project.slug}-${tech}-${idx}`}
                          className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={`/projects/${project.slug}`}>
                        <Button className="min-h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/80">
                          View Case Study
                        </Button>
                      </Link>

                      {projectMeta.liveUrl && (
                        <a href={projectMeta.liveUrl} target="_blank" rel="noreferrer">
                          <Button
                            variant="outline"
                            className="min-h-11 rounded-full border-border bg-card text-foreground hover:bg-muted"
                          >
                            Live
                          </Button>
                        </a>
                      )}

                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Button
                          variant="outline"
                          className="min-h-11 rounded-full border-border bg-card text-foreground hover:bg-muted"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              More Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              Additional Engineering Work
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              Supporting projects that demonstrate breadth across compilers,
              semantic web, RAG systems, Java desktop applications, and software
              engineering foundations.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2">
            {layerBProjects.map((project) => (
              <Card
                key={project.slug}
                className="h-full w-[calc(100vw-3rem)] max-w-full min-w-0 rounded-[2rem] border-border bg-card md:w-full"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <FolderKanban className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.tagline}
                  </p>

                  <div className="mt-3 flex min-w-0 flex-wrap gap-3 text-sm text-muted-foreground">
                    {project.metrics?.map((metric, idx) => (
                      <span key={`${project.slug}-metric-${idx}`}>{metric}</span>
                    ))}
                  </div>

                  <p className="mt-4 break-words text-sm leading-7 text-muted-foreground">
                    {project.engineeringSummary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tech, idx) => (
                      <Badge
                        key={`${project.slug}-${tech}-${idx}`}
                        className="rounded-full border border-border bg-card text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/projects/${project.slug}`}>
                      <Button className="min-h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/80">
                        View Details
                      </Button>
                    </Link>

                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline"
                        className="min-h-11 rounded-full border-border bg-card text-foreground hover:bg-muted"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
