import { motion } from 'motion/react';
import { twMerge } from "tailwind-merge";
import { Spinner } from '../ui/spinner';

type AnimatedButtonProps = {
    onClick: () => void;
    leftIcon: React.ReactNode | null;
    label: string;
    isLoading?: boolean;
    variant: "primary" | "secondary";
    className? : string;
}

const VARIANT_STYLES = {
    primary: "gradient-primary glow-purple hover:opacity-90",
    secondary: "border border-border/50 hover:bg-muted/50",
}

const BASE_STYLE = "flex items-center justify-center gap-2 w-full h-12 text-sm font-medium rounded-md transition-opacity";

export const AnimatedButton = (props: AnimatedButtonProps) => {
    const {
        onClick,
        leftIcon,
        label,
        isLoading = false,
        variant = "primary",
        className = "",
    } = props;

    const _handleClick = () => {
        if (isLoading) return;
        onClick();
    }

    const _style: string = twMerge(BASE_STYLE, VARIANT_STYLES[variant], className)
    
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={_handleClick}
            className={_style}
            style={{ cursor: isLoading ? 'wait' : 'pointer'}}
        >
            {isLoading ? <Spinner className="w-4 h-4"/> : leftIcon}
            {label}
        </motion.button>
    )
} 

