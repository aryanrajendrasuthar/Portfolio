import { GraduationCap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { tutoringSkills } from "@/data/skills";

const engineeringStrengths = [
  "Backend API design, service decomposition, and scalable system architecture",
  "Distributed systems thinking using event-driven and asynchronous workflows",
  "RAG pipelines, AI workflows, and production-oriented ML integration",
  "Authentication, authorization, and secure backend application design",
  "Database modeling, caching strategies, and performance optimization",
  "Cloud deployment and real-world business workflow automation",
];

export function SupportingSkillsSection({
  recruiterMode,
}: {
  recruiterMode: boolean;
}) {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Supporting Strengths"
        title="Professional skills that amplify technical execution"
        description={
          recruiterMode
            ? "Professional strengths that support communication, collaboration, mentorship, and technical clarity."
            : "People-facing strengths and engineering depth that reinforce your ability to build, explain, and deliver real systems."
        }
      />

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-sky-300" />
              <div>
                <p className="text-sm text-sky-300">ASU Academic Support Network</p>
                <h3 className="text-2xl font-semibold text-white">
                  Subject Area Tutor
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              Mentored students in mathematics, statistics, and programming by
              breaking down complex topics into structured, step-by-step
              explanations. This strengthened my ability to communicate
              technical concepts clearly, debug collaboratively, and guide
              problem-solving in real time — skills that directly support backend
              engineering, system design discussions, and team collaboration.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tutoringSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-violet-300" />
              <div>
                <p className="text-sm text-violet-300">Engineering Strengths</p>
                <h3 className="text-2xl font-semibold text-white">
                  Why this strengthens my profile
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-300">
              {engineeringStrengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}