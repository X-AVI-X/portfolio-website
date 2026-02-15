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
                rotate: config.angle,
                scale: 1
            }}
            animate={{
                top: `${config.endY}vh`,
                left: `${config.endX}vw`,
            }}
            transition={{
                duration: 15,
                ease: "linear",
            }}
            className="absolute z-0 pointer-events-none"
        >
            <div className="relative w-[100px] h-[300px]">
                {/* Comet head at top - glowing orb - this will be the FRONT when rotated */}
                <motion.div
                    className="absolute top-0 left-[44px] w-[12px] h-[12px] rounded-full z-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 200, 1) 40%, rgba(255, 215, 0, 0.9) 70%, rgba(255, 140, 0, 0.6) 100%)',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.5)'
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.95, 1, 0.95]
                    }}
                    transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Additional glow sparkles around the head */}
                {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const radius = 8 + Math.random() * 4;
                    const xPos = Math.cos(angle) * radius;
                    const yPos = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={`head-sparkle-${i}`}
                            className="absolute w-[2px] h-[2px] rounded-full bg-white z-20"
                            style={{
                                left: `${50 + xPos}px`,
                                top: `${6 + yPos}px`,
                                boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 215, 0, 0.7)'
                            }}
                            animate={{
                                scale: [1, 2, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 0.4 + i * 0.05,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}

                {/* Bright white hot core - extends DOWN from head */}
                <div
                    className="absolute top-[8px] left-[40px] w-[20px] h-[120px] rounded-full blur-[4px]"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 240, 0.95) 15%, rgba(255, 250, 205, 0.8) 35%, rgba(255, 215, 0, 0.5) 60%, transparent 90%)',
                        transform: 'skewY(15deg)'
                    }}
                />

                {/* Yellow-white core layer */}
                <div
                    className="absolute top-[12px] left-[38px] w-[24px] h-[160px] rounded-full blur-[8px]"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 200, 0.9) 10%, rgba(255, 215, 0, 0.7) 30%, rgba(255, 140, 0, 0.4) 55%, transparent 85%)',
                        transform: 'skewY(15deg)'
                    }}
                />

                {/* Bright orange layer */}
                <div
                    className="absolute top-[16px] left-[35px] w-[30px] h-[200px] rounded-full blur-[12px]"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 215, 0, 0.7) 0%, rgba(255, 165, 0, 0.8) 15%, rgba(255, 69, 0, 0.5) 40%, transparent 75%)',
                        transform: 'skewY(15deg)'
                    }}
                />

                {/* Middle red-orange layer */}
                <div
                    className="absolute top-[20px] left-[32px] w-[36px] h-[240px] rounded-full blur-[18px]"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 140, 0, 0.5) 0%, rgba(255, 69, 0, 0.6) 20%, rgba(220, 20, 60, 0.4) 45%, transparent 70%)',
                        transform: 'skewY(15deg)'
                    }}
                />

                {/* Outer dark red glow - widest layer */}
                <div
                    className="absolute top-[24px] left-[30px] w-[40px] h-[280px] rounded-full blur-[25px]"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, transparent 0%, rgba(139, 0, 0, 0.4) 15%, rgba(165, 42, 42, 0.3) 35%, transparent 60%)',
                        transform: 'skewY(15deg)'
                    }}
                />

                {/* Sparkle particles along the trail - distributed DOWN from head */}
                {[...Array(40)].map((_, i) => {
                    const yPos = 10 + i * 6 + Math.random() * 8;
                    const xOffset = (Math.random() - 0.5) * 12;
                    const size = 0.5 + Math.random() * 2;
                    const delay = Math.random() * 2;

                    // Color varies based on position - white near head, yellow-orange middle, red at tail
                    const colorIndex = i / 40;
                    let color;
                    if (colorIndex < 0.2) {
                        color = 'rgba(255, 255, 255, 0.9)';
                    } else if (colorIndex < 0.4) {
                        color = 'rgba(255, 255, 200, 0.8)';
                    } else if (colorIndex < 0.6) {
                        color = 'rgba(255, 215, 0, 0.7)';
                    } else if (colorIndex < 0.8) {
                        color = 'rgba(255, 140, 0, 0.6)';
                    } else {
                        color = 'rgba(255, 69, 0, 0.4)';
                    }

                    return (
                        <motion.div
                            key={`sparkle-${i}`}
                            className="absolute rounded-full z-10"
                            style={{
                                top: `${yPos}px`,
                                left: `${50 + xOffset}px`,
                                width: `${size}px`,
                                height: `${size}px`,
                                background: color,
                                boxShadow: `0 0 ${size * 3}px ${color}`
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 1.5, 0.5]
                            }}
                            transition={{
                                duration: 1 + Math.random() * 1.5,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
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
        setTimeout(() => setActiveCometId(Date.now()), 5000);
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
