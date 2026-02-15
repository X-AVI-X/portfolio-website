"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
    Code2,
    Database,
    Cloud,
    Bot,
    Workflow,
    Sparkles,
    Box,
    ShieldCheck,
    Zap
} from "lucide-react";
import { useState } from "react";

// Map categories to modern glassmorphism icons
// Map categories to modern glassmorphism icons using primary-rgb for consistency
const iconMap: Record<string, any> = {
    "Languages & Core": <Code2 size={20} className="text-primary" />,
    "Frameworks": <Box size={20} className="text-primary" />,
    "Microservices": <Workflow size={20} className="text-primary" />,
    "Messaging & Real-Time": <Zap size={20} className="text-primary" />,
    "AI/ML Integration": <Bot size={20} className="text-primary" />,
    "Data & Storage": <Database size={20} className="text-primary" />,
    "Practices": <ShieldCheck size={20} className="text-primary" />,
    "DevOps": <Cloud size={20} className="text-primary" />,
    "Frontend": <Sparkles size={20} className="text-primary" />
};

const SkillChip = ({ name, index }: { name: string; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(var(--primary-rgb), 0.15)",
                borderColor: "rgba(var(--primary-rgb), 0.4)"
            }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="group relative px-2.5 py-1 rounded-md border border-border/40 bg-secondary/20 backdrop-blur-sm transition-all flex items-center gap-1.5 cursor-default"
        >
            <div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors animate-pulse" />
            <span className="text-[10px] font-mono font-medium text-foreground/70 group-hover:text-primary transition-colors whitespace-nowrap">
                {name}
            </span>
        </motion.div>
    );
};

const CategoryCard = ({ category, index }: { category: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    const gradients = [
        "from-blue-500/10 via-blue-500/5 to-transparent",
        "from-emerald-500/10 via-emerald-500/5 to-transparent",
        "from-purple-500/10 via-purple-500/5 to-transparent",
        "from-yellow-500/10 via-yellow-500/5 to-transparent",
        "from-orange-500/10 via-orange-500/5 to-transparent",
        "from-indigo-500/10 via-indigo-500/5 to-transparent",
        "from-red-500/10 via-red-500/5 to-transparent",
        "from-cyan-500/10 via-cyan-500/5 to-transparent",
        "from-pink-500/10 via-pink-500/5 to-transparent"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative p-5 rounded-xl border border-primary/10 bg-card/10 backdrop-blur-xl hover:bg-card/20 hover:border-primary/30 transition-all duration-500 flex flex-col min-h-[160px] shadow-[0_0_15px_rgba(var(--primary-rgb),0.02)]"
        >
            {/* Animated Background Abstractions */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                {/* Gradient Orb */}
                <motion.div
                    className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-bl ${gradients[index % gradients.length]} blur-2xl rounded-full`}
                    animate={isHovered ? {
                        scale: [1, 1.3, 1.2],
                        opacity: [0.3, 0.6, 0.5],
                        x: [0, -10, -5],
                        y: [0, 10, 5]
                    } : {
                        scale: 1,
                        opacity: 0.3
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Pulsing Dot Pattern */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:15px_15px] [--alpha-primary:white]"
                    animate={isHovered ? { opacity: 0.08 } : { opacity: 0.02 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Bottom Left Glow */}
                <motion.div
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                    animate={isHovered ? {
                        scale: [1, 1.4, 1.3],
                        opacity: [0.2, 0.4, 0.3]
                    } : {
                        scale: 1,
                        opacity: 0.2
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                {/* Floating Particles */}
                {isHovered && [...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            opacity: 0
                        }}
                        animate={{
                            y: [null, '-20px', '-40px'],
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Scanline Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%]"
                    animate={isHovered ? {
                        y: ['-100%', '0%']
                    } : {
                        y: '-100%'
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                    <div className="space-y-1 flex-1">
                        <h3 className="font-bold text-xs uppercase tracking-widest font-mono text-foreground/80 group-hover:text-primary transition-colors">
                            {category.category}
                        </h3>
                        <motion.div
                            className="h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"
                            animate={isHovered ? { width: '100%' } : { width: '40%' }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <motion.div
                        className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 shadow-inner"
                        animate={isHovered ? {
                            scale: 1.15,
                            backgroundColor: "rgba(var(--primary-rgb), 0.12)",
                            borderColor: "rgba(var(--primary-rgb), 0.3)",
                            rotate: [0, -5, 5, 0]
                        } : {
                            scale: 1,
                            rotate: 0
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {iconMap[category.category] || <Box size={20} />}
                    </motion.div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {category.items.map((skill: string, i: number) => (
                        <SkillChip key={skill} name={skill} index={i} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const SkillsMatrix = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden bg-background">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">01.</span>
                        KNOWLEDGE_GRAPH
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Distributed systems · AI Integration · Reactive Architectures
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skills.map((category, index) => (
                        <CategoryCard key={category.category} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
