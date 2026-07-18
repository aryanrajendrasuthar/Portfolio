export const assistantKnowledge = {
  intro:
    "Aryan Suthar is a backend and full-stack software engineer with 4+ years of experience. He is currently a Software Engineer at Avnet in Arizona, building backend microservices and a GraphQL aggregation layer for a supply-chain data platform, and is completing his MS in Software Engineering at Arizona State University (May 2026).",

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
      "At Avnet (Dec 2025 – Present), Aryan is a Software Engineer building backend microservices in Python and Flask across 7+ services for data ingestion and core business logic. He maintains transactional data in SQL Server, built a GraphQL aggregation layer unifying SQL Server and MongoDB that cut page load times by 60%, integrated AWS SQS/S3/Lambda for messaging, storage, and serverless data validation (processing ~20,000 records/day), added AI-powered anomaly detection to the data pipeline, wrote a comprehensive PyTest suite, and set up Docker/Jenkins CI/CD — while building internal Python automation scripts that save 3+ engineering hours per week.",
    orion:
      "At Orion Technolab (Jan 2021 – Jul 2024), Aryan built responsive single-page applications with React.js, TypeScript, and Redux, developed RESTful microservices with Java and Spring Boot that cut page load times by 30%, redesigned MySQL schemas and indexing for better query performance, migrated infrastructure to Azure (Blob Storage, Virtual Machines, Azure Functions) cutting infrastructure spend by 25%, standardized CI/CD with GitHub Actions maintaining 98%+ production uptime, and improved API response times by 50% through asynchronous processing and Azure Monitor observability.",
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
