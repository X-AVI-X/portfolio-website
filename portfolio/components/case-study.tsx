"use client";

import { motion } from "framer-motion";
import { caseStudy } from "@/lib/data";
import { Database, Zap, Activity } from "lucide-react";

const CaseStudy = () => {
    return (
        <section id="casestudy" className="py-24 px-6 relative bg-background overflow-hidden ">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">05.</span>
                        KERNEL_OPTIMIZATION
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Key Technical Case Study
                    </p>
                </motion.div>

                <div className="relative rounded-2xl border border-primary/20 bg-card/20 backdrop-blur-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)] overflow-hidden p-8 md:p-12 hover:border-primary/40 transition-all duration-500 group/cs">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/cs:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Database size={200} className="text-primary" />
                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />


                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-8 text-primary font-mono tracking-tight">
                            {caseStudy.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Problem */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Activity size={14} className="text-red-500" />
                                    <span>Problem_Statement</span>
                                </div>
                                <p className="text-foreground/90 leading-relaxed border-l-2 border-red-500/30 pl-4">
                                    {caseStudy.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Database size={14} className="text-blue-500" />
                                    <span>Technical_Solution</span>
                                </div>
                                <p className="text-foreground/90 leading-relaxed border-l-2 border-blue-500/30 pl-4">
                                    {caseStudy.solution}
                                </p>
                            </div>

                            {/* Result */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Zap size={14} className="text-green-500" />
                                    <span>Performance_Metric</span>
                                </div>
                                <p className="text-foreground/90 leading-relaxed border-l-2 border-green-500/30 pl-4 font-bold text-lg">
                                    {caseStudy.result}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
