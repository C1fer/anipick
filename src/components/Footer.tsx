import { twMerge } from "tailwind-merge"

export const Footer = ({ className }: { className?: string }): React.ReactElement => (
    <footer className={twMerge(`w-full flex items-center justify-center text-xs text-muted-foreground gap-1`, className)}>
        <span>Built by </span>
        <a href="https://github.com/C1fer" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:underline">
            C1fer
        </a>
    </footer>
) 