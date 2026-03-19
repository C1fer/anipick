import { Info } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type CustomPopoverProps = {
    content: string;
}

export const CustomPopover = ({ content }: CustomPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    aria-label="Open info popover"
                    className="text-muted-foreground data-[state=open]:text-foreground hover:data-[state=closed]:opacity-70 transition-all ml-2 pointer-coarse:px-2 pointer-coarse:py-1 pointer-coarse:ml-0"
                >
                    <Info className="size-3.5" strokeWidth={2.5} />
                </button>
            </PopoverTrigger>
            <PopoverContent className="bg-card max-w-xs flex-wrap text-xs text-muted-foreground">
                <p className="whitespace-pre-wrap text-start">
                    {content}
                </p>
            </PopoverContent>
        </Popover>
    )
}