"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const ExperienceCard = ({ item, isActive = false }: { item: any; isActive?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={`relative group rounded-2xl border transition-all duration-700 flex flex-col overflow-hidden
                ${isActive
                    ? 'border-primary/40 bg-card/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.07]'
                } backdrop-blur-2xl`}
            whileHover={{ y: -8, scale: 1.005 }}
            layout
        >
            {/* Background Accent Glows */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full -mr-24 -mt-24 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />
            <div className={`absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full -ml-16 -mb-16 transition-opacity duration-700 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'}`} />

            <div className="p-8 relative z-10">
                {/* Header: Role & Status */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className={`text-2xl font-bold tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                {item.role}
                            </h3>
                            {isActive && (
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                            )}
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground/80">
                            <div className="p-1.5 rounded-md bg-white/5 border border-white/10">
                                <Briefcase size={14} className={isActive ? 'text-primary' : ''} />
                            </div>
                            <span className="tracking-wide uppercase text-[11px] font-bold">{item.company}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <div className={`px-4 py-1.5 rounded-lg border text-[10px] font-black font-mono tracking-[0.2em] shadow-sm transition-all duration-500 ${item.type === 'current'
                            ? 'bg-primary/10 text-primary border-primary/30'
                            : 'bg-white/5 text-muted-foreground/60 border-white/10'
                            }`}>
                            {item.type === 'current' ? 'SYSTEM_ACTIVE' : 'LEGACY_NODE'}
                        </div>
                        <div className="flex items-center gap-4 text-[10px] text-muted-foreground/40 font-mono uppercase tracking-[0.15em]">
                            <div className="flex items-center gap-2">
                                <Calendar size={12} className="opacity-50" />
                                <span>{item.period}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Impact Summary */}
                <div className="relative mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3/4 bg-primary/40 rounded-full" />
                    <p className="text-[15px] leading-relaxed text-foreground/80 pl-4 font-medium italic">
                        "{item.summary}"
                    </p>
                </div>

                {/* Technical Deep Dive (Expanded) */}
                <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <div className="space-y-8 pt-6 border-t border-white/5 mt-2">
                        {item.projects.map((proj: any, idx: number) => (
                            <div key={proj.name} className="group/proj">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-primary transition-all group-hover/proj:border-primary/30">
                                        0{idx + 1}
                                    </div>
                                    <h4 className="text-xs font-black text-foreground/90 uppercase tracking-[0.2em]">
                                        {proj.name}
                                    </h4>
                                </div>
                                <div className="grid grid-cols-1 gap-3 pl-12">
                                    {proj.points.map((p: string, i: number) => (
                                        <div key={i} className="flex gap-4 group/point">
                                            <div className="mt-2 h-[1px] w-3 bg-primary/20 transition-all group-hover/point:w-5 group-hover/point:bg-primary/50" />
                                            <p className="text-[13px] text-muted-foreground/80 leading-relaxed group-hover/point:text-foreground/90 transition-colors">
                                                {p}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Actions & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-6 mt-8 pt-6 border-t border-white/5">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`group/btn relative px-8 py-3 rounded-xl overflow-hidden transition-all duration-500 flex items-center gap-3 text-[11px] font-bold tracking-widest
                            ${isExpanded
                                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]'
                                : 'bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/10 hover:text-foreground'}
                        `}
                    >
                        <span className="relative z-10">{isExpanded ? 'COLLAPSE_LOGS' : 'PEEK_SYSTEM_REPORTS'}</span>
                        <ChevronRight size={16} className={`relative z-10 transform transition-transform duration-500 ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                        {!isExpanded && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                        )}
                    </button>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground/40 font-mono font-bold">
                            <MapPin size={12} className="text-primary/40" />
                            <span>{item.location}</span>
                        </div>
                    </div>
                </div>
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
                    className="mb-6 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">02.</span>
                        CAREER_STREAM
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Evolution of System Architecture Expertise
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto pb-32">
                    {/* The Snaking River Background - Tightened and Aligned */}
                    <div className="absolute inset-0 pointer-events-none overflow-visible">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1000 1400"
                            preserveAspectRatio="none"
                            className="hidden lg:block overflow-visible"
                        >
                            <defs>
                                <filter id="riverClearDistortion">
                                    <feTurbulence type="turbulence" baseFrequency="0.05 0.05" numOctaves="2" seed="1" result="ripple">
                                        <animate attributeName="baseFrequency" values="0.05 0.05; 0.05 0.07; 0.05 0.05" dur="10s" repeatCount="indefinite" />
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="ripple" scale="8" xChannelSelector="R" yChannelSelector="G" />
                                </filter>

                                <linearGradient id="clearWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#22d3ee" stopOpacity="0.4" />
                                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8" />
                                    <stop offset="90%" stopColor="#22d3ee" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                                </linearGradient>

                                <linearGradient id="causticHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Main Snaking Path: Starts at 0, Terminate precisely above Future Box */}
                            <path
                                id="snakePath"
                                d="M 500 0 C 500 150, 650 150, 650 300 C 650 500, 350 500, 350 700 C 350 900, 650 900, 650 1100 C 650 1250, 500 1250, 500 1240"
                                fill="none"
                                stroke="#0ea5e9"
                                strokeWidth="35"
                                className="opacity-[0.03]"
                                filter="url(#riverClearDistortion)"
                            />

                            {/* Volumetric Layered Flow */}
                            {[...Array(3)].map((_, i) => (
                                <motion.path
                                    key={`flow-${i}`}
                                    d="M 500 0 C 500 150, 650 150, 650 300 C 650 500, 350 500, 350 700 C 350 900, 650 900, 650 1100 C 650 1250, 500 1250, 500 1240"
                                    fill="none"
                                    stroke={i % 2 === 0 ? "#22d3ee" : "#0ea5e9"}
                                    strokeWidth={20 - i * 5}
                                    className="opacity-[0.1]"
                                    filter="url(#riverClearDistortion)"
                                    animate={{
                                        strokeWidth: [20 - i * 5, 23 - i * 5, 20 - i * 5],
                                        opacity: [0.08, 0.12, 0.08]
                                    }}
                                    transition={{ duration: 6 + i, repeat: Infinity }}
                                />
                            ))}

                            {/* The Moving Current */}
                            <motion.path
                                d="M 500 0 C 500 150, 650 150, 650 300 C 650 500, 350 500, 350 700 C 350 900, 650 900, 650 1100 C 650 1250, 500 1250, 500 1240"
                                fill="none"
                                stroke="url(#clearWaterGradient)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                filter="url(#riverClearDistortion)"
                                strokeDasharray="300, 900"
                                animate={{ strokeDashoffset: [1200, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ mixBlendMode: 'screen', opacity: 0.5 }}
                            />

                            {/* Caustic Shimmer */}
                            <motion.path
                                d="M 500 0 C 500 150, 650 150, 650 300 C 650 500, 350 500, 350 700 C 350 900, 650 900, 650 1100 C 650 1250, 500 1250, 500 1240"
                                fill="none"
                                stroke="url(#causticHighlight)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                filter="url(#riverClearDistortion)"
                                strokeDasharray="50, 150"
                                animate={{ strokeDashoffset: [1200, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                style={{ mixBlendMode: 'overlay', opacity: 0.4 }}
                            />
                        </svg>
                    </div>

                    {/* Job "Ports" along the River Flow */}
                    <div className="flex flex-col gap-12 lg:gap-20 px-4 relative z-20">
                        {/* 0. Graduation - Start Point */}
                        <div className="flex justify-center mb-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md flex items-center gap-3 relative z-30"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary">GRADUATION_2022</span>
                            </motion.div>
                        </div>

                        {/* 1. Square - Start Region (Top Right) */}
                        <div className="flex flex-col lg:flex-row items-center justify-end lg:pr-[5%]">
                            <div className="w-full lg:w-[65%] relative group">
                                <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-primary/20 hidden lg:block" />
                                <div className="absolute -left-6 top-1/2 w-3 h-3 rounded-full bg-cyan-400/30 border border-cyan-400 animate-pulse hidden lg:block -translate-y-1/2" />
                                <ExperienceCard item={square} />
                            </div>
                        </div>

                        {/* 2. BJIT - Mid Region (Middle Left) */}
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:pl-[5%]">
                            <div className="w-full lg:w-[65%] relative group">
                                <div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-primary/20 hidden lg:block" />
                                <div className="absolute -right-6 top-1/2 w-3 h-3 rounded-full bg-cyan-400/30 border border-cyan-400 animate-pulse hidden lg:block -translate-y-1/2" />
                                <ExperienceCard item={bjit} />
                            </div>
                        </div>

                        {/* 3. ODCL - Destination Region (Bottom Right) */}
                        <div className="flex flex-col lg:flex-row items-center justify-end lg:pr-[5%]">
                            <div className="w-full lg:w-[65%] relative group">
                                <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-primary/50 hidden lg:block" />
                                <div className="absolute -left-6 top-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_var(--primary)] hidden lg:block -translate-y-1/2" />
                                <ExperienceCard item={odcl} isActive={true} />
                            </div>
                        </div>

                        {/* 4. Future - Destination Point */}
                        <div className="flex justify-center mt-24">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="px-10 py-5 rounded-2xl bg-primary/10 border border-primary/40 backdrop-blur-md flex flex-col items-center gap-1.5 group hover:border-primary/60 transition-all duration-500 relative z-30"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_15px_var(--primary)] mb-1 animate-pulse" />
                                <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-primary">FUTURE_BEYOND</span>
                                <span className="text-[9px] font-mono text-muted-foreground uppercase opacity-60">System Architect · Tech Lead</span>
                                <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
