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
    relatedProject: "Distributed AI Simulation Platform",
    relatedProjectSlug: "Real-Time-AI-Simulation-Tool",
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
      "Used in the Distributed AI Simulation Platform to design an event-driven architecture where ingestion, processing, and caching layers are decoupled and independently scalable. Also reflected in the Avnet supply-chain platform, where business logic is split across 7+ independently deployable microservices instead of one monolith.",
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
    relatedProject: "NeuralOps",
    relatedProjectSlug: "neural-ops",
    description:
      "Using Kafka to build decoupled, scalable, asynchronous systems.",
    content: [
      "Kafka enables asynchronous communication between services using event streams. Producers publish events, and consumers process them independently without tight coupling.",
      "This allows systems to handle spikes in traffic by buffering events and processing them later. It also enables multiple consumers to react to the same event stream.",
      "Event-driven systems are especially useful for pipelines, analytics, and distributed processing workloads. In NeuralOps, a Kafka-backed trace ingestion pipeline lets the observability platform scale with agent execution volume without coupling producers to consumers.",
    ],
    bullets: [
      "Decouples services",
      "Handles async workflows",
      "Improves resilience",
    ],
    whereUsed:
      "Used in NeuralOps to decouple LLM trace ingestion from downstream anomaly-detection and cost-analytics consumers via a Kafka event stream. Also used in the Distributed AI Simulation Platform to decouple API ingestion from worker processing via Redis pub/sub.",
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
    relatedProject: "AI Knowledge Assistant — RAG-Powered Q&A System",
    relatedProjectSlug: "ai-knowledge-assistant",
    description:
      "Improving performance using in-memory caching to reduce repeated computation and database load.",
    content: [
      "Redis is an in-memory data store used to cache frequently accessed data. It reduces latency and avoids repeated expensive operations such as LLM inference calls, database queries, and embedding generation.",
      "Caching works best when read operations are frequent and the underlying data is expensive to compute or fetch. Common strategies include cache-aside, write-through, and TTL-based expiration.",
      "In the AI Knowledge Assistant, Redis caching of embeddings and repeated LLM responses reduced response latency by 60% to sub-300ms. The Distributed AI Simulation Platform uses the same in-memory pattern with Redis pub/sub for real-time session state instead of request caching.",
    ],
    bullets: [
      "Reduces latency",
      "Avoids repeated work",
      "Improves throughput",
    ],
    whereUsed:
      "Applied in the AI Knowledge Assistant to cache embeddings, repeated LLM responses, and session state — achieving 60% latency reduction to sub-300ms. Also used in the Distributed AI Simulation Platform for real-time session state management via Redis pub/sub.",
    tradeoffs: [
      "Cache invalidation complexity",
      "Stale data risk if not managed properly",
      "Additional infrastructure to maintain",
    ],
    useWhen: [
      "Repeated read-heavy workloads",
      "Expensive computations like LLM inference or embeddings",
      "Performance bottlenecks in high-concurrency systems",
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
    relatedProject: "PhysioApp — AI-Powered Rehabilitation Platform",
    relatedProjectSlug: "physio-app",
    description:
      "Designing scalable backend services with clear boundaries and API contracts.",
    content: [
      "Microservices split applications into smaller, independent services with defined responsibilities. Each service owns its data and exposes APIs for communication.",
      "Good API design ensures that services remain loosely coupled and independently deployable. REST is the default for external clients, while an aggregation layer in front of several services can eliminate multiple round-trips for a single frontend view.",
      "At Avnet, a GraphQL aggregation layer unifying several backend microservices (SQL Server, MongoDB) let frontend clients fetch complete datasets in one call instead of many REST round-trips, cutting page load times by 60%. The challenge is avoiding over-fragmentation and maintaining clear service boundaries.",
    ],
    bullets: [
      "Loose coupling",
      "Clear service ownership",
      "Independent scaling",
    ],
    whereUsed:
      "Applied in PhysioApp through separation of controllers, services, and data layers across patient, therapist, and admin roles. Also central to the Avnet platform, where a GraphQL aggregation layer sits in front of 7+ backend microservices to give frontend clients a single query surface.",
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
      "Backend security includes authentication, authorization, encryption, and input validation. Authentication verifies identity, while authorization controls what authenticated users can access.",
      "HTTPS is essential for protecting user data and enabling browser APIs like geolocation. OAuth2 and JWT are the dominant standards for API authentication across modern distributed systems.",
      "Role-Based Access Control (RBAC) ensures users can only access the resources and operations appropriate to their role — implemented in PhysioApp with three distinct roles (patient, therapist, admin) enforced at the API layer.",
    ],
    bullets: [
      "Auth vs AuthZ",
      "HTTPS required",
      "Server-side validation",
    ],
    whereUsed:
      "Implemented in Emergency SOS with session-based authentication and HTTPS support for secure geolocation access. Also applied in PhysioApp with OAuth2/JWT and three-role RBAC (patient, therapist, admin) enforced across every protected API route.",
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
  {
    slug: "rag-and-llm-system-design",
    title: "RAG & LLM System Design",
    category: "AI / ML Engineering",
    level: "Advanced",
    readTime: "7 min read",
    relatedProject: "AI Knowledge Assistant — RAG-Powered Q&A System",
    relatedProjectSlug: "ai-knowledge-assistant",
    description:
      "Designing production-grade Retrieval-Augmented Generation pipelines that ground LLM responses in real documents.",
    content: [
      "Large Language Models generate fluent text but hallucinate facts when asked about specific documents, private data, or recent events they weren't trained on. Retrieval-Augmented Generation (RAG) solves this by retrieving relevant context at query time and injecting it into the LLM prompt — grounding the response in real source material.",
      "A production RAG pipeline consists of an offline indexing phase and an online query phase. During indexing, documents are chunked, embedded using a model like OpenAI's text-embedding-ada-002, and stored in a vector database. At query time, the user's query is embedded, and nearest-neighbor search retrieves the most relevant chunks. Those chunks are passed to the LLM as context alongside the original question.",
      "Hybrid retrieval — combining dense vector search with sparse keyword search (BM25) — significantly outperforms pure vector retrieval on domain-specific corpora where exact keyword matches matter. Re-ranking the top-k candidates before sending them to the LLM further improves answer precision. Redis caching of embeddings and repeated responses reduces per-query latency dramatically.",
    ],
    bullets: [
      "Ground LLM responses in documents",
      "Hybrid retrieval outperforms pure vector search",
      "Cache embeddings and responses",
    ],
    whereUsed:
      "Used in the AI Knowledge Assistant with hybrid retrieval (dense + sparse), re-ranking, and Redis caching — achieving sub-300ms query response and 60% latency reduction. The same hybrid-retrieval pattern (FAISS/Qdrant benchmarked against an Elasticsearch/BM25 baseline) is evaluated in the RAG Incident Resolution research project.",
    tradeoffs: [
      "Retrieval quality directly limits answer quality — garbage in, garbage out",
      "Chunking strategy is non-obvious and significantly impacts recall",
      "Adding re-ranking improves accuracy but increases latency",
      "Vector databases add infrastructure overhead",
    ],
    useWhen: [
      "Building Q&A over private or domain-specific documents",
      "LLM accuracy on factual queries matters",
      "Source attribution is required",
    ],
    avoidWhen: [
      "General-purpose chat where grounding is not needed",
      "Very small document sets where full-context LLM calls are feasible",
      "Latency budgets too tight for retrieval + inference round-trips",
    ],
  },
  {
    slug: "database-design-and-optimization",
    title: "Database Design & Query Optimization",
    category: "Backend Architecture",
    level: "Advanced",
    readTime: "6 min read",
    relatedProject: "PhysioApp — AI-Powered Rehabilitation Platform",
    relatedProjectSlug: "physio-app",
    description:
      "Designing normalized schemas, applying indexing strategies, and tuning queries for high-throughput production systems.",
    content: [
      "Good database design begins with normalization — organizing data to eliminate redundancy and enforce data integrity through entity relationships. A well-normalized schema defines clear ownership boundaries between entities, which directly maps to maintainable service and API design.",
      "Indexing is the most impactful query optimization lever. Composite indexes on frequently filtered columns, partial indexes on subsets of rows, and covering indexes that satisfy a query entirely from the index all significantly reduce query plan cost. At Avnet, transactional data lives in SQL Server with optimized queries and stored procedures, while MongoDB holds unstructured data — unified for frontend consumption through a GraphQL aggregation layer rather than exposing both databases directly to clients.",
      "Beyond indexing, query optimization involves understanding execution plans (EXPLAIN ANALYZE in PostgreSQL), avoiding N+1 query patterns, using connection pooling (PgBouncer), batching writes, and choosing between normalization and strategic denormalization based on access patterns.",
    ],
    bullets: [
      "Index your query patterns",
      "Normalize first, denormalize deliberately",
      "Read EXPLAIN ANALYZE",
    ],
    whereUsed:
      "Applied in PhysioApp designing a normalized schema supporting 12+ entity relationships across patients, therapists, admins, exercise routines, and analytics. Also used at Avnet and Orion Technolab — writing optimized SQL Server stored procedures at Avnet, and redesigning MySQL schemas and indexing at Orion Technolab.",
    tradeoffs: [
      "Heavy normalization reduces write complexity but increases join complexity for reads",
      "Indexes speed up reads but slow down writes and consume storage",
      "Denormalization improves read performance at the cost of data consistency maintenance",
      "Query optimization requires understanding access patterns upfront",
    ],
    useWhen: [
      "High-read or high-write production systems",
      "Complex entity relationships requiring relational integrity",
      "Queries are slow and database CPU or I/O is a bottleneck",
    ],
    avoidWhen: [
      "Prototypes where schema will change frequently",
      "Document stores where schema flexibility is the primary requirement",
      "Over-optimizing before measuring actual bottlenecks",
    ],
  },
  {
    slug: "cicd-and-devops-pipelines",
    title: "CI/CD & DevOps Pipelines",
    category: "DevOps",
    level: "Intermediate",
    readTime: "5 min read",
    relatedProject: "PhysioApp — AI-Powered Rehabilitation Platform",
    relatedProjectSlug: "physio-app",
    description:
      "Building automated pipelines for testing, building, and deploying software with zero-downtime strategies.",
    content: [
      "Continuous Integration (CI) automatically runs tests and quality checks on every code push, catching regressions before they reach production. Continuous Deployment (CD) automates the release process so that passing builds are deployed without manual intervention — reducing release risk and increasing deployment frequency.",
      "GitHub Actions is the dominant CI/CD platform for modern projects. A typical pipeline runs type checking, unit tests, integration tests, linting, and security scanning in parallel, then builds a container image, pushes to a registry, and triggers a deployment on the target platform. At Orion Technolab, standardized GitHub Actions pipelines reduced failed deployments and maintained 98%+ uptime for production releases; at Avnet, Jenkins pipelines automate builds, tests, and deployments across a Dockerized microservices platform.",
      "Blue/green deployments maintain two identical environments — blue (current) and green (new). Traffic is switched from blue to green instantly after validation, allowing immediate rollback if issues appear. Kubernetes rolling updates and canary releases are complementary strategies that shift traffic gradually to reduce blast radius.",
    ],
    bullets: [
      "Automate everything",
      "Blue/green for zero-downtime",
      "Fast feedback loops",
    ],
    whereUsed:
      "Built GitHub Actions CI/CD pipelines for PhysioApp with type checking, automated tests, and deployment to Vercel and Railway. Standardized similar GitHub Actions pipelines at Orion Technolab, and Jenkins pipelines at Avnet, for automated builds, tests, and deployments.",
    tradeoffs: [
      "Pipeline setup time is an upfront investment",
      "Complex pipelines can become bottlenecks if not parallelized",
      "Blue/green deployments require double the infrastructure during cutover",
    ],
    useWhen: [
      "Any production application that ships regularly",
      "Teams where manual deployment is a bottleneck",
      "Systems requiring zero-downtime releases",
    ],
    avoidWhen: [
      "Early-stage prototypes with no users",
      "One-time scripts or tools with no ongoing deployment",
    ],
  },
  {
    slug: "cloud-native-architecture",
    title: "Cloud-Native Architecture on AWS & Azure",
    category: "Cloud Engineering",
    level: "Advanced",
    readTime: "6 min read",
    relatedProject: "WorkSafe",
    relatedProjectSlug: "worksafe",
    description:
      "Designing systems that fully exploit cloud platforms — autoscaling, managed services, cost optimization, and high availability.",
    content: [
      "Cloud-native architecture means designing systems to exploit cloud capabilities rather than simply lifting and shifting on-premise patterns. This includes using managed services (RDS, Lambda, AKS), horizontal autoscaling, infrastructure-as-code, and pay-per-use compute — rather than over-provisioning static servers.",
      "AWS and Azure each have strong managed service ecosystems. On AWS: EC2 for compute, Lambda for serverless event processing, S3 for object storage, SNS/SQS for messaging, and SES for email. On Azure: AKS for managed Kubernetes, Service Bus for enterprise messaging, Blob Storage, Functions for serverless, and Cognitive Search for AI-powered search. At Orion Technolab, migrating to Azure (Blob Storage, Virtual Machines, Azure Functions) cut monthly infrastructure spend by 25%; at Avnet, AWS SQS, S3, and Lambda handle messaging, storage, and serverless data validation.",
      "Kubernetes autoscaling is a core cloud-native primitive. Horizontal Pod Autoscaler (HPA) scales pod replicas based on CPU/memory or custom metrics. Combined with node autoscaling, this allows systems to handle 10× traffic spikes and scale back to baseline during off-peak hours — directly reducing infrastructure costs.",
    ],
    bullets: [
      "Prefer managed services",
      "Autoscale instead of over-provision",
      "Design for multi-region failure",
    ],
    whereUsed:
      "Applied at Orion Technolab migrating infrastructure to Azure — cutting infrastructure spend by 25% while maintaining 98%+ production uptime. Also used in WorkSafe for enterprise-grade cloud-native deployment with autoscaling and role-aware SaaS infrastructure.",
    tradeoffs: [
      "Cloud-native systems are harder to run locally and test end-to-end",
      "Vendor lock-in risk when relying on proprietary managed services",
      "Cost unpredictability if autoscaling is not bounded",
      "Observability requires additional tooling (Prometheus, Grafana, Datadog)",
    ],
    useWhen: [
      "Systems with variable or spiky traffic patterns",
      "Teams that want to minimize infrastructure maintenance burden",
      "Cost-efficiency and uptime SLAs are explicit requirements",
    ],
    avoidWhen: [
      "Strict data residency requirements that prevent cloud usage",
      "Very low traffic systems where managed service overhead is not justified",
    ],
  },
  {
    slug: "oauth2-jwt-and-rbac",
    title: "OAuth2, JWT & Role-Based Access Control",
    category: "Security",
    level: "Intermediate",
    readTime: "5 min read",
    relatedProject: "PhysioApp — AI-Powered Rehabilitation Platform",
    relatedProjectSlug: "physio-app",
    description:
      "Implementing secure authentication and authorization in distributed systems using industry-standard protocols.",
    content: [
      "OAuth2 is the industry standard authorization framework for delegated access. It separates authentication (proving identity) from authorization (granting access to resources) via access tokens. The Authorization Code flow with PKCE is the secure standard for web applications. JWTs (JSON Web Tokens) are commonly used as the token format — self-contained, signed tokens that carry claims about the user without requiring a database lookup on every request.",
      "Role-Based Access Control (RBAC) assigns permissions to roles rather than individual users. Users are then assigned one or more roles. This makes permission management scalable — adding a new permission means updating the role definition, not every user. In PhysioApp, three distinct roles (patient, therapist, admin) controlled access to exercises, patient records, scheduling, and analytics with different permission sets.",
      "In distributed microservices, JWTs enable stateless authentication — each service can verify the token signature independently without calling a central auth server. Token expiry and refresh flows (short-lived access tokens + longer-lived refresh tokens) balance security with user experience. In PhysioApp, JWT-based RBAC across three roles (patient, therapist, admin) enforces this at the middleware level before any handler logic runs.",
    ],
    bullets: [
      "JWT for stateless auth",
      "RBAC for scalable permissions",
      "Short-lived tokens + refresh",
    ],
    whereUsed:
      "Implemented in PhysioApp with three RBAC roles (patient, therapist, admin) controlling access to all platform features, with JWT-based authentication enforced at the middleware level across every protected API route.",
    tradeoffs: [
      "JWTs cannot be revoked before expiry without a blocklist",
      "RBAC can become rigid for fine-grained permission scenarios",
      "Token storage in browser (localStorage vs HttpOnly cookie) has XSS vs CSRF tradeoffs",
      "Implementing OAuth2 from scratch is complex — prefer auth libraries or services",
    ],
    useWhen: [
      "Any system with multiple user types or permission levels",
      "Distributed systems where stateless auth reduces service-to-service coupling",
      "Compliance requirements (SOC 2, HIPAA) mandate documented access control",
    ],
    avoidWhen: [
      "Single-user tools or internal scripts with no auth surface",
      "Situations where session-based auth is simpler and sufficient",
    ],
  },
];
