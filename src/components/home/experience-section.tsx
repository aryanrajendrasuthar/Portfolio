import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/layout/section-title";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Experience"
        title="Engineering experience shaped by real systems"
        description="A case-study style timeline focused on architecture, scalability, delivery, and production-minded engineering."
      />

      <div className="mt-6 mb-10 flex justify-center">
        <Link
          href="/resume"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-primary transition hover:bg-muted hover:text-primary"
        >
          <span className="relative">
            View full experience
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item, idx) => (
          <Reveal key={item.company} y={20} delay={idx * 100}>
            <Card className="h-full rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-primary">{item.role}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-foreground">
                      {item.company}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {item.period}
                </p>
                <div className="space-y-4">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
