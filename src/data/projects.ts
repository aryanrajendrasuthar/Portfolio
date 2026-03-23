export const layerAProjects = [
  {
    slug: "Real-Time-AI-Simulation-Tool",
    title: "Real-Time-AI-Simulation-Tool",
    type: "Layer A",
    tagline:
      "AI-powered courtroom simulator for self-represented litigants.",

    summary:
      "An interactive courtroom simulator that lets self-represented litigants practice Canadian family law hearings against AI-driven judges and opposing counsel, with structured intake, evidence upload, live mock trials, and detailed performance feedback.",

    recruiterSummary:
      "Built a full-stack AI legal simulation tool for the Self-Justice initiative, enabling self-represented litigants to practice Canadian family law proceedings. Implemented multi-role AI simulation (Judge, Opposing Counsel, or both), structured multi-phase prompting, evidence upload with RAG-powered context retrieval via Pinecone, PDF parsing, voice input via Web Speech API, and downloadable PDF feedback reports. Delivered a Node.js/Express backend with OpenAI GPT integration and deployed/tested it against real selfjustice.ca use-case scenarios.",

    engineeringSummary:
      "Designed and implemented a full-stack AI courtroom simulator using Node.js, Express, OpenAI GPT-3.5-turbo-16k, Pinecone, pdf-parse, pdfkit, multer, and a vanilla JS frontend. Built a 9-prompt routing matrix with a strict 4-phase simulation flow, server-side context assembly, multi-file evidence ingestion, RAG-based legal retrieval, PDF report streaming, and voice input via the Web Speech API.",

    metrics: [
      "⚖️ 3 simulation modes",
      "🧩 9 prompt combinations",
      "📚 Top-3 RAG matches",
    ],

    dataFlow:
      "User Intake → Prompt Router → GPT Simulation → Pinecone RAG → Verdict → PDF Feedback",

    architectureImage:
      "/architectures/Real-Time-AI-Simulation-Tool.png",

    stack: [
      "Node.js",
      "Express",
      "OpenAI GPT",
      "Pinecone",
      "RAG",
      "PDF Parsing",
      "Real-Time AI",
    ],

    image:
      "/images/placeholders/distributed-ai-simulation-architecture-placeholder.png",

    github:
      "https://github.com/aryanrajendrasuthar/Real-Time-AI-Simulation-Tool",

    overview:
      "The Real Time AI Simulation Tool is an AI-powered legal practice environment built for the Self-Justice initiative. It allows self-represented litigants navigating Canadian family law without a lawyer to rehearse courtroom proceedings in a realistic, structured simulation before facing real hearings. Users can practice against an AI Judge, an AI Opposing Counsel, or both simultaneously.",

    problem:
      "Self-represented litigants in family court are at a significant disadvantage because they lack procedural knowledge, legal vocabulary, and adversarial experience. Existing resources are mostly static guides or videos and do not simulate the real back-and-forth of a live hearing.",

    solution:
      "Built an interactive AI courtroom simulator that turns legal preparation into an active practice environment. Users move through structured intake, live mock trial, evidence submission, verdict generation, and performance feedback, with legal grounding provided through a Pinecone-backed RAG pipeline.",

    architecture: [
      "Frontend captures intake details, selected simulation mode, and uploaded evidence.",
      "Backend dynamically selects one of 9 roleBehavior × sessionType system prompts at runtime.",
      "Server assembles all AI context per request, including chat history, evidence text, and retrieved legal precedents.",
      "OpenAI embeddings are generated from user context and queried against a Pinecone legal-docs index for top-3 semantic matches.",
      "Retrieved legal context is injected before each GPT completion to ground responses in Canadian family law.",
      "Simulation proceeds through Intake → Transition → Trial → Conclusion, ending with verdict and feedback.",
      "Feedback is streamed as a formatted PDF directly from the server using pdfkit.",
    ],

    engineeringDecisions: [
      "Used a multi-phase prompt system with 9 distinct prompt files loaded dynamically at runtime, enforcing a 4-phase FSM entirely through strict system instructions.",
      "Kept the application stateless per request with server-side context assembly and no persistent conversation storage, simplifying reset and deployment behavior.",
      "Implemented a roleBehavior × sessionType routing matrix (3 roles × 3 session types) to cleanly control both backend prompt selection and frontend UI behavior.",
      "Used Pinecone-backed RAG to ground model responses in legal precedents instead of relying solely on base-model recall.",
      "Handled evidence uploads in memory with multer, parsed PDFs with pdf-parse, and appended each file as a separate GPT context message.",
      "Streamed feedback PDFs directly to the response with pdfkit to avoid temporary file creation.",
    ],

    scalingStrategy: [
      "Stateless API design allows horizontal scaling without requiring shared conversation storage.",
      "Prompt modularity makes it easy to add new legal roles, hearing types, or procedural paths without rewriting the whole system.",
      "RAG infrastructure through Pinecone scales independently from prompt orchestration and request handling.",
      "Evidence ingestion, simulation orchestration, and report generation can later be split into isolated services if usage grows.",
      "The prompt matrix and strict phase flow provide a repeatable architecture for expanding to additional legal domains.",
    ],

    challenges: [
      "Preventing GPT from skipping structured simulation phases without implementing a heavy backend state machine.",
      "Maintaining useful legal grounding while rebuilding context on each request in a stateless architecture.",
      "Handling multiple uploaded evidence files while controlling context size and preserving relevance.",
      "Designing an experience that felt like a real courtroom rehearsal rather than a generic chatbot interaction.",
      "Balancing flexibility across full trials, motions, and oral arguments while keeping prompt behavior predictable.",
    ],

    outcome: [
      "Deployed as part of the selfjustice.ca platform for real-world legal rehearsal use cases.",
      "Made professional-style legal preparation more accessible to people who cannot afford traditional representation.",
      "Covered common Canadian family law scenarios including custody hearings, spousal support motions, and oral argument practice.",
      "Created a flagship portfolio project demonstrating prompt engineering, RAG architecture, evidence ingestion, and production-style backend design.",
    ],

    highlights: [
      "Multi-role AI simulation for Judge, Opposing Counsel, or both",
      "9-prompt routing system with a strict 4-phase simulation flow",
      "RAG pipeline using OpenAI embeddings and Pinecone legal retrieval",
      "Multi-file PDF/text evidence ingestion with model-assisted relevance handling",
      "Direct PDF feedback generation and streaming via pdfkit",
      "Voice input integration through Web Speech API",
    ],

    screenshots: [
      "/images/placeholders/distributed-ai-simulation-architecture-placeholder.png",
    ],

    learnings: [
      "Prompt architecture can successfully enforce structured multi-stage experiences when designed as a disciplined flow.",
      "RAG becomes especially valuable when model output must be grounded in domain-specific reference material like legal precedent.",
      "Server-side context assembly provides stronger control over safety, consistency, and runtime behavior in AI applications.",
      "Full-stack AI products feel significantly more credible when ingestion, retrieval, feedback export, and UX flows work together as one system.",
    ],
  },

  {
    slug: "physio-app",
    title: "PhysioApp — A Smart Physiotherapy Exercise Platform",
    type: "Layer A",
    tagline:
      "Full-stack physiotherapy platform for personalized exercise, tracking, and recovery.",

    summary:
      "A multi-role physiotherapy web application that guides patients through personalized exercise programs with pain-aware onboarding, routine management, session tracking, progress analytics, and gamified achievements.",

    recruiterSummary:
      "Co-developing a physiotherapy exercise platform as part of a 4-person Agile team at ASU. Built patient-facing workflows including a 7-step pain-aware onboarding flow, exercise library with dynamic filtering, custom routine builder, live session tracking, workout history, progress analytics, achievements, secure auth, and TOTP-based 2FA. Deployed on Heroku and structured for upcoming physiotherapist dashboard and sponsor demo work.",

    engineeringSummary:
      "Built a full-stack MVC physiotherapy platform using Node.js, Express, MySQL, EJS, Bootstrap, bcrypt, speakeasy, express-session, and layered services/DAOs. The system uses strict Routes → Controllers → Services → DAOs → MySQL architecture, a singleton ConnectionManager for pooled DB access, 7-step onboarding persistence, dynamic SQL filtering for the exercise library, live routine/session tracking, analytics aggregation, achievements, and modular settings flows.",

    metrics: [
      "👥 4 developers",
      "🧭 7 onboarding steps",
      "📊 3 progress views",
    ],

    dataFlow:
      "Onboarding → Exercise Library → Routine Builder → Live Session → Progress Analytics",

    architectureImage: "/architectures/physio-app.png",

    stack: [
      "Node.js",
      "Express",
      "MySQL",
      "EJS",
      "Bootstrap 5",
      "2FA",
      "Agile/Scrum",
    ],

    image: "/images/placeholders/physio-app-dashboard-placeholder.png",
    github: "https://github.com/aryanrajendrasuthar/Physio-App",

    overview:
      "PhysioApp is a physiotherapy exercise web platform being developed as part of the ASU SER-517 capstone by a 4-person team following Agile/Scrum methodology. It serves two user types — patients managing their rehabilitation programs, and physiotherapists who can create and assign exercise plans to patients. The platform is currently in active sprint development, with core patient features complete and physiotherapist-facing features planned next.",

    problem:
      "Patients recovering through physiotherapy often struggle to maintain consistent exercise routines at home. Generic fitness apps do not account for pain areas, injury history, prescribed movements, or therapist-driven guidance.",

    solution:
      "Built a pain-aware physiotherapy platform that personalizes onboarding, exercise discovery, routine management, session tracking, analytics, achievements, and account settings in one structured web application.",

    architecture: [
      "App follows a strict layered MVC flow: Routes → Controllers → Services → DAOs → MySQL.",
      "A singleton ConnectionManager manages the mysql2 connection pool across all DAOs.",
      "Private class fields (#dao, #connectionManager) enforce encapsulation across service and DAO layers.",
      "The onboarding wizard persists patient profile data through multiple UserProfileService calls.",
      "Exercise search and filtering query category, skill, home/gym context, and muscle-group mappings dynamically.",
      "Workout sessions snapshot exercise completion into history tables for long-term tracking and analytics.",
      "Progress analytics aggregate data for week, month, and year views through parallelized backend queries.",
    ],

    engineeringDecisions: [
      "Implemented a strict layered MVC architecture so routes, controllers, services, and DAOs each had clearly separated responsibilities.",
      "Used private class fields in service and DAO classes to enforce encapsulation and reduce accidental coupling.",
      "Built onboarding as a 7-step wizard with middleware enforcement so incomplete users cannot bypass setup and access the app prematurely.",
      "Used a singleton ConnectionManager for the MySQL pool so all DAOs shared a consistent and efficient DB access layer.",
      "Snapshot-logged completed workout exercises into Workout_Session_Exercise to preserve historical integrity even if routines are later edited or deleted.",
      "Designed modular settings pages so profile edits, goals, pain data, and password updates could evolve independently.",
    ],

    scalingStrategy: [
      "The layered MVC structure makes it easier to evolve features without tightly coupling UI, business logic, and persistence.",
      "Service and DAO separation supports future extraction of heavier logic into isolated backend modules if needed.",
      "Parallel Promise.all() fetching on analytics routes reduces user-perceived latency and keeps dashboard pages responsive.",
      "Dynamic SQL filtering and normalized table relationships allow the exercise library to expand without redesigning the app.",
      "The current patient feature set forms a strong base for adding the physiotherapist dashboard and assignment workflows in later sprints.",
    ],

    challenges: [
      "Designing an onboarding flow that feels thorough enough for personalization without overwhelming first-time users.",
      "Balancing usability with backend structure in a healthcare-style application.",
      "Keeping session tracking and history robust even when routines change over time.",
      "Making analytics feel useful and understandable without overcomplicating the patient experience.",
      "Coordinating feature delivery inside an Agile team while the product is still evolving toward sponsor-facing readiness.",
    ],

    outcome: [
      "Delivered a substantial capstone application with core patient functionality already complete.",
      "Built a platform that combines personalization, structured exercise management, progress visibility, and account security.",
      "Demonstrated full-stack engineering across MVC architecture, relational data modeling, authentication, analytics, and Agile team delivery.",
      "Prepared the system for upcoming physiotherapist-facing features and sponsor demo readiness.",
    ],

    highlights: [
      "7-step pain-aware onboarding wizard with profile persistence",
      "Dynamic exercise library with filter-based SQL search",
      "Custom routine builder and live workout session tracking",
      "Week/month/year progress analytics",
      "Gamified achievements system",
      "TOTP-based two-factor authentication and modular account settings",
    ],

    screenshots: ["/images/placeholders/physio-app-dashboard-placeholder.png"],

    learnings: [
      "Healthcare-style systems need both strong UX clarity and dependable backend structure.",
      "Persistent onboarding and profile completeness checks can meaningfully improve downstream personalization.",
      "Historical workout data should be modeled independently from mutable routine definitions.",
      "Agile product delivery becomes much more effective when the architecture is disciplined early.",
    ],
  },

  {
    slug: "smart-quotation-estimator",
    title: "SmartQuote ERP / Jayraj Fabrication Quotation System",
    type: "Layer A",
    tagline:
      "Cloud-based quotation management system for fabrication and contracting workflows.",

    summary:
      "A full-stack quotation management platform built for Jayraj Fabrication to create, manage, export, and share professional fabrication quotations with branded PDFs, cloud storage, and admin-only workflow control.",

    recruiterSummary:
      "Built SmartQuote ERP, a cloud-based quotation management system for Jayraj Fabrication that digitizes real fabrication quotation workflows. Implemented secure admin authentication, client management, quote creation, structured line items, extra charges, branded PDF exports, cloud storage, email-ready workflows, and a free-tier deployment architecture using React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Edge Functions, and pdf-lib.",

    engineeringSummary:
      "Designed and implemented a full-stack quotation platform using React, Vite, TypeScript, Tailwind CSS, Supabase PostgreSQL, Supabase Auth, Supabase Storage, Edge Functions, and pdf-lib. The system supports admin-only access, normalized quotation data models, branded PDF generation aligned to real company quotation samples, storage-backed export history, and production-style cloud workflows optimized for free-tier deployment.",

    metrics: [
      "📄 Branded PDF exports",
      "🗄️ Normalized PostgreSQL schema",
      "☁️ Free-tier cloud architecture",
    ],

    dataFlow:
      "Admin Login → Client / Quote Entry → Line Items & Extras → PDF Export → Storage → Share",

    architectureImage: "/architectures/smart-quotation-estimator.png",

    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "PDF-lib",
    ],

    image:
      "/images/placeholders/smart-quotation-estimator-admin-placeholder.png",

    github: "https://github.com/aryanrajendrasuthar/Smart-Quotation-Estimator",

    overview:
      "SmartQuote ERP is a full-stack quotation management system built for Jayraj Fabrication to digitize the process of creating, managing, exporting, and sharing professional fabrication quotations. It replaces manual Word/PDF-based quotation preparation with a structured cloud workflow tailored to real business quotation formats used in fabrication and contracting operations.",

    problem:
      "Fabrication businesses often prepare quotations manually for sheds, canopies, structural work, transportation charges, GST handling, and custom pricing. That creates repeated work, inconsistent formatting, poor revision handling, lack of centralized records, limited export tracking, and a less professional client-facing workflow.",

    solution:
      "Built a centralized admin-only quotation platform that stores clients, quotes, line items, extras, notes, and export history in a structured system. The platform generates business-ready branded PDFs aligned with Jayraj Fabrication’s real quotation samples and supports cloud-based storage and sharing workflows.",

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

    screenshots: [
      "/images/placeholders/smart-quotation-estimator-admin-placeholder.png",
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

    summary:
      "A real-time emergency alert application that lets users trigger a one-click SOS to pre-configured emergency contacts via SMS, including a live Google Maps location link, OTP-verified phone registration, and mobile-ready HTTPS support.",

    recruiterSummary:
      "Built a full-stack emergency alert web application using Node.js, Express, MongoDB Atlas, and Twilio. Users register with OTP-verified phone numbers, log in with credentials, and can trigger a one-click SOS alert from any device. On activation, the app captures real-time GPS coordinates via the browser Geolocation API and dispatches instant SMS messages to multiple emergency contacts, each containing a Google Maps link to the user's exact location. Includes HTTPS support and session-based auth for protected routes.",

    engineeringSummary:
      "Built a full-stack emergency alert app using Node.js, Express, MongoDB Atlas, EJS, Tailwind CSS, Twilio SMS, dotenv, and browser geolocation APIs. The application uses OTP-verified signup, session-based authentication, real-time client-side GPS capture, dynamic Google Maps deep-link generation, multi-contact SMS dispatch, and HTTPS-ready certificate infrastructure for secure mobile usage.",

    metrics: [
      "📲 8 API routes",
      "📍 Live GPS capture",
      "📡 2+ SMS contacts",
    ],

    dataFlow:
      "Signup → OTP Verify → Login → GPS Capture → SOS Trigger → Twilio SMS → Google Maps Link",

    architectureImage: "/architectures/emergency-sos.png",

    stack: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Twilio",
      "EJS",
      "Tailwind CSS",
      "Geolocation API",
    ],

    image: "/images/placeholders/emergency-sos-home-placeholder.png",
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
      "Generated Google Maps deep links dynamically from raw coordinates so contacts can navigate directly to the user’s position.",
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

    screenshots: ["/images/placeholders/emergency-sos-home-placeholder.png"],

    learnings: [
      "Emergency workflows must optimize for speed and clarity above everything else.",
      "Browser security constraints like HTTPS can directly shape product architecture when geolocation is involved.",
      "Small real-time systems become much more useful when they integrate existing services like Twilio cleanly.",
      "Environment-driven configuration makes safety tools easier to adapt for different deployment setups.",
    ],
  },

  {
    slug: "emofusion",
    title: "Emofusion — Multimodal Emotion Detection System",
    type: "Layer A",
    tagline:
      "Multimodal emotion detection using deep learning across vision and language.",

    summary:
      "A multimodal deep learning system that detects human emotions by fusing visual and textual signals through optimized neural network pipelines, trained on 61,000+ samples with MLflow-based reproducibility.",

    recruiterSummary:
      "Built a multimodal emotion detection system that fuses computer vision and NLP signals to classify human emotions using deep learning. Designed scalable ML data processing pipelines to handle 61,000+ training samples, trained PyTorch models achieving 82% emotion classification accuracy, and integrated MLflow for full experiment tracking, hyperparameter logging, and model versioning.",

    engineeringSummary:
      "Designed a multimodal late-fusion architecture with separate vision and language feature extraction branches whose embeddings are fused before final classification. Built scalable preprocessing pipelines, optimized feature extraction for 61,000+ samples, trained PyTorch models to 82% accuracy, and integrated MLflow for complete experiment lifecycle management and reproducibility.",

    metrics: [
      "📊 61k+ training samples",
      "🎯 82% classification accuracy",
      "🧠 2 fused modalities",
    ],

    dataFlow:
      "Input (Image + Text) → Feature Extraction → Fusion Layer → Classifier → MLflow Tracking",

    architectureImage: "/architectures/emofusion.png",

    stack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "MLflow",
      "NLP",
      "Computer Vision",
    ],

    image: "/images/placeholders/emofusion-results-placeholder.png",
    github: "https://github.com/aryanrajendrasuthar/EmoFusion",

    overview:
      "Emofusion is a multimodal deep learning system that detects and classifies human emotions by simultaneously analyzing visual and textual inputs. By fusing computer vision and NLP feature streams through an optimized neural network architecture, the system achieves more robust emotion recognition than single-modality approaches, reaching 82% classification accuracy trained on 61,000+ samples.",

    problem:
      "Emotion detection from a single modality, such as only text or only images, is inherently limited. Humans express emotion through facial cues, body language, and language simultaneously, so single-modality systems miss context carried by other signals.",

    solution:
      "Built a true multimodal pipeline that processes visual and textual inputs through separate feature extraction branches, fuses them at a late-fusion layer, and performs final emotion classification with a reproducible training and experiment-tracking workflow.",

    architecture: [
      "Input consists of paired visual and textual data samples.",
      "Computer vision pipeline extracts visual embeddings from image inputs.",
      "NLP pipeline processes text into semantic embeddings.",
      "Embeddings are fused using a late-fusion strategy before classification.",
      "Final PyTorch classifier predicts emotion categories from the fused representation.",
      "MLflow tracks experiment runs, hyperparameters, metrics, artifacts, and model versions.",
    ],

    engineeringDecisions: [
      "Designed a multimodal late-fusion architecture so vision and NLP pipelines could learn modality-specific features before combining them.",
      "Separated feature extraction branches for visual and textual inputs to preserve flexibility and improve experimentation.",
      "Built scalable ML data pipelines capable of handling 61,000+ training samples without creating preprocessing bottlenecks.",
      "Used PyTorch for core model architecture and training while leveraging TensorFlow components in preprocessing stages where useful.",
      "Integrated MLflow for complete experiment lifecycle management including metric logging, artifact storage, and model versioning.",
      "Structured the workflow for reproducibility so training runs can be recreated from logged configurations and dataset references.",
    ],

    scalingStrategy: [
      "Optimized preprocessing and feature extraction to reduce bottlenecks and support faster iteration cycles on larger datasets.",
      "Separated preprocessing, training, and evaluation stages so each part of the ML workflow can evolve independently.",
      "Used MLflow to manage multiple experiment runs, compare model variants, and keep versioned outputs reproducible.",
      "The pipeline design supports future expansion into additional modalities such as audio or video without rethinking the full workflow.",
    ],

    challenges: [
      "Balancing feature importance between visual and textual modalities in a fused architecture.",
      "Managing large-scale preprocessing without slowing down model iteration speed.",
      "Ensuring reproducibility across repeated training runs and model experiments.",
      "Designing the system to feel production-structured rather than just a research prototype.",
    ],

    outcome: [
      "Achieved 82% emotion classification accuracy on a 61,000+ sample dataset.",
      "Built a reproducible multimodal ML workflow with complete experiment tracking and versioning.",
      "Demonstrated strong ML engineering practices beyond raw model training, including pipeline design and lifecycle management.",
      "Added a production-oriented AI/ML case study that complements the backend and systems-heavy Layer A projects.",
    ],

    highlights: [
      "Multimodal late-fusion architecture combining computer vision and NLP",
      "Scalable feature extraction and data processing pipeline",
      "PyTorch model training to 82% classification accuracy",
      "MLflow-based experiment lifecycle tracking and versioning",
      "Reproducible model training workflows",
    ],

    screenshots: ["/images/placeholders/emofusion-results-placeholder.png"],

    learnings: [
      "Multimodal systems provide richer emotional context than single-modality models.",
      "Experiment tracking is essential for reproducible ML workflows.",
      "Pipeline design is as important as model architecture in production-oriented ML systems.",
      "Scalability and reproducibility are core engineering concerns even in deep learning projects.",
    ],
  },
];

