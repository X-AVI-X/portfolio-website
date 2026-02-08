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

export const summary = `Backend & Platform Engineer with 2 years of production experience architecting microservice ecosystems serving 100+ enterprise users. Expert in Java 17+, Spring Boot 3.x, Spring AI, and event-driven distributed systems. Designed and shipped 8+ microservices end-to-end, built AI-powered chatbots with LLM tool-calling, and engineered real-time WebSocket collaboration platforms.`;

export const skills = [
    { category: "Languages & Core", items: ["Java 17+", "Python", "TypeScript", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot 3.x", "Spring Security", "Spring Data JPA", "Spring Cloud", "Hibernate"] },
    { category: "Microservices", items: ["Eureka", "API Gateway", "Feign Client", "Config Server", "Flyway"] },
    { category: "Messaging & Real-Time", items: ["RabbitMQ", "WebSocket", "SSE", "STOMP"] },
    { category: "AI/ML Integration", items: ["Spring AI", "Ollama", "LLM Tool-Calling", "Conversational Memory"] },
    { category: "Data & Storage", items: ["PostgreSQL", "MySQL", "Redis", "JPA Specifications"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Bash", "Linux", "Git"] },
    { category: "Frontend", items: ["React", "Next.js 14+", "Tailwind CSS"] },
];


export const experience = [
    {
        company: "One Direction Companies Limited (ODCL)",
        location: "Dhaka, Bangladesh",
        role: "Software Engineer II – Backend & Platform",
        period: "Nov 2024 – Present",
        type: "current",
        summary: "Sole backend architect for enterprise systems serving 100+ active users. Owner of 8+ microservices with 99% on-time delivery.",
        projects: [
            {
                name: "Shimana – Land Management Platform",
                points: [
                    "Designed 8-service microservice ecosystem using Domain-Driven Design",
                    "Architected Purchase Requisition Service with multi-entity workflows",
                    "Built automated PDF Book Builder with dynamic TOC generation",
                    "Engineered centralized Location Service (5-level hierarchy)",
                    "Implemented 8-field dynamic search with sub-second queries on 10K+ records",
                    "Reduced manual administrative effort by 35%",
                ],
            },
            {
                name: "Business Directory – Real-Time Collaboration & AI Platform",
                points: [
                    "Built Meeting Scheduler with event-driven notifications",
                    "Developed real-time messaging (group + 1:1 chat) over STOMP/RabbitMQ",
                    "Implemented custom JWT WebSocket authentication",
                    "Developed AI-powered chatbot with Spring AI and conversational memory",
                    "Engineered LLM tool-calling with 95%+ success rate",
                    "Delivered SSE-based reactive streaming with Project Reactor",
                ],
            },
            {
                name: "DevOps & Developer Experience",
                points: [
                    "Mentored 2 junior developers on system design",
                    "Implemented Redis caching for session management",
                    "Authored 418-line Bash orchestration script",
                    "Containerized stack with Docker Compose (225-line config)",
                    "Developed 20+ reusable React/Next.js components, cutting dev time by 40%",
                ],
            },
        ],
    },
    {
        company: "BJIT",
        location: "Dhaka, Bangladesh",
        role: "Associate Software Engineer",
        period: "2023",
        type: "past",
        summary: "Full SDLC participation in Java microservices development.",
        projects: [
            {
                name: "Microservices Development",
                points: [
                    "Developed low-latency Java microservices with JUnit/Mockito testing",
                    "Gained hands-on experience with Docker and microservices patterns",
                    "Proposed code improvements during architecture reviews",
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
                name: "Hospital Billing System",
                points: [
                    "Designed Hospital Billing System with secure financial workflows",
                    "Collaborated on database schema optimization",
                ],
            },
        ],
    },
];

export const projects = [
    {
        title: "Personalized Health Management System",
        tech: ["Spring Cloud", "Eureka", "Zipkin", "Feign", "API Gateway", "Config Server"],
        github: "https://github.com/X-AVI-X/Personalized-Health-Management-System-Microservice",
        description: "Distributed microservices with service discovery, distributed tracing, and centralized configuration.",
    },
    {
        title: "Hospital Billing System",
        tech: ["Spring Boot", "JWT", "JPA", "MySQL"],
        github: "https://github.com/X-AVI-X/Billing-System-For-Hospitals-Backend",
        description: "Secure financial workflows with role-based authorization and audit trails.",
    },
    {
        title: "Online Book Library",
        tech: ["Spring Boot", "JPA", "MySQL", "REST API"],
        github: "https://github.com/X-AVI-X/Online-Book-Library",
        description: "Clean architecture with domain-driven design and book reservation system.",
    },
    {
        title: "Bomber-man Game",
        tech: ["Java", "PApplet", "2D Graphics", "AI Pathfinding"],
        github: "https://github.com/X-AVI-X/Bomberman",
        description: "Dynamic 2D game with destructible environments and enemy AI pathfinding.",
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
