import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  FileText,
  Briefcase,
  BrainCircuit,
  Cloud,
} from "lucide-react";

const quickHighlights = [
  {
    icon: Briefcase,
    title: "3 Years Experience",
    description:
      "Software engineering experience across backend systems, microservices, and cloud-native applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI + Distributed Systems",
    description:
      "Built projects across AI platforms, Kafka-driven systems, RAG workflows, and scalable services.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Engineering",
    description:
      "Hands-on work with AWS, Docker, Kubernetes, CI/CD, caching, and production-style architecture.",
  },
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
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-slate-400">
            Resume
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Aryan R Suthar - Resume
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            A recruiter-friendly view of experience, project depth, and
            engineering focus areas.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/resume/Aryan R Suthar - Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {quickHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                    <Icon className="h-5 w-5 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
              <FileText className="h-5 w-5 text-sky-300" />
              <h2 className="text-lg font-semibold text-white">
                Embedded Resume Viewer
              </h2>
            </div>

            <iframe
              src="/resume/Aryan R Suthar - Resume.pdf"
              className="h-[900px] w-full bg-white"
              title="Aryan Resume"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
