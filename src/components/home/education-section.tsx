import { GraduationCap, Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/layout/section-title";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Education"
        title="Academic foundation in software engineering"
        description="Graduate coursework and capstone work aligned with distributed systems, architecture, ML systems, and production software delivery."
      />

      <div className="grid gap-6">
        {education.map((item) => (
          <Card
            key={`${item.school}-${item.degree}`}
            className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <CardContent className="p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-sky-300" />
                    <div>
                      <p className="text-sm text-sky-300">{item.school}</p>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.degree}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                    {item.location} | {item.period}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                    <span className="text-white">Capstone:</span>{" "}
                    {item.capstone}
                  </div>
                </div>

                <div className="min-w-0 lg:w-[22rem]">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      GPA
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {item.gpa}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Layers3 className="h-4 w-4 text-violet-300" />
                      Relevant coursework
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