export const layerBProjects = [
  {
    slug: "playlang",
    title: "PlayLang — Custom Programming Language & Compiler",
    type: "Layer B",
    tagline:
      "Custom high-level language with Python tokenization and Prolog-based parsing/execution.",

    summary:
      "A fully implemented programming language and compiler pipeline built by a 4-person team, featuring Python lexical analysis, Prolog DCG parsing, and Prolog AST execution with support for variables, loops, functions, lists, dictionaries, and boolean logic.",

    recruiterSummary:
      "Co-designed and implemented a complete programming language and compiler toolchain for ASU SER-502. Built a Python tokenizer, a Prolog DCG-based parser, and a Prolog AST executor supporting variables, conditionals, ternary expressions, loops, functions, lists, dictionaries, and print statements. Delivered 7 sample programs covering all supported language features across macOS, Linux, and Windows.",

    engineeringSummary:
      "Built a 3-stage compiler pipeline: Python tokenizer → Prolog DCG parser → Prolog AST executor. Python handles lexical analysis and serializes typed tokens as Prolog facts; SWI-Prolog handles grammar parsing and direct AST interpretation using unification and backtracking, without a separate IR or code generation phase.",

    metrics: [
      "🧩 3 pipeline stages",
      "👥 4 developers",
      "📘 7 sample programs",
    ],

    dataFlow: "Source Code → Python Tokenizer → Prolog Parser → AST Executor",

    architectureImage: "/architectures/playlang.png",

    stack: [
      "Python",
      "SWI-Prolog",
      "DCG",
      "Compiler Design",
      "AST",
      "Language Design",
    ],

    image: "/images/placeholders/playlang-placeholder.png",
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

    screenshots: ["/images/placeholders/playlang-placeholder.png"],

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

    summary:
      "A full-stack semantic web system that unifies artwork metadata from MET, MoMA, Tate, and NGA into a single RDF knowledge graph with search, faceted filtering, artwork detail inspection, and force-directed semantic visualization.",

    recruiterSummary:
      "Built a semantic web application integrating artwork metadata from four major museum collections into a unified RDF knowledge graph. Designed a lightweight ontology, loaded curated Turtle data into Apache Jena Fuseki, built a Flask backend that generates SPARQL queries from user filters, and implemented a React frontend with keyword search, faceted filters, detail inspection, and semantic graph visualization.",

    engineeringSummary:
      "Designed a 4-layer architecture: curated RDF dataset → Fuseki triplestore → Flask REST API → React frontend. SPARQL remains fully abstracted behind the backend, while the frontend handles keyword search, faceted filtering, detail views, and force-directed graph rendering using react-force-graph-2d.",

    metrics: [
      "🖼️ 4 museum collections",
      "⚡ 30–60ms SPARQL latency",
      "🕸️ 4 REST endpoints",
    ],

    dataFlow:
      "RDF Dataset → Fuseki → Flask SPARQL API → React Search / Graph UI",

    architectureImage: "/architectures/artgraph.png",

    stack: [
      "RDF/Turtle",
      "SPARQL",
      "Apache Jena Fuseki",
      "Flask",
      "React",
      "Ontology Engineering",
    ],

    image: "/images/placeholders/artgraph-placeholder.png",
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

    screenshots: ["/images/placeholders/artgraph-placeholder.png"],

    learnings: [
      "Semantic integration is as much a modeling problem as a querying problem.",
      "REST abstraction can make semantic systems far more accessible to frontend applications.",
      "Lightweight ontology design can dramatically improve developer ergonomics and performance.",
    ],
  },

  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant — RAG-Powered Q&A System",
    type: "Layer B",
    tagline:
      "Production-oriented Retrieval-Augmented Generation system for grounded document Q&A.",

    summary:
      "A full RAG system combining vector embeddings, semantic retrieval, Redis caching, and LLM inference to deliver accurate document-grounded Q&A with sub-100ms optimized response latency.",

    recruiterSummary:
      "Built a full Retrieval-Augmented Generation system using LangChain, OpenAI APIs, FastAPI, Redis, and a vector database. Implemented document ingestion, embedding generation, semantic search, LLM orchestration, Redis caching, and session management, reducing response latency by 30% to under 100ms.",

    engineeringSummary:
      "Designed an end-to-end RAG pipeline: document chunking → embedding generation → vector indexing → semantic retrieval → prompt grounding → LLM inference. FastAPI serves concurrent async requests, LangChain orchestrates retrieval and generation, and Redis caches embeddings, responses, and session state for low-latency multi-turn interactions.",

    metrics: [
      "⚡ <100ms latency",
      "📉 30% latency reduction",
      "🧠 Full RAG pipeline",
    ],

    dataFlow:
      "Documents → Embeddings → Vector Store → Retrieval → LLM Prompt → Response",

    architectureImage: "/architectures/ai-knowledge-assistant.png",

    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Redis",
      "Vector Database",
      "RAG",
    ],

    image: "/images/placeholders/ai-knowledge-assistant-placeholder.png",
    github: "https://github.com/aryanrajendrasuthar/AI-Knowledge-Assistant",

    overview:
      "The AI Knowledge Assistant is a production-oriented RAG system that allows users to query large document collections with natural language and receive accurate, context-grounded answers powered by an LLM.",

    problem:
      "Standalone LLMs cannot access private documents or domain-specific knowledge bases at query time, which makes them unreliable for accurate organizational Q&A.",

    solution:
      "Built a Retrieval-Augmented Generation system that indexes documents as embeddings, retrieves semantically relevant chunks at query time, and injects that context into LLM prompts for grounded responses.",

    architecture: [
      "Documents are chunked and embedded using OpenAI embedding models.",
      "Embeddings are indexed into a vector database for semantic retrieval.",
      "FastAPI exposes async endpoints for query handling.",
      "At query time, top-k relevant chunks are retrieved and passed into LangChain prompt orchestration.",
      "Redis caches embeddings, repeated responses, and session state for faster multi-turn interactions.",
    ],

    engineeringDecisions: [
      "Used a full RAG architecture to reduce hallucination and ground responses in actual source material.",
      "Chose semantic vector retrieval so meaning-based matches work even when wording differs from source text.",
      "Used FastAPI async endpoints to support concurrent inference requests.",
      "Added Redis caching for embeddings and frequent responses to reduce repeated API calls and improve latency.",
      "Used LangChain to keep retrieval, context injection, and generation logic modular and composable.",
    ],

    scalingStrategy: [
      "FastAPI async design supports concurrent inference workloads.",
      "Redis caching reduces repeated compute and API overhead at scale.",
      "The vector store layer can grow independently as document volume increases.",
      "Session state handling enables multi-turn interactions without resending full context every time.",
    ],

    challenges: [
      "Reducing LLM latency while still preserving grounded retrieval quality.",
      "Managing embeddings, vector search, and prompt construction as a single coherent pipeline.",
      "Maintaining conversational context efficiently across multiple user turns.",
      "Balancing retrieval precision with response speed in a production-like setup.",
    ],

    outcome: [
      "Built a production-oriented RAG system with measurable latency improvements.",
      "Reduced response latency by 30% to under 100ms through Redis caching and optimized inference flow.",
      "Demonstrated strong LLM systems engineering through retrieval, orchestration, and caching design.",
    ],

    highlights: [
      "Full RAG pipeline",
      "FastAPI async backend",
      "Redis caching + sessions",
      "LangChain orchestration",
    ],

    screenshots: ["/images/placeholders/ai-knowledge-assistant-placeholder.png"],

    learnings: [
      "Grounded retrieval is essential for reliable domain-specific LLM answers.",
      "Latency tuning matters just as much as prompt quality in production-oriented AI systems.",
      "Caching and session architecture are key to making RAG systems scalable and usable.",
    ],
  },

  {
    slug: "sprint-simulator",
    title: "Sprint Simulator — Interactive Agile Scrum Training Application",
    type: "Layer B",
    tagline:
      "Java desktop application for simulating Agile Scrum workflows and user story lifecycles.",

    summary:
      "A Java Swing Scrum simulation tool for educational and training use, featuring role-based participation, user story lifecycle management, sprint creation, JSON persistence, and a full code-quality CI pipeline.",

    recruiterSummary:
      "Co-developed a Java desktop Scrum simulation tool for ASU SER-515. Implemented user story lifecycle management with the State pattern, role creation with a Factory pattern, globally unique IDs with a Singleton store, multi-step Swing wizard flows, JSON persistence, and a rigorous quality engineering pipeline using SpotBugs, Checkstyle, JaCoCo, JUnit 5, and GitHub Actions CI.",

    engineeringSummary:
      "Built a layered Java 21 Swing desktop application structured across core, impl, state, and ui packages. Applied State, Factory, Singleton, and Wizard patterns to model Scrum concepts, persisted simulation state with Jackson JSON serialization, and enforced software quality with static analysis, coverage, and CI gating.",

    metrics: [
      "☕ Java 21",
      "🧠 4 design patterns",
      "✅ CI + quality gates",
    ],

    dataFlow:
      "Simulation Setup → Role Assignment → Sprint / Story Lifecycle → JSON Persistence",

    architectureImage: "/architectures/sprint-simulator.png",

    stack: [
      "Java 21",
      "Swing",
      "Gradle",
      "JUnit 5",
      "JaCoCo",
      "SpotBugs",
      "CI/CD",
    ],

    image: "/images/placeholders/sprint-simulator-placeholder.png",
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

    screenshots: ["/images/placeholders/sprint-simulator-placeholder.png"],

    learnings: [
      "Design patterns are most valuable when tied directly to domain behavior and lifecycle rules.",
      "Quality engineering pipelines can shape better development habits, not just cleaner repos.",
      "Desktop applications still benefit strongly from layered architecture and disciplined state modeling.",
    ],
  },
];