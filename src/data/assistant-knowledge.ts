export const assistantKnowledge = {
  intro:
    "Aryan Suthar is a backend and distributed systems engineer with 4+ years of experience. He is currently a Software Engineer at Avnet in Arizona, architecting high-throughput microservices processing 2M+ daily transactions, and is completing his MS in Software Engineering at Arizona State University (May 2026).",

  skills: [
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Django",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React",
    "SQL",
    "C#",
    "Bash",
    "Go",
    "AWS (EC2, Lambda, S3, SNS, SES)",
    "Azure (AKS, Functions, Service Bus, Blob Storage)",
    "Apache Kafka",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Serverless",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "Elasticsearch",
    "LangChain",
    "RAG Pipelines",
    "Vector Databases",
    "PyTorch",
    "TensorFlow",
    "MLflow",
    "OAuth2",
    "JWT",
    "RBAC",
    "gRPC",
    "GraphQL",
    "GitHub Actions",
    "CI/CD",
    "Prometheus",
    "Grafana",
    "Datadog",
    "OpenTelemetry",
    "Distributed Tracing",
    "JUnit",
    "Pytest",
    "Jest",
    "TDD",
  ],

  experience: {
    avnet:
      "At Avnet (Dec 2025 – Present), Aryan is a Software Engineer architecting a high-throughput microservices platform using Java, Spring Boot, and Apache Kafka — processing 2M+ daily transactions across Kubernetes (AKS) clusters. He engineered low-latency RESTful and gRPC APIs, cut infrastructure spend by 27%, increased data ingestion throughput by 3.2×, improved PostgreSQL and MongoDB query performance by 41% through indexing, and shipped a production RAG search pipeline using LangChain and Azure Cognitive Search that improved query relevance by 33%.",
    orion:
      "At Orion Techno Lab (Jan 2021 – Jul 2024), Aryan developed scalable backend systems using Python, Django, and FastAPI handling 500K+ daily API requests, built frontend applications with React and Next.js, deployed containerized apps on Docker and Kubernetes with zero-downtime blue/green releases, strengthened API security with OAuth2/JWT, mentored 2 junior engineers through code reviews and pair programming, and integrated TensorFlow and MLflow ML pipelines into product features.",
  },

  projects: {
    distributedAISimulation:
      "The Distributed AI Simulation Platform is an AI-powered courtroom simulation tool for selfjustice.ca built with Python, LangChain, FastAPI, React, and Redis Pub/Sub. It uses multi-phase prompt orchestration, RAG retrieval over Canadian family law documents, and Redis pub/sub for real-time session state management — achieving sub-2s response latency.",
    physio:
      "PhysioApp is an AI-powered rehabilitation platform with patient, therapist, and admin roles. Built with Next.js, FastAPI, PostgreSQL, Supabase, and GitHub Actions CI/CD deployed on Vercel and Railway. It supports 12+ entity relationships, a multi-step onboarding wizard, analytics dashboard, and SES email integration.",
    myGymTrainer:
      "My Gym Trainer is a production-grade offline-first fitness and physiotherapy web app using Next.js 14, Zustand, IndexedDB, Supabase, and Groq AI (Llama 3.3 70B). It includes 200+ exercises, 24 rehab conditions, 17 persisted stores, and PWA support.",
    emofusion:
      "EmoFusion is a multimodal emotion detection system achieving 84% weighted F1-score across 7 categories. It uses a late-fusion architecture combining OpenCV facial landmarks and HuBERT speech embeddings via a 1D-CNN, trained on 61,000+ samples with MLflow experiment tracking.",
    aiKnowledgeAssistant:
      "The AI Knowledge Assistant is a production RAG system with hybrid retrieval (dense + sparse), re-ranking, Redis caching (60% latency reduction to sub-300ms), LangChain orchestration, FastAPI backend, and source attribution.",
    smartquote:
      "SmartQuote ERP is a cloud-based quotation management system for Jayraj Fabrication built with React, Supabase, PostgreSQL, and pdf-lib. It generates branded PDF quotations, manages clients, and uses Supabase Edge Functions for secure server-side workflows.",
    emergencySOS:
      "Emergency SOS is a real-time safety app using Node.js, Express, MongoDB Atlas, and Twilio. Users trigger one-click SOS alerts with live GPS location links sent via SMS to emergency contacts.",
    heyyHP:
      "Heyy-HP is a JARVIS-inspired voice-activated AI assistant for Windows built in Python. It uses wake-word detection, SpeechRecognition, and OpenAI API for LLM-powered Q&A, pywhatkit for YouTube control, real-time Apple Reminders sync via iCloud, and subprocess-based Windows system automation — all routed through a modular intent dispatcher.",
    neuralOps:
      "NeuralOps is an enterprise AI agent observability platform built with Python, FastAPI, Apache Kafka, PostgreSQL, Redis, and React. It ingests real-time execution traces from distributed LLM workloads via Kafka, runs anomaly detection, tracks inference cost analytics, and surfaces p99 latency monitoring across agent pipelines.",
    contextEngine:
      "ContextEngine is an enterprise institutional memory platform built with Python, FastAPI, Neo4j, LangChain, Slack API, GitHub API, and Jira API. It ingests organizational knowledge from Slack, GitHub, and Jira, builds a Neo4j knowledge graph with entity and relationship extraction, and answers natural language queries with full source attribution via hybrid retrieval (graph traversal + vector similarity).",
  },

  certifications:
    "Aryan holds certifications in AWS Services Fundamentals (Simplilearn), Microsoft Azure AI Essentials, DevOps Professional (PagerDuty + LinkedIn Learning), Atlassian Agile Project Management, and is pursuing AWS Certified Solutions Architect – Associate.",

  contact:
    "You can contact Aryan through LinkedIn (linkedin.com/in/aryanrajendrasuthar), GitHub (github.com/aryanrajendrasuthar), or email at aryan.s@itjobinbox.com.",
};
