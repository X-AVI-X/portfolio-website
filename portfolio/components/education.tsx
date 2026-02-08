"use client";

import { motion } from "framer-motion";
import { education, leadership } from "@/lib/data";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="text-primary font-mono mr-4">04.</span>
                        BOOT_SEQUENCE (EDU)
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-widest">
                        Academic background and professional certifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Degree Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm card-hover relative overflow-hidden"
                    >
                        {/* Background Ornament */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                        <div className="flex items-start gap-6 relative z-10">
                            <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                <GraduationCap size={32} />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 uppercase tracking-widest font-bold">
                                        Degree
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                                        <Calendar size={12} />
                                        <span>{education.degree.period}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{education.degree.title}</h3>
                                <p className="text-lg text-foreground/80 mb-2 font-medium">{education.degree.institution}</p>
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                                    <MapPin size={14} />
                                    <span>{education.degree.location}</span>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-border/50">
                                    <div className="flex items-start gap-3">
                                        <BookOpen size={18} className="text-primary shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-primary/80 mb-1">Thesis</h4>
                                            <p className="text-sm text-foreground/70 italic">&quot;{education.degree.thesis}&quot;</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Award size={18} className="text-primary shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-primary/80 mb-1">Achievement</h4>
                                            <p className="text-sm text-foreground/70">{education.degree.achievement}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <div className="space-y-6">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs font-bold font-mono uppercase tracking-[0.4em] text-muted-foreground mb-4"
                        >
                            Veriffed_Certifications
                        </motion.h3>

                        <div className="grid gap-4">
                            {education.certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="p-4 rounded-xl border border-border bg-card/20 backdrop-blur-sm card-hover flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 rounded-lg bg-secondary/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 border border-transparent group-hover:border-primary/20">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{cert.name}</h4>
                                            <p className="text-xs text-muted-foreground font-mono">{cert.issuer} • {cert.year}</p>
                                        </div>
                                    </div>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent"
                                        whileHover={{ x: 2, y: -2 }}
                                    >
                                        <ExternalLink size={16} />
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="mt-16">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold font-mono uppercase tracking-[0.4em] text-muted-foreground mb-8 text-center"
                    >
                        Leadership_&_Activities
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {leadership.map((item, index) => (
                            <motion.div
                                key={item.organization}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl border border-border bg-card/20 backdrop-blur-sm card-hover relative group overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.organization}</h4>
                                            <p className="text-sm text-muted-foreground font-mono">{item.role}</p>
                                        </div>
                                        <span className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground border border-border/50">
                                            {item.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
