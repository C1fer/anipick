import { twMerge } from "tailwind-merge";
import { useWebHaptics } from "web-haptics/react";
import type { NSFWToggleProps } from "./NSFWToggle-def";

const BASE_ROOT_STYLE = "group w-full rounded-xl border p-4 text-left transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 cursor-pointer";

export const useNSFWToggle = ({ isChecked, disabled , onToggle }: NSFWToggleProps) => {
    const { trigger } = useWebHaptics();

    const rootClassName = twMerge(
        BASE_ROOT_STYLE,
        disabled ? "pointer-events-none opacity-50" : "sm:hover:opacity-70",
        isChecked
            ? "border-destructive/35 bg-destructive/5 shadow-[0_0_0_1px_hsl(var(--destructive)/0.08)]"
            : "border-border/70 bg-background/90",
    );

    const iconWrapperClassName = twMerge(
        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
        isChecked ? "bg-destructive/15" : "bg-muted/60"
    );

    const iconClassName = twMerge(
        "h-5 w-5 transition-colors", 
        isChecked ? "text-destructive" : "text-muted-foreground"
    );

    const hintText = isChecked
        ? "18+ results are included."
        : "18+ results are hidden.";

    const handleToggle = () => {
        if (disabled) return;

        trigger("light");
        onToggle();
    };
    
    return {
        rootClassName,
        iconWrapperClassName,
        iconClassName,
        hintText,
        handleToggle
    }
}