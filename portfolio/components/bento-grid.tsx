"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowUpRight, Star, Code2, Layers, Cpu, Globe } from "lucide-react";

const ProjectPreview = ({ index }: { index: number }) => {
    // Generate different abstract visuals based on project index
    const patterns = [
        "bg-[radial-gradient(circle_at_center,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:10px_10px]",
        "bg-[linear-gradient(45deg,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:15px_15px]",
        "bg-[repeating-linear-gradient(0deg,var(--alpha-primary)_0,var(--alpha-primary)_1px,transparent_0,transparent_10px)]",
        "bg-[radial-gradient(circle_at_20%_20%,_var(--alpha-primary)_0%,_transparent_50%)]"
    ];

    const icons = [<Layers size={40} key={1} />, <Cpu size={40} key={2} />, <Globe size={40} key={3} />, <Code2 size={40} key={4} />];

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
            {/* Pattern Layer */}
            <div className={`absolute inset-0 ${patterns[index % patterns.length]} [--alpha-primary:oklch(0.85_0.25_130_/_0.05)]`} />

            {/* Glowing Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />

            {/* Abstract Icon */}
            <div className="absolute bottom-4 right-4 text-primary/20">
                {icons[index % icons.length]}
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -top-full animate-scan opacity-50" />
        </div>
    );
};

const BentoGrid = () => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="text-primary font-mono mr-4">01.</span>
                        DEPO_PROJECTS
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Selected microservices and distributed systems architecture
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {projects.map((project, index) => {
                        const isFeatured = index === 0;
                        const gridClass = isFeatured
                            ? "md:col-span-2 md:row-span-2"
                            : "md:col-span-1 md:row-span-1";

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${gridClass} group relative rounded-xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden card-hover flex flex-col`}
                            >
                                {/* Background Aesthetic */}
                                <ProjectPreview index={index} />

                                {/* Content */}
                                <div className="p-6 h-full flex flex-col relative z-20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                            {isFeatured ? <Star size={20} /> : <Code2 size={18} />}
                                        </div>
                                        <div className="flex gap-2">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                                                whileHover={{ y: -2 }}
                                            >
                                                <Github size={18} />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                                                whileHover={{ y: -2 }}
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
                                        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${isFeatured ? "text-2xl" : "text-lg"}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2 font-medium">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="mt-4 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                                        {project.tech.slice(0, isFeatured ? 8 : 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary/50 border border-border/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href={"https://github.com/X-AVI-X"} // Placeholder to main github
                        className="group flex items-center gap-2 px-8 py-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary font-mono text-sm tracking-widest transition-all"
                    >
                        VIEW_MORE_SYSTEMS
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section >
    );
};

export default BentoGrid;
