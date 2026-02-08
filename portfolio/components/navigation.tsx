"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";

const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

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
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

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
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono relative group"
                                >
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
