import { GraduationCap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { tutoringSkills } from "@/data/skills";

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
            : "Your tutoring and collaborative experience can be presented as people-facing strengths that complement the engineering depth shown elsewhere."
        }
      />

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-sky-300" />
              <div>
                <p className="text-sm text-sky-300">ASU Supporting Section</p>
                <h3 className="text-2xl font-semibold text-white">
                  Subject Area Tutor
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              This section highlights your communication, mentorship, clarity of
              thought, and ability to break down complex ideas, giving
              recruiters a stronger view of your professional maturity beyond
              purely technical execution.
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
                <p className="text-sm text-violet-300">
                  {recruiterMode ? "Recruiter View" : "Milestone 1 Scope"}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {recruiterMode ? "Why this strengthens your profile" : "What comes next"}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-300">
              {recruiterMode ? (
                <>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Communicates mentoring ability, communication strength, and
                    professional maturity.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Helps balance the portfolio by showing soft skills alongside
                    deep technical work.
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Project descriptions will be refined later.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Project screenshots are already structured with named
                    placeholders for later replacement.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    Next milestones will add certificates, notes, recruiter mode
                    logic, AI assistant backend, and contact form service.
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}