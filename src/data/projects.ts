const layerAProjectsUnordered = [
  {
    slug: "my-gym-trainer",
    title: "My Gym Trainer",
    type: "Layer A",
    category: "Full-Stack / AI",
    status: "Live",
    year: 2026,
    tagline: "Your personal trainer. Always ready. Always personalized.",

    engineeringSummary:
      "Designed an offline-first Next.js 14 and TypeScript fitness platform where Zustand is the single source of truth, all 17 stores persist to IndexedDB, and API calls are fire-and-forget so the UI never blocks on network state. The system includes Supabase/PostgreSQL persistence, Express-backed services, Groq AI coaching, Framer Motion interactions, PWA support, and GitHub Actions TypeScript checks on every push.",

    metrics: [
      "🏋️ 200+ exercises",
      "🩺 24 rehab conditions",
      "🧠 17 Zustand stores",
    ],

    dataFlow:
      "Zustand State → IndexedDB Persistence → Fire-and-Forget API Sync → Supabase/PostgreSQL → AI Coach",

    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Express",
      "Framer Motion",
      "Zustand",
      "Groq AI",
      "PWA",
      "Vercel",
    ],

    github: "https://github.com/aryanrajendrasuthar/GymTrainer",
    liveUrl: "https://gym-trainer-nskt.vercel.app",

    overview:
      "My Gym Trainer is a production-grade fitness and physiotherapy web app built around personalized training, evidence-based exercise guidance, offline-first persistence, and AI-assisted coaching. Version v1.2.2 is deployed and production-ready.",

    problem:
      "Most fitness apps either focus on generic workout tracking or simple exercise libraries. They often fail when offline, separate rehab from training, and lack a dependable local-first state model for real workout sessions.",

    solution:
      "Built a unified app for workouts, physiotherapy, AI coaching, nutrition, achievements, and session recovery. The app keeps Zustand as the source of truth, persists all stores to IndexedDB, and syncs server state without blocking the user interface.",

    architecture: [
      "Next.js 14 and TypeScript power the frontend experience and production deployment.",
      "Zustand owns application state across 17 persisted stores.",
      "IndexedDB persistence makes workouts, rehab flows, nutrition state, achievements, and pending sessions available offline.",
      "API calls are fire-and-forget so the UI remains responsive even when network conditions are poor.",
      "Supabase and PostgreSQL provide backend persistence for cloud-backed data.",
      "Groq AI runs Llama 3.3 70B coaching flows for context-aware chat and weekly summaries.",
      "PWA support makes the app installable on iOS and Android.",
    ],

    engineeringDecisions: [
      "Used Zustand as the single source of truth to avoid conflicting local, server, and component state.",
      "Persisted all 17 Zustand stores to IndexedDB so the core app continues working offline.",
      "Made server writes fire-and-forget because workouts should not freeze when connectivity is unreliable.",
      "Modeled physiotherapy as phase-gated protocols so users progress from acute to maintenance stages safely.",
      "Used the Mifflin-St Jeor equation for TDEE and macro calculations with automatic recalculation on goal changes.",
      "Added GitHub Actions TypeScript checks on every push to protect production readiness.",
    ],

    scalingStrategy: [
      "The local-first state model keeps perceived performance stable as feature count grows.",
      "Supabase/PostgreSQL can evolve independently from the offline-first client state layer.",
      "Store-level separation allows workouts, rehab, nutrition, achievements, and AI features to expand independently.",
      "The AI coaching layer can swap providers while preserving the app-level coaching context contract.",
    ],

    challenges: [
      "Keeping 17 persisted stores consistent without making the UI depend on network completion.",
      "Combining general fitness training and physiotherapy protocols in one coherent product.",
      "Designing session splitting so workouts can be divided into Now and Later with pending session recovery.",
      "Balancing AI coaching usefulness with deterministic training and rehab rules.",
    ],

    outcome: [
      "Delivered a live, production-ready fitness and physiotherapy application.",
      "Implemented 200+ exercises with muscle diagrams, form cues, and video links.",
      "Added phase-gated physiotherapy support for 24 conditions.",
      "Built offline-first persistence, PWA installability, and production CI checks.",
    ],

    highlights: [
      "AI Coach with context-aware chat and weekly summaries using Llama 3.3 70B via Groq",
      "Live workout tracker with RPE, rest timers, e1RM calculator, and progressive overload suggestions",
      "Session splitting into Now and Later with pending session recovery",
      "64+ glossary terms and achievement tracking",
      "TypeScript 98.3% codebase with 57 commits",
    ],

    learnings: [
      "Offline-first architecture needs explicit state ownership before features scale.",
      "Fitness apps become more useful when workout, rehab, nutrition, and coaching context work together.",
      "Fire-and-forget API design can make user workflows feel dramatically more reliable.",
    ],
  },

  {
    slug: "worksafe",
    title: "WorkSafe",
    type: "Layer A",
    category: "Enterprise / Full-Stack",
    status: "In Development",
    year: 2026,
    tagline: "Enterprise Occupational Health Intelligence Platform",

    engineeringSummary:
      "Designed an enterprise full-stack architecture using React, NestJS, TypeScript, PostgreSQL, Redis, BullMQ, SAML SSO, and TOTP MFA. The system separates role-based access, health monitoring, risk scoring, compliance workflows, and asynchronous background processing into production-oriented service boundaries.",

    metrics: [
      "👥 5 user roles",
      "🔐 SAML SSO + TOTP MFA",
      "📋 OSHA reporting",
    ],

    dataFlow:
      "Worker Health Data → Risk Scoring → BullMQ Jobs → Compliance Reports → Role-Based Dashboards",

    stack: [
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "SAML SSO",
      "TOTP MFA",
    ],

    github: "https://github.com/aryanrajendrasuthar/WorkSafe",

    overview:
      "WorkSafe is an enterprise SaaS platform focused on occupational health intelligence. It is designed to help organizations move from reactive injury management toward proactive prevention through role-aware workflows, predictive health signals, and compliance automation.",

    problem:
      "Workplace safety systems are often fragmented across manual reports, delayed incident response, and disconnected health data. That makes it difficult to identify risk early or maintain compliance consistently.",

    solution:
      "Built an enterprise platform with secure identity, role-based access, worker health monitoring, predictive risk scoring, asynchronous processing, and compliance reporting in one operational workflow.",

    architecture: [
      "React provides role-specific dashboards and operational workflows.",
      "NestJS exposes backend APIs with clear module boundaries for auth, users, health data, risk scoring, and reporting.",
      "PostgreSQL stores normalized enterprise and worker health data.",
      "Redis and BullMQ process background jobs for scoring, reporting, and operational tasks.",
      "SAML 2.0 SSO and TOTP MFA support enterprise-grade authentication.",
      "RBAC controls access across 5 user roles.",
    ],

    engineeringDecisions: [
      "Used NestJS to keep enterprise backend modules explicit and testable.",
      "Added SAML 2.0 SSO and TOTP MFA because occupational health platforms need enterprise identity controls.",
      "Used BullMQ for background processing so risk scoring and reporting do not block user workflows.",
      "Modeled access around 5 roles to support realistic workplace safety operations.",
      "Used PostgreSQL for relational compliance, user, and health-monitoring data.",
    ],

    scalingStrategy: [
      "Background workers can scale independently from the API layer.",
      "Redis-backed queues isolate heavier reporting and scoring tasks from request latency.",
      "Role and organization boundaries prepare the system for multi-team enterprise use.",
      "Modular NestJS services allow health monitoring, compliance, and risk scoring to evolve independently.",
    ],

    challenges: [
      "Balancing enterprise security requirements with usable operational workflows.",
      "Designing predictive risk scoring so it supports prevention rather than only post-incident reporting.",
      "Keeping compliance reporting auditable while still practical for day-to-day users.",
    ],

    outcome: [
      "Created an enterprise-focused safety platform architecture in active development.",
      "Implemented a stronger SaaS portfolio project around auth, RBAC, queues, reporting, and predictive workflows.",
      "Demonstrated full-stack enterprise engineering across frontend, backend, database, identity, and background processing.",
    ],

    highlights: [
      "5 user roles with RBAC",
      "SAML 2.0 SSO and TOTP MFA",
      "Predictive risk scoring engine",
      "BullMQ background job processing",
      "OSHA compliance reporting",
      "Real-time worker health monitoring",
    ],

    learnings: [
      "Enterprise systems need auth, reporting, and background processing designed from the start.",
      "Operational health platforms are most valuable when they help prevent issues before incidents happen.",
      "Queue-backed workflows make compliance and analytics features easier to scale.",
    ],
  },

  {
    slug: "Real-Time-AI-Simulation-Tool",
    title: "Distributed AI Simulation Platform",
    type: "Layer A",
    category: "AI / Full-Stack",
    status: "Live",
    tagline:
      "AI-powered courtroom simulator with multi-phase prompt orchestration and RAG retrieval over legal document corpora.",

    engineeringSummary:
      "Architected an event-driven AI simulation backend using Python, FastAPI, LangChain, and Redis Pub/Sub. The system uses a strict multi-phase prompt flow, LangChain-orchestrated RAG retrieval over a vector database of legal documents, and Redis pub/sub channels for managing real-time simulation state across concurrent user sessions. The React frontend integrates voice input and structured intake flows.",

    metrics: [
      "⚖️ Sub-2s response latency",
      "🧩 Multi-phase prompt orchestration",
      "📚 RAG legal retrieval",
    ],

    dataFlow:
      "Intake → LangChain Prompt Router → RAG Retrieval → Redis State → FastAPI → React UI",

    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG",
      "React",
      "Vector DB",
      "Redis Pub/Sub",
    ],

    github:
      "https://github.com/aryanrajendrasuthar/Real-Time-AI-Simulation-Tool",

    overview:
      "The Distributed AI Simulation Platform is an AI-powered legal practice environment built for the Self-Justice initiative. It allows self-represented litigants navigating Canadian family law without a lawyer to rehearse courtroom proceedings in a realistic, structured simulation. Users practice against an AI Judge, AI Opposing Counsel, or both simultaneously, with legal grounding provided through LangChain-orchestrated RAG retrieval.",

    problem:
      "Self-represented litigants in family court are at a significant disadvantage because they lack procedural knowledge, legal vocabulary, and adversarial experience. Existing resources are mostly static guides or videos and do not simulate the real back-and-forth of a live hearing.",

    solution:
      "Built an event-driven AI courtroom simulator using Python, FastAPI, LangChain, and Redis Pub/Sub. Users move through structured intake, live mock trial, evidence submission, verdict generation, and feedback — with each session managed through real-time Redis state channels and legal grounding from a RAG pipeline over Canadian family law documents.",

    architecture: [
      "React frontend captures intake details, selected simulation mode, and evidence uploads.",
      "FastAPI serves the simulation API with async endpoints for concurrent session handling.",
      "LangChain orchestrates multi-phase prompt flows, selecting from multiple role-behavior × session-type combinations at runtime.",
      "A vector database indexes Canadian family law documents; LangChain retrieves top-k semantic matches to ground each AI response.",
      "Redis Pub/Sub manages real-time simulation state across concurrent user sessions without persistent server-side conversation storage.",
      "Simulation proceeds through Intake → Transition → Trial → Conclusion phases enforced through structured system prompts.",
    ],

    engineeringDecisions: [
      "Used LangChain for prompt orchestration so the multi-phase simulation flow and RAG retrieval could be composed modularly.",
      "Used Redis Pub/Sub for session state so simulation context is shared across concurrent requests without blocking the API layer.",
      "Kept each session stateless at the API level, with all state managed through Redis channels for clean horizontal scalability.",
      "Used a roleBehavior × sessionType routing matrix to keep prompt selection explicit and deterministic.",
      "Retrieved legal document embeddings from a vector database at query time to ground LLM responses in domain-specific legal precedent.",
      "Built the event-driven backend with FastAPI async endpoints to handle concurrent simulation sessions without per-session server blocking.",
    ],

    scalingStrategy: [
      "Stateless API design with Redis-backed state allows horizontal scaling without shared server memory.",
      "LangChain prompt modularity makes it easy to add new legal roles, hearing types, or procedural paths independently.",
      "RAG infrastructure scales independently from session orchestration and request handling.",
      "The event-driven architecture allows evidence ingestion, simulation orchestration, and report generation to be split into isolated services.",
    ],

    challenges: [
      "Preventing the LLM from skipping structured simulation phases without implementing a heavy backend state machine.",
      "Maintaining useful legal grounding while rebuilding context efficiently across stateless API requests.",
      "Managing concurrent user sessions with consistent state using Redis pub/sub channels.",
      "Designing an experience that felt like a real courtroom rehearsal rather than a generic chatbot interaction.",
    ],

    outcome: [
      "Deployed as part of the selfjustice.ca platform for real-world legal rehearsal use cases.",
      "Achieved sub-2s response latency across multi-phase AI-simulated courtroom interactions.",
      "Made professional-style legal preparation more accessible to self-represented litigants.",
      "Created a flagship portfolio project demonstrating LangChain orchestration, RAG architecture, and event-driven session management.",
    ],

    highlights: [
      "Multi-phase LangChain prompt orchestration for realistic courtroom simulation",
      "RAG pipeline over Canadian family law document corpora",
      "Redis Pub/Sub for real-time session state across concurrent users",
      "FastAPI async backend with sub-2s response latency",
      "AI simulation of Judge, Opposing Counsel, or both simultaneously",
      "Voice input integration through Web Speech API",
    ],

    learnings: [
      "LangChain's composability makes multi-phase prompt orchestration easier to debug and extend than hand-rolled prompt routing.",
      "Redis pub/sub is a clean primitive for managing real-time shared state without a full stateful server.",
      "RAG becomes especially valuable when model output must be grounded in domain-specific reference material like legal precedent.",
      "Event-driven backends make concurrent AI session management scalable without tight coupling between requests.",
    ],
  },

  {
    slug: "physio-app",
    title: "PhysioApp — AI-Powered Rehabilitation Platform",
    type: "Layer A",
    category: "Full-Stack / Healthcare",
    status: "Live",
    year: 2025,
    tagline:
      "Full-stack physiotherapy platform with personalized exercise routines, multi-role auth, and AI-powered rehabilitation tracking.",

    engineeringSummary:
      "Architected a full-stack physiotherapy platform using Next.js, FastAPI, PostgreSQL, and Supabase. The system separates patient, therapist, and admin roles through JWT-based RBAC, normalizes rehabilitation data across 12+ entity relationships, and serves an analytics dashboard tracking weekly patient progress. GitHub Actions handles CI/CD for both the Next.js frontend on Vercel and the FastAPI backend on Railway.",

    metrics: [
      "👥 3 user roles",
      "📊 12+ entity relationships",
      "🚀 CI/CD on Vercel + Railway",
    ],

    dataFlow:
      "Patient Onboarding → Routine Builder → Live Session Tracking → Analytics Dashboard → Therapist Review",

    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "GitHub Actions",
      "AWS SES",
      "Vercel",
      "Railway",
    ],

    github: "https://github.com/aryanrajendrasuthar/Physio-App",

    overview:
      "PhysioApp is a production-deployed, multi-role physiotherapy platform serving patients managing rehabilitation programs and therapists who create and assign exercise plans. Built as the ASU SER-517 capstone, it covers the full rehabilitation workflow — from pain-aware onboarding through exercise discovery, routine management, live session tracking, analytics, and account management — and is deployed with automated CI/CD on Vercel and Railway.",

    problem:
      "Patients recovering through physiotherapy often struggle to maintain consistent exercise routines at home. Generic fitness apps do not account for pain areas, injury history, prescribed movements, therapist-driven guidance, or the structured week-by-week progress visibility that rehabilitation requires.",

    solution:
      "Built a pain-aware physiotherapy platform with multi-role auth, a guided onboarding wizard, exercise library, routine builder, live session tracking with a 30-second rest timer, weekly analytics, SES-backed email notifications, and a FAQ/Help Center — deployed end-to-end with GitHub Actions CI/CD.",

    architecture: [
      "Next.js powers the frontend with server-side rendering for role-specific patient, therapist, and admin dashboards.",
      "FastAPI provides the backend REST API with JWT-based RBAC for the three user roles.",
      "PostgreSQL via Supabase stores the normalized relational schema covering patients, therapists, routines, sessions, exercises, and progress records across 12+ entity relationships.",
      "GitHub Actions automates CI/CD for the Next.js frontend on Vercel and the FastAPI backend on Railway.",
      "AWS SES handles transactional email for onboarding confirmation, session reminders, and account management.",
      "The onboarding wizard persists body metrics and pain data through multi-step API calls with real-time boundary validation.",
      "Analytics aggregations compute weekly patient progress across multiple active rehabilitation programs.",
    ],

    engineeringDecisions: [
      "Chose FastAPI for the backend to support async endpoints and clean Pydantic schema validation across all API boundaries.",
      "Used Supabase as the managed PostgreSQL layer to simplify connection pooling and schema migrations in a team environment.",
      "Implemented RBAC at the FastAPI middleware level so route-level access control is enforced server-side before any handler logic runs.",
      "Built the onboarding wizard with real-time boundary validation to catch data errors before they propagate to the database.",
      "Modeled rehabilitation sessions as immutable snapshots so historical progress remains accurate even when routines are later modified.",
      "Used GitHub Actions for CI/CD so every merge to main triggers automatic deployment to both Vercel and Railway.",
    ],

    scalingStrategy: [
      "The Next.js and FastAPI layers can be scaled independently as patient and therapist user counts grow.",
      "PostgreSQL via Supabase supports connection pooling and horizontal read replicas for analytics-heavy workloads.",
      "Immutable session snapshots keep historical data reliable without reprocessing as routine definitions evolve.",
      "GitHub Actions CI/CD allows rapid deployment iteration without manual intervention.",
    ],

    challenges: [
      "Designing a multi-step onboarding flow with real-time validation that felt thorough without overwhelming first-time users.",
      "Modeling 12+ entity relationships in PostgreSQL while keeping the schema clean and query-efficient for analytics.",
      "Coordinating feature delivery and CI/CD setup across a team capstone environment.",
      "Balancing clinical-style data rigor with a UX that patients would actually engage with during recovery.",
    ],

    outcome: [
      "Delivered a production-deployed, multi-role physiotherapy platform serving real rehabilitation workflows.",
      "Reduced onboarding friction by ~40% through a multi-step wizard with real-time boundary validation.",
      "Built a normalized relational schema supporting 12+ entity relationships and a weekly analytics dashboard.",
      "Demonstrated full-stack engineering across frontend, backend, database, email, CI/CD, and multi-role auth.",
    ],

    highlights: [
      "3-role auth system (patient, therapist, admin) with JWT-based RBAC",
      "Multi-step onboarding wizard with real-time boundary validation",
      "Live session tracking with 30-second rest timer system",
      "Analytics dashboard tracking weekly progress across rehabilitation programs",
      "SES email integration and FAQ/Help Center module",
      "Automated CI/CD via GitHub Actions to Vercel and Railway",
    ],

    learnings: [
      "Multi-role auth is most maintainable when enforced at the API middleware layer rather than scattered across route handlers.",
      "Immutable session history requires intentional schema decisions early — retrofitting it later is expensive.",
      "Structured onboarding wizards with progressive validation significantly reduce downstream data quality issues.",
      "CI/CD discipline in a team project pays dividends immediately in deployment confidence.",
    ],
  },

  {
    slug: "smart-quotation-estimator",
    title: "SmartQuote ERP — Cloud Quotation Management System",
    type: "Layer A",
    tagline:
      "Cloud-based quotation management system for fabrication and contracting workflows.",

    engineeringSummary:
      "Designed and implemented a full-stack quotation platform using React, Vite, TypeScript, Tailwind CSS, Supabase PostgreSQL, Supabase Auth, Supabase Storage, Edge Functions, and pdf-lib. The system supports admin-only access, normalized quotation data models, branded PDF generation aligned to real company quotation samples, storage-backed export history, and production-style cloud workflows optimized for free-tier deployment.",

    metrics: [
      "📄 Branded PDF exports",
      "🗄️ Normalized PostgreSQL schema",
      "☁️ Free-tier cloud architecture",
    ],

    dataFlow:
      "Admin Login → Client / Quote Entry → Line Items & Extras → PDF Export → Storage → Share",

    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "PDF-lib",
    ],

    github: "https://github.com/aryanrajendrasuthar/Smart-Quotation-Estimator",

    overview:
      "SmartQuote ERP is a full-stack quotation management system built for Jayraj Fabrication to digitize the process of creating, managing, exporting, and sharing professional fabrication quotations. It replaces manual Word/PDF-based quotation preparation with a structured cloud workflow tailored to real business quotation formats used in fabrication and contracting operations.",

    problem:
      "Fabrication businesses often prepare quotations manually for sheds, canopies, structural work, transportation charges, GST handling, and custom pricing. That creates repeated work, inconsistent formatting, poor revision handling, lack of centralized records, limited export tracking, and a less professional client-facing workflow.",

    solution:
      "Built a centralized admin-only quotation platform that stores clients, quotes, line items, extras, notes, and export history in a structured system. The platform generates business-ready branded PDFs aligned with Jayraj Fabrication's real quotation samples and supports cloud-based storage and sharing workflows.",

    architecture: [
      "React frontend provides admin authentication UI, quote management, client management, company profile management, and export workflows.",
      "Supabase Auth manages authenticated admin sessions using JWT-based access control.",
      "PostgreSQL stores application settings, company profile, clients, quotes, line items, extras, and export records.",
      "Row Level Security restricts data access so only the authorized admin can interact with quotation data.",
      "Supabase Edge Functions handle secure admin verification, PDF generation, storage upload, and email-ready server-side logic.",
      "Supabase Storage stores generated quotation PDFs for download, sharing, and reuse.",
    ],

    engineeringDecisions: [
      "Chose a free-first architecture using Vercel and Supabase to keep deployment cost low while still supporting production-style workflows.",
      "Modeled the system around real Jayraj Fabrication quotation samples instead of generic invoice templates, so the output matches actual business operations.",
      "Used a normalized PostgreSQL schema to separate quote headers, line items, extras, clients, company profile, and export history for maintainability.",
      "Implemented admin-only access with Supabase Auth, JWT sessions, Row Level Security, and server-side verification in Edge Functions instead of relying only on frontend protection.",
      "Used pdf-lib for server-side PDF generation so quotations could be exported as structured branded documents with headers, line items, notes, terms, and signature blocks.",
      "Stored exported quotation PDFs in Supabase Storage and recorded export history in the database to support reuse and sharing workflows.",
    ],

    scalingStrategy: [
      "The React frontend and Supabase backend can scale independently, keeping the architecture simple while supporting growth.",
      "Normalized schema design makes it easier to add search, duplication, analytics, and richer quote lifecycle workflows without restructuring core data.",
      "Edge Functions isolate PDF generation, storage upload, and email workflows so these operations can evolve without complicating the main UI.",
      "Cloud storage-backed exports make it possible to reuse, share, and track generated documents without depending on local file handling.",
      "The current single-admin architecture can later expand into a multi-tenant SaaS model with business-level isolation.",
    ],

    challenges: [
      "Mapping messy real-world fabrication quotation workflows into a clean digital structure without losing business flexibility.",
      "Designing the PDF output to match real company quotation layouts rather than generic invoice designs.",
      "Supporting structured 'including' details inside line items, which is common in fabrication quotes but uncommon in simple invoicing apps.",
      "Balancing a free-tier deployment architecture with production-style requirements like auth, storage, exports, and secure server-side logic.",
      "Creating an admin workflow that feels operationally efficient for daily quote generation instead of overly technical.",
    ],

    outcome: [
      "Delivered a business-specific quotation platform that replaces manual document-based quotation creation with a reusable digital workflow.",
      "Enabled centralized client management, quote generation, export history tracking, and branded PDF production in one system.",
      "Built a stronger real-world full-stack portfolio project tied directly to an active company workflow rather than a generic CRUD application.",
      "Implemented production-ready functionality including structured quotations, cloud storage, secure auth, PDF export, and email-ready sharing support.",
    ],

    highlights: [
      "Real fabrication quotation format support",
      "Structured line items with 'Including' sub-details",
      "Flexible extras handling for GST, transportation, and custom charges",
      "Branded PDF exports aligned to client quotation samples",
      "Cloud-native storage and export workflow",
      "Secure admin-only access with Row Level Security",
    ],

    learnings: [
      "Business software becomes much more valuable when it is designed around real operational documents and workflows instead of generic templates.",
      "Strong schema design makes document-centric platforms easier to extend with exports, history, analytics, and lifecycle features.",
      "Secure cloud-native architectures can deliver production-style value even within free-tier deployment constraints.",
      "PDF generation and storage workflows are important engineering differentiators in real business systems.",
    ],
  },

  {
    slug: "emergency-sos",
    title: "Emergency SOS — Real-Time Emergency Alert System",
    type: "Layer A",
    tagline:
      "Real-time emergency alert app with OTP signup, GPS location, and SMS dispatch.",

    engineeringSummary:
      "Built a full-stack emergency alert app using Node.js, Express, MongoDB Atlas, EJS, Tailwind CSS, Twilio SMS, dotenv, and browser geolocation APIs. The application uses OTP-verified signup, session-based authentication, real-time client-side GPS capture, dynamic Google Maps deep-link generation, multi-contact SMS dispatch, and HTTPS-ready certificate infrastructure for secure mobile usage.",

    metrics: [
      "📲 8 API routes",
      "📍 Live GPS capture",
      "📡 2+ SMS contacts",
    ],

    dataFlow:
      "Signup → OTP Verify → Login → GPS Capture → SOS Trigger → Twilio SMS → Google Maps Link",

    stack: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Twilio",
      "EJS",
      "Tailwind CSS",
      "Geolocation API",
    ],

    github: "https://github.com/aryanrajendrasuthar/Emergency-SOS",

    overview:
      "Emergency SOS is a real-time safety web application that allows users to send instant SMS emergency alerts, including their live GPS location, to pre-configured contacts with a single button press. Built for mobile use, it combines OTP-verified phone registration, real-time geolocation, and Twilio's SMS infrastructure into a lightweight deployable Node.js app.",

    problem:
      "In an emergency situation, every second counts. Existing messaging apps require users to navigate menus, type messages, and manually share location, which is too slow under panic or duress.",

    solution:
      "Built a one-click emergency alert system where users verify their phone number during signup, log in securely, and trigger an SOS that immediately sends SMS alerts with live Google Maps location links to multiple emergency contacts.",

    architecture: [
      "Users register with OTP-verified phone numbers before an account is created in MongoDB Atlas.",
      "Express manages login, protected routes, SOS requests, and Twilio-based messaging flows.",
      "The browser Geolocation API captures real-time GPS coordinates client-side on page load.",
      "Coordinates are submitted to the server as part of the SOS trigger request.",
      "The backend dynamically constructs Google Maps deep links from raw coordinates.",
      "Twilio dispatches SMS alerts in parallel to configured emergency contacts.",
      "HTTPS certificate infrastructure supports secure geolocation access on mobile browsers.",
    ],

    engineeringDecisions: [
      "Used Twilio both for OTP-based phone verification and emergency SMS dispatch, simplifying the messaging infrastructure into a single provider.",
      "Verified phone numbers before account creation so unverified users cannot register and store unusable contact data.",
      "Captured GPS location directly via the browser Geolocation API instead of using a separate third-party location service.",
      "Generated Google Maps deep links dynamically from raw coordinates so contacts can navigate directly to the user's position.",
      "Configured emergency contacts through environment variables so the contact list can be changed without code edits.",
      "Included SSL certificate infrastructure and HTTPS-ready server setup because secure context is required for geolocation on modern mobile browsers.",
    ],

    scalingStrategy: [
      "The app can be deployed quickly with MongoDB Atlas and Twilio, making it easy to reuse for multiple users or environments.",
      "Environment-based configuration for emergency contacts and Twilio credentials keeps deployments portable.",
      "The route structure is simple enough to evolve into a more modular service layout if the app expands beyond a single-server setup.",
      "MongoDB Atlas supports cloud-hosted user persistence without adding self-managed database overhead.",
      "The current alert flow can later be extended to support more contacts, richer alert types, or push-notification channels.",
    ],

    challenges: [
      "Designing the flow so emergency alerts could be sent with almost no user effort after setup.",
      "Making geolocation work reliably in a browser context where HTTPS is required for permission access.",
      "Ensuring verified phone onboarding while keeping signup simple.",
      "Handling real-time location capture and SMS dispatch in a way that still feels lightweight and responsive.",
      "Building the system so it is practical for mobile use rather than only desktop demo behavior.",
    ],

    outcome: [
      "Created a self-contained personal safety tool that can be deployed quickly with Twilio and MongoDB Atlas.",
      "Built a genuinely useful real-time application around emergency constraints rather than a generic CRUD interface.",
      "Demonstrated full-stack engineering across auth, messaging, geolocation, cloud persistence, and secure deployment considerations.",
      "Added a strong mobile-oriented real-time systems project to the portfolio with clear user-facing impact.",
    ],

    highlights: [
      "OTP-verified phone registration with Twilio",
      "One-click SOS dispatch to multiple emergency contacts",
      "Live GPS capture with browser Geolocation API",
      "Dynamic Google Maps deep-link generation",
      "HTTPS-ready certificate infrastructure for mobile security",
      "Session-based authentication and protected routes",
    ],

    learnings: [
      "Emergency workflows must optimize for speed and clarity above everything else.",
      "Browser security constraints like HTTPS can directly shape product architecture when geolocation is involved.",
      "Small real-time systems become much more useful when they integrate existing services like Twilio cleanly.",
      "Environment-driven configuration makes safety tools easier to adapt for different deployment setups.",
    ],
  },

  {
    slug: "emofusion",
    title: "EmoFusion — Multimodal Emotion Detection System",
    type: "Layer A",
    tagline:
      "Late-fusion deep learning system combining computer vision and NLP for multimodal emotion classification.",

    engineeringSummary:
      "Designed a multimodal late-fusion architecture with separate computer vision and NLP feature extraction branches. The vision branch uses OpenCV for facial landmark detection; the NLP branch uses HuBERT embeddings processed through a 1D-CNN. Embeddings from both branches are fused before final emotion classification. Built scalable preprocessing pipelines for 61,000+ samples, trained PyTorch models to 84% weighted F1-score across 7 categories, and integrated MLflow for complete experiment lifecycle management.",

    metrics: [
      "📊 61k+ training samples",
      "🎯 84% weighted F1-score",
      "🧠 7 emotion categories",
    ],

    dataFlow:
      "Input (Image + Audio) → OpenCV + HuBERT Feature Extraction → Late Fusion → Classifier → MLflow Tracking",

    stack: [
      "Python",
      "PyTorch",
      "HuBERT",
      "OpenCV",
      "TensorFlow",
      "MLflow",
      "NLP",
      "Computer Vision",
    ],

    github: "https://github.com/aryanrajendrasuthar/EmoFusion",

    overview:
      "EmoFusion is a multimodal deep learning system that detects and classifies human emotions by simultaneously analyzing visual and speech inputs. By fusing computer vision (facial landmark detection via OpenCV) and NLP (speech embeddings via HuBERT + 1D-CNN) through a late-fusion architecture, the system achieves more robust emotion recognition than single-modality approaches, reaching 84% weighted F1-score across 7 emotion categories on 61,000+ training samples.",

    problem:
      "Emotion detection from a single modality, such as only text or only images, is inherently limited. Humans express emotion through facial cues, body language, and speech simultaneously, so single-modality systems miss context carried by other signals.",

    solution:
      "Built a true multimodal pipeline that processes visual and audio inputs through separate feature extraction branches — OpenCV for facial landmarks and HuBERT + 1D-CNN for speech embeddings — fuses them at a late-fusion layer, and classifies emotion with a reproducible training and experiment-tracking workflow.",

    architecture: [
      "Input consists of paired visual (video frames) and audio data samples.",
      "Computer vision pipeline uses OpenCV to extract facial landmark features from video frames.",
      "NLP pipeline processes audio through HuBERT to extract speech embeddings, then refines them with a 1D-CNN.",
      "Embeddings from both branches are fused using a late-fusion strategy before classification.",
      "Final PyTorch classifier predicts emotion categories from the fused representation across 7 classes.",
      "MLflow tracks experiment runs, hyperparameters, metrics, artifacts, and model versions.",
    ],

    engineeringDecisions: [
      "Designed a late-fusion architecture so vision and NLP pipelines could learn modality-specific features independently before combining.",
      "Used HuBERT for speech embeddings because it captures rich prosodic and semantic audio features better than raw MFCCs for emotion classification.",
      "Added a 1D-CNN on top of HuBERT embeddings to learn local temporal patterns in speech before the fusion step.",
      "Used OpenCV for facial landmark extraction as a lightweight, deterministic vision front-end before learned feature layers.",
      "Built scalable ML data pipelines capable of handling 61,000+ training samples without creating preprocessing bottlenecks.",
      "Integrated MLflow for complete experiment lifecycle management including metric logging, artifact storage, and model versioning.",
    ],

    scalingStrategy: [
      "Modular encoder design allows independent ablation of vision and audio components without retraining the full pipeline.",
      "Separated preprocessing, training, and evaluation stages so each part of the ML workflow can evolve independently.",
      "MLflow manages multiple experiment runs, compares model variants, and keeps versioned outputs reproducible.",
      "The pipeline design supports future expansion into additional modalities such as text or additional sensor data.",
    ],

    challenges: [
      "Balancing feature importance between visual and speech modalities in a fused architecture.",
      "Managing large-scale preprocessing for 61,000+ samples without slowing down model iteration speed.",
      "Ensuring reproducibility across repeated training runs and model experiments.",
      "Designing the pipeline to be modular enough for ablation studies while remaining production-structured.",
    ],

    outcome: [
      "Achieved 84% weighted F1-score across 7 emotion categories on a 61,000+ sample benchmark dataset.",
      "Built a reproducible multimodal ML workflow with complete experiment tracking and versioning.",
      "Demonstrated strong ML engineering practices beyond raw model training, including modular pipeline design and lifecycle management.",
      "Added a production-oriented AI/ML case study combining computer vision and NLP in a unified late-fusion system.",
    ],

    highlights: [
      "Late-fusion architecture combining OpenCV facial landmarks and HuBERT speech embeddings",
      "1D-CNN processing of HuBERT embeddings for temporal speech pattern learning",
      "84% weighted F1-score across 7 emotion categories",
      "Modular pipeline supporting independent encoder swapping for ablation studies",
      "MLflow-based experiment lifecycle tracking and versioning",
    ],

    learnings: [
      "Multimodal systems provide richer emotional context than single-modality models when fusion is done thoughtfully.",
      "HuBERT embeddings carry significantly more emotional signal than raw audio features like MFCCs.",
      "Experiment tracking is essential for reproducible ML workflows when iterating across modality combinations.",
      "Pipeline modularity is as important as model accuracy in production-oriented ML systems.",
    ],
  },

  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant — RAG-Powered Q&A System",
    type: "Layer A",
    tagline:
      "Production-oriented Retrieval-Augmented Generation system for grounded document Q&A.",

    engineeringSummary:
      "Designed an end-to-end RAG pipeline: document chunking → embedding generation → vector indexing → hybrid retrieval with re-ranking → prompt grounding → LLM inference. FastAPI serves concurrent async requests, LangChain orchestrates retrieval and generation, and Redis caches embeddings, responses, and session state for low-latency multi-turn interactions with source attribution.",

    metrics: [
      "⚡ Sub-300ms latency",
      "📉 60% latency reduction",
      "🧠 Hybrid retrieval + re-ranking",
    ],

    dataFlow:
      "Documents → Embeddings → Vector Store → Hybrid Retrieval + Re-ranking → LLM Prompt → Response + Attribution",

    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Redis",
      "Vector Database",
      "RAG",
    ],

    github: "https://github.com/aryanrajendrasuthar/AI-Knowledge-Assistant",

    overview:
      "The AI Knowledge Assistant is a production-oriented RAG system that allows users to query large document collections with natural language and receive accurate, context-grounded answers powered by an LLM — with source attribution and sub-300ms response latency achieved through Redis caching and hybrid retrieval.",

    problem:
      "Standalone LLMs cannot access private documents or domain-specific knowledge bases at query time, which makes them unreliable for accurate organizational Q&A. Single-strategy vector retrieval also misses keyword-level matches that matter for domain-specific corpora.",

    solution:
      "Built a Retrieval-Augmented Generation system that indexes documents as embeddings, applies hybrid retrieval (dense + sparse) with re-ranking at query time, and injects retrieved context into LLM prompts for grounded responses with source attribution.",

    architecture: [
      "Documents are chunked and embedded using OpenAI embedding models.",
      "Embeddings are indexed into a vector database for semantic retrieval.",
      "FastAPI exposes async endpoints for query handling and session management.",
      "At query time, hybrid retrieval (dense vector + sparse keyword) retrieves candidates, which are then re-ranked for relevance.",
      "Top-k re-ranked chunks are passed into LangChain prompt orchestration with source attribution metadata.",
      "Redis caches embeddings, repeated responses, and session state for faster multi-turn interactions.",
    ],

    engineeringDecisions: [
      "Used hybrid retrieval (dense + sparse) so the system handles both semantic similarity and keyword-exact matches for domain-specific queries.",
      "Added re-ranking after initial retrieval to improve answer accuracy on specialized corpora where vector similarity alone is insufficient.",
      "Used FastAPI async endpoints to support concurrent inference requests without blocking.",
      "Added Redis caching for embeddings and frequent responses to reduce repeated API calls and improve latency.",
      "Used LangChain to keep retrieval, context injection, and generation logic modular and composable.",
      "Included source attribution metadata in responses so users can verify the grounding documents.",
    ],

    scalingStrategy: [
      "FastAPI async design supports concurrent inference workloads.",
      "Redis caching reduces repeated compute and API overhead at scale.",
      "The vector store layer can grow independently as document volume increases.",
      "Session state handling enables multi-turn interactions without resending full context every time.",
      "Hybrid retrieval and re-ranking can be tuned independently of the LLM inference layer.",
    ],

    challenges: [
      "Reducing LLM latency while still preserving grounded retrieval quality.",
      "Designing hybrid retrieval so dense and sparse signals are combined meaningfully rather than naively.",
      "Maintaining conversational context efficiently across multiple user turns.",
      "Balancing retrieval precision with response speed in a production-like setup.",
    ],

    outcome: [
      "Built a production-oriented RAG system with measurable latency and accuracy improvements.",
      "Reduced response latency by 60% to sub-300ms through Redis caching and optimized retrieval flow.",
      "Improved answer accuracy on domain-specific corpora with hybrid retrieval and re-ranking.",
      "Demonstrated strong LLM systems engineering through retrieval, orchestration, caching, and attribution design.",
    ],

    highlights: [
      "Full RAG pipeline with hybrid retrieval (dense + sparse)",
      "Re-ranking for improved domain-specific accuracy",
      "FastAPI async backend",
      "Redis caching with 60% latency reduction",
      "Source attribution on all responses",
      "LangChain orchestration",
    ],

    learnings: [
      "Hybrid retrieval outperforms pure vector search on domain-specific corpora where keyword precision matters.",
      "Re-ranking is a low-cost, high-impact improvement when retrieval recall is already good.",
      "Latency tuning matters just as much as prompt quality in production-oriented AI systems.",
      "Caching and session architecture are key to making RAG systems scalable and usable.",
    ],
  },

  {
    slug: "heyy-hp",
    title: "Heyy-HP — Voice-Activated AI Assistant",
    type: "Layer A",
    tagline:
      "JARVIS-inspired voice AI for Windows with LLM Q&A, YouTube control, real-time Reminders sync, and system automation.",

    engineeringSummary:
      "Implemented a modular voice pipeline: wake-word detection → speech-to-text → intent classification → LLM inference or direct handler dispatch → text-to-speech response. Threaded background workers handle real-time Reminders sync and system event monitoring independently of the main speech loop.",

    metrics: [
      "🎤 Wake-word activated",
      "🤖 LLM-powered Q&A",
      "🔄 Real-time Reminders sync",
    ],

    dataFlow:
      "Wake Word → STT → Intent Router → LLM / YouTube / Reminders / System → TTS Response",

    stack: [
      "Python",
      "OpenAI API",
      "SpeechRecognition",
      "pyttsx3",
      "pywhatkit",
      "Apple Reminders API",
      "Threading",
      "Windows Automation",
    ],

    github: "https://github.com/aryanrajendrasuthar/Heyy-HP",

    overview:
      "Heyy-HP is a JARVIS-inspired voice-activated personal AI assistant for Windows. It listens for a wake word, transcribes commands via speech recognition, routes intent to the appropriate handler — LLM inference for general Q&A, pywhatkit for YouTube control, iCloud/Apple Reminders for task sync, or subprocess calls for OS automation — and responds via text-to-speech.",

    problem:
      "Existing voice assistants are either cloud-locked, lack developer extensibility, or treat each capability as a siloed app. Building a single cohesive spoken interface that routes intent across LLM inference, media control, task management, and OS automation requires a custom orchestration layer.",

    solution:
      "Designed a modular intent-routing architecture in Python with a central speech pipeline (wake word → STT → router → handler → TTS). Each capability — LLM Q&A, YouTube, Reminders, system control — is a pluggable handler module dispatched from the router, keeping the pipeline extensible and testable.",

    architecture: [
      "Microphone input is continuously monitored; wake word triggers active listening mode.",
      "SpeechRecognition transcribes audio to text using Google Speech API.",
      "Intent classifier routes the command to the appropriate handler module.",
      "LLM handler sends the query to OpenAI API and reads back the response via pyttsx3 TTS.",
      "YouTube handler uses pywhatkit to search and play videos in the browser.",
      "Reminders handler runs a background thread syncing Apple Reminders via iCloud API in real time.",
      "System handler executes OS-level commands via subprocess for app launches, volume, and shutdown.",
    ],

    engineeringDecisions: [
      "Used a central intent router so each capability module is independently developed and swappable without modifying the main speech loop.",
      "Ran Reminders sync in a background thread to prevent blocking the primary voice pipeline.",
      "Used pyttsx3 for offline TTS to avoid latency and API dependency on the response path.",
      "Chose pywhatkit for YouTube automation to avoid OAuth complexity for a local-use tool.",
      "Designed each handler as a standalone function so new capabilities can be added by registering a new intent pattern.",
    ],

    scalingStrategy: [
      "Intent routing is pattern-based and can be extended with new handlers without touching the core pipeline.",
      "Threading design isolates background tasks (Reminders sync) from voice response latency.",
      "LLM handler is model-agnostic — switching from OpenAI to a local model requires only a one-line config change.",
      "New platform integrations (calendar, email, smart home) can be plugged in as handler modules.",
    ],

    challenges: [
      "Coordinating speech recognition, LLM inference, and background sync threads without race conditions.",
      "Handling Apple Reminders sync across platforms via iCloud API with reliable real-time updates.",
      "Keeping TTS response latency low while LLM inference completes asynchronously.",
      "Distinguishing intent reliably from short voice commands without a fine-tuned NLU model.",
    ],

    outcome: [
      "Built a fully functional JARVIS-style voice assistant covering four distinct capability domains.",
      "Achieved seamless integration across LLM inference, YouTube automation, Reminders sync, and OS control through a single voice interface.",
      "Demonstrated end-to-end AI pipeline design: voice input → intent routing → LLM orchestration → spoken output.",
      "Extensible architecture allows new capabilities to be added as handler modules with no changes to the core pipeline.",
    ],

    highlights: [
      "Wake-word activated voice pipeline",
      "LLM Q&A via OpenAI API",
      "YouTube playback automation",
      "Real-time Apple Reminders sync",
      "Windows system automation",
      "Modular intent-routing architecture",
    ],

    learnings: [
      "Threading discipline is critical when multiple I/O-bound tasks (mic, LLM, sync) run concurrently.",
      "Intent routing without NLU requires careful pattern design — ambiguous commands need explicit fallback handling.",
      "Offline TTS libraries like pyttsx3 eliminate response latency vs cloud TTS at the cost of voice naturalness.",
      "Modular handler design pays off immediately when adding new capabilities — each integration is isolated.",
    ],
  },

  {
    slug: "neural-ops",
    title: "NeuralOps — AI Agent Observability Platform",
    type: "Layer A",
    tagline:
      "Enterprise observability platform for distributed LLM workloads with Kafka-powered trace ingestion, anomaly detection, and cost analytics.",

    engineeringSummary:
      "Designed a streaming observability pipeline: LLM agents emit structured traces → Kafka ingests at scale → a FastAPI consumer processes, aggregates, and stores metrics in PostgreSQL → a React dashboard surfaces anomaly alerts, cost breakdowns, and latency percentiles in real time.",

    metrics: [
      "📡 Real-time Kafka trace ingestion",
      "🔍 Anomaly detection on LLM agents",
      "💰 Cost & p99 latency analytics",
    ],

    dataFlow:
      "LLM Agent Traces → Kafka → FastAPI Consumer → PostgreSQL → React Dashboard",

    stack: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Docker",
    ],

    github: "https://github.com/aryanrajendrasuthar/NeuralOps",

    overview:
      "NeuralOps is an enterprise AI agent observability platform built to give engineering teams deep visibility into distributed LLM workload behavior. It streams execution traces from AI agents into Kafka, processes them in real time, stores structured metrics in PostgreSQL, and surfaces anomaly alerts, inference cost breakdowns, and p99 latency dashboards through a React frontend.",

    problem:
      "As AI agents proliferate across enterprise systems, teams lose visibility into cost, latency, and failure modes. Standard APM tools are not designed for LLM trace structures — they miss token usage, model routing decisions, prompt costs, and the multi-hop execution graphs that define modern agent behavior.",

    solution:
      "Built a Kafka-backed streaming pipeline purpose-built for LLM trace ingestion. A FastAPI consumer processes traces in real time, extracts cost and latency signals, runs anomaly detection logic, and stores structured results in PostgreSQL. A React dashboard gives teams a live view of agent health across cost, latency, and anomaly dimensions.",

    architecture: [
      "LLM agents emit structured JSON traces (model, tokens, latency, cost, status) to a Kafka topic on each execution.",
      "A FastAPI Kafka consumer reads traces, validates schemas, and extracts cost and performance metrics.",
      "Anomaly detection logic flags executions that exceed latency thresholds or cost budgets.",
      "Aggregated metrics are stored in PostgreSQL with time-series indexing for efficient dashboard queries.",
      "Redis caches dashboard queries and recent anomaly state to reduce database load on the read path.",
      "React frontend polls the FastAPI API to render real-time cost breakdowns, p99 latency charts, and anomaly alerts.",
    ],

    engineeringDecisions: [
      "Used Kafka as the trace ingestion layer so the platform scales with agent execution volume without coupling agents to the observability backend.",
      "Separated trace ingestion (Kafka consumer) from metric storage (PostgreSQL) so each layer scales independently.",
      "Ran anomaly detection inline in the consumer rather than as a separate service to reduce operational complexity at current scale.",
      "Used PostgreSQL with time-series indexing for metrics rather than a dedicated TSDB to keep the stack lean.",
      "Added Redis caching for dashboard queries to prevent PostgreSQL from becoming a bottleneck under frequent polling.",
    ],

    scalingStrategy: [
      "Kafka consumer group scaling allows parallel processing as trace volume grows.",
      "PostgreSQL time-series partitioning enables efficient retention and archiving of historical traces.",
      "Redis caching reduces dashboard read pressure as user count grows.",
      "Anomaly detection logic is stateless and can be distributed across consumer instances.",
    ],

    challenges: [
      "Designing a trace schema flexible enough to represent diverse LLM agent execution patterns.",
      "Keeping anomaly detection low-latency while processing high-throughput Kafka streams.",
      "Balancing real-time freshness with dashboard query performance under high polling frequency.",
      "Handling schema evolution in Kafka traces as agent implementations change.",
    ],

    outcome: [
      "Built a full observability pipeline from LLM agent execution to real-time cost and latency dashboards.",
      "Demonstrated end-to-end Kafka stream processing applied to the AI/ML observability domain.",
      "Delivered anomaly detection, cost analytics, and p99 latency monitoring in a single integrated platform.",
      "Applied the same Kafka and PostgreSQL patterns used at Avnet to the AI systems observability space.",
    ],

    highlights: [
      "Real-time Kafka trace ingestion from distributed LLM agents",
      "Anomaly detection on execution latency and cost",
      "Cost analytics per model and endpoint",
      "p99 latency monitoring dashboard",
      "Redis-cached dashboard queries",
      "PostgreSQL time-series metric storage",
    ],

    learnings: [
      "LLM trace schemas need to be designed with schema evolution in mind — agent implementations change rapidly.",
      "Kafka consumer group design is the key scaling lever for streaming observability pipelines.",
      "Inline anomaly detection works at moderate scale but needs to move to a dedicated service as volume grows.",
      "Cost observability for LLM workloads is as important as latency — token budgets and model routing decisions drive real spend.",
    ],
  },

  {
    slug: "context-engine",
    title: "ContextEngine — Enterprise Knowledge Graph Platform",
    type: "Layer A",
    tagline:
      "Enterprise institutional memory platform ingesting Slack, GitHub, and Jira into a Neo4j knowledge graph with natural language Q&A.",

    engineeringSummary:
      "Designed a multi-source ingestion pipeline (Slack, GitHub, Jira) → entity extraction and relationship mapping → Neo4j knowledge graph → hybrid retrieval (graph traversal + vector similarity) → LangChain prompt orchestration → attributed natural language response. FastAPI serves queries; React renders the interactive knowledge explorer.",

    metrics: [
      "🔗 Neo4j knowledge graph",
      "🔍 Multi-source ingestion",
      "💬 NL Q&A with attribution",
    ],

    dataFlow:
      "Slack / GitHub / Jira → Ingestion → Neo4j Graph + Vector Store → Hybrid Retrieval → LangChain → Attributed Response",

    stack: [
      "Python",
      "FastAPI",
      "Neo4j",
      "LangChain",
      "Slack API",
      "GitHub API",
      "Jira API",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],

    github: "https://github.com/aryanrajendrasuthar/ContextEngine",

    overview:
      "ContextEngine is an enterprise institutional memory platform that solves organizational knowledge fragmentation. It ingests knowledge from Slack conversations, GitHub repositories, and Jira tickets, builds a structured Neo4j knowledge graph with entity and relationship extraction, and serves natural language queries through a RAG pipeline with full source attribution — giving teams answers grounded in their actual organizational context.",

    problem:
      "Enterprise knowledge is fragmented across Slack threads, GitHub issues, Jira tickets, and internal docs. Finding the right context for a question requires manually searching multiple tools, often missing relevant history. Standard search tools match keywords but do not understand relationships between people, projects, decisions, and outcomes.",

    solution:
      "Built a multi-source ingestion pipeline that extracts entities and relationships from Slack, GitHub, and Jira, and stores them in a Neo4j knowledge graph. At query time, hybrid retrieval combines graph traversal (for relationship-aware context) with vector similarity search, and LangChain orchestrates grounded, attributed responses.",

    architecture: [
      "Slack, GitHub, and Jira connectors poll APIs and normalize messages, commits, PRs, and tickets into a common event schema.",
      "Entity extraction identifies people, projects, decisions, and outcomes from normalized content.",
      "Entities and relationships are stored in Neo4j with typed edges (authored, referenced, resolved, blocked-by).",
      "Content is also embedded and stored in a vector database for semantic similarity retrieval.",
      "At query time, hybrid retrieval combines Neo4j graph traversal with vector similarity to maximize relevant context recall.",
      "LangChain orchestrates prompt construction with retrieved context and generates attributed natural language responses.",
      "FastAPI exposes the query API; React renders the knowledge explorer and response view.",
    ],

    engineeringDecisions: [
      "Used Neo4j for the knowledge graph because graph traversal naturally captures relationship-aware context that vector search alone cannot express.",
      "Combined graph traversal with vector similarity retrieval so the system handles both relationship queries ('who worked on X with Y?') and semantic queries ('what decisions were made about caching?').",
      "Used LangChain to keep retrieval, context injection, and generation logic modular and swappable.",
      "Normalized all source schemas (Slack, GitHub, Jira) into a common event format before graph ingestion to isolate source-specific logic.",
      "Added source attribution metadata to every response so users can verify the grounding documents and trace answers back to original context.",
    ],

    scalingStrategy: [
      "Connector polling can be replaced with webhook-driven ingestion for real-time graph updates at scale.",
      "Neo4j's sharding and read replica capabilities support growing graph size and query volume.",
      "The vector store layer scales independently from the graph layer.",
      "New data sources (Confluence, Notion, email) can be added as connector modules without modifying the core graph or retrieval logic.",
    ],

    challenges: [
      "Designing a graph schema flexible enough to represent diverse organizational knowledge structures across multiple source systems.",
      "Entity resolution — merging references to the same person, project, or concept across Slack, GitHub, and Jira without a shared identifier.",
      "Combining graph traversal and vector retrieval into a coherent ranking strategy for hybrid results.",
      "Keeping ingestion pipelines resilient to API rate limits and schema changes across the three source platforms.",
    ],

    outcome: [
      "Built an end-to-end enterprise knowledge graph platform from multi-source ingestion to natural language Q&A.",
      "Demonstrated graph database engineering (Neo4j) applied to organizational knowledge management.",
      "Combined graph traversal and vector retrieval in a hybrid retrieval architecture for richer context than pure vector RAG.",
      "Delivered source-attributed responses grounding answers in real Slack, GitHub, and Jira content.",
    ],

    highlights: [
      "Multi-source ingestion from Slack, GitHub, and Jira",
      "Neo4j knowledge graph with entity and relationship extraction",
      "Hybrid retrieval: graph traversal + vector similarity",
      "LangChain-orchestrated RAG with source attribution",
      "Natural language Q&A grounded in organizational context",
      "Extensible connector architecture for new data sources",
    ],

    learnings: [
      "Graph databases express relationship-aware queries that vector search fundamentally cannot — the two are complementary, not competing.",
      "Entity resolution across multiple source systems is the hardest unsolved problem in enterprise knowledge graph construction.",
      "Normalizing source schemas early into a common event format pays off heavily when adding new connectors.",
      "Source attribution is not optional for enterprise use cases — users must be able to verify the basis of every answer.",
    ],
  },

  {
    slug: "coresuite",
    title: "CoreSuite — Enterprise Business Management Platform",
    category: "Enterprise / Full-Stack",
    status: "In Development",
    year: 2026,
    tagline:
      "Clean-room enterprise platform unifying product catalog, CRM, inventory, and order operations behind one API gateway.",

    engineeringSummary:
      "Built a microservices platform in Java and Spring Boot — separate product, CRM, inventory, order, and reporting services behind a single API gateway — backed by MySQL for the transactional core and MongoDB for unstructured CRM and product data. Security is designed in from day one: Argon2id password hashing with TOTP 2FA, AES-256-GCM field-level encryption, and IDOR checks enforced on every mutation. React, TypeScript, and Redux drive the frontend; GitHub Actions CI runs OWASP Dependency-Check, TruffleHog secret scanning, and CodeQL on every push.",

    metrics: [
      "🧩 5 independently deployable services",
      "🔐 Argon2id + TOTP 2FA",
      "🔒 AES-256-GCM field-level encryption",
    ],

    dataFlow:
      "Client (React/Redux) → API Gateway → Product / CRM / Inventory / Order / Reporting Services → MySQL (transactional) + MongoDB (unstructured)",

    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Java",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "OWASP Dependency-Check",
      "TruffleHog",
      "CodeQL",
    ],

    github: "https://github.com/aryanrajendrasuthar/CoreSuite",

    overview:
      "CoreSuite rebuilds the core of enterprise business management — product catalog, CRM, inventory control, order processing, and reporting — as a clean-room, IP-owned system. It's built to keep a mid-size business's product, customer, and fulfillment data in sync in real time across independently deployable services.",

    problem:
      "Mid-size businesses running product, customer, inventory, and order operations across disconnected tools end up with data that drifts out of sync — a sale isn't reflected in inventory, a CRM update doesn't reach fulfillment, and reporting lags behind what's actually happening in the business.",

    solution:
      "Designed five independently deployable Spring Boot microservices — product, CRM, inventory, order, and reporting — behind a single API gateway, with MySQL as the transactional core and MongoDB for unstructured CRM and product data, so every service can scale and deploy on its own schedule while staying consistent.",

    architecture: [
      "React, TypeScript, and Redux drive the frontend, talking to a single API gateway.",
      "The API gateway routes requests to five independently deployable Spring Boot microservices: product, CRM, inventory, order, and reporting/analytics.",
      "MySQL holds the transactional core (orders, inventory counts); MongoDB stores unstructured CRM and product data.",
      "Every mutation runs through IDOR checks so a request can't act on data it doesn't own.",
      "Argon2id password hashing with TOTP-based 2FA protects authentication; AES-256-GCM encrypts sensitive fields at rest.",
      "Docker containerizes every service; GitHub Actions CI runs OWASP Dependency-Check, TruffleHog, and CodeQL on every push.",
    ],

    engineeringDecisions: [
      "Split product, CRM, inventory, order, and reporting into independently deployable services instead of a monolith, so each domain can scale and ship on its own timeline.",
      "Chose MySQL for transactional data and MongoDB for unstructured CRM/product data instead of forcing one database to fit both shapes.",
      "Designed the security baseline — 2FA, field-level encryption, IDOR checks — in from the first commit instead of retrofitting it after the domain logic was built.",
      "Put OWASP Dependency-Check, TruffleHog, and CodeQL directly in CI so dependency vulnerabilities and leaked secrets are caught before merge, not after.",
    ],

    scalingStrategy: [
      "Each of the five services scales independently behind the API gateway based on its own load profile.",
      "MySQL and MongoDB scale on separate paths since transactional and unstructured workloads have different bottlenecks.",
      "New domains (e.g. shipping, returns) can be added as additional services without touching existing ones.",
    ],

    challenges: [
      "Keeping product, inventory, and order data consistent in real time across five separately deployable services.",
      "Designing field-level encryption and IDOR checks that don't add meaningful latency to every mutation.",
      "Splitting a naturally interconnected business domain (product ↔ CRM ↔ inventory ↔ order) into service boundaries that don't create constant cross-service chatter.",
    ],

    outcome: [
      "Delivered a 5-service microservices platform covering the full product-to-fulfillment domain behind one API gateway.",
      "Built a full security baseline — Argon2id + TOTP 2FA, AES-256-GCM field-level encryption, IDOR checks on every mutation — from day one.",
      "Wired OWASP Dependency-Check, TruffleHog, and CodeQL into CI so every push is scanned for vulnerable dependencies, leaked secrets, and code-level security issues.",
    ],

    highlights: [
      "5 independently deployable Spring Boot microservices behind one API gateway",
      "MySQL for transactional core, MongoDB for unstructured CRM/product data",
      "Argon2id + TOTP 2FA authentication",
      "AES-256-GCM field-level encryption on sensitive data",
      "IDOR checks enforced on every mutation",
      "CI-enforced security scanning: OWASP Dependency-Check, TruffleHog, CodeQL",
    ],

    learnings: [
      "Designing the security baseline before the domain logic makes it a first-class constraint instead of an afterthought bolted on later.",
      "Splitting a tightly-coupled business domain into services is as much about picking the right seams as it is about the code itself.",
      "Running secret and dependency scanning in CI catches problems while they're still a one-line fix, not a production incident.",
    ],
  },

  {
    slug: "supplyforge",
    title: "SupplyForge — Supply Chain & Inventory Management Platform",
    category: "Backend / Distributed Systems",
    status: "Live",
    year: 2026,
    tagline:
      "Supply chain platform covering the full supplier lifecycle with an async, AI-assisted ingestion pipeline built for high-volume data.",

    engineeringSummary:
      "Built six Flask microservices — supplier, catalog, inventory, order, ingestion, and an AI validation worker — behind an Ariadne GraphQL gateway, with SQL Server and MongoDB as the data layer. Incoming records flow through AWS SQS into an async ingestion pipeline that runs AI-assisted anomaly detection without blocking the request path, and order/inventory sync uses the Saga pattern for eventual consistency instead of synchronous locking. Sentry and Grafana Cloud cover observability; the dashboard is React and TypeScript.",

    metrics: [
      "📦 6 services, full supplier lifecycle",
      "⚡ Async AI validation queue",
      "🔁 Saga-pattern order/inventory sync",
    ],

    dataFlow:
      "Supplier/Catalog/Inventory/Order Services → Ariadne GraphQL Gateway → AWS SQS → Async Ingestion + AI Validation Worker → SQL Server + MongoDB",

    stack: [
      "Python 3.12",
      "Flask",
      "Ariadne GraphQL",
      "SQL Server",
      "MongoDB",
      "AWS SQS",
      "React",
      "TypeScript",
      "Sentry",
      "Grafana Cloud",
    ],

    github: "https://github.com/aryanrajendrasuthar/SupplyForge",

    overview:
      "SupplyForge covers the full supplier lifecycle — onboarding, catalog, inventory, and order management — for supply chain operations that need to ingest high volumes of incoming data without incurring the latency cost of synchronous validation.",

    problem:
      "The system SupplyForge is modeled on validated incoming supplier and inventory records synchronously, so every request paid the cost of validation and anomaly checks on the request path — a latency problem at any real volume.",

    solution:
      "Moved data ingestion off the request path entirely: incoming records go through AWS SQS into an async pipeline where an AI validation worker runs anomaly detection, and order/inventory sync uses the Saga pattern for eventual consistency instead of holding synchronous locks across services.",

    architecture: [
      "React and TypeScript dashboard talks to an Ariadne GraphQL gateway.",
      "The gateway routes to six Flask microservices: supplier, catalog, inventory, order, ingestion, and an AI validation worker.",
      "Incoming supplier/catalog records are pushed to AWS SQS rather than validated synchronously on the request path.",
      "The ingestion service consumes from SQS and runs AI-assisted anomaly detection asynchronously.",
      "Order and inventory sync uses the Saga pattern — a sequence of local transactions with compensating actions — instead of distributed locking, trading strict consistency for throughput.",
      "SQL Server holds structured transactional data; MongoDB stores unstructured supplier/catalog data.",
      "Sentry tracks errors and Grafana Cloud covers metrics/observability across all six services.",
    ],

    engineeringDecisions: [
      "Moved AI-assisted validation off the request path into an async SQS-driven pipeline specifically because the reference system's synchronous validation was the latency bottleneck.",
      "Used the Saga pattern for order/inventory sync instead of two-phase commit or distributed locks, accepting eventual consistency in exchange for not blocking either service on the other.",
      "Chose Ariadne for the GraphQL gateway to give the dashboard a single typed query surface across six independently owned services.",
      "Split SQL Server (structured/transactional) from MongoDB (unstructured supplier/catalog data) instead of forcing one database to hold both shapes.",
    ],

    scalingStrategy: [
      "SQS absorbs ingestion bursts so upstream services never block on downstream validation throughput.",
      "Each of the six services scales independently based on its own load.",
      "The AI validation worker can scale out horizontally as a queue consumer without touching the services producing the events.",
    ],

    challenges: [
      "Redesigning a synchronous validation flow into an async, eventually-consistent pipeline without losing data integrity guarantees.",
      "Implementing the Saga pattern's compensating transactions correctly across order and inventory services.",
      "Tuning AI-assisted anomaly detection to run fast enough as an async worker without becoming the new bottleneck.",
    ],

    outcome: [
      "Shipped a 6-service platform covering the full supplier-to-order lifecycle, in production.",
      "Replaced synchronous request-path validation with an async SQS-driven pipeline and AI-assisted anomaly detection.",
      "Implemented Saga-pattern order/inventory sync for eventual consistency at higher throughput than the synchronous approach it replaced.",
    ],

    highlights: [
      "6 Flask microservices: supplier, catalog, inventory, order, ingestion, AI validation worker",
      "Ariadne GraphQL gateway as the single dashboard query surface",
      "Async, AI-assisted anomaly detection via AWS SQS — off the request path",
      "Saga-pattern eventual consistency between order and inventory services",
      "SQL Server + MongoDB split by data shape",
      "Sentry + Grafana Cloud observability across all services",
    ],

    learnings: [
      "Moving validation off the request path is often a bigger latency win than optimizing the validation logic itself.",
      "The Saga pattern trades strict consistency for throughput — the right call when the alternative is blocking two services on each other.",
      "Async AI-assisted validation still needs a throughput budget; it can become the new bottleneck if left unbounded.",
    ],
  },

  {
    slug: "opscortex",
    title: "OpsCortex — Operational Intelligence Layer for Engineering Organizations",
    category: "Platform / AI Observability",
    status: "Live",
    year: 2026,
    tagline:
      "Seven AI-powered modules sharing one intelligence graph, so a single signal surfaces the business decision, revenue at risk, and downstream pipelines behind it.",

    engineeringSummary:
      "Built seven AI-powered modules — API contract inference, cost-per-tenant intelligence, decision knowledge graphs, code-drift detection, self-healing data pipelines, zero-downtime DB migrations, and LLM token governance — sharing one intelligence graph across Python/FastAPI, Java/Spring Boot 3, and Node.js backends, with a Next.js 14 and TypeScript frontend. Data infrastructure spans PostgreSQL/TimescaleDB, Neo4j, Elasticsearch, Redis, and Kafka, deployed on Kubernetes across AWS (primary) and Azure (secondary) via Terraform and Helm. OpenAI and Claude 3.5 Sonnet power the AI layer.",

    metrics: [
      "🧠 7 modules on one shared intelligence graph",
      "💵 Free → $1,999/mo Platform tier",
      "🎯 Targeting 3+ paying customers, $3K+ MRR",
    ],

    dataFlow:
      "Kafka Event Stream → 7 AI Modules (FastAPI/Spring Boot/Node.js) → Shared Intelligence Graph (Neo4j + TimescaleDB) → Next.js Dashboard",

    stack: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot 3",
      "Node.js",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "TimescaleDB",
      "Neo4j",
      "Elasticsearch",
      "Redis",
      "Apache Kafka",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Helm",
      "AWS",
      "Azure",
      "OpenAI",
      "Claude 3.5 Sonnet",
    ],

    github: "https://github.com/aryanrajendrasuthar/OpsCortex",

    overview:
      "OpsCortex is an operational intelligence layer for engineering organizations. Seven AI-powered modules — API contract inference, cost-per-tenant intelligence, decision knowledge graphs, code-drift detection, self-healing data pipelines, zero-downtime DB migrations, and LLM token governance — all write into one shared intelligence graph, so a single signal like a breaking API change surfaces the business decision behind it, the revenue at risk, and the downstream pipelines that would fail.",

    problem:
      "Engineering organizations run cost monitoring, API contract tracking, migration tooling, and LLM cost governance as separate, disconnected tools. A breaking API change shows up in one dashboard, the revenue impact lives in another, and nobody sees the connection until something breaks in production.",

    solution:
      "Built seven purpose-specific modules that all write into one shared intelligence graph instead of operating as isolated tools, so a signal in any one module — like a breaking API contract — surfaces the connected business decision, the revenue at risk, and the downstream pipelines that depend on it.",

    architecture: [
      "Seven modules — API contract inference, cost-per-tenant intelligence, decision knowledge graphs, code-drift detection, self-healing data pipelines, zero-downtime DB migrations, and LLM token governance — run as services across Python/FastAPI, Java/Spring Boot 3, and Node.js.",
      "Apache Kafka carries events between modules and into the shared intelligence graph.",
      "Neo4j models the relationships between signals, decisions, revenue, and pipelines; PostgreSQL/TimescaleDB hold time-series and relational data; Elasticsearch powers search; Redis handles caching.",
      "OpenAI and Claude 3.5 Sonnet power the AI layer across modules — contract inference, anomaly detection, and drift analysis.",
      "Kubernetes runs the platform on AWS as primary with Azure as secondary, provisioned via Terraform and deployed with Helm.",
      "A Next.js 14 and TypeScript frontend surfaces the shared graph as a single operational dashboard.",
    ],

    engineeringDecisions: [
      "Built one shared intelligence graph across all seven modules instead of seven siloed tools, so a signal in one module (a breaking API change) automatically links to its business impact in another (revenue at risk).",
      "Split backends across FastAPI, Spring Boot 3, and Node.js by module rather than forcing one stack, matching each module's workload to the runtime best suited for it.",
      "Ran AWS as primary with Azure as secondary for multi-cloud resilience rather than single-cloud dependency.",
      "Used Kafka as the event backbone connecting all seven modules to the shared graph in near real time.",
    ],

    scalingStrategy: [
      "Each of the seven modules scales independently on Kubernetes based on its own load profile.",
      "TimescaleDB handles the growing time-series load from cost and observability data separately from Neo4j's graph queries.",
      "The dual-cloud (AWS primary / Azure secondary) setup supports failover and geographic scaling without a single-cloud ceiling.",
    ],

    challenges: [
      "Designing a shared intelligence graph schema general enough to connect signals from seven functionally different modules.",
      "Coordinating three different backend runtimes (FastAPI, Spring Boot 3, Node.js) around one consistent event contract over Kafka.",
      "Balancing AI cost (OpenAI + Claude usage across modules) against the LLM token governance module's own job of controlling that same cost.",
    ],

    outcome: [
      "Shipped a 7-module platform in production, all writing into one shared intelligence graph.",
      "Built a tiered pricing model from free up to a $1,999/mo Platform tier.",
      "Actively working toward 3+ paying customers and $3K+ MRR ahead of a YC W27 application.",
    ],

    highlights: [
      "7 AI-powered modules on one shared intelligence graph",
      "API contract inference, cost-per-tenant intelligence, decision knowledge graphs, code-drift detection, self-healing pipelines, zero-downtime migrations, LLM token governance",
      "Multi-cloud: AWS primary, Azure secondary, via Terraform + Helm on Kubernetes",
      "OpenAI + Claude 3.5 Sonnet powering the AI layer",
      "Pricing from free to $1,999/mo Platform tier",
      "Roadmap: 3+ paying customers and $3K+ MRR ahead of a YC W27 application",
    ],

    learnings: [
      "A shared intelligence graph turns seven separate tools into one connected system — the value is in the links between signals, not any single module alone.",
      "Matching each module's backend runtime to its workload is more maintainable long-term than forcing one stack across a diverse module set.",
      "Building the AI cost-governance module while also being an AI cost center yourself forces genuinely disciplined usage decisions.",
    ],
  },

  {
    slug: "rag-incident-resolution",
    title:
      "RAG Incident Resolution — Cutting Cloud Incident MTTR with Retrieval-Augmented Generation",
    category: "Research / AI",
    status: "Live",
    year: 2026,
    tagline:
      "Faculty-supervised research testing whether RAG retrieves more relevant incident data than keyword search, and measurably shortens cloud incident investigation time.",

    engineeringSummary:
      "Built a RAG pipeline with LangChain and FastAPI, benchmarking FAISS against Qdrant for vector retrieval head-to-head, with MLflow tracking experiments. Retrieval quality is evaluated against an Elasticsearch/BM25 keyword-search baseline using MRR, NDCG, Precision@k, ROUGE, and BERTScore, targeting an 8-layer, Docker/Kubernetes-deployable production system as an open-source RAG copilot for cloud and SRE teams.",

    metrics: [
      "📚 Co-authored ASU SCAI research",
      "🔬 Benchmarked against Elasticsearch/BM25",
      "🎯 Targeting IEEE ISSRE 2027 / IEEE Access",
    ],

    dataFlow:
      "Incident Data → FAISS / Qdrant Retrieval (benchmarked) → LangChain RAG Pipeline → FastAPI → Evaluated vs. Elasticsearch/BM25 Baseline",

    stack: [
      "FAISS",
      "Qdrant",
      "LangChain",
      "FastAPI",
      "MLflow",
      "Elasticsearch",
      "BM25",
    ],

    github: "https://github.com/aryanrajendrasuthar/RAGIncidentResolution",

    overview:
      "RAG Incident Resolution is a faculty-supervised research project, co-authored with research collaborator Fahad under the supervision of Dr. Nouh Alhindawi (ASU School of Computing and Augmented Intelligence), testing whether retrieval-augmented generation retrieves more relevant incident data than traditional keyword search, and whether that measurably shortens cloud incident investigation time. It produces both open-source research findings and a working RAG copilot for cloud and SRE teams.",

    problem:
      "Cloud incident investigation relies heavily on keyword search over historical incident data, which misses relevant past incidents that don't share exact terminology — slowing down mean time to resolution (MTTR) during active incidents.",

    solution:
      "Built a RAG pipeline benchmarked head-to-head against an Elasticsearch/BM25 keyword-search baseline, evaluating whether retrieval-augmented generation surfaces more relevant incident context and shortens investigation time — measured with MRR, NDCG, Precision@k, ROUGE, and BERTScore rather than relying on qualitative impressions.",

    architecture: [
      "FAISS and Qdrant are benchmarked head-to-head as the vector retrieval layer.",
      "LangChain orchestrates the RAG pipeline; FastAPI exposes it as a service.",
      "MLflow tracks every experiment run across retrieval configurations.",
      "Retrieval quality is evaluated against an Elasticsearch/BM25 keyword-search baseline using MRR, NDCG, and Precision@k.",
      "Generation quality is evaluated using ROUGE and BERTScore against reference incident resolutions.",
      "The target production system is an 8-layer, Docker/Kubernetes-deployable RAG copilot for cloud and SRE teams.",
    ],

    engineeringDecisions: [
      "Benchmarked FAISS against Qdrant directly rather than picking one vector store on assumption, since retrieval quality is the core research question.",
      "Used MLflow to track experiments so retrieval and generation configurations are comparable and reproducible across runs.",
      "Evaluated against an Elasticsearch/BM25 baseline specifically to answer whether RAG is actually better than the keyword search most incident tooling already uses, not just whether RAG works in isolation.",
      "Used a five-metric evaluation set (MRR, NDCG, Precision@k, ROUGE, BERTScore) covering both retrieval and generation quality instead of a single proxy metric.",
    ],

    scalingStrategy: [
      "The 8-layer architecture is designed to be Docker/Kubernetes-deployable so the research prototype can become a production copilot without a rewrite.",
      "Vector store choice (FAISS vs. Qdrant) is decided by the benchmark results, keeping the system tuned to measured performance rather than a fixed assumption.",
    ],

    challenges: [
      "Designing a fair, reproducible benchmark between RAG and a keyword-search baseline that isolates retrieval quality from generation quality.",
      "Choosing evaluation metrics that capture both retrieval relevance (MRR, NDCG, Precision@k) and generation quality (ROUGE, BERTScore) without over-indexing on one dimension.",
      "Turning a research benchmark into an 8-layer, deployable system rather than a one-off notebook experiment.",
    ],

    outcome: [
      "Built and published an open-source RAG pipeline benchmarked against an Elasticsearch/BM25 baseline for cloud incident investigation.",
      "Produced research findings co-authored with a research collaborator under faculty supervision, targeting IEEE ISSRE 2027 or IEEE Access publication.",
      "Designed the system as an 8-layer, Docker/Kubernetes-deployable production target, not just a research prototype.",
    ],

    highlights: [
      "Head-to-head FAISS vs. Qdrant retrieval benchmark",
      "RAG evaluated against Elasticsearch/BM25 keyword-search baseline",
      "Five-metric evaluation: MRR, NDCG, Precision@k, ROUGE, BERTScore",
      "MLflow experiment tracking across all runs",
      "8-layer, Docker/Kubernetes-deployable target architecture",
      "Co-authored with a research collaborator under Dr. Nouh Alhindawi (ASU School of Computing and Augmented Intelligence)",
    ],

    learnings: [
      "Rigorous benchmarking against the incumbent approach (keyword search) is what turns 'RAG works' into a defensible research claim.",
      "Retrieval and generation quality need separate metrics — a strong ROUGE score doesn't tell you if the right documents were retrieved in the first place.",
      "Designing for production deployment from the start of a research project makes the eventual open-source release far less work.",
    ],
  },
];

