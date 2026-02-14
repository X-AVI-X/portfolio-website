"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Phone, Heart, Terminal, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual EmailJS or API)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-background">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 border-l-2 border-primary/30 pl-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tighter text-glow">
                        <span className="text-primary font-mono mr-2 opacity-50 text-2xl">09.</span>
                        CONNECT_NODE
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-mono text-xs uppercase tracking-[0.3em] mb-12">
                        Open for opportunities and collaboration
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 rounded-xl border border-border bg-card/20 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 hover:bg-card/40 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]"
                    >
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 group-hover:text-primary transition-colors">
                            <Send size={20} className="text-primary" />
                            Send a Message
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <CheckCircle size={48} className="text-primary mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                                <p className="text-sm text-muted-foreground">
                                    Thanks for reaching out. I&apos;ll get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-xs text-muted-foreground font-mono block mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-primary/10 bg-background/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all focus:bg-primary/5"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground font-mono block mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-primary/10 bg-background/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all focus:bg-primary/5"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground font-mono block mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-primary/10 bg-background/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none focus:bg-primary/5"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1 }}
                                                className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Direct Contact */}
                        <div className="p-6 rounded-xl border border-primary/10 bg-card/20 backdrop-blur-sm card-hover hover:border-primary/30">
                            <h3 className="text-lg font-bold mb-4 font-mono">// Direct Contact</h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/10">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-mono">Mail_To</div>
                                        <div className="text-sm text-foreground">{personalInfo.email}</div>
                                    </div>
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/10">
                                        <Phone size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-mono">Call_To</div>
                                        <div className="text-sm text-foreground">{personalInfo.phone}</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-6 rounded-xl border border-primary/10 bg-card/20 backdrop-blur-sm card-hover hover:border-primary/30">
                            <h3 className="text-lg font-bold mb-4 font-mono">// Social Nodes</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-xl border border-primary/20 bg-background/50 hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
                                >
                                    <Github size={28} />
                                </motion.a>
                                <motion.a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 rounded-xl border border-primary/20 bg-background/50 hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
                                >
                                    <Linkedin size={28} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-primary/10 bg-background/50 backdrop-blur-md">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Terminal size={16} className="text-primary animate-pulse" />
                        <span className="font-mono text-primary/80">avijit.dev_</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center font-mono text-xs">
                        Built with <Heart size={14} className="inline text-primary animate-pulse mx-1" /> using Next.js & Tailwind
                    </p>
                    <p className="text-sm text-muted-foreground font-mono text-xs">
                        © {currentYear} Avijit Paul :: System_Online
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Contact, Footer };
