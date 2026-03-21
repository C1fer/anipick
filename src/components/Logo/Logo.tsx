import React from "react";
import { motion } from "motion/react";

export const Logo = (): React.JSX.Element => (
    <div className="text-center mb-6">
        <motion.div
            className="select-none relative mx-auto inline-flex items-center gap-3 sm:gap-4 px-4 py-2 backdrop-blur-sm overflow-hidden transform-gpu will-change-transform"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: [0.95, 1, 0.95], y: [0, -2, 0], scale: [1, 1.015, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(0)", willChange: "transform, opacity" }}
        >
            <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-8 text-[10px] text-primary/90"
                animate={{ y: [-2, -4, -2], opacity: [0.4, 1, 0.4], rotate: [0, 12, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
            >
                ✦
            </motion.span>
            <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2 right-6 sm:right-10 text-[10px] text-accent/80"
                animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5], rotate: [0, -10, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                ✦
            </motion.span>
            <div className="relative">
                <h1
                    className="text-4xl sm:text-5xl leading-none tracking-[0.08em] bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                    style={{
                        fontFamily: "Mochiy Pop One",
                        textShadow: "0 0 14px hsl(280 100% 65% / 0.2), 0 0 24px hsl(330 100% 60% / 0.22)",
                    }}
                >
                    Pikku
                </h1>
                <h2 className="text-[1.35rem] sm:text-xl mt-1 leading-none tracking-widest text-accent/85" style={{ fontFamily: "Mochiy Pop One" }}>
                    ピック
                </h2>
            </div>
        </motion.div>
        <p className="text-muted-foreground text-sm mt-1.5 tracking-wide italic">
           Find your next binge in seconds.
        </p>
    </div>
);
