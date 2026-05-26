import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Code2,
  Download,
  FileText,
  Briefcase,
  BrainCircuit,
  Cloud,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Layers3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { technicalSkillGroups } from "@/data/skills";

const highlightCards = [
  {
    icon: Briefcase,
    title: "Backend & Distributed Systems",
    text: "4+ years building high-throughput microservices at Avnet and Orion — Java, Spring Boot, Python, FastAPI, Kafka, Kubernetes, and event-driven pipelines processing 2M+ daily transactions.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Engineering",
    text: "Production deployments across AWS (EC2, Lambda, S3, SNS, SES) and Azure (AKS, Service Bus, Cognitive Search) with Kubernetes autoscaling, CI/CD pipelines, and 99.98% uptime.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML & RAG Systems",
    text: "Shipped production RAG search pipelines using LangChain, vector embeddings, and Azure Cognitive Search. Built multimodal ML systems, experiment tracking with MLflow, and LLM-integrated product features.",
  },
];

const resumeSignals = [
  "2M+ daily transactions on Kubernetes at Avnet — 45% scalability improvement under peak load",
  "27% infrastructure cost reduction and 38% API latency improvement across AWS and Azure",
  "Production RAG pipeline with LangChain and Azure Cognitive Search — 33% query relevance improvement",
  "PhysioApp — multi-role rehabilitation platform with 12+ entity relationships, deployed Vercel + Railway",
  "Distributed AI Simulation Platform — sub-2s response, LangChain + Redis pub/sub, selfjustice.ca",
  "EmoFusion — 84% weighted F1-score multimodal emotion detection with HuBERT + OpenCV",
];

const strengthBadges = [
  "Backend Systems",
  "Distributed Systems",
  "Cloud Architecture",
  "Event-Driven Design",
  "RAG / LLM Systems",
  "API Design",
  "Authentication & RBAC",
  "Database Modeling",
  "Performance Optimization",
  "System Design",
  "CI/CD Pipelines",
  "Full-Stack Development",
];

const achievements = [
  "Lead Developer, PhysioApp Capstone (ASU SER 517, Industry Team 16) — delivered across 4 agile sprints with comprehensive technical documentation covering full system architecture, database schema, and feature modules.",
  "Solved 500+ algorithm problems on LeetCode, building strong foundations in data structures, dynamic programming, graph algorithms, and system design.",
  "Designed and maintained 10+ production-ready projects spanning AI/ML, distributed systems, and full-stack engineering, publicly documented through this portfolio.",
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
              Backend and distributed systems engineer with 4+ years delivering
              high-throughput microservices platforms — specializing in
              event-driven architecture, cloud-native deployments, and
              AI-integrated search pipelines.
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
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <FileText className="mr-2 h-4 w-4" />
                  Open Resume
                </Button>
              </a>

              <a href={profile.resume} download>
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
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-violet-300" />
                  <p className="text-sm text-violet-300">Recruiter Snapshot</p>
                </div>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Why this resume stands out
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

            <Card className="mt-8 rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-sky-300" />
                  <p className="text-sm text-sky-300">Technical Skills</p>
                </div>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Resume stack coverage
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {technicalSkillGroups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {group.title}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={`${group.title}-${skill}`}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-300"
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
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-sky-300">Resume Access</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Quick actions
                </h2>

                <div className="mt-6 space-y-3">
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-200">
                      <FileText className="mr-2 h-4 w-4" />
                      Open Resume
                    </Button>
                  </a>

                  <a href={profile.resume} download>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>

                  <a href={`mailto:${profile.email}`}>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>

                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>

                  <a href={profile.github} target="_blank" rel="noreferrer">
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
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-sky-300" />
                  <p className="text-sm text-sky-300">Education</p>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Academic background
                </h2>

                <div className="mt-6 space-y-4">
                  {education.map((item) => (
                    <div
                      key={`${item.school}-${item.degree}`}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.degree}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.school}, {item.location}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">
                        {item.period} | GPA: {item.gpa}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        <span className="text-white">Capstone:</span>{" "}
                        {item.capstone}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
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
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-violet-300" />
                  <p className="text-sm text-violet-300">Achievements</p>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Resume achievements
                </h2>

                <div className="mt-6 space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                    >
                      {achievement}
                    </div>
                  ))}
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
