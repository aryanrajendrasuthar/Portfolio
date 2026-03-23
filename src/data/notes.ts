export type Note = {
  slug: string;
  title: string;
  category: string;
  level: string;
  readTime: string;
  relatedProject: string;
  relatedProjectSlug: string;
  description: string;
  content: string[];
  bullets: string[];
  whereUsed: string;
  tradeoffs: string[];
  useWhen: string[];
  avoidWhen: string[];
};

export const notes: Note[] = [
  {
    slug: "distributed-systems-fundamentals",
    title: "Distributed Systems Fundamentals",
    category: "Systems Design",
    level: "Intermediate",
    readTime: "6 min read",
    relatedProject: "Real-Time-AI-Simulation-Tool",
    relatedProjectSlug: "real-time-ai-simulation-tool",
    description:
      "Core ideas behind building scalable, fault-tolerant systems using distributed services.",
    content: [
      "Distributed systems are composed of multiple independent services working together over a network. Instead of a single monolithic application, responsibilities are split into smaller services that communicate through APIs or messaging systems.",
      "The main benefits are scalability, fault isolation, and flexibility. Each component can scale independently, and failures in one service do not necessarily bring down the entire system.",
      "However, distributed systems introduce new challenges such as network unreliability, partial failures, and data consistency issues. Designing for these constraints is more important than optimizing individual components.",
    ],
    bullets: [
      "Partial failure is normal",
      "Service boundaries matter",
      "Network is unreliable",
    ],
    whereUsed:
      "Used in the Distributed AI Simulation Platform to design an event-driven architecture where ingestion, processing, and caching layers are decoupled and independently scalable.",
    tradeoffs: [
      "Increased system complexity compared to monolithic architecture",
      "Harder debugging due to distributed components",
      "Requires careful handling of failures, retries, and observability",
    ],
    useWhen: [
      "Building high-scale systems",
      "Multiple services need independent scaling",
      "Fault isolation is important",
    ],
    avoidWhen: [
      "Simple applications with low traffic",
      "Tight deadlines where complexity is unnecessary",
      "Small teams without infra experience",
    ],
  },
  {
    slug: "kafka-event-driven-architecture",
    title: "Kafka & Event-Driven Architecture",
    category: "Backend Architecture",
    level: "Intermediate",
    readTime: "5 min read",
    relatedProject: "Real-Time-AI-Simulation-Tool",
    relatedProjectSlug: "real-time-ai-simulation-tool",
    description:
      "Using Kafka to build decoupled, scalable, asynchronous systems.",
    content: [
      "Kafka enables asynchronous communication between services using event streams. Producers publish events, and consumers process them independently without tight coupling.",
      "This allows systems to handle spikes in traffic by buffering events and processing them later. It also enables multiple consumers to react to the same event stream.",
      "Event-driven systems are especially useful for pipelines, analytics, and distributed processing workloads.",
    ],
    bullets: [
      "Decouples services",
      "Handles async workflows",
      "Improves resilience",
    ],
    whereUsed:
      "Used in the Real Time AI Simulation Tool to decouple API ingestion from worker processing, enabling asynchronous simulation execution.",
    tradeoffs: [
      "Harder debugging due to asynchronous flow",
      "Message ordering is not guaranteed without careful partitioning",
      "Requires infrastructure setup and monitoring",
    ],
    useWhen: [
      "High throughput systems",
      "Event-driven pipelines",
      "Async processing workloads",
    ],
    avoidWhen: [
      "Simple CRUD apps",
      "Low latency synchronous requirements",
      "Small systems with minimal scaling needs",
    ],
  },
  {
    slug: "caching-with-redis",
    title: "Caching with Redis",
    category: "Performance Engineering",
    level: "Intermediate",
    readTime: "4 min read",
    relatedProject: "Real-Time-AI-Simulation-Tool",
    relatedProjectSlug: "real-time-ai-simulation-tool",
    description:
      "Improving performance using in-memory caching to reduce repeated computation.",
    content: [
      "Redis is an in-memory data store used to cache frequently accessed data. It reduces latency and avoids repeated expensive operations.",
      "Caching works best when read operations are frequent and the underlying data is expensive to compute or fetch.",
      "Common strategies include cache-aside, write-through, and TTL-based expiration.",
    ],
    bullets: [
      "Reduces latency",
      "Avoids repeated work",
      "Improves throughput",
    ],
    whereUsed:
      "Used in the Real Time AI Simulation Tool to cache repeated simulation results and reduce computation overhead.",
    tradeoffs: [
      "Cache invalidation complexity",
      "Stale data risk if not managed properly",
      "Additional infrastructure to maintain",
    ],
    useWhen: [
      "Repeated read-heavy workloads",
      "Expensive computations",
      "Performance bottlenecks",
    ],
    avoidWhen: [
      "Highly dynamic data that changes frequently",
      "Strong consistency requirements",
      "Small systems where caching adds unnecessary complexity",
    ],
  },
  {
    slug: "microservices-api-design",
    title: "Microservices & API Design",
    category: "Backend Architecture",
    level: "Advanced",
    readTime: "6 min read",
    relatedProject: "PhysioApp — Physiotherapy Exercise Platform",
    relatedProjectSlug: "physio-app",
    description:
      "Designing scalable backend services with clear boundaries and API contracts.",
    content: [
      "Microservices split applications into smaller, independent services with defined responsibilities. Each service owns its data and exposes APIs for communication.",
      "Good API design ensures that services remain loosely coupled and independently deployable.",
      "The challenge is avoiding over-fragmentation and maintaining clear boundaries.",
    ],
    bullets: [
      "Loose coupling",
      "Clear service ownership",
      "Independent scaling",
    ],
    whereUsed:
      "Applied in PhysioApp through separation of controllers, services, and data layers, enabling modular backend design and maintainability.",
    tradeoffs: [
      "Increased operational complexity",
      "Network overhead between services",
      "Risk of distributed monolith if boundaries are weak",
    ],
    useWhen: [
      "Large-scale applications",
      "Multiple teams working independently",
      "Need for modular scaling",
    ],
    avoidWhen: [
      "Small projects",
      "Early-stage prototypes",
      "Tight coupling between components",
    ],
  },
  {
    slug: "security-in-backend-systems",
    title: "Security in Backend Systems",
    category: "Security",
    level: "Intermediate",
    readTime: "5 min read",
    relatedProject: "Emergency SOS — Real-Time Emergency Alert System",
    relatedProjectSlug: "emergency-sos",
    description:
      "Practical backend security covering authentication, authorization, and secure communication.",
    content: [
      "Backend security includes authentication, authorization, encryption, and input validation.",
      "Authentication verifies identity, while authorization controls access.",
      "HTTPS is essential for protecting user data and enabling browser APIs like geolocation.",
    ],
    bullets: [
      "Auth vs AuthZ",
      "HTTPS required",
      "Server-side validation",
    ],
    whereUsed:
      "Implemented in Emergency SOS with OTP verification, session-based authentication, and HTTPS support for secure geolocation access.",
    tradeoffs: [
      "Additional complexity in auth flows",
      "Performance overhead from encryption",
      "Requires careful handling of secrets and sessions",
    ],
    useWhen: [
      "Any user-facing application",
      "Sensitive data handling",
      "Authentication required systems",
    ],
    avoidWhen: ["Never avoid — security is always required"],
  },
];