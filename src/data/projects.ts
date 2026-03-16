export const layerAProjects = [
  {
    slug: "distributed-ai-simulation-platform",
    title: "Distributed AI Simulation Platform",
    type: "Layer A",
    tagline:
      "Scalable event-driven simulation platform for concurrent AI workloads.",

    summary:
      "Detailed architecture, engineering decisions, and system design breakdown will be added here. Placeholder description for the Distributed AI Simulation Platform.",

    recruiterSummary:
      "Built a distributed event-driven simulation platform using Kafka workers, Redis caching, and containerized services for scalable processing.",

    engineeringSummary:
      "Designed a distributed architecture using Kafka event streams, worker clusters, Redis caching, and containerized services to support scalable AI simulation workloads.",

    metrics: [
      "⚡ 200k events/sec",
      "🧠 Kafka worker clusters",
      "📉 60% lower latency",
    ],

    dataFlow: "API → Kafka → Workers → Redis → Analytics",

    architectureImage:
      "/architectures/distributed-ai-simulation-platform.png",

    stack: ["Python", "Kafka", "Redis", "Docker", "Kubernetes", "gRPC"],
    image:
      "/images/placeholders/distributed-ai-simulation-architecture-placeholder.png",
    github:
      "https://github.com/aryanrajendrasuthar/Real-Time-AI-Simulation-Tool",

    overview:
      "This project is positioned as a distributed systems showcase focused on asynchronous processing, service communication, caching, and scalable orchestration.",

    architecture: [
      "Client/API receives simulation requests.",
      "Kafka handles event streaming and asynchronous coordination.",
      "Worker services process jobs concurrently.",
      "Redis reduces repeated computation through caching.",
      "Results are aggregated and persisted for later retrieval.",
    ],

    engineeringDecisions: [
      "Used Kafka to decouple request intake from downstream processing and avoid tight service coupling.",
      "Introduced Redis caching to reduce repeated computations for frequently reused simulation states.",
      "Chose worker-based processing so jobs could be distributed horizontally instead of handled synchronously.",
      "Containerized services with Docker and Kubernetes to make orchestration and scaling easier across environments.",
    ],

    scalingStrategy: [
      "Scale worker nodes horizontally as queue depth increases.",
      "Use Kafka partitions to distribute workload across multiple consumers efficiently.",
      "Cache frequently requested intermediate results in Redis to reduce load on compute services.",
      "Separate ingestion, processing, and persistence concerns so each layer can scale independently.",
    ],

    challenges: [
      "Balancing asynchronous throughput with predictable result delivery.",
      "Reducing repeated compute costs for similar workloads.",
      "Designing a clear communication model between ingestion, workers, cache, and storage layers.",
      "Keeping the architecture understandable while still demonstrating distributed-system complexity.",
    ],

    outcome: [
      "Established a strong flagship systems project for backend and distributed-systems storytelling.",
      "Demonstrated event-driven design, worker orchestration, and cache-assisted optimization.",
      "Created a project structure that translates well into system design discussions and recruiter conversations.",
    ],

    highlights: [
      "Event-driven system design",
      "Kafka-based async workflows",
      "Redis-backed performance optimization",
      "Containerized deployment using Docker and Kubernetes",
    ],

    screenshots: [
      "/images/placeholders/distributed-ai-simulation-architecture-placeholder.png",
    ],

    learnings: [
      "Designing around asynchronous workflows improves scalability.",
      "Caching and decoupled services reduce latency and improve throughput.",
    ],
  },

  {
    slug: "physio-app",
    title: "Physio App – AI Powered Platform",
    type: "Layer A",
    tagline:
      "AI-powered rehabilitation platform for recovery guidance and monitoring.",

    summary:
      "Detailed project description, architecture diagrams, and implementation insights will be added later. Placeholder description for the Physio AI rehabilitation platform.",

    recruiterSummary:
      "Built an AI-powered rehabilitation platform with frontend dashboards, backend recommendation services, and low-latency data access.",

    engineeringSummary:
      "Combined AI-assisted rehabilitation workflows, patient-facing dashboards, backend recommendation services, Redis caching, and MySQL persistence for a structured recovery platform.",

    metrics: [
      "🧠 AI rehab workflows",
      "⚡ Low-latency dashboards",
      "📊 Structured patient data",
    ],

    dataFlow:
      "Patient Input → API → Recommendation Engine → Redis → Dashboard",

    architectureImage: "/architectures/physio-app.png",

    stack: ["Node.js", "FastAPI", "React", "Next.js", "Redis", "MySQL"],
    image: "/images/placeholders/physio-app-dashboard-placeholder.png",
    github: "https://github.com/aryanrajendrasuthar/Physio-App",

    overview:
      "This project combines AI-assisted rehabilitation workflows, patient-facing UX, and backend service orchestration for treatment and monitoring.",

    architecture: [
      "Patient input is captured through the frontend dashboard.",
      "Backend services generate recommendations and treatment flows.",
      "Redis supports fast access patterns and reduced latency.",
      "MySQL stores structured patient and rehabilitation data.",
    ],

    engineeringDecisions: [
      "Separated frontend dashboard concerns from recommendation logic to keep the user experience responsive.",
      "Used Redis to improve repeated access performance for recommendation and session-like flows.",
      "Stored structured health-related application data in MySQL for consistency and easy querying.",
      "Combined modern frontend rendering with service-oriented backend APIs for maintainability.",
    ],

    scalingStrategy: [
      "Scale recommendation services separately from the frontend UI.",
      "Use Redis to reduce repeated backend lookups and improve perceived speed.",
      "Keep patient-facing reads fast while pushing heavier logic into isolated services.",
      "Allow backend APIs to evolve independently as new rehab workflows are introduced.",
    ],

    challenges: [
      "Balancing usability with backend structure in a healthcare-style application.",
      "Keeping recommendations responsive enough for a smooth user experience.",
      "Designing the system so it could support future rehabilitation flows and richer AI support.",
      "Maintaining clarity between user-facing actions and backend decision logic.",
    ],

    outcome: [
      "Created a strong AI-meets-product project with practical user-facing value.",
      "Showcased both frontend and backend design in a way that feels application-driven, not purely experimental.",
      "Demonstrated the ability to combine UX thinking with service architecture and structured persistence.",
    ],

    highlights: [
      "AI-guided rehab workflows",
      "Frontend dashboards for exercise and monitoring",
      "Service-oriented backend design",
      "Redis caching and structured relational storage",
    ],

    screenshots: ["/images/placeholders/physio-app-dashboard-placeholder.png"],

    learnings: [
      "Healthcare-style systems need both strong UX clarity and reliable backend design.",
      "Caching becomes valuable when repeated recommendation flows are common.",
    ],
  },

  {
    slug: "smart-quotation-estimator",
    title: "Smart Quotation Estimator",
    type: "Layer A",
    tagline:
      "Quotation automation system for pricing, PDFs, and workflow efficiency.",

    summary:
      "Full project explanation, pricing workflow logic, and system architecture will be inserted here later. Placeholder description for the Smart Quotation Estimator.",

    recruiterSummary:
      "Built a quotation automation platform for pricing, PDF generation, and admin-side workflow efficiency.",

    engineeringSummary:
      "Designed a business workflow automation system centered on pricing logic, PDF generation, email delivery, and structured admin-side quote management.",

    metrics: [
      "📄 PDF pipeline",
      "💼 Admin workflow automation",
      "⚙️ Pricing engine flow",
    ],

    dataFlow: "Input → Pricing Engine → Quote Builder → PDF → Email",

    architectureImage: "/architectures/smart-quotation-estimator.png",

    stack: ["Next.js", "Node.js", "PostgreSQL", "PDF", "Email"],
    image:
      "/images/placeholders/smart-quotation-estimator-admin-placeholder.png",
    github:
      "https://github.com/aryanrajendrasuthar/Smart-Quotation-Estimator",

    overview:
      "This project focuses on business process automation, pricing workflows, document generation, and admin-side efficiency.",

    architecture: [
      "Admin inputs quotation requirements.",
      "Pricing logic calculates totals and adjustments.",
      "A PDF generation flow produces the final quote.",
      "Email workflows support quote delivery and follow-up.",
    ],

    engineeringDecisions: [
      "Separated pricing logic from presentation to keep calculation rules maintainable.",
      "Introduced a dedicated PDF generation step instead of mixing export logic directly into UI actions.",
      "Used structured persistence to support repeatable quote workflows and admin visibility.",
      "Designed the flow around business operations first, so each step matched real usage patterns.",
    ],

    scalingStrategy: [
      "Keep pricing and document generation as isolated steps so they can scale independently.",
      "Store quote data centrally for auditability and future reporting workflows.",
      "Support email and export workflows as modular post-processing steps.",
      "Allow business rules to evolve without rewriting the entire admin UI.",
    ],

    challenges: [
      "Representing business pricing logic in a maintainable technical structure.",
      "Ensuring the workflow felt efficient for admin users rather than overly technical.",
      "Handling document generation cleanly inside a web-based product flow.",
      "Keeping the system ready for future business rule complexity.",
    ],

    outcome: [
      "Created a business-relevant product that feels practical and deployment-oriented.",
      "Demonstrated workflow automation, pricing logic design, and document pipeline implementation.",
      "Strengthened the portfolio with a real-world operational system instead of only technical demos.",
    ],

    highlights: [
      "Business workflow automation",
      "Pricing and quote calculation logic",
      "PDF export pipeline",
      "Email-oriented output flow",
    ],

    screenshots: [
      "/images/placeholders/smart-quotation-estimator-admin-placeholder.png",
    ],

    learnings: [
      "Business software benefits from clear admin UX and deterministic workflow design.",
      "Document generation pipelines are valuable in real-world automation products.",
    ],
  },

  {
    slug: "emergency-sos",
    title: "Emergency SOS",
    type: "Layer A",
    tagline:
      "Rapid-response safety application centered on communication and access.",

    summary:
      "Expanded description, user flow explanation, and system implementation details will be added later. Placeholder description for the Emergency SOS platform.",

    recruiterSummary:
      "Built a safety-focused rapid-response application centered on accessibility, communication, and low-friction interaction.",

    engineeringSummary:
      "Designed a rapid-response safety application focused on minimal interaction steps, communication flows, and user-centered emergency actions.",

    metrics: [
      "🚨 Emergency-first UX",
      "⚡ Fast access flow",
      "📲 Notification-driven design",
    ],

    dataFlow: "User Trigger → Alert Service → Notification Flow → Contacts",

    architectureImage: "/architectures/emergency-sos.png",

    stack: ["React", "Mobile UX", "APIs", "Notifications"],
    image: "/images/placeholders/emergency-sos-home-placeholder.png",
    github: "https://github.com/aryanrajendrasuthar/Emergency-SOS",

    overview:
      "This project is positioned around accessibility, fast interaction, and emergency-first product design.",

    architecture: [
      "Users trigger emergency actions through a minimal interface.",
      "Communication flows connect to alerting and notification logic.",
      "The system prioritizes speed, clarity, and ease of access.",
    ],

    engineeringDecisions: [
      "Minimized the number of steps required to trigger emergency actions.",
      "Designed the UI around urgency and clarity rather than feature density.",
      "Structured communication logic so alerts could be treated as a dedicated flow.",
      "Kept the product experience focused on safety-first interactions.",
    ],

    scalingStrategy: [
      "Design alert workflows as modular notification steps.",
      "Separate user interaction from contact/alert delivery logic.",
      "Support extension into richer communication workflows without complicating core actions.",
      "Keep critical actions lightweight to maintain responsiveness under stress scenarios.",
    ],

    challenges: [
      "Designing for urgency instead of normal app behavior.",
      "Balancing simplicity with enough functionality to feel useful.",
      "Ensuring the product flow stayed understandable in high-pressure situations.",
      "Avoiding unnecessary UI friction in safety-related interactions.",
    ],

    outcome: [
      "Created a project that demonstrates product thinking in an emergency-response context.",
      "Showed the ability to prioritize accessibility, speed, and action clarity.",
      "Added a user-centered application that balances practical utility with technical workflow design.",
    ],

    highlights: [
      "Emergency-first UX",
      "Fast access patterns",
      "Notification-oriented design",
      "User-centered safety workflow",
    ],

    screenshots: ["/images/placeholders/emergency-sos-home-placeholder.png"],

    learnings: [
      "Safety products require low-friction interaction design.",
      "Clear communication paths matter more than visual complexity in urgent flows.",
    ],
  },

  {
    slug: "emofusion",
    title: "Emofusion",
    type: "Layer A",
    tagline:
      "Multimodal emotion detection across text and deep learning workflows.",

    summary:
      "Detailed explanation of the multimodal ML pipeline, datasets, training workflow, and results will be added later. Placeholder description for the Emofusion project.",

    recruiterSummary:
      "Built a multimodal AI project using deep learning, experiment tracking, and NLP-oriented classification workflows.",

    engineeringSummary:
      "Developed a multimodal ML workflow using deep learning, MLflow-based experiment tracking, and NLP-oriented classification pipelines for emotion detection.",

    metrics: [
      "🧠 Multimodal ML",
      "📈 MLflow experiments",
      "🔬 Deep learning pipeline",
    ],

    dataFlow: "Input Data → Preprocessing → Model Training → MLflow → Output",

    architectureImage: "/architectures/emofusion.png",

    stack: ["Python", "PyTorch", "TensorFlow", "MLflow", "NLP"],
    image: "/images/placeholders/emofusion-results-placeholder.png",
    github: "#",

    overview:
      "This project represents the AI/ML side of the portfolio with multimodal modeling, experiment tracking, and classification workflows.",

    architecture: [
      "Input data is prepared through preprocessing pipelines.",
      "Model training runs through deep learning workflows.",
      "MLflow tracks experiments and training iterations.",
      "Outputs support emotion classification and evaluation.",
    ],

    engineeringDecisions: [
      "Structured the workflow as a pipeline rather than isolated notebooks or model experiments.",
      "Used MLflow for experiment tracking to keep results reproducible and easier to compare.",
      "Separated preprocessing, training, and evaluation concerns for better iteration speed.",
      "Positioned the system around workflow clarity as much as model experimentation.",
    ],

    scalingStrategy: [
      "Keep experiment tracking independent from training logic.",
      "Support repeated training runs without losing comparability between results.",
      "Separate preprocessing and evaluation so each step can evolve independently.",
      "Allow the pipeline to accommodate richer modalities and future model changes.",
    ],

    challenges: [
      "Managing experimentation without losing structure and reproducibility.",
      "Keeping the workflow understandable while working across multiple ML components.",
      "Balancing research-style iteration with production-style project presentation.",
      "Making the pipeline itself part of the story, not just the model outputs.",
    ],

    outcome: [
      "Created a strong AI/ML portfolio piece that complements the backend and systems-heavy projects.",
      "Demonstrated experiment tracking, structured pipelines, and applied deep learning workflows.",
      "Added breadth to the portfolio without making it feel disconnected from engineering discipline.",
    ],

    highlights: [
      "Multimodal ML workflow",
      "Deep learning experimentation",
      "MLflow-based tracking",
      "NLP-oriented classification pipeline",
    ],

    screenshots: ["/images/placeholders/emofusion-results-placeholder.png"],

    learnings: [
      "Experiment tracking is essential for ML reproducibility.",
      "Pipeline structure matters as much as model selection in AI systems.",
    ],
  },
];