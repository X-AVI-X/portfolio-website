"use client";

import { motion } from "framer-motion";
import { education, leadership } from "@/lib/data";
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 relative overflow-hidden bg-transparent">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">07.</span>
                        ACADEMIC_LOG
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em]">
                        Foundational Knowledge & Certified Expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Degree Card - Spans 2 cols */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="h-full p-8 rounded-2xl border border-primary/20 bg-card/20 backdrop-blur-md relative overflow-hidden group hover:bg-card/30 hover:border-primary/40 transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]"
                        >
                            {/* Decorative Background */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        <GraduationCap size={32} />
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10 border border-primary/20">
                                            {education.degree.period}
                                        </span>
                                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                                            <MapPin size={10} /> {education.degree.location}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {education.degree.title}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-6 font-medium">
                                    {education.degree.institution}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary/10">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                                            <BookOpen size={14} />
                                            <span>Thesis</span>
                                        </div>
                                        <p className="text-sm text-foreground/80 leading-relaxed italic">
                                            &quot;{education.degree.thesis}&quot;
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                                            <Award size={14} />
                                            <span>Achievement</span>
                                        </div>
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            {education.degree.achievement}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Certifications & Leadership - Col 3 */}
                    <div className="space-y-6">
                        {/* Certifications Header */}
                        <div className="flex items-center gap-2 mb-2">
                            <Award size={16} className="text-primary" />
                            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                Certifications
                            </h3>
                        </div>

                        {education.certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="p-4 rounded-xl border border-primary/10 bg-card/10 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="flex justify-between items-start gap-3">
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                                            {cert.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                            <span>{cert.issuer}</span>
                                            <span className="w-1 h-1 rounded-full bg-primary/20" />
                                            <span>{cert.year}</span>
                                        </div>
                                        {(cert as any).score && (
                                            <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
                                                {(cert as any).score}
                                            </div>
                                        )}
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        {/* Leadership Mini-Section */}
                        <div className="pt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Award size={16} className="text-primary" />
                                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                    Leadership
                                </h3>
                            </div>
                            <div className="grid gap-3">
                                {leadership.slice(0, 1).map((item) => (
                                    <div key={item.organization} className="p-4 rounded-xl border border-primary/10 bg-card/10 hover:border-primary/20 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-xs text-foreground group-hover:text-primary transition-colors">{item.organization}</span>
                                            <span className="text-[10px] font-mono text-muted-foreground">{item.period}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {item.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
