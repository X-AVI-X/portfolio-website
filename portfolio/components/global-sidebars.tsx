"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const sections = [
    { id: "hero", label: "00_ROOT" },
    { id: "skills", label: "01_KNOWLEDGE" },
    { id: "experience", label: "02_CAREER" },
    { id: "leadership", label: "03_SYSTEM" },
    { id: "spotlight", label: "04_FEATURE" },
    { id: "casestudy", label: "05_KERNEL" },
    { id: "projects", label: "06_DEPO" },
    { id: "education", label: "07_ACADEMIC" },
    { id: "writing", label: "08_LOGS" },
    { id: "contact", label: "09_CONNECT" },
];

const GlobalSidebars = () => {
    // 1. Motion Values for reactivity
    const rawProgress = useMotionValue(0);
    const smoothProgress = useSpring(rawProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Trigger point for node activation
            const triggerPoint = scrollY + (viewportHeight * 0.3);

            let current = 0;
            let sectionStart = 0;
            let sectionEnd = 0;
            let height = 0;

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i].id);
                if (!section) continue;

                const top = section.offsetTop;
                const h = section.offsetHeight;

                if (triggerPoint >= top && triggerPoint < top + h) {
                    current = i;
                    sectionStart = top;
                    height = h;
                    break;
                }
            }

            // Percentage through current section relative to the trigger point
            const progressInSection = height > 0 ? (triggerPoint - sectionStart) / height : 0;
            const clampedProgressInSection = Math.min(Math.max(progressInSection, 0), 1);

            // Total progression value (Index + % through Index)
            // Normalized to 0-1 across the entire sidebar range (segments = length - 1)
            const totalProgression = (current + clampedProgressInSection) / (sections.length - 1);

            // Update the motion value!
            rawProgress.set(Math.min(Math.max(totalProgression, 0), 1));
            setActiveIndex(current);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [rawProgress]);

    return (
        <div className="hidden xl:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {/* LEFT SIDEBAR - NAVIGATION RAIL */}
            <div className="absolute left-8 top-0 bottom-0 w-12 flex flex-col justify-center pointer-events-auto">
                <div className="relative h-[80vh] flex flex-col items-center">

                    {/* Background Line - Offset to start/end at diamond centers (half of w-8 is 4px) */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-px bg-primary/10 -translate-x-1/2" />

                    {/* Active Glowing Line - Offset to start/end at diamond centers */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2">
                        <motion.div
                            className="w-full bg-primary shadow-[0_0_20px_var(--cyber-glow)]"
                            style={{ height: "100%", scaleY: smoothProgress, originY: 0 }}
                        />
                    </div>

                    {/* Nodes Container - Ensuring items-center for horizontal alignment */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between py-0">
                        {sections.map((section, index) => {
                            const isActive = index === activeIndex;
                            const isPassed = index < activeIndex;

                            return (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="relative group flex items-center justify-center w-8 h-8"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <motion.div
                                        className={`
                                            w-2.5 h-2.5 border border-primary/50 bg-background rotate-45 transition-all duration-300 z-10 
                                            ${isActive ? 'bg-primary border-primary scale-125 shadow-[0_0_15px_var(--primary)]' : ''}
                                            ${isPassed ? 'bg-primary/50 border-primary scale-100' : ''}
                                        `}
                                    />

                                    <div className={`absolute left-12 whitespace-nowrap text-[10px] font-mono font-bold tracking-widest transition-all duration-500 
                                        ${isActive ? 'text-primary opacity-100 translate-x-0' : 'text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                        {section.label}
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeRing"
                                            className="absolute inset-0 border border-primary/30 rounded-sm rotate-45"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR - SYSTEM TELEMETRY */}
            <div className="absolute right-8 top-0 bottom-0 w-12 pointer-events-auto flex flex-col justify-between py-12 items-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-primary/20" />
                    <div className="writing-vertical-rl text-[10px] font-mono text-muted-foreground/50 tracking-[0.3em] uppercase flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            SYS_ONLINE
                        </span>
                        <span className="text-primary/30">v24.0.1</span>
                    </div>
                </div>

                <div className="relative h-64 w-1 bg-primary/5 rounded-full overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-full h-px bg-primary" />
                        ))}
                    </div>
                    <motion.div
                        className="w-full bg-primary shadow-[0_0_15px_var(--cyber-glow)]"
                        style={{ height: "100%", scaleY: smoothProgress, originY: 1 }}
                    />
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="writing-vertical-rl text-[10px] font-mono text-primary/40 tracking-[0.2em] mb-4">
                        EXT_PORTS
                    </div>

                    <SocialLink href={personalInfo.github} icon={<Github size={16} />} delay={0} />
                    <SocialLink href={personalInfo.linkedin} icon={<Linkedin size={16} />} delay={0.1} />
                    <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail size={16} />} delay={0.2} />

                    <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-primary/20 mt-4" />
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, delay }: { href: string; icon: React.ReactNode; delay: number }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + delay }}
        whileHover={{ x: -3, color: "var(--primary)" }}
        className="text-muted-foreground hover:text-primary transition-colors relative group"
    >
        {icon}
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-mono bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            OPEN_LINK
        </span>
    </motion.a>
);

export default GlobalSidebars;
