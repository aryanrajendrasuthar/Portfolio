import { Code2, GraduationCap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { technicalSkillGroups, tutoringSkills } from "@/data/skills";

const engineeringStrengths = [
  "Event-driven backend architecture using Kafka, Redis pub/sub, and asynchronous pipeline design",
  "Cloud-native deployments across AWS and Azure with Kubernetes, autoscaling, and CI/CD",
  "RAG pipelines, LLM orchestration, and production-oriented AI/ML integration",
  "Authentication, RBAC, and secure API design with OAuth2, JWT, and enterprise SSO",
  "Database modeling, query optimization, caching strategies, and performance tuning",
  "Full-stack product delivery from system design through deployment with measurable outcomes",
];

export function SupportingSkillsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Supporting Strengths"
        title="Professional skills that amplify technical execution"
        description="People-facing strengths and engineering depth that reinforce the ability to build, explain, and deliver real systems."
      />

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">ASU Academic Support Network</p>
                <h3 className="text-2xl font-semibold text-foreground">
                  Subject Area Tutor
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              Mentored students at ASU in mathematics, statistics, and
              programming by breaking down complex topics into structured,
              step-by-step explanations. This reinforced my ability to
              communicate technical concepts clearly, debug collaboratively, and
              guide problem-solving in real time — skills that directly support
              backend engineering, system design discussions, and team
              collaboration in fast-moving engineering environments.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tutoringSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-border bg-muted px-4 py-3 text-sm text-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary">Engineering Strengths</p>
                <h3 className="text-2xl font-semibold text-foreground">
                  Why this strengthens my profile
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              {engineeringStrengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-muted p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 rounded-[2rem] border-border bg-card backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary">Technical Skills</p>
              <h3 className="text-2xl font-semibold text-foreground">
                Resume-aligned engineering stack
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-muted p-4"
              >
                <p className="text-sm font-semibold text-foreground">
                  {group.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
