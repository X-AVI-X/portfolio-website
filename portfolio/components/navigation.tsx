"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";

const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Logs", href: "#writing" },
    { label: "Contact", href: "#contact" },
];

// Theme color presets — each is an OKLCH hue degree
const colorThemes = [
    { name: "Tron Blue", hue: 225, preview: "#22d3ee" },
    { name: "Electric Violet", hue: 280, preview: "#a855f7" },
    { name: "Neon Rose", hue: 350, preview: "#f43f5e" },
    { name: "Solar Gold", hue: 85, preview: "#eab308" },
    { name: "Emerald", hue: 155, preview: "#10b981" },
    { name: "Hot Orange", hue: 40, preview: "#f97316" },
];

function applyColorTheme(hue: number, isDark: boolean) {
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty("--cyber", `oklch(0.85 0.2 ${hue})`);
        root.style.setProperty("--cyber-glow", `oklch(0.85 0.2 ${hue} / 30%)`);
        root.style.setProperty("--primary", `oklch(0.85 0.15 ${hue})`);
        root.style.setProperty("--ring", `oklch(0.85 0.2 ${hue})`);
        root.style.setProperty("--chart-1", `oklch(0.85 0.2 ${hue})`);
    } else {
        root.style.setProperty("--cyber", `oklch(0.65 0.2 ${hue})`);
        root.style.setProperty("--cyber-glow", `oklch(0.65 0.2 ${hue} / 20%)`);
        root.style.setProperty("--primary", `oklch(0.6 0.2 ${hue})`);
        root.style.setProperty("--ring", `oklch(0.6 0.2 ${hue})`);
        root.style.setProperty("--chart-1", `oklch(0.6 0.2 ${hue})`);
    }
}

const ColorPicker = ({ activeHue, onSelect }: { activeHue: number; onSelect: (hue: number) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeTheme = colorThemes.find(t => t.hue === activeHue) || colorThemes[0];

    return (
        <div className="relative" ref={ref}>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-[34px] h-[34px] rounded-lg border border-border hover:border-primary/50 transition-all flex items-center justify-center"
                title="Change accent color"
            >
                <div
                    className="w-4 h-4 rounded-full ring-2 ring-white/20 shadow-[0_0_8px_var(--primary)]"
                    style={{ backgroundColor: activeTheme.preview }}
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 p-3 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl z-50 min-w-[180px]"
                    >
                        <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2.5 px-1">Accent Color</div>
                        <div className="grid grid-cols-3 gap-2">
                            {colorThemes.map((theme) => (
                                <motion.button
                                    key={theme.hue}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        onSelect(theme.hue);
                                        setIsOpen(false);
                                    }}
                                    className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all ${activeHue === theme.hue ? 'bg-primary/10 ring-1 ring-primary/40' : 'hover:bg-white/5'}`}
                                    title={theme.name}
                                >
                                    <div
                                        className={`w-6 h-6 rounded-full shadow-lg transition-shadow ${activeHue === theme.hue ? 'ring-2 ring-white/40 shadow-[0_0_12px_3px]' : 'ring-1 ring-white/10'}`}
                                        style={{
                                            backgroundColor: theme.preview,
                                            boxShadow: activeHue === theme.hue ? `0 0 12px ${theme.preview}` : undefined
                                        }}
                                    />
                                    <span className={`text-[8px] font-mono tracking-wider ${activeHue === theme.hue ? 'text-primary' : 'text-muted-foreground/60'}`}>
                                        {theme.name.split(' ')[0]}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [activeHue, setActiveHue] = useState(225); // Default: Tron Blue

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Theme toggle
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Re-apply color theme when light/dark changes
        applyColorTheme(activeHue, isDark);
    }, [isDark, activeHue]);

    const toggleTheme = () => setIsDark(!isDark);

    const handleColorSelect = (hue: number) => {
        setActiveHue(hue);
        applyColorTheme(hue, isDark);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 text-primary">
                            <Terminal size={22} />
                            <span className="font-mono font-bold text-base">avijit.dev</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-xs text-muted-foreground hover:text-primary transition-all font-mono relative group uppercase tracking-widest"
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1.5 text-primary text-[8px]">&lt;/&gt;</span>
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </a>
                            ))}

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>

                            {/* Color Picker — immediately right of theme toggle */}
                            <ColorPicker activeHue={activeHue} onSelect={handleColorSelect} />

                            <a
                                href="/Avijit_Paul_Resume.pdf"
                                target="_blank"
                                className="px-4 py-2 text-sm font-mono border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex md:hidden items-center gap-3">
                            <motion.button
                                onClick={toggleTheme}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg border border-border"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>

                            {/* Color Picker — immediately right of theme toggle on mobile too */}
                            <ColorPicker activeHue={activeHue} onSelect={handleColorSelect} />

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-foreground p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Slide Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Slide Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-card border-l border-border z-50 md:hidden"
                        >
                            <div className="p-6 pt-20">
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-lg text-foreground hover:text-primary transition-colors font-mono py-2 border-b border-border"
                                        >
                                            <span className="text-primary mr-2">&gt;</span>
                                            {item.label}
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        href="/Avijit_Paul_Resume.pdf"
                                        target="_blank"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-4 px-4 py-3 text-center font-mono border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        Download Resume
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
