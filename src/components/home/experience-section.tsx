"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300 transition hover:bg-white/10 hover:text-sky-200"
        >
          <span className="relative">
            View full experience
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-300 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
          >
            <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-sky-300">{item.role}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {item.company}
                    </h3>
                  </div>
                  <Briefcase className="h-6 w-6 text-slate-400" />
                </div>
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-slate-500">
                  {item.period}
                </p>
                <div className="space-y-4">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
