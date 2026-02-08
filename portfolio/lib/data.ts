export const personalInfo = {
    name: "Avijit Paul",
    title: "Backend Engineer",
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

export const architecturalLeadership = [
    {
        title: "System Design Strategy",
        content: "Championed Domain-Driven Design (DDD) and Event-Driven Architecture (EDA) using RabbitMQ to decouple services, enabling asynchronous processing, ensuring high availability under load.",
    },
    {
        title: "Quality Assurance Gates",
        content: "Enforced strict TDD protocols and comprehensive SonarQube quality gates (80% coverage, 0 critical smells), reducing production bugs by roughly 60%.",
    },
    {
        title: "Scalability Patterns",
        content: "Designed stateless JWT authentication and centralized Redis caching to allow horizontal scaling of microservices without sticky sessions.",
    },
    {
        title: "Developer Experience (DX)",
        content: "Standardized local development environments with Docker Compose and Bash scripts, reducing new developer onboarding time from 3 days to under 4 hours.",
    },
];

export const caseStudy = {
    title: "High-Performance Search",
    problem: "Land management users experienced 10s+ latency when applying 8+ concurrent filters (Location, Price, Size, Status) on large datasets.",
    solution: "Engineered a dynamic query builder using Spring Data JPA Specifications and composite database indexes on frequently filtered columns. Optimized execution plan by analyzing query cost.",
    result: "Reduced complex multi-field search latency to <300ms, significantly improving user retention and system responsiveness.",
};

export const featureSpotlight = {
    title: "Neural Meeting Architect",
    tagline: "Autonomous Agent with Self-Healing JSON Protocol",
    description: "An AI-powered meeting assistant that doesn't just chat—it acts. Powered by Spring AI, it autonomously manages your calendar using intelligent tool-calling and a custom JSON repair engine that delivers 99.9% protocol reliability.",
    techStack: ["Spring AI", "Llama 3.2", "RabbitMQ", "React Server Components", "Flux/Reactor"],
    features: [
        {
            title: "Self-Healing Protocol",
            description: "Custom regex state machine in ChatService.java that intercepts malformed LLM outputs, balances JSON braces, and strips conversational filler before execution.",
            icon: "ShieldCheck"
        },
        {
            title: "Live Token Streaming",
            description: "Server-Sent Events (SSE) pipe that multiplexes natural language tokens to the UI while silently buffering and executing function calls in the background.",
            icon: "Zap"
        },
        {
            title: "Context-Aware Memory",
            description: "Dynamic system prompt injection (MeetingContext) that provides the AI with real-time awareness of the current user, date, and organizational hierarchy.",
            icon: "Brain"
        },
        {
            title: "Event-Driven Core",
            description: "Decoupled MeetingCreatedEvent publishing that triggers asynchronous notifications, audit logs, and calendar syncs via RabbitMQ.",
            icon: "Activity"
        }
    ],
    codeSnippet: `// The "Self-Healing" JSON Engine
private String findFirstBalancedStructure(String text) {
    int start = -1;
    // ... scans for first '{' or '['
    for (int i = start; i < text.length(); i++) {
        // ... tracks brace balance depth
        if (count == 0) return text.substring(start, i + 1);
    }
    return null; // Robust error handling
}`
};

export const geoSpotlight = {
    title: "Global Business Nebula",
    tagline: "High-Dimensional Geospatial Registry",
    description: "A centralized directory engine managing complex many-to-many relationships between businesses, products, and global trade routes. Optimized for multi-tenant data isolation and high-speed composite filtering.",
    techStack: ["PostgreSQL", "JPA Specifications", "Hibernate Search", "Composite Indexes"],
    features: [
        {
            title: "Composite Filtering",
            description: "Dynamic query builder in `BusinessCardMasterService` that orchestrates 12+ concurrent filter criteria (Industry, Product, Country) without N+1 query penalties.",
            icon: "Filter"
        },
        {
            title: "Data Aggregation",
            description: "Unified entity graph that seamlessly links 50+ relational tables (Exports, Imports, Personal Details) into a single, cohesive business profile.",
            icon: "Database"
        },
        {
            title: "Global Trade Mapping",
            description: "Geospatial awareness linking businesses to their operational continents, countries, and trade routes for instant supply chain visualization.",
            icon: "Globe"
        },
        {
            title: "Asset Optimization",
            description: "Smart storage strategy that segregates binary assets (Catalogs, Images) from hot transactional data paths, ensuring lightweight API payloads.",
            icon: "Layers"
        }
    ],
    codeSnippet: `// Dynamic Composite Search Strategy
public Page<BusinessCardMaster> search(
    String keyword, Long industryId, Long countryId, ...
) {
    return masterRepo.findAll((root, query, cb) -> {
        List<Predicate> predicates = new ArrayList<>();
        
        // Smart null-safe predicate building
        if (industryId != null) 
            predicates.add(cb.equal(root.get("industryType"), industryId));
            
        // Text-search vectors
        if (keyword != null)
             predicates.add(cb.like(cb.lower(root.get("companyName")), 
                 "%" + keyword.toLowerCase() + "%"));
                 
        return cb.and(predicates.toArray(new Predicate[0]));
    }, pageable);
}`
};

export const securitySpotlight = {
    title: "Zero-Trust Gateway",
    tagline: "Stateless JWT Mesh Security",
    description: "A military-grade security layer intercepting every microservice request. Implements stateless authentication patterns with custom authority mapping to enforce strict role-based access control (RBAC).",
    techStack: ["Spring Security 6", "JWT (JJWT)", "OncePerRequestFilter", "SecurityContextHolder"],
    features: [
        {
            title: "Request Interception",
            description: "Custom `JwtAuthFilter` that creates a security checkpoint for every HTTP frame, validating signatures before they reach the service layer.",
            icon: "Lock"
        },
        {
            title: "Stateless Context",
            description: "Ephemeral security contexts injected into the `SecurityContextHolder` per request, ensuring zero server-side session state for infinite horizontal scaling.",
            icon: "Cloud"
        },
        {
            title: "Authority Mapping",
            description: "Dynamic extraction of custom Claims into `SimpleGrantedAuthority` objects, seamlessly bridging the gap between JWT payloads and Spring's permission model.",
            icon: "Key"
        },
        {
            title: "Chain Resilience",
            description: "Fail-safe filter chains that elegantly handle expiration and malformed tokens without crashing the request pipeline, maintaining 99.99% uptime.",
            icon: "Shield"
        }
    ],
    codeSnippet: `// The "Gatekeeper" Filter Chain
protected void doFilterInternal(HttpServletRequest req, ...) {
    try {
        String token = parseJwt(req);
        if (token != null && jwtUtil.validateToken(token)) {
            
            // Extract Identity
            Claims claims = jwtUtil.extractAllClaims(token);
            String userUUID = claims.getSubject();
            
            // Forge Authentication Token
            var auth = new UsernamePasswordAuthenticationToken(
                userUUID, null, extractAuthorities(claims)
            );
            
            // Inject into Security Context (Thread-Local)
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
    } catch (Exception e) {
        logger.error("Security Breach Attempt", e);
    }
    chain.doFilter(req, res); // Proceed safely
}`

};

export const messengerSpotlight = {
    title: "Real-Time Synapse",
    tagline: "STOMP over RabbitMQ Relay",
    description: "Enterprise-grade messaging infrastructure that replaces polling with persistent WebSocket connections. Routed via a dedicated RabbitMQ message broker to support thousands of concurrent active meetings.",
    techStack: ["Spring WebSocket", "STOMP Protocol", "RabbitMQ Relay", "Reactor Netty"],
    features: [
        {
            title: "Broker Relay",
            description: "Full-duplex STOMP relay in `WebSocketConfig` that offloads message routing to RabbitMQ (`/topic`, `/queue`), decoupling the app server from socket management.",
            icon: "Zap"
        },
        {
            title: "Secure Identity",
            description: "Principal-based injection in `ChatSocketController` that forcibly stamps messages with the authenticated user's ID, making identity spoofing mathematically impossible.",
            icon: "ShieldCheck"
        },
        {
            title: "Topic Segmentation",
            description: "Dynamic topic generation (e.g., `/topic/meetings.{id}`) that creates isolated cryptographic channels for each meeting context.",
            icon: "Layers"
        },
        {
            title: "Typing Ephemera",
            description: "Lightweight event streams for 'User is typing...' indicators that are broadcast in real-time but never persisted to the database to save I/O.",
            icon: "Activity"
        }
    ],
    codeSnippet: `// Secure WebSocket Routing
@MessageMapping("/chat.sendMessage/{meetingId}")
@SendTo("/topic/meetings.{meetingId}")
public ChatMessage sendMessage(
    @DestinationVariable Long meetingId,
    @Payload ChatMessage chatMessage,
    Principal principal
) {
    // Identity Enforcement
    if (principal == null) throw new SecurityException();
    chatMessage.setSender(principal.getName());

    // Persist & Broadcast
    return chatService.saveAndRelay(meetingId, chatMessage);
} `
};

export const schedulerSpotlight = {
    title: "Temporal Governance Engine",
    tagline: "Conflict-Free Meeting Orchestration",
    description: "A robust scheduling system that enforces temporal integrity. It autonomously resolves 1:1 chat initialization, prevents retroactive scheduling, and manages multi-participant availability.",
    techStack: ["Java Time API", "Spring Data JPA", "Event Publisher", "ModelMapper"],
    features: [
        {
            title: "Temporal Guardrails",
            description: "Logic in `MeetingService` that validates time horizons, blocking retroactive scheduling unless explicitly flagged as a 'Reschedule' event.",
            icon: "Clock"
        },
        {
            title: "Smart Context Resolution",
            description: "Bi-directional lookup algorithm (`findOrCreateOneToOneChat`) that prevents duplicate conversation threads between the same two users.",
            icon: "Brain"
        },
        {
            title: "Event Propagation",
            description: "Decoupled `MeetingCreatedEvent` emission that triggers async side effects (emails, notifications) without blocking the HTTP response.",
            icon: "Zap"
        },
        {
            title: "Atomic Persistence",
            description: "`@Transactional` boundaries ensure that complex multi-table updates (Meeting + Participants + Attachments) either all succeed or all fail.",
            icon: "Database"
        }
    ],
    codeSnippet: `// Smart 1:1 Context Resolution
public Meeting findOrCreateOneToOneChat(MeetingDTO dto) {
    String userA = dto.getParticipants().get(0).getEmail();
    String userB = dto.getParticipants().get(1).getEmail();

    // Bi-directional Lookup (A->B or B->A)
    var existing = repository.findOneToOne(userA, userB);
    if (!existing.isEmpty()) return existing.get(0);

    existing = repository.findOneToOne(userB, userA);
    if (!existing.isEmpty()) return existing.get(0);

    // Atomic Creation
    return saveOrUpdate(dto);
} `
};

export const spotlights = [featureSpotlight, geoSpotlight, securitySpotlight, messengerSpotlight, schedulerSpotlight];
