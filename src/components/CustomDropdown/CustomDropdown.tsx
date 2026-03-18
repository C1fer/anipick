import { ChevronDown, X } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import type { CustomDropdownProps } from "./CustomDropdown-def"
import { useCustomDropdown } from "./useCustomDropdown"

export const CustomDropdown = (props: CustomDropdownProps): React.ReactElement => {
    const {
        label = "",
        selectedValues = [],
        options = [],
        showSelectionBadges = true,
    }  = props;

    const {
        triggerLabel, 
        showPlaceholder,
        showOptions,
        setShowOptions,
        onValueChange,
        handlePointerStart,
        handlePointerEnd
    } = useCustomDropdown(props);

       
    const showBadges = () => {
        if (!showSelectionBadges || !selectedValues.length) return null;

        const _badgeStyle = twMerge(
            "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 cursor-pointer",
            props.disabled ? "cursor-not-allowed opacity-50" : ""
        )
        
        return (
            <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedValues.map(val => (
                    <Badge
                        className={_badgeStyle}
                        key={"badge-" + val.label}
                        variant="secondary"
                        onClick={() => onValueChange(val)}
                    >
                        {val.label}
                        <X className="w-3 h-3 ml-1" />
                    </Badge>
                ))}
            </div>
        )
    }

    const triggerLabelStyle = twMerge(
        "transition-colors duration-250 truncate motion-reduce:duration-0", 
        showPlaceholder ? "text-muted-foreground/70" : "text-foreground"
    );

    return (
        <div>
            {label && <h3 className="text-muted-foreground text-sm font-medium tracking-wider mb-3">
                {label}
            </h3>}
            <DropdownMenu open={showOptions} onOpenChange={setShowOptions}>
                <DropdownMenuTrigger className="w-full peer" asChild>
                    <Button
                        className="justify-between border bg-background/90 border-border/50 hover:bg-muted peer-[state=open]:bg-muted cursor-pointer min-w-full"
                        onPointerDown={handlePointerStart}
                        onPointerUp={handlePointerEnd}
                        disabled={props.disabled}
                    >
                        <span className={triggerLabelStyle}>{triggerLabel}</span>
                        <ChevronDown className="w-4 h-4 ml-2 shrink-0 text-muted-foreground" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) bg-popover border-border max-h-65 overflow-y-auto scrollbar-subtle">
                    {options.map((option) => (
                        <DropdownMenuCheckboxItem
                            className="data-highlighted:bg-action data-highlighted:text-foreground" 
                            key={`dropdown-option-${option.value}`}
                            checked={selectedValues.some((val) => val.value === option.value)}
                            onCheckedChange={() => onValueChange(option)}
                        >
                            {option.label}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {showBadges()}
        </div>
    )
}