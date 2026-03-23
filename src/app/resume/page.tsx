import Link from "next/link";
import {
  ArrowLeft,
  Download,
  FileText,
  Briefcase,
  BrainCircuit,
  Cloud,
  Github,
  Linkedin,
  Mail,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlightCards = [
  {
    icon: Briefcase,
    title: "Backend & Full-Stack Engineering",
    text: "Built production-style systems across Node.js, Express, FastAPI, React, TypeScript, PostgreSQL, MySQL, MongoDB, and Supabase.",
  },
  {
    icon: Cloud,
    title: "Distributed & Cloud-Native Systems",
    text: "Designed architectures involving async workflows, RAG pipelines, vector retrieval, cloud storage, auth layers, and scalable service boundaries.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML / RAG Engineering",
    text: "Worked on LLM systems, multimodal ML pipelines, retrieval-augmented generation, experiment tracking, and AI-powered product flows.",
  },
];

const resumeSignals = [
  "Real Time AI Simulation Tool for Self-Justice legal rehearsal",
  "PhysioApp capstone with MVC architecture, onboarding, analytics, and 2FA",
  "SmartQuote ERP production-style quotation workflow for Jayraj Fabrication",
  "Emergency SOS real-time GPS + SMS alerting system using Twilio",
  "Emofusion multimodal ML system with 61k+ training samples and MLflow",
];

const strengthBadges = [
  "Backend Systems",
  "Distributed Systems",
  "Full-Stack Development",
  "RAG / LLM Systems",
  "Cloud Architecture",
  "API Design",
  "Authentication",
  "Database Modeling",
  "Performance Thinking",
  "System Design",
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Resume
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Aryan R Suthar
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Software engineer focused on backend systems, distributed
              architecture, AI-powered applications, and full-stack product
              development.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {strengthBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume/Aryan R Suthar - Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <FileText className="mr-2 h-4 w-4" />
                  Open Resume
                </Button>
              </a>

              <a href="/resume/Aryan R Suthar - Resume.pdf" download>
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlightCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                        <Icon className="h-5 w-5 text-sky-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-violet-300">Recruiter Snapshot</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Why this resume is worth opening
                </h2>
                <div className="mt-6 space-y-4">
                  {resumeSignals.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-sky-300">Resume Access</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Quick actions
                </h2>

                <div className="mt-6 space-y-3">
                  <a
                    href="/resume/Aryan R Suthar - Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-200">
                      <FileText className="mr-2 h-4 w-4" />
                      Open Resume
                    </Button>
                  </a>

                  <a href="/resume/Aryan R Suthar - Resume.pdf" download>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>

                  <a href="mailto:aryanrajendrasuthar@gmail.com">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aryansuthar53/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>

                  <a
                    href="https://github.com/aryanrajendrasuthar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-violet-300">Portfolio Alignment</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Best matching sections
                </h2>

                <div className="mt-6 space-y-4">
                  <Link
                    href="/projects"
                    className="block rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-sky-400/30"
                  >
                    <div className="flex items-center gap-3 text-white">
                      <Layers3 className="h-4 w-4 text-sky-300" />
                      Projects archive
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      View Layer A case studies and additional engineering work.
                    </p>
                  </Link>

                  <Link
                    href="/notes"
                    className="block rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-sky-400/30"
                  >
                    <div className="flex items-center gap-3 text-white">
                      <BrainCircuit className="h-4 w-4 text-sky-300" />
                      Engineering notes
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Review systems, backend, caching, security, and design
                      notes.
                    </p>
                  </Link>

                  <Link
                    href="/certificates"
                    className="block rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-sky-400/30"
                  >
                    <div className="flex items-center gap-3 text-white">
                      <Briefcase className="h-4 w-4 text-sky-300" />
                      Certificates
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Explore technical and professional learning credentials.
                    </p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}