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
    <div className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Resume
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Aryan R Suthar
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Backend and distributed systems engineer with 4+ years delivering
              high-throughput microservices platforms — specializing in
              event-driven architecture, cloud-native deployments, and
              AI-integrated search pipelines.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {strengthBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-card px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <Button className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/80">
                  <FileText className="mr-2 h-4 w-4" />
                  Open Resume
                </Button>
              </a>

              <a href={profile.resume} download>
                <Button
                  variant="outline"
                  className="rounded-full border-border bg-card px-6 text-foreground hover:bg-muted"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border bg-card">
              <iframe
                src={`${profile.resume}#view=FitH`}
                title="Aryan Suthar Resume"
                className="h-[70vh] w-full"
              />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlightCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="rounded-[1.5rem] border-border bg-card backdrop-blur-xl"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <p className="text-sm text-primary">Recruiter Snapshot</p>
                </div>
                <h2 className="mt-1 text-2xl font-semibold text-foreground">
                  Why this resume stands out
                </h2>
                <div className="mt-6 space-y-4">
                  {resumeSignals.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <p className="text-sm text-primary">Technical Skills</p>
                </div>
                <h2 className="mt-1 text-2xl font-semibold text-foreground">
                  Resume stack coverage
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
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
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-primary">Resume Access</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Quick actions
                </h2>

                <div className="mt-6 space-y-3">
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/80">
                      <FileText className="mr-2 h-4 w-4" />
                      Open Resume
                    </Button>
                  </a>

                  <a href={profile.resume} download>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-border bg-card text-foreground hover:bg-muted"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>

                  <a href={`mailto:${profile.email}`}>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-border bg-card text-foreground hover:bg-muted"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>

                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-border bg-card text-foreground hover:bg-muted"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>

                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-border bg-card text-foreground hover:bg-muted"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <p className="text-sm text-primary">Education</p>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Academic background
                </h2>

                <div className="mt-6 space-y-4">
                  {education.map((item) => (
                    <div
                      key={`${item.school}-${item.degree}`}
                      className="rounded-2xl border border-border bg-muted p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item.degree}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {item.school}, {item.location}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {item.period} | GPA: {item.gpa}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        <span className="text-foreground">Capstone:</span>{" "}
                        {item.capstone}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
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

            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <p className="text-sm text-primary">Achievements</p>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Resume achievements
                </h2>

                <div className="mt-6 space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="rounded-2xl border border-border bg-muted p-4 text-sm leading-7 text-muted-foreground"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-sm text-primary">Portfolio Alignment</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Best matching sections
                </h2>

                <div className="mt-6 space-y-4">
                  <Link
                    href="/projects"
                    className="block rounded-2xl border border-border bg-muted p-4 transition hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3 text-foreground">
                      <Layers3 className="h-4 w-4 text-primary" />
                      Projects archive
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      View Layer A case studies and additional engineering work.
                    </p>
                  </Link>

                  <Link
                    href="/notes"
                    className="block rounded-2xl border border-border bg-muted p-4 transition hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3 text-foreground">
                      <BrainCircuit className="h-4 w-4 text-primary" />
                      Engineering notes
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Review systems, backend, caching, security, and design
                      notes.
                    </p>
                  </Link>

                  <Link
                    href="/certificates"
                    className="block rounded-2xl border border-border bg-muted p-4 transition hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3 text-foreground">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Certificates
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
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
