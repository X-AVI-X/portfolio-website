export const personalInfo = {
    name: "Avijit Paul",
    title: "Backend & Platform Engineer",
    tagline: "Java · Spring Boot · Microservices · Distributed Systems",
    location: "Dhaka, Bangladesh",
    remote: true,
    phone: "+880 1712-768758",
    email: "avijit.paul.cs@gmail.com",
    linkedin: "https://linkedin.com/in/avijitpaulavi",
    github: "https://github.com/X-AVI-X",
    yearsExperience: 2,
    microservicesCount: 8,
    activeUsers: 100,
};

export const summary = `Results-driven Backend Engineer with production experience designing microservice platforms serving 100+ enterprise users. Specialized in Java 17/21, Spring Boot, Domain-Driven Design (DDD), and Event-Driven Architecture. Built AI-powered chatbots with LLM tool-calling, real-time collaboration systems, and enterprise search platforms. Track record of reducing manual workflows by 35% and accelerating development cycles by 40%. Strategic problem-solver with a systems-thinking mindset, seeking high-impact remote roles in distributed systems and platform engineering.`;

export const skills = [
    { category: "Languages & Core", items: ["Java 17+", "Python", "TypeScript", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot 3.x", "Spring Security", "Spring Data JPA", "Spring Cloud", "Hibernate"] },
    { category: "Microservices", items: ["Eureka", "API Gateway", "Feign Client", "Config Server", "Flyway"] },
    { category: "Messaging & Real-Time", items: ["RabbitMQ", "WebSocket", "SSE", "STOMP"] },
    { category: "AI/ML Integration", items: ["Spring AI", "Ollama", "LLM Tool-Calling", "Conversational Memory"] },
    { category: "Data & Storage", items: ["PostgreSQL", "MySQL", "Redis", "JPA Specifications"] },
    { category: "Practices", items: ["Agile/Scrum", "TDD", "Domain-Driven Design", "SOLID", "Design Patterns", "Code Review"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Bash", "Linux", "Git"] },
    { category: "Frontend", items: ["React", "Next.js 14+", "Tailwind CSS"] },
];


export const experience = [
    {
        company: "One Direction Companies Limited (ODCL)",
        location: "Dhaka, Bangladesh",
        role: "Software Engineer – Backend & Platform",
        period: "Nov 2024 – Present",
        type: "current",
        summary: "Lead Backend Architect defining engineering standards and tech strategy. Architected entire distributed ecosystem (Gateway, Registry, Config, Auth) and Next.js Frontend, while owning Core Domains (Land Sourcing & Registration, Asset, Purchase) serving 100+ active users.",
        projects: [
            {
                name: "Shimana – Land Management Platform",
                points: [
                    "Architected entire Microservice Infrastructure from scratch: Config Server, Eureka Registry, API Gateway, and Auth Service, ensuring zero-downtime scalability",
                    "Designed Core Business Modules (Land Sourcing & Registration, Asset Management, Purchase Requisition), managing the full land acquisition lifecycle via complex relational schemas",
                    "Developed automated PDF Book Builder with dynamic table of contents generation, document categorization, and multi-section merging using PDFBox",
                    "Engineered centralized Location Service as single source of truth for a 5-level hierarchy, eliminating data duplication across 6+ services",
                    "Implemented 8-field dynamic search with JPQL ILIKE patterns and JpaSpecificationExecutor, enabling sub-second queries across complex relational datasets",
                    "Reduced manual administrative effort by 35% through automated workflows (notifications, reminders, status tracking)",
                ],
            },
            {
                name: "Business Directory – Real-Time Collaboration & AI Platform",
                points: [
                    "Built complete Meeting Scheduler Service with file attachments, participant management, and event-driven notifications using Spring ApplicationEventPublisher",
                    "Developed real-time messaging system with group chat (per meeting) and one-to-one personal chat over STOMP/RabbitMQ",
                    "Implemented custom JWT WebSocket authentication via ChannelInterceptor, validating tokens on CONNECT and enforcing per-meeting authorization",
                    "Developed AI-powered meeting scheduling chatbot using Spring AI ChatClient with conversational memory for multi-turn context",
                    "Engineered LLM tool-calling with custom JSON repair logic (regex-based bracket balancing) to handle malformed outputs—achieving 95%+ success rate",
                    "Delivered SSE-based reactive streaming using Project Reactor, filtering JSON blocks while executing tools asynchronously",
                ],
            },
            {
                name: "DevOps & Developer Experience",
                points: [
                    "Lead Frontend Engineering (Next.js 14+): Built the complete responsive dashboard with complex form state management and reusable component library",
                    "Mentored 2 junior developers on backend architecture, system design, and microservices best practices",
                    "Implemented Redis caching for session management and frequently accessed data, reducing database load",
                    "Authored 418-line Bash orchestration script for multi-phase startup with health checks, SSH tunneling, and graceful shutdown",
                    "Containerized stack with Docker Compose (225-line config): Flyway migrations, health probes, and multi-schema PostgreSQL",
                ],
            },
        ],
    },
    {
        company: "BJIT",
        location: "Dhaka, Bangladesh",
        role: "Trainee Software Engineer (Java, Spring Boot, React)",
        period: "2023",
        type: "past",
        summary: "Full SDLC participation in Java microservices development.",
        projects: [
            {
                name: "Key Responsibilities",
                points: [
                    "Engineered low-latency Java microservices participating in full SDLC: requirement analysis, architecture design, implementation, and deployment",
                    "Implemented production-grade Docker containerization, build automation, and microservices patterns",
                    "Proposed and implemented code improvements during architecture reviews, reducing technical debt",
                ],
            },
        ],
    },
    {
        company: "Square Health Ltd",
        location: "Dhaka, Bangladesh",
        role: "Software Engineer Intern",
        period: "2023",
        type: "past",
        summary: "Healthcare software development internship.",
        projects: [
            {
                name: "Key Responsibilities",
                points: [
                    "Designed and delivered Hospital Billing System with secure financial workflows and high-volume transaction logging",
                    "Collaborated on database schema optimization and resolved production-level defects",
                ],
            },
        ],
    },
];

export const projects = [
    {
        title: "Personalized Health Management System (BJIT)",
        tech: ["Spring Cloud", "Eureka", "Feign", "Gateway", "Config Server"],
        github: "https://github.com/X-AVI-X/Personalized-Health-Management-System-Microservice",
        description: "Built 6+ distributed services using Spring Cloud Gateway & Eureka. Implemented OpenFeign with token propagation and Config Server for runtime updates.",
    },
    {
        title: "Hospital Billing System (Square Health)",
        tech: ["Spring Boot", "JWT", "JPA", "MySQL"],
        github: "https://github.com/X-AVI-X/Billing-System-For-Hospitals-Backend",
        description: "Engineered multi-module billing engine with complex discount logic. Built stateless JWT security and real-time admin dashboards using Spring Data Projections.",
    },
    {
        title: "Online Book Library",
        tech: ["Spring Boot", "JPA", "MySQL", "REST API"],
        github: "https://github.com/X-AVI-X/Online-Book-Library",
        description: "Clean architecture with domain-driven design, role-based access (Customer/Admin), and book reservation system.",
    },
    {
        title: "Bomber-man Game",
        tech: ["Java", "PApplet", "2D Graphics", "AI Pathfinding"],
        github: "https://github.com/X-AVI-X/Bomberman",
        description: "Dynamic 2D game with destructible environments, enemy AI pathfinding, and strategic bomb mechanics.",
    },
];

export const education = {
    degree: {
        title: "B.Sc. in Computer Science & Engineering",
        institution: "American International University–Bangladesh (AIUB)",
        location: "Dhaka, Bangladesh",
        period: "2018 – 2022",
        cgpa: "3.64 / 4.00",
        thesis: "Real-Time Threat & Anomaly Detection from Surveillance Video using LRCN & LSTM",
        achievement: "Champion – Senior ICT Olympiad (JARVIS, ACC, AIUB 2023)",
    },
    certifications: [
        {
            name: "Software Product Management Specialization",
            issuer: "University of Alberta",
            year: "2023",
            link: "https://www.coursera.org/specializations/product-management",
        },
        {
            name: "IELTS Academic",
            issuer: "British Council",
            year: "2023",
            link: "#",
        },
    ],
};

export const leadership = [
    {
        organization: "AIUB Computer Club",
        role: "General Member & Organizer",
        period: "2018 – 2023",
        points: [
            "Organized events including CS Fest and Cyber Gaming Fest, coordinating logistics for 200+ participants.",
            "Managed on-campus recruitment stalls, engaging with 500+ students and successfully hiring 30+ new members.",
        ],
    },
    {
        organization: "AIUB Community of Engineering Students (ACES)",
        role: "General Member",
        period: "2018 – 2022",
        points: [
            "Contributed to community welfare initiatives and technical workshops.",
            "Mentored 50+ students across engineering communities, fostering peer learning and excellence.",
        ],
    },
];

