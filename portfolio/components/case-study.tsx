"use client";

import { motion } from "framer-motion";
import { caseStudy } from "@/lib/data";
import { Database, Zap, Activity } from "lucide-react";

const CaseStudy = () => {
    return (
        <section id="casestudy" className="py-24 px-6 relative bg-background">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                        <span className="text-primary font-mono mr-4">04.</span>
                        KERNEL_OPTIMIZATION
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Key Technical Case Study
                    </p>
                </motion.div>

                <div className="relative rounded-2xl border border-primary/20 bg-card shadow-2xl overflow-hidden p-8 md:p-12">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Database size={200} className="text-primary" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-8 text-primary">
                            {caseStudy.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Problem */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Activity size={14} className="text-red-500" />
                                    <span>Problem_Statement</span>
                                </div>
                                <p className="text-card-foreground leading-relaxed border-l-2 border-red-500/30 pl-4">
                                    {caseStudy.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Database size={14} className="text-blue-500" />
                                    <span>Technical_Solution</span>
                                </div>
                                <p className="text-card-foreground leading-relaxed border-l-2 border-blue-500/30 pl-4">
                                    {caseStudy.solution}
                                </p>
                            </div>

                            {/* Result */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                    <Zap size={14} className="text-green-500" />
                                    <span>Performance_Metric</span>
                                </div>
                                <p className="text-card-foreground leading-relaxed border-l-2 border-green-500/30 pl-4 font-bold text-lg">
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
