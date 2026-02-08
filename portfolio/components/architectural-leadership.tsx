"use client";

import { motion } from "framer-motion";
import { architecturalLeadership } from "@/lib/data";
import { Server, ShieldCheck, Scale, Terminal } from "lucide-react";

const ArchitecturalLeadership = () => {
    const icons = [
        <Server size={24} key="server" />,
        <ShieldCheck size={24} key="shield" />,
        <Scale size={24} key="scale" />,
        <Terminal size={24} key="terminal" />,
    ];

    return (
        <section id="leadership" className="py-24 px-6 relative bg-muted/20">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                        <span className="text-primary font-mono mr-4">03.</span>
                        SYSTEM_ARCH (LEADERSHIP)
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Engineering standards and architectural strategy
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {architecturalLeadership.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-xl border border-border bg-card shadow-sm card-hover relative group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    {icons[index % icons.length]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-card-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitecturalLeadership;
