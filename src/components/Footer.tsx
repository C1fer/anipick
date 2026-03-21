import { twMerge } from "tailwind-merge"
import { Github } from "lucide-react"

export const Footer = ({ className }: { className?: string }): React.ReactElement => (
    <footer className={twMerge(`w-full flex items-center justify-center text-xs text-muted-foreground gap-4 py-2`, className)}>
        <div className="flex items-center gap-1">
            <span>Made by</span>
            <a href="https://github.com/C1fer" target="_blank" rel="noopener noreferrer" className="font-medium text-primary/80 transition-colors hover:text-primary hover:underline">
                C1fer
            </a>
        </div>
        
        <div className="w-px h-4 bg-muted"></div>
        
        <a 
            href="https://github.com/C1fer/pikku" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-primary/80 transition-colors hover:text-primary hover:underline"
        >
            <Github size={14} />
            <span>View Source</span>
        </a>
    </footer>
) 