import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const noteContent: Record<
  string,
  {
    title: string;
    content: string[];
  }
> = {
  "distributed-systems-fundamentals": {
    title: "Distributed Systems Fundamentals",
    content: [
      "Distributed systems are made of multiple independent services or nodes working together to deliver a larger application capability.",
      "The main goals are scalability, fault tolerance, flexibility, and separation of concerns.",
      "Key challenges include network failure, partial failure, consistency, latency, retry behavior, and observability.",
      "A good distributed system design minimizes coupling, supports graceful failure, and makes each component easier to evolve independently.",
    ],
  },
  "kafka-event-driven-architecture": {
    title: "Kafka & Event-Driven Architecture",
    content: [
      "Kafka enables asynchronous communication between services using event streams rather than direct request/response dependencies.",
      "This improves scalability and resilience by decoupling producers from consumers.",
      "Event-driven systems are useful when workloads need buffering, replayability, or multiple downstream consumers.",
    ],
  },
  "caching-with-redis": {
    title: "Caching with Redis",
    content: [
      "Redis is commonly used to reduce repeated computation and lower database load.",
      "Caching works best when reads are frequent and source data is expensive to fetch or compute.",
      "Teams should define cache invalidation and expiration strategies carefully to avoid stale results.",
    ],
  },
  "microservices-api-design": {
    title: "Microservices & API Design",
    content: [
      "Microservices split systems into focused services with defined responsibilities.",
      "API design should emphasize consistency, versioning strategy, clear contracts, and service boundaries.",
      "REST is often simpler for broad compatibility, while gRPC can be better for high-performance internal communication.",
    ],
  },
  "security-in-backend-systems": {
    title: "Security in Backend Systems",
    content: [
      "Backend security includes authentication, authorization, encryption, input validation, and secure transport.",
      "JWT and RBAC are often used for identity and permissions in distributed systems.",
      "TLS, secrets management, and least-privilege access are critical in production environments.",
    ],
  },
};

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = noteContent[slug];

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-slate-400">
          System Design Note
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {note.title}
        </h1>

        <div className="mt-10 space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          {note.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
