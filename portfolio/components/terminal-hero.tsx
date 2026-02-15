"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin, Terminal, MousePointer2 } from "lucide-react";
import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";





const HeroGlow = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs - theme-aware & Subtler localized atmosphere */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
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
        <div className="relative w-full h-full rounded-full bg-background/50 backdrop-blur-sm border-2 border-primary/40 overflow-hidden flex items-center justify-center terminal-glow transition-all duration-700 group-hover:border-primary">
            {/* Profile Photo */}
            <Image
                src="/profile.png"
                alt="Avijit Paul"
                width={400}
                height={400}
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
        { text: "> init --profile avijit.config", delay: 10 },
        { text: "> loading system core...", delay: 5 },
        { text: "> ready.", delay: 20 },
    ];

    // Mouse movement for 3D tilt effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const tiltX = mousePos.y * 10; // Max 10 degrees
    const tiltY = -mousePos.x * 10;

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
        <section
            id="hero"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent perspective-1000"
        >
            <HeroGlow />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: tiltX,
                        rotateY: tiltY,
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 150,
                        opacity: { duration: 0.8 },
                        y: { duration: 0.8 }
                    }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Terminal Window */}
                    <div className="bg-card/40 backdrop-blur-xl rounded-xl border border-primary/20 terminal-glow overflow-hidden max-w-lg mx-auto mb-6 shadow-2xl relative group/terminal">
                        {/* Interactive Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover/terminal:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10 bg-secondary/30 relative z-10">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                            </div>
                            <span className="ml-3 text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] opacity-60">
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
                            className="text-6xl md:text-9xl font-bold mb-4 text-glow tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                            animate={showContent ? { y: [20, 0], opacity: [0, 1] } : {}}
                        >
                            {personalInfo.name.toUpperCase()}
                        </motion.h1>

                        <motion.div
                            className="flex flex-col items-center gap-3 mb-8"
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
                        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-6">
                            <StatCard label="Experience" value={personalInfo.yearsExperience} suffix="Y+" />
                            <StatCard label="Microservices" value={personalInfo.microservicesCount} suffix="+" />
                            <StatCard label="Users" value={personalInfo.activeUsers} suffix="+" />
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <SocialButton href={personalInfo.github} icon={<Github size={18} />} label="SOURCE" />
                            <SocialButton href={personalInfo.linkedin} icon={<Linkedin size={18} />} label="NETWORK" />
                            <SocialButton href="#contact" icon={<Mail size={18} />} label="CONNECT" />
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

                        {/* Scroll indicator — grouped with social */}
                        <AnimatePresence>
                            {showContent && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-2 mt-8"
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const StatCard = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => (
    <div className="p-5 rounded-xl border border-primary/10 bg-card/10 backdrop-blur-lg card-hover relative group/stat">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/stat:opacity-100 transition-opacity rounded-xl" />
        <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow mb-1 relative z-10">
            <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono font-bold leading-tight relative z-10">{label}</div>
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
