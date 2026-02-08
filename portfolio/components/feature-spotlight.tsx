"use client";

import { motion } from "framer-motion";
import { spotlights } from "@/lib/data";
import {
    ShieldCheck, Zap, Brain, Activity, Terminal, CheckCircle2, Cpu,
    Filter, Database, Globe, Layers, Lock, Cloud, Key, Shield
} from "lucide-react";

const FeatureSpotlight = () => {
    const icons: Record<string, any> = {
        ShieldCheck: <ShieldCheck size={24} />,
        Zap: <Zap size={24} />,
        Brain: <Brain size={24} />,
        Activity: <Activity size={24} />,
        Filter: <Filter size={24} />,
        Database: <Database size={24} />,
        Globe: <Globe size={24} />,
        Layers: <Layers size={24} />,
        Lock: <Lock size={24} />,
        Cloud: <Cloud size={24} />,
        Key: <Key size={24} />,
        Shield: <Shield size={24} />
    };

    return (
        <section id="spotlight" className="py-24 px-6 relative overflow-hidden bg-background/50">
            {/* Background Neural Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--alpha-primary)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-10" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {spotlights.map((spotlight, i) => (
                    <div key={spotlight.title} className="mb-40 last:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                                <Cpu size={14} className="animate-pulse" />
                                <span>Feature_Spotlight_{String(i + 1).padStart(2, '0')}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                                // {spotlight.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                {spotlight.tagline}
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Code Terminal Visualization - Keep dark for terminal look, but use border-border */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative rounded-xl border border-border bg-[#1e1e1e] overflow-hidden shadow-2xl shadow-primary/5 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                            >
                                {/* Terminal Header */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground ml-2">Core_Logic.java</div>
                                </div>

                                {/* Code Content */}
                                <div className="p-6 font-mono text-sm overflow-x-auto text-xs md:text-sm leading-relaxed text-gray-300">
                                    <pre className="language-java">
                                        <code dangerouslySetInnerHTML={{
                                            __html: spotlight.codeSnippet
                                                .replace(/</g, "&lt;")
                                                .replace(/>/g, "&gt;")
                                                .replace(/\/\/ (.*)/g, '<span class="text-gray-500">// $1</span>')
                                                .replace(/public/g, '<span class="text-purple-400">public</span>')
                                                .replace(/private/g, '<span class="text-purple-400">private</span>')
                                                .replace(/protected/g, '<span class="text-purple-400">protected</span>')
                                                .replace(/return/g, '<span class="text-purple-400">return</span>')
                                                .replace(/if/g, '<span class="text-purple-400">if</span>')
                                                .replace(/new/g, '<span class="text-purple-400">new</span>')
                                                .replace(/try/g, '<span class="text-purple-400">try</span>')
                                                .replace(/catch/g, '<span class="text-purple-400">catch</span>')
                                                .replace(/String/g, '<span class="text-yellow-300">String</span>')
                                                .replace(/int/g, '<span class="text-yellow-300">int</span>')
                                                .replace(/void/g, '<span class="text-yellow-300">void</span>')
                                                .replace(/null/g, '<span class="text-orange-400">null</span>')
                                        }} />
                                    </pre>
                                </div>

                                {/* Animated Scanline */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[100px] animate-scan pointer-events-none" />
                            </motion.div>

                            {/* Feature Grid */}
                            <div className={`space-y-8 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-muted-foreground leading-relaxed"
                                >
                                    {spotlight.description}
                                </motion.p>

                                <div className="grid gap-6">
                                    {spotlight.features.map((feature, idx) => (
                                        <motion.div
                                            key={feature.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                            className="flex gap-4 group"
                                        >
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                                {icons[feature.icon] || <Terminal size={20} />}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech Stack Chips */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-wrap gap-2 pt-4"
                                >
                                    {spotlight.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-mono text-primary/80">
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSpotlight;
