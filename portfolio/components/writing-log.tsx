"use client";

import { motion } from "framer-motion";
import { writing } from "@/lib/data";
import { FileText, Calendar, ArrowUpRight, Hash, Terminal } from "lucide-react";
import { useState } from "react";

const WritingLog = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="writing" className="py-24 px-6 relative overflow-hidden bg-background">
            {/* Ambient Background */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">08.</span>
                        ENGINEERING_LOG
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Technical Memos · System Design Notes · Build in Public
                    </p>
                </motion.div>

                {/* Terminal Window container for logs */}
                <div className="rounded-xl border border-primary/20 bg-[#0d1117] overflow-hidden shadow-2xl relative">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                            <Terminal size={12} />
                            <span>~/logs/public_builds</span>
                        </div>
                        <div className="w-10" /> {/* Spacer for centering */}
                    </div>

                    {/* Log Entries */}
                    <div className="divide-y divide-white/5 font-mono">
                        {writing.map((post, index) => (
                            <motion.a
                                key={post.id}
                                href={post.link}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="block p-6 hover:bg-white/[0.02] transition-colors group relative"
                            >
                                {/* Hover Glow Line */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-primary transform origin-left transition-transform duration-300 ${hoveredIndex === index ? 'scale-y-100' : 'scale-y-0'}`} />

                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Date Column */}
                                    <div className="w-32 shrink-0 flex items-center gap-2 text-xs text-muted-foreground/60 group-hover:text-primary/80 transition-colors pt-1">
                                        <Calendar size={12} />
                                        <span>{post.date}</span>
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                                {post.title}
                                                <ArrowUpRight size={14} className={`opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0 translate-x-0' : ''}`} />
                                            </h3>
                                            <span className="shrink-0 px-2 py-1 rounded text-[10px] uppercase tracking-wider border border-white/10 bg-white/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                                {post.category}
                                            </span>
                                        </div>

                                        <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-2xl">
                                            {post.summary}
                                        </p>

                                        {/* ID Tag */}
                                        <div className="pt-2 flex items-center gap-1 text-[10px] text-muted-foreground/40 font-mono">
                                            <Hash size={10} />
                                            {post.id}
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Terminal Footer */}
                    <div className="px-4 py-2 border-t border-white/5 bg-white/[0.02] text-[10px] text-muted-foreground/50 font-mono flex justify-between">
                        <span>-- INSERT MODEL --</span>
                        <span>{writing.length}L, {writing.reduce((acc, curr) => acc + curr.summary.length, 0)}C written</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WritingLog;
