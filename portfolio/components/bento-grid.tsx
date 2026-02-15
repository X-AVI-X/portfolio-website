"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowUpRight, Star, Code2, Layers, Rocket, Shield, MessageSquare } from "lucide-react";
import { useState, useRef } from "react";

const ProjectPreview = ({ index }: { index: number }) => {
    // Generate different abstract visuals based on project index
    const patterns = [
        "bg-[radial-gradient(circle_at_center,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:10px_10px]",
        "bg-[linear-gradient(45deg,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:15px_15px]",
        "bg-[repeating-linear-gradient(0deg,var(--alpha-primary)_0,var(--alpha-primary)_1px,transparent_0,transparent_10px)]",
        "bg-[radial-gradient(circle_at_20%_20%,_var(--alpha-primary)_0%,_transparent_50%)]"
    ];

    const icons = [<Layers size={40} key={1} />, <Rocket size={40} key={2} />, <Shield size={40} key={3} />, <MessageSquare size={40} key={4} />];

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
            {/* Pattern Layer */}
            <div className={`absolute inset-0 ${patterns[index % patterns.length]} [--alpha-primary:var(--primary)] text-primary/30`} />

            {/* Glowing Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />

            {/* Abstract Icon */}
            <div className="absolute bottom-4 right-4 text-primary/10">
                {icons[index % icons.length]}
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -top-full animate-scan opacity-50" />
        </div>
    );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const isFeatured = index === 0;
    const gridClass = isFeatured
        ? "md:col-span-2 md:row-span-2"
        : "md:col-span-1 md:row-span-1";

    const tiltX = mousePos.y * 15; // Max 15 degrees for cards
    const tiltY = -mousePos.x * 15;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
                rotateX: tiltX,
                rotateY: tiltY,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                rotateX: { type: "spring", damping: 20, stiffness: 200 },
                rotateY: { type: "spring", damping: 20, stiffness: 200 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className={`${gridClass} group relative rounded-xl border border-primary/20 bg-card/20 backdrop-blur-sm overflow-hidden card-hover flex flex-col perspective-1000 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]`}
        >
            {/* Background Aesthetic */}
            <ProjectPreview index={index} />

            {/* Content */}
            <div
                className="p-6 h-full flex flex-col relative z-20"
                style={{ transform: "translateZ(30px)" }} // Pop content out
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]">
                        {isFeatured ? <Star size={20} /> : <Code2 size={18} />}
                    </div>
                    <div className="flex gap-2">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                            whileHover={{ y: -2, translateZ: 20 }}
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                            whileHover={{ y: -2, translateZ: 20 }}
                        >
                            <ExternalLink size={18} />
                        </motion.a>
                    </div>
                </div>

                <div className="flex-1">
                    {isFeatured && (
                        <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 mb-2 inline-block tracking-widest uppercase">
                            Featured Infrastructure
                        </span>
                    )}
                    <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors text-foreground ${isFeatured ? "text-2xl" : "text-lg"}`}>
                        {project.title}
                    </h3>
                    <p className="text-sm text-foreground/80 line-clamp-2 font-medium leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.tech.slice(0, isFeatured ? 8 : 4).map((tag: string) => (
                        <span
                            key={tag}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/5 border border-primary/10 text-primary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]" />
        </motion.div>
    );
};

const BentoGrid = () => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden bg-muted/20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">06.</span>
                        DEPO_PROJECTS
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Selected microservices and distributed systems architecture
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href={"https://github.com/X-AVI-X"}
                        className="group flex items-center gap-2 px-8 py-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary font-mono text-sm tracking-widest transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                    >
                        VIEW_MORE_SYSTEMS
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
