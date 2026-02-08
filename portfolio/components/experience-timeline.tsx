"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, ExternalLink, GitCommit, GitBranch } from "lucide-react";

const ExperienceTimeline = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="text-primary font-mono mr-4">03.</span>
                        GIT_LOG --EXP
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        A history of my professional commit history across platforms
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line - Git Branch Style */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.company}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Commit Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,255,128,0.3)]">
                                    <GitCommit size={14} className="text-primary animate-pulse" />
                                </div>

                                {/* Content Side */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                                    <div className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm card-hover group">
                                        {/* Company & Date */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                    {item.role}
                                                </h3>
                                                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                                                    <Briefcase size={14} />
                                                    <span>{item.company}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                                                    <Calendar size={12} />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                                                    <MapPin size={12} />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Core Summary */}
                                        <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                                            {item.summary}
                                        </p>

                                        {/* Projects/Commits */}
                                        <div className="space-y-4">
                                            {item.projects.map((proj, i) => (
                                                <div key={proj.name} className="relative pl-6 py-1">
                                                    <div className="absolute left-0 top-3 w-4 h-[1px] bg-primary/40" />
                                                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-primary/40" />
                                                    <h4 className="text-xs font-bold text-primary flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                                                        <GitBranch size={10} />
                                                        {proj.name}
                                                    </h4>
                                                    <ul className="space-y-1.5">
                                                        {proj.points.map((p, j) => (
                                                            <li key={j} className="text-[11px] text-muted-foreground leading-snug">
                                                                {p}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* External Link Overlay */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ExternalLink size={14} className="text-primary/50" />
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space on other side for desktop */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