const resumeFeaturedProjectSlugs = [
  "coresuite",
  "supplyforge",
  "opscortex",
  "rag-incident-resolution",
];

// Edit this list to change which projects appear in the homepage Featured Projects section.
export const homepageFeaturedSlugs = [
  "coresuite",
  "supplyforge",
  "opscortex",
  "rag-incident-resolution",
];

export const layerAProjects = [
  ...resumeFeaturedProjectSlugs
    .map((slug) => layerAProjectsUnordered.find((project) => project.slug === slug))
    .filter((project): project is (typeof layerAProjectsUnordered)[number] =>
      Boolean(project),
    ),
  ...layerAProjectsUnordered.filter(
    (project) => !resumeFeaturedProjectSlugs.includes(project.slug),
  ),
];

export const layerBProjects = [
  {
    slug: "wordaura",
    title: "WordAura — Semantic Word Guessing Game",
    type: "Layer B",
    category: "AI / Full-Stack",
    status: "Complete",
    year: 2026,
    tagline: "Semantic Word Guessing Game",

    engineeringSummary:
      "Designed a full-stack semantic game architecture where a React/Vite frontend submits guesses to an Express backend, the backend computes similarity with HuggingFace sentence-transformer embeddings, caches embeddings server-side, enforces rate limits, and returns interpretable 0-100% semantic scores.",

    metrics: [
      "🧠 all-MiniLM-L6-v2",
      "📈 0-100% similarity",
      "🗓️ Daily Challenge",
    ],

    dataFlow:
      "Guess → Express API → Embedding Cache → HuggingFace Similarity → Score / Hint / Share",

    stack: [
      "TypeScript",
      "React",
      "Express",
      "HuggingFace",
      "Sentence Transformers",
      "Vite",
      "Tailwind CSS",
    ],

    github: "https://github.com/aryanrajendrasuthar/RandomWordGuess",

    overview:
      "WordAura is a semantic word guessing game inspired by Wordle. Instead of exact letter-position clues, players receive semantic similarity scores that indicate how close each guess is to the secret word.",

    problem:
      "Traditional word guessing games test spelling and vocabulary, but they rarely explore semantic closeness. A game based on meaning needs embeddings, caching, and clear feedback to feel fast and understandable.",

    solution:
      "Built a full-stack semantic guessing game that calculates similarity using HuggingFace sentence-transformer embeddings and presents feedback as intuitive 0-100% scores with hints, leaderboard, and shareable results.",

    architecture: [
      "React and Vite render the guessing interface, history, hints, and share interactions.",
      "Express handles guess validation, scoring requests, leaderboard operations, and rate limiting.",
      "The all-MiniLM-L6-v2 sentence-transformer model powers semantic similarity scoring.",
      "Server-side embedding cache avoids repeated embedding work for common guesses.",
      "Daily Challenge mode uses a stable secret word rotation for repeatable daily play.",
    ],

    engineeringDecisions: [
      "Used semantic embeddings instead of string matching so guesses are scored by meaning.",
      "Returned 0-100% similarity scores to make ML output understandable to players.",
      "Added a server-side embedding cache to reduce repeated model calls and improve latency.",
      "Implemented rate limiting to protect backend resources.",
      "Built a Wordle-style share button so game results can spread without revealing the answer.",
    ],

    scalingStrategy: [
      "Embedding caching reduces compute pressure as repeated words appear across users.",
      "Rate limiting protects the scoring endpoint from abuse.",
      "The backend scoring API can later swap embedding providers without rewriting the frontend.",
    ],

    challenges: [
      "Making semantic similarity feel fair and intuitive in a game setting.",
      "Balancing hint usefulness without making the secret word too easy.",
      "Keeping embedding-backed scoring responsive enough for repeated guesses.",
    ],

    outcome: [
      "Delivered a complete AI-powered word game with daily challenge, hints, leaderboard, and share flow.",
      "Demonstrated practical use of sentence-transformer embeddings outside a standard chatbot or RAG interface.",
      "Added a compact full-stack AI project to the portfolio archive.",
    ],

    highlights: [
      "HuggingFace all-MiniLM-L6-v2 semantic similarity scoring",
      "Daily Challenge mode",
      "Hint system and leaderboard",
      "Wordle-style share button",
      "Server-side embedding cache and rate limiting",
    ],

    learnings: [
      "Embedding similarity can create playful interactions when translated into clear scoring.",
      "Caching is important even for small AI features when guesses repeat frequently.",
      "AI product UX needs feedback that makes model behavior legible to users.",
    ],
  },

  {
    slug: "playlang",
    title: "PlayLang — Custom Programming Language & Compiler",
    type: "Layer B",
    tagline:
      "Custom high-level language with Python tokenization and Prolog-based parsing/execution.",

    engineeringSummary:
      "Built a 3-stage compiler pipeline: Python tokenizer → Prolog DCG parser → Prolog AST executor. Python handles lexical analysis and serializes typed tokens as Prolog facts; SWI-Prolog handles grammar parsing and direct AST interpretation using unification and backtracking, without a separate IR or code generation phase.",

    metrics: [
      "🧩 3 pipeline stages",
      "👥 4 developers",
      "📘 7 sample programs",
    ],

    dataFlow: "Source Code → Python Tokenizer → Prolog Parser → AST Executor",

    stack: [
      "Python",
      "SWI-Prolog",
      "DCG",
      "Compiler Design",
      "AST",
      "Language Design",
    ],

    github: "https://github.com/aryanrajendrasuthar/PlayLang",

    overview:
      "PlayLang is a fully implemented high-level programming language designed to demonstrate compiler construction and grammar design principles. Built by a 4-person team, it covers the complete toolchain from lexical analysis through AST execution using Python and SWI-Prolog.",

    problem:
      "Understanding compiler construction is difficult without building one end-to-end. Most learners see isolated parser or grammar exercises without experiencing the full pipeline from tokenization to execution.",

    solution:
      "Built a complete educational language pipeline where Python performs lexical analysis, Prolog DCG rules define and parse the grammar, and a Prolog executor directly interprets the resulting AST.",

    architecture: [
      "Python tokenizer lexes PlayLang source using regex and writes typed tokens as Prolog facts.",
      "Prolog DCG grammar defines the syntax of the full language and parses token streams into AST structures.",
      "Prolog executor traverses and evaluates the AST directly using unification and backtracking.",
      "Sample programs validate conditionals, loops, functions, booleans, lists, dictionaries, and indexing.",
    ],

    engineeringDecisions: [
      "Used Python for lexical analysis because regex-based tokenization is concise and efficient there.",
      "Used Prolog DCG notation so grammar rules remain readable, BNF-like, and directly executable.",
      "Chose direct AST execution in Prolog instead of generating an intermediate representation or target code.",
      "Serialized Python token output as Prolog-readable facts to bridge both toolchains cleanly.",
    ],

    scalingStrategy: [
      "Language features can be extended incrementally by expanding the tokenizer, grammar, and executor layers independently.",
      "The 3-stage separation makes debugging easier as new syntax or runtime features are added.",
      "Cross-platform execution ensures the toolchain can be reused in multiple educational environments.",
    ],

    challenges: [
      "Keeping grammar rules expressive without making parsing ambiguous.",
      "Bridging Python token output cleanly into a Prolog-readable format.",
      "Supporting rich constructs like functions, loops, and dictionaries while keeping the language compact.",
      "Suppressing debug noise so the runtime showed only clean program output.",
    ],

    outcome: [
      "Delivered a fully working custom language with a complete compiler/interpreter pipeline.",
      "Validated all supported features with 7 sample programs.",
      "Created a strong educational systems project demonstrating language design and runtime execution.",
    ],

    highlights: [
      "3-stage compiler pipeline",
      "Python tokenizer + Prolog parser",
      "DCG grammar design",
      "Direct AST execution in Prolog",
    ],

    learnings: [
      "Compiler construction becomes much clearer when each pipeline stage is implemented end-to-end.",
      "DCG is a powerful and elegant way to express language grammar in Prolog.",
      "Separating tokenization, parsing, and execution simplifies both debugging and feature growth.",
    ],
  },

  {
    slug: "artgraph",
    title: "ArtGraph — Cross-Collection Museum Knowledge Graph",
    type: "Layer B",
    tagline:
      "Semantic web application integrating artwork metadata from four museum collections.",

    engineeringSummary:
      "Designed a 4-layer architecture: curated RDF dataset → Fuseki triplestore → Flask REST API → React frontend. SPARQL remains fully abstracted behind the backend, while the frontend handles keyword search, faceted filtering, detail views, and force-directed graph rendering using react-force-graph-2d.",

    metrics: [
      "🖼️ 4 museum collections",
      "⚡ 30–60ms SPARQL latency",
      "🕸️ 4 REST endpoints",
    ],

    dataFlow:
      "RDF Dataset → Fuseki → Flask SPARQL API → React Search / Graph UI",

    stack: [
      "RDF/Turtle",
      "SPARQL",
      "Apache Jena Fuseki",
      "Flask",
      "React",
      "Ontology Engineering",
    ],

    github: "https://github.com/aryanrajendrasuthar/ArtGraph",

    overview:
      "ArtGraph is a semantic web application that unifies artwork metadata from MET, MoMA, Tate, and the National Gallery of Art into a single interoperable RDF knowledge graph. It enables cross-collection keyword search, faceted filtering, detailed inspection, and semantic graph visualization.",

    problem:
      "Open-access museum datasets use different schemas, vocabularies, and identifiers, making cross-collection discovery and comparison difficult without semantic normalization.",

    solution:
      "Built a shared ontology and integrated museum data into a curated RDF dataset, then exposed it through a Flask-backed SPARQL API and a React frontend that hides semantic-query complexity from end users.",

    architecture: [
      "Curated Turtle dataset is loaded into Apache Jena Fuseki as the semantic data layer.",
      "Flask backend constructs SPARQL queries dynamically from user-selected filters and search inputs.",
      "REST endpoints expose filters, search results, artwork detail triples, and graph neighborhoods.",
      "React frontend renders search, facets, results table, artwork detail modal, and force-directed graph visualization.",
    ],

    engineeringDecisions: [
      "Used a lightweight ontology modeled after CIDOC CRM concepts but simplified for faster querying.",
      "Kept SPARQL entirely behind Flask so the frontend remains decoupled from semantic query syntax.",
      "Used flat literal properties to optimize query speed without adding reasoning overhead.",
      "Transformed graph query results server-side into node-edge JSON for easier frontend rendering.",
    ],

    scalingStrategy: [
      "Additional collections can be integrated by mapping them into the same ontology and RDF schema.",
      "REST abstraction allows frontend features to expand without exposing raw SPARQL complexity.",
      "Flat literals and curated data design keep query performance fast even without reasoning or indexing.",
    ],

    challenges: [
      "Normalizing incompatible metadata structures across multiple museum sources.",
      "Designing an ontology lightweight enough for fast querying but expressive enough for search and graph exploration.",
      "Keeping frontend-backend communication reliable during React/Flask/Fuseki development.",
      "Rendering semantic neighborhoods in a way that is informative without overwhelming users.",
    ],

    outcome: [
      "Delivered a full-stack semantic web application with searchable, filterable, graph-based museum exploration.",
      "Achieved sub-100ms end-to-end frontend rendering and low-latency Fuseki queries.",
      "Added a distinctive linked-data / knowledge graph project to the portfolio.",
    ],

    highlights: [
      "Cross-collection RDF integration",
      "Dynamic SPARQL query generation",
      "Flask + React full-stack app",
      "Force-directed graph visualization",
    ],

    learnings: [
      "Semantic integration is as much a modeling problem as a querying problem.",
      "REST abstraction can make semantic systems far more accessible to frontend applications.",
      "Lightweight ontology design can dramatically improve developer ergonomics and performance.",
    ],
  },

  {
    slug: "sprint-simulator",
    title: "Sprint Simulator — Interactive Agile Scrum Training Application",
    type: "Layer B",
    tagline:
      "Java desktop application for simulating Agile Scrum workflows and user story lifecycles.",

    engineeringSummary:
      "Built a layered Java 21 Swing desktop application structured across core, impl, state, and ui packages. Applied State, Factory, Singleton, and Wizard patterns to model Scrum concepts, persisted simulation state with Jackson JSON serialization, and enforced software quality with static analysis, coverage, and CI gating.",

    metrics: [
      "☕ Java 21",
      "🧠 4 design patterns",
      "✅ CI + quality gates",
    ],

    dataFlow:
      "Simulation Setup → Role Assignment → Sprint / Story Lifecycle → JSON Persistence",

    stack: [
      "Java 21",
      "Swing",
      "Gradle",
      "JUnit 5",
      "JaCoCo",
      "SpotBugs",
      "CI/CD",
    ],

    github: "https://github.com/aryanrajendrasuthar/Sprint-Simulator",

    overview:
      "Sprint Simulator is a Java desktop application that allows students and teams to simulate Agile Scrum sprint workflows in an interactive, role-based environment. Users can create simulations, define sprints, manage user stories through their lifecycle, and participate as Developer, Scrum Master, or Product Owner.",

    problem:
      "Learning Agile Scrum from documentation alone rarely builds the intuition that comes from interacting with sprint workflows, role transitions, and user story management in practice.",

    solution:
      "Built a role-based Scrum simulation tool with desktop UI, explicit user story state transitions, simulation creation wizard flows, JSON persistence, and a formal quality engineering pipeline.",

    architecture: [
      "Core package defines abstract Scrum domain objects and simulation entities.",
      "Implementation layer provides concrete Sprint, UserStory, factory, and store classes.",
      "State package models user story lifecycle transitions using the State pattern.",
      "Swing UI layer provides wizard flows, forms, panels, and interaction widgets.",
      "Jackson Databind persists simulation state to JSON for save/load behavior.",
    ],

    engineeringDecisions: [
      "Used the State pattern to model user story lifecycle transitions explicitly instead of scattered conditional logic.",
      "Centralized Scrum role creation using a Factory pattern for cleaner role-to-class mapping.",
      "Used a Singleton identifier store to guarantee globally unique object IDs across the simulation.",
      "Built a multi-step wizard system to structure simulation creation with validation and reusable navigation flow.",
      "Enforced a strict quality policy with SpotBugs, Checkstyle, JaCoCo, JUnit, and GitHub Actions CI before merges.",
    ],

    scalingStrategy: [
      "Layered package separation makes it easier to evolve domain logic, UI, and persistence independently.",
      "Pattern-based architecture allows new roles, states, or simulation flows to be added cleanly.",
      "JSON persistence enables larger and more reusable scenario definitions in future versions.",
      "CI gating ensures the codebase remains maintainable as the project grows.",
    ],

    challenges: [
      "Designing user story lifecycle transitions in a way that remained explicit and extensible.",
      "Keeping the Swing UI structured while supporting multiple workflows and wizard steps.",
      "Balancing feature delivery with strict quality engineering requirements.",
      "Maintaining consistency across design patterns, persistence, tests, and UI components.",
    ],

    outcome: [
      "Delivered an educational Scrum simulation tool grounded in formal software engineering practices.",
      "Demonstrated strong object-oriented design and pattern application in a desktop application.",
      "Added a quality-focused Java project with CI, static analysis, and testing discipline to the portfolio.",
    ],

    highlights: [
      "State pattern for user story lifecycle",
      "Factory + Singleton pattern usage",
      "Swing wizard-based UI",
      "SpotBugs, Checkstyle, JaCoCo, and GitHub Actions",
    ],

    learnings: [
      "Design patterns are most valuable when tied directly to domain behavior and lifecycle rules.",
      "Quality engineering pipelines can shape better development habits, not just cleaner repos.",
      "Desktop applications still benefit strongly from layered architecture and disciplined state modeling.",
    ],
  },

  {
    slug: "real-time-chat-app",
    title: "Real-Time Chat App",
    type: "Layer B",
    category: "Full-Stack",
    status: "Complete",
    year: 2025,
    tagline: "WebSocket-powered real-time messaging with rooms, auth, and presence.",

    engineeringSummary:
      "Implemented a WebSocket server on Node.js/Express that manages rooms, broadcasts messages to room subscribers, and tracks online presence state. React client establishes a persistent WebSocket connection, handles reconnection, and renders live message streams with optimistic UI updates.",

    metrics: [
      "⚡ WebSocket real-time",
      "🔐 Auth + rooms",
      "👥 Presence indicators",
    ],

    dataFlow:
      "Client → WebSocket → Node.js Room Manager → Broadcast to Room Subscribers → React UI",

    stack: [
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Express",
      "React",
      "MongoDB",
    ],

    github: "https://github.com/aryanrajendrasuthar/Real-Time-Chat-App",

    overview:
      "A real-time messaging application demonstrating WebSocket engineering, room-based message broadcasting, user authentication, and online presence tracking. Built with Node.js/Express on the backend and React on the frontend.",

    problem:
      "HTTP request-response is fundamentally ill-suited for real-time messaging — polling creates latency and server overhead. WebSocket provides a persistent bi-directional channel that eliminates polling and enables true real-time communication.",

    solution:
      "Built a WebSocket server that maintains persistent connections, routes messages to the correct room subscribers, tracks presence state, and persists message history to MongoDB. The React client manages the WebSocket lifecycle including reconnection on disconnect.",

    architecture: [
      "Express serves the HTTP API for authentication and room management.",
      "WebSocket server manages persistent connections and a room registry mapping users to rooms.",
      "Incoming messages are validated, stored in MongoDB, and broadcast to all room subscribers.",
      "Presence state (online/offline) is tracked per connection and broadcast on connect/disconnect events.",
      "React client establishes a WebSocket connection on mount and handles reconnection with exponential backoff.",
      "Message history is fetched via HTTP on room join; new messages arrive via WebSocket.",
    ],

    engineeringDecisions: [
      "Used native WebSocket over Socket.io to understand the protocol directly without abstraction overhead.",
      "Stored message history in MongoDB so chat is persistent across reconnects and page refreshes.",
      "Separated HTTP (auth, room management) from WebSocket (real-time events) to keep concerns clean.",
      "Tracked presence at the connection level rather than user level to handle multi-tab sessions correctly.",
    ],

    scalingStrategy: [
      "WebSocket connections can be distributed across multiple server instances with a Redis pub/sub layer for cross-instance message broadcasting.",
      "MongoDB Atlas handles horizontal scaling of message history storage.",
      "Connection pooling and heartbeat timeouts prevent resource exhaustion under high connection counts.",
    ],

    challenges: [
      "Handling WebSocket reconnection gracefully without losing messages or duplicating state.",
      "Managing presence state correctly when users have multiple browser tabs open.",
      "Keeping the room registry consistent under concurrent join/leave events.",
    ],

    outcome: [
      "Delivered a functional real-time chat application with rooms, auth, history, and presence.",
      "Demonstrated WebSocket engineering without relying on Socket.io abstractions.",
      "Gained deep understanding of bi-directional connection lifecycle, reconnection, and broadcasting patterns.",
    ],

    highlights: [
      "WebSocket bi-directional real-time messaging",
      "Named chat rooms with isolated message streams",
      "Persistent message history via MongoDB",
      "Online presence indicators",
      "User authentication",
    ],

    learnings: [
      "WebSocket reconnection and session recovery require explicit design — the protocol does not handle it automatically.",
      "Presence tracking at the connection level handles multi-tab correctly but requires careful cleanup on disconnect.",
      "Redis pub/sub is the natural next step for scaling WebSocket broadcasts across multiple server instances.",
    ],
  },
];
