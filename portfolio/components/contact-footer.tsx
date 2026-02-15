"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Phone, Heart, Terminal, Send, CheckCircle, X } from "lucide-react";
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

        try {
            // Ensure animation is seen by adding a minimum delay
            const [response] = await Promise.all([
                fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formState),
                }),
                new Promise(resolve => setTimeout(resolve, 1500))
            ]);

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Submission error:", error);
            alert("Oops! Something went wrong. Please try again later or contact me directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden bg-background">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Futuristic Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Left: Text Content & Status */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-12 bg-primary/50" />
                                <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase">Connect_Node</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
                                LET&apos;S <span className="text-glow text-primary italic">SYNC</span> OUR SYSTEMS.
                            </h2>
                            <p className="text-muted-foreground text-lg font-medium max-w-md leading-relaxed">
                                I&apos;ve eliminated the lag of email. Use this terminal to push a secure packet directly to current active handheld device.
                            </p>
                        </motion.div>

                        {/* Signal Visualization */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-primary/10 bg-card/10 backdrop-blur-xl relative overflow-hidden group mb-12"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1 items-end h-6">
                                        <motion.div animate={{ height: [12, 24, 16] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-primary/40 rounded-full" />
                                        <motion.div animate={{ height: [20, 10, 24] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-primary/60 rounded-full" />
                                        <motion.div animate={{ height: [15, 24, 10] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-primary rounded-full" />
                                        <motion.div animate={{ height: [24, 12, 20] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-1 bg-primary/50 rounded-full" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary/80 uppercase">Satellite_Link: Operational</span>
                                </div>
                                <span className="text-[10px] font-mono text-muted-foreground">LATENCY: 184ms</span>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 group-hover/item:border-primary/40 transition-colors">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase tracking-widest">Secure_Relay</div>
                                        <div className="text-sm font-bold text-foreground truncate">{personalInfo.email}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 group-hover/item:border-primary/40 transition-colors">
                                        <Phone size={20} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase tracking-widest">Direct_Comms</div>
                                        <div className="text-sm font-bold text-foreground">{personalInfo.phone}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Wave */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-primary/5 rounded-full animate-ping" />
                        </motion.div>

                        {/* Social Links Sub-section */}
                        <div className="flex gap-4">
                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 rounded-xl border border-primary/20 bg-background/50 hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 rounded-xl border border-primary/20 bg-background/50 hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Right: Premium Form Card */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-card/30 backdrop-blur-2xl rounded-3xl border border-white/10 dark:border-primary/10 p-1 shadow-2xl relative"
                        >
                            {/* Inner Glass Layer */}
                            <div className="bg-background/40 rounded-[1.4rem] p-8 md:p-10 relative overflow-hidden">
                                {isSubmitting ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="py-20 flex flex-col items-center justify-center relative overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between w-full max-w-[300px] mb-12 relative">
                                            {/* Client Terminal */}
                                            <div className="flex flex-col items-center gap-2 z-10">
                                                <div className="w-12 h-20 rounded-xl border-2 border-muted-foreground/30 bg-background/50 flex items-center justify-center">
                                                    <Terminal size={20} className="text-muted-foreground/50" />
                                                </div>
                                                <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">User_Terminal</span>
                                            </div>

                                            {/* Network Path */}
                                            <div className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

                                            {/* Flying Letter */}
                                            <motion.div
                                                initial={{ left: "10%", opacity: 0, scale: 0.5 }}
                                                animate={{
                                                    left: ["10%", "50%", "90%"],
                                                    opacity: [0, 1, 1, 0],
                                                    scale: [0.5, 1.2, 0.5],
                                                    rotate: [0, 10, -10, 0]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute top-6 z-20"
                                            >
                                                <div className="p-2 rounded-lg bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] text-primary-foreground">
                                                    <Send size={16} />
                                                </div>
                                            </motion.div>

                                            {/* Avijit's Phone */}
                                            <div className="flex flex-col items-center gap-2 z-10">
                                                <motion.div
                                                    animate={{ rotate: [0, -5, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.5 }}
                                                    className="w-12 h-20 rounded-xl border-2 border-primary bg-primary/10 flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                                                >
                                                    <Phone size={20} className="text-primary" />
                                                </motion.div>
                                                <span className="text-[8px] font-mono text-primary uppercase tracking-widest font-bold">Avijit_Handheld</span>
                                            </div>
                                        </div>

                                        <div className="text-center space-y-3">
                                            <div className="flex items-center justify-center gap-2">
                                                <motion.div
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ repeat: Infinity, duration: 1 }}
                                                    className="w-1.5 h-1.5 rounded-full bg-primary"
                                                />
                                                <h3 className="text-sm font-mono font-bold tracking-[0.2em] text-primary uppercase animate-pulse">
                                                    SYCHRONIZING_SYNC_DATA...
                                                </h3>
                                            </div>
                                            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                                                Relaying through secure satellite node [202.72.4.18]
                                            </p>
                                        </div>

                                        {/* Background Binary Stream */}
                                        <div className="absolute inset-x-0 bottom-0 top-1/2 overflow-hidden opacity-10 pointer-events-none">
                                            <motion.div
                                                animate={{ y: [0, -200] }}
                                                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                                                className="text-[10px] font-mono space-y-1"
                                            >
                                                {Array.from({ length: 10 }).map((_, i) => (
                                                    <div key={i}>{Math.random().toString(2).slice(2, 22)}</div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ) : isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-8 text-center flex flex-col items-center relative"
                                    >
                                        {/* Dismiss Button */}
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="absolute top-0 right-0 p-2 text-muted-foreground hover:text-primary transition-colors group"
                                            title="Close"
                                        >
                                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                        </button>
                                        {/* The "Pocket Ping" Animation */}
                                        <div className="relative mb-12">
                                            {/* Pulsing Concentric Circles (The "Ping") */}
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: [0, 0.4, 0],
                                                        scale: [0.8, 2.5],
                                                    }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 2,
                                                        delay: i * 0.6,
                                                        ease: "easeOut"
                                                    }}
                                                    className="absolute inset-0 rounded-3xl bg-primary/30"
                                                />
                                            ))}

                                            {/* Stylized Smartphone Frame */}
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                className="relative z-10 w-20 h-36 rounded-[2rem] bg-background border-4 border-primary/40 p-2 shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)]"
                                            >
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/20 rounded-full" />
                                                <div className="w-full h-full rounded-[1.4rem] bg-primary/5 flex items-center justify-center overflow-hidden relative">
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.5, type: "spring" }}
                                                    >
                                                        <CheckCircle size={32} className="text-primary" />
                                                    </motion.div>
                                                    {/* Screen Scan */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[40%] -top-full animate-scan" />
                                                </div>
                                            </motion.div>

                                            {/* "PING!" Label */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -20 }}
                                                animate={{ scale: [0, 1.2, 1], rotate: [-20, 10, 0] }}
                                                transition={{ delay: 0.8, duration: 0.5 }}
                                                className="absolute -top-6 -right-12 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-black font-mono text-xs shadow-xl"
                                            >
                                                PING!
                                            </motion.div>
                                        </div>

                                        <div className="space-y-2 mb-8">
                                            <h3 className="text-3xl font-black font-mono tracking-tighter text-glow translate-y-2">MISSION_ACCOMPLISHED</h3>
                                            <p className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Handheld_Injection_Verified</p>
                                        </div>

                                        <p className="text-muted-foreground text-sm max-w-xs mb-8 leading-relaxed">
                                            Wonderful! Your message just landed directly in my hand. <span className="text-foreground font-bold italic">I truly appreciate you reaching out</span>—it&apos;s a genuine pleasure to connect with you. I&apos;ll give your message the attention it deserves and get back to you very soon!
                                        </p>

                                        <div className="flex flex-col items-center gap-2">
                                            <div className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-3 group">
                                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]" />
                                                <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">Direct_Link_Established</span>
                                            </div>
                                            <span className="text-[9px] font-mono text-muted-foreground uppercase opacity-50 tracking-widest">Confirmed: 202.726.48.18_Sync</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-xl font-bold font-mono">SEND_DATA_PACKET</h3>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-50" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-50" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-50" />
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Identity_Key</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    className="w-full bg-primary/5 border-b-2 border-primary/10 focus:border-primary p-4 rounded-t-xl outline-none transition-all text-sm font-medium focus:bg-primary/10"
                                                    placeholder="Enter your name..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Response_Path</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    className="w-full bg-primary/5 border-b-2 border-primary/10 focus:border-primary p-4 rounded-t-xl outline-none transition-all text-sm font-medium focus:bg-primary/10"
                                                    placeholder="Enter your email..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Payload_Content</label>
                                                <textarea
                                                    required
                                                    rows={4}
                                                    value={formState.message}
                                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                    className="w-full bg-primary/5 border-b-2 border-primary/10 focus:border-primary p-4 rounded-t-xl outline-none transition-all text-sm font-medium resize-none focus:bg-primary/10"
                                                    placeholder="Enter your message..."
                                                />
                                            </div>

                                            <motion.button
                                                disabled={isSubmitting}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-mono font-bold text-sm tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] relative overflow-hidden group"
                                            >
                                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                                {isSubmitting ? (
                                                    "INJECTING_PACKET..."
                                                ) : (
                                                    <>
                                                        <Send size={18} />
                                                        PUSH TO AVIJIT&apos;S PHONE
                                                    </>
                                                )}
                                            </motion.button>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* Decorative Corner Status */}
                            <div className="absolute -bottom-3 -left-3 px-3 py-1 bg-background border border-primary/20 rounded-lg text-[8px] font-mono text-primary animate-pulse">
                                SECURE_TUNNEL_ACTIVE
                            </div>
                        </motion.div>
                    </div>
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
