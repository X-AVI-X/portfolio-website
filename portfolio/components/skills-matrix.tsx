"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
    Code2,
    Terminal,
    Database,
    Cloud,
    Bot,
    Cpu,
    Layers,
    Workflow,
    Sparkles
} from "lucide-react";

// Map categories to icons
const iconMap: Record<string, any> = {
    "Languages & Core": <Code2 size={24} />,
    "Frameworks": <Layers size={24} />,
    "Microservices": <Workflow size={24} />,
    "Data & Storage": <Database size={24} />,
    "DevOps": <Cloud size={24} />,
    "AI/ML Integration": <Bot size={24} />,
    "Messaging & Real-Time": <Cpu size={24} />,
    "Frontend": <Sparkles size={24} />
};

// Map skills to proficiency percentages
const proficiencyMap: Record<string, number> = {
    "Java 17+": 95,
    "Spring Boot 3.x": 92,
    "Spring Security": 88,
    "Spring Data JPA": 90,
    "Spring Cloud": 85,
    "Python": 75,
    "TypeScript": 80,
    "SQL": 85,
    "PostgreSQL": 88,
    "Redis": 82,
    "Docker": 85,
    "Kubernetes": 70,
    "Kafka": 75,
    "RabbitMQ": 80,
    "React": 78,
    "Next.js 14+": 82,
    "Spring AI": 65,
    "Ollama": 70,
    "LLM Tool-Calling": 72,
    "Conversational Memory": 68,
    "Eureka": 85,
    "API Gateway": 88,
    "Feign Client": 90
};

const SkillsMatrix = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="text-primary font-mono mr-4">02.</span>
                        TECH_STACK
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Technologies I work with daily to build scalable systems
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm card-hover flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                    {iconMap[category.category] || <Terminal size={24} />}
                                </div>
                                <h3 className="font-bold text-sm uppercase tracking-wider font-mono">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="space-y-4 flex-1">
                                {category.items.map((skill, i) => {
                                    const proficiency = proficiencyMap[skill] || 70;
                                    return (
                                        <div key={skill} className="group">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[11px] font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                                    {skill}
                                                </span>
                                                <span className="text-[10px] font-mono text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {proficiency}%
                                                </span>
                                            </div>
                                            <div className="h-1 bg-secondary rounded-full overflow-hidden border border-border/20">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${proficiency}%` }}
                                                    viewport={{ once: false, amount: 0.5 }}
                                                    transition={{ duration: 1, delay: 0.2 + (i * 0.05) }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Category Accent */}
                            <div className="mt-6 pt-4 border-t border-border/50">
                                <div className="flex gap-1 justify-end">
                                    {[...Array(3)].map((_, i) => {
                                        // Category-specific mastery levels
                                        const mastery = category.category === "Languages & Core" ||
                                            category.category === "Frameworks" ||
                                            category.category === "Microservices" ||
                                            category.category === "Data & Storage" ? 3 : 2;
                                        return (
                                            <div key={i} className={`w-1 h-1 rounded-full ${i < mastery ? 'bg-primary' : 'bg-primary/20'}`} />
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
