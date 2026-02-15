"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const Comet = ({ id, onFinished }: { id: number; onFinished: (id: number) => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinished(id);
        }, 15500);
        return () => clearTimeout(timer);
    }, [id, onFinished]);

    const config = useMemo(() => {
        const startEdge = Math.floor(Math.random() * 4); // 0:T, 1:B, 2:L, 3:R
        let startX, startY, endX, endY;

        if (startEdge === 0) { startX = Math.random() * 100; startY = -20; }
        else if (startEdge === 1) { startX = Math.random() * 100; startY = 120; }
        else if (startEdge === 2) { startX = -20; startY = Math.random() * 100; }
        else { startX = 120; startY = Math.random() * 100; }

        let endEdge = Math.floor(Math.random() * 3);
        if (endEdge >= startEdge) endEdge++;

        if (endEdge === 0) { endX = Math.random() * 100; endY = -20; }
        else if (endEdge === 1) { endX = Math.random() * 100; endY = 120; }
        else if (endEdge === 2) { endX = -20; endY = Math.random() * 100; }
        else { endX = 120; endY = Math.random() * 100; }

        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI + 90;
        return { startX, startY, endX, endY, angle };
    }, []);

    return (
        <motion.div
            initial={{
                top: `${config.startY}vh`,
                left: `${config.startX}vw`,
                opacity: 0,
                rotate: config.angle,
                scale: 1
            }}
            animate={{
                top: `${config.endY}vh`,
                left: `${config.endX}vw`,
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 15,
                ease: "linear",
            }}
            className="absolute z-0 pointer-events-none"
        >
            <div className="relative">
                <div className="absolute top-[0px] left-[-6px] w-[12px] h-[160px] bg-gradient-to-t from-transparent via-primary/10 to-transparent blur-[15px] rounded-full" />
                <div className="absolute top-[0px] left-[-4px] w-[8px] h-[120px] bg-gradient-to-t from-transparent via-primary/20 to-primary/40 blur-[8px] rounded-full" />
                <div className="absolute top-[0px] left-[-1px] w-[1px] h-[90px] bg-gradient-to-t from-transparent via-primary/70 to-white/95 rounded-full blur-[1px]" />
                <div className="absolute top-0 left-0">
                    <div className="absolute top-[-8px] left-[-8px] w-[16px] h-[16px] bg-primary/30 blur-[10px] rounded-full animate-pulse" />
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-[-3px] left-[-3px] w-[6px] h-[6px] bg-white rounded-full blur-[1px] mix-blend-screen"
                            animate={{
                                scale: [1, 1.5, 1.2],
                                opacity: [0.4, 1, 0.6],
                                y: [0, 5, 2]
                            }}
                            transition={{
                                duration: 0.1 + i * 0.05,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                boxShadow: '0 0 40px var(--primary), 0 0 80px var(--primary)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Atmosphere = () => {
    const [activeCometId, setActiveCometId] = useState<number | null>(null);
    const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number; size: number }>>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const newParticles = [...Array(60)].map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 8 + Math.random() * 12,
            delay: Math.random() * 5,
            size: 1 + Math.random() * 2,
        }));
        setParticles(newParticles);

        const spawnComet = () => setActiveCometId(Date.now());
        const startTimer = setTimeout(spawnComet, 5000);

        return () => clearTimeout(startTimer);
    }, []);

    const handleCometFinished = () => {
        setActiveCometId(null);
        setTimeout(() => setActiveCometId(Date.now()), 25000);
    };

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            {/* Base Grid - Global */}
            <div className="absolute inset-0 cyber-grid opacity-[0.03] dark:opacity-[0.05]" />

            {/* Particles - Spaced out throughout the scrollable main container */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-primary/20 rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`, // Using viewport height for distribution, but container will wrap it
                        width: p.size,
                        height: p.size,
                        position: 'fixed' // Let's make particles fixed for a parallax-like starfield effect that's always there
                    }}
                    animate={{
                        y: [0, -40, 40, 0],
                        opacity: [0.1, 0.4, 0.1],
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

            {/* Comets - Global */}
            {activeCometId && (
                <Comet
                    key={activeCometId}
                    id={activeCometId}
                    onFinished={handleCometFinished}
                />
            )}

            {/* Global Scanlines */}
            <div className="absolute inset-0 scanlines opacity-10" />
        </div>
    );
};

export default Atmosphere;
