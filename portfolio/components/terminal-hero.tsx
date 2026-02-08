"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Animated particle background
const ParticleBackground = () => {
    const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number; size: number }>>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const newParticles = [...Array(30)].map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 5 + Math.random() * 8,
            delay: Math.random() * 2,
            size: 1 + Math.random() * 2,
        }));
        setParticles(newParticles);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs - theme-aware */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Floating particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-primary/30 rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size
                    }}
                    animate={{
                        y: [0, -30, 30, -15, 0],
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2500;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref}>{count}{suffix}</span>
    );
};

const ProfileAvatar = ({ show }: { show: boolean }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={show ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
        className="relative w-40 h-40 mx-auto mb-6"
    >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute -inset-2 rounded-full border border-dashed border-primary/10 animate-reverse-spin-slow" />

        {/* Avatar Container */}
        <div className="relative w-full h-full rounded-full bg-background border-2 border-primary/50 overflow-hidden flex items-center justify-center terminal-glow">
            {/* Profile Photo */}
            <Image
                src="/profile.png"
                alt="Avijit Paul"
                width={160}
                height={160}
                className="rounded-full object-cover w-full h-full"
                priority
            />

            {/* Abstract Tech Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
            <div className="absolute inset-0 opacity-10 cyber-grid" />

            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -top-full animate-scan" />
        </div>

        {/* Active Ping */}
        <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-primary border-2 border-background flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-primary animate-ping" />
        </div>
    </motion.div>
);

const TerminalHero = () => {
    const [displayText, setDisplayText] = useState("");
    const [stage, setStage] = useState(0);
    const [showContent, setShowContent] = useState(false);

    const commands = [
        { text: "> init --profile avijit.config", delay: 20 },
        { text: "> loading system core...", delay: 15 },
        { text: "> ready.", delay: 30 },
    ];

    useEffect(() => {
        let currentIndex = 0;
        const currentCommand = commands[stage];
        if (!currentCommand) {
            setShowContent(true);
            return;
        }

        const timer = setInterval(() => {
            if (currentIndex <= currentCommand.text.length) {
                setDisplayText(currentCommand.text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    if (stage < commands.length - 1) {
                        setStage(stage + 1);
                        setDisplayText("");
                    } else {
                        setShowContent(true);
                    }
                }, 150);
            }
        }, currentCommand.delay);

        return () => clearInterval(timer);
    }, [stage]);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            <ParticleBackground />

            {/* Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Terminal Window */}
                    <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border terminal-glow overflow-hidden max-w-lg mx-auto mb-6 shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <span className="ml-3 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                                system_shell_v1.0
                            </span>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono space-y-1.5 min-h-[140px]">
                            {commands.slice(0, stage + 1).map((cmd, i) => (
                                <div key={i} className="text-sm">
                                    <span className="text-primary mr-2">➜</span>
                                    <span className="text-foreground/90">{i < stage ? cmd.text : displayText}</span>
                                    {i === stage && !showContent && <span className="cursor-blink ml-1 text-primary">▋</span>}
                                </div>
                            ))}
                            {showContent && (
                                <motion.div
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-xs text-primary/70 pt-2"
                                >
                                    [OK] User: Avijit Paul authenticated
                                    <br />
                                    [OK] Environment variables set
                                    <br />
                                    [OK] Portfolio modules loaded
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={showContent ? { opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <ProfileAvatar show={showContent} />

                        <motion.h1
                            className="text-5xl md:text-8xl font-bold mb-4 text-glow tracking-tighter"
                            animate={showContent ? { y: [20, 0], opacity: [0, 1] } : {}}
                        >
                            {personalInfo.name.toUpperCase()}
                        </motion.h1>

                        <motion.div
                            className="flex flex-col items-center gap-2 mb-8"
                            animate={showContent ? { opacity: [0, 1] } : {}}
                        >
                            <p className="text-xl md:text-2xl font-medium text-foreground/80">
                                {personalInfo.title}
                            </p>
                            <div className="h-0.5 w-12 bg-primary/50 rounded-full" />
                            <p className="text-sm font-mono text-primary/90 tracking-widest uppercase">
                                {personalInfo.tagline}
                            </p>
                        </motion.div>

                        {/* Stats - Horizontal Row */}
                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                            <StatCard label="Exp" value={personalInfo.yearsExperience} suffix="+" />
                            <StatCard label="Services" value={personalInfo.microservicesCount} suffix="+" />
                            <StatCard label="Reach" value={personalInfo.activeUsers} suffix="+" />
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <SocialButton href={personalInfo.github} icon={<Github size={18} />} label="SOURCE" />
                            <SocialButton href={personalInfo.linkedin} icon={<Linkedin size={18} />} label="NETWORK" />
                            <SocialButton href={`mailto:${personalInfo.email}`} icon={<Mail size={18} />} label="CONNECT" />
                            <div className="flex items-center gap-2 px-4 py-2 text-muted-foreground text-xs font-mono border border-transparent">
                                <MapPin size={14} className="text-primary" />
                                <span>{personalInfo.location.toUpperCase()}</span>
                                {personalInfo.remote && (
                                    <span className="ml-2 px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded">
                                        RMT
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const StatCard = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => (
    <div className="p-4 rounded-lg border border-border bg-card/20 backdrop-blur-sm card-hover">
        <div className="text-2xl md:text-3xl font-bold text-primary font-mono text-glow mb-1">
            <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono font-bold leading-tight">{label}</div>
    </div>
);

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/20 transition-all duration-500 text-[11px] font-mono font-bold tracking-widest text-foreground/80 hover:text-foreground"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
    >
        {icon}
        <span>{label}</span>
    </motion.a>
);

export default TerminalHero;
