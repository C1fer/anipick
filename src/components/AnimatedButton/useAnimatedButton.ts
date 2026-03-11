import { twMerge } from "tailwind-merge";
import type { AnimatedButtonProps } from "./AnimatedButton-def";
import { useWebHaptics } from "web-haptics/react";

const VARIANT_STYLES = {
    primary: "gradient-primary glow-purple hover:opacity-90",
    secondary: "border border-border/50 hover:bg-muted/50",
}

const BASE_STYLE = "flex items-center justify-center gap-2 w-full h-12 text-sm font-semibold rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

export const useAnimatedButton = ({ className, variant = "primary", isLoading = false, hapticsEnabled = true, hapticsType = "light", onClick}: AnimatedButtonProps) => {
    const { trigger } = useWebHaptics();

     const handleClick = () => {
        if (isLoading) return;
        if (hapticsEnabled) trigger(hapticsType);
        onClick?.();
    }

    const _style: string = twMerge(BASE_STYLE, VARIANT_STYLES[variant], className)

    return {
        handleClick,
        style: _style
    }
}