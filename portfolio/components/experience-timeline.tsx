"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const ExperienceCard = ({ item, isActive = false }: { item: any; isActive?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={`relative group rounded-xl border bg-card/40 backdrop-blur-sm transition-all duration-500 flex flex-col overflow-hidden
                ${isActive
                    ? 'border-cyan-500/50 bg-cyan-950/10 shadow-[0_0_30px_rgba(0,255,255,0.1)]'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
            whileHover={{ y: -5 }}
        >
            {/* Active Glow */}
            {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
            )}

            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                        <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-cyan-400' : 'text-foreground group-hover:text-cyan-400'} transition-colors`}>
                            {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                            <Briefcase size={14} className={isActive ? 'text-cyan-500' : ''} />
                            <span className={isActive ? 'text-cyan-100' : ''}>{item.company}</span>
                        </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border whitespace-nowrap ${item.type === 'current'
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                        : 'bg-secondary/50 text-muted-foreground border-white/10'
                        }`}>
                        {item.type === 'current' ? 'CURRENT' : item.period.split(' ')[0]}
                    </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                    </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {item.summary}
                </p>

                {/* Projects Section */}
                <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="space-y-4 pt-4 border-t border-white/10">
                        {item.projects.map((proj: any) => (
                            <div key={proj.name}>
                                <h4 className="text-xs font-bold text-cyan-400 mb-2 font-mono uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    {proj.name}
                                </h4>
                                <ul className="space-y-1.5 pl-3.5 border-l border-white/10">
                                    {proj.points.map((p: string, i: number) => (
                                        <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full mt-4 py-2 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors border-t border-white/5"
                >
                    {isExpanded ? 'COLLAPSE DETAILS' : 'EXPAND DETAILS'}
                    <ChevronRight size={12} className={`transform transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                </button>
            </div>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    // Ensuring specific order: ODCL [0], BJIT [1], Square [2]
    const odcl = experience[0];
    const bjit = experience[1];
    const square = experience[2];

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden bg-muted/20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">02.</span>
                        CAREER_STREAM
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Evolution of System Architecture Expertise
                    </p>
                </motion.div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* SVG Connector Layer - Visible Flow */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-visible"
                        style={{ zIndex: 0 }}
                        viewBox="0 0 1000 800"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0891b2" stopOpacity="0" />
                                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* 
                           Coordinates mapping (approximate for layout):
                           Grid is roughly: 
                           Left Col Center: x=250, y=400 
                           Right Col Top: x=750, y=200
                           Right Col Bottom: x=750, y=600
                           
                           Flow: Square (Right Bot) -> BJIT (Right Top) -> ODCL (Left Center)
                           Path: Start(750, 600) -> Up to (750, 200) -> Curve to (250, 400)
                        */}

                        {/* Background Path (Dim) */}
                        <path
                            d="M 750 630 L 750 150 C 750 150 750 400 250 400"
                            fill="none"
                            stroke="rgba(6, 182, 212, 0.1)"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />

                        {/* Animated Flow Path */}
                        <motion.path
                            d="M 750 630 L 750 150 C 750 150 750 400 250 400"
                            fill="none"
                            stroke="url(#flowGradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {/* Continuous Flow Particles */}
                        <circle r="6" fill="#22d3ee" filter="url(#glow)">
                            <animateMotion
                                dur="3s"
                                repeatCount="indefinite"
                                path="M 750 630 L 750 150 C 750 150 750 400 250 400"
                                keyPoints="0;1"
                                keyTimes="0;1"
                                calcMode="linear"
                            />
                        </circle>
                        <circle r="4" fill="#a5f3fc" filter="url(#glow)">
                            <animateMotion
                                dur="3s"
                                begin="1.5s"
                                repeatCount="indefinite"
                                path="M 750 630 L 750 150 C 750 150 750 400 250 400"
                                keyPoints="0;1"
                                keyTimes="0;1"
                                calcMode="linear"
                            />
                        </circle>
                    </svg>

                    {/* Column 1: ODCL (Latest) */}
                    <div className="relative z-10 order-1 lg:order-1 flex flex-col justify-center h-full">
                        <div className="relative">
                            <div className="absolute -left-12 top-1/2 w-8 h-[2px] bg-cyan-500/50 hidden lg:block" />
                            <div className="absolute -left-12 top-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] -translate-y-1/2 hidden lg:block" />
                            <ExperienceCard item={odcl} isActive={true} />
                        </div>
                    </div>

                    {/* Column 2: BJIT (Top) & Square (Bottom) */}
                    <div className="relative z-10 order-2 lg:order-2 flex flex-col gap-12 lg:gap-24">
                        {/* BJIT */}
                        <div className="relative">
                            <div className="absolute -right-12 top-1/2 w-8 h-[2px] bg-cyan-500/20 hidden lg:block" />
                            <ExperienceCard item={bjit} />
                        </div>

                        {/* Square */}
                        <div className="relative">
                            <div className="absolute -right-12 top-1/2 w-8 h-[2px] bg-cyan-500/20 hidden lg:block" />
                            <ExperienceCard item={square} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
