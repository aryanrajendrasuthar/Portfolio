import {
  ArrowRight,
  ArrowLeft,
  Boxes,
  Database,
  ServerCog,
  ShieldCheck,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const notes = [
  {
    slug: "distributed-systems-fundamentals",
    title: "Distributed Systems Fundamentals",
    description:
      "Core ideas around services, coordination, scaling, reliability, and failure handling.",
    icon: Boxes,
  },
  {
    slug: "kafka-event-driven-architecture",
    title: "Kafka & Event-Driven Architecture",
    description:
      "How asynchronous messaging, event streams, and decoupled workflows improve system scalability.",
    icon: Waves,
  },
  {
    slug: "caching-with-redis",
    title: "Caching with Redis",
    description:
      "How caching reduces latency, avoids redundant work, and supports better application throughput.",
    icon: Database,
  },
  {
    slug: "microservices-api-design",
    title: "Microservices & API Design",
    description:
      "Designing service boundaries, REST/gRPC tradeoffs, and maintainable backend communication patterns.",
    icon: ServerCog,
  },
  {
    slug: "security-in-backend-systems",
    title: "Security in Backend Systems",
    description:
      "JWT, RBAC, TLS, authentication flows, and secure service-to-service thinking.",
    icon: ShieldCheck,
  },
];

export default function NotesPage() {
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
            System Design Notes
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Architecture Thinking, Notes, and Engineering Patterns
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            A curated knowledge section covering system design ideas, backend
            architecture patterns, distributed systems, and cloud-native
            engineering concepts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => {
            const Icon = note.icon;
            return (
              <Link key={note.slug} href={`/notes/${note.slug}`}>
                <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07] backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                      <Icon className="h-5 w-5 text-sky-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {note.description}
                    </p>

                    <div className="mt-6 flex items-center text-sm text-sky-300">
                      Read note <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
