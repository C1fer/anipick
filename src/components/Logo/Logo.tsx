import React from "react";
import { motion } from "motion/react";

export const Logo = (): React.JSX.Element => {
    return (
        <div className="text-center mb-6">
            <motion.h1
                className="text-4xl font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                AniPick
            </motion.h1>
            {/* <p className="text-muted-foreground text-sm">
                Find your next anime in 30 seconds
            </p> */}
        </div>
    );
};