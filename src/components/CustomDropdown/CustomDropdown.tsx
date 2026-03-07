import { ChevronDown, X } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import type { CustomDropdownProps } from "./CustomDropdown-def"

export const CustomDropdown = (props: CustomDropdownProps): React.ReactElement => {
    const {
        label = "",
        selectedValues = [],
        options = [],
        showSelectionBadges = true,
        onSelected,
    }   = props;

    let triggerLabel = "";

    switch (selectedValues.length) {
        case 0:
            triggerLabel = "Any";
            break;
        case 1:
            triggerLabel = selectedValues[0].label;
            break;
        case 2:
            triggerLabel = `${selectedValues[0].label}, ${selectedValues[1].label}`;
            break;
        default:
            triggerLabel = `${selectedValues[0].label}, ${selectedValues[1].label} +${selectedValues.length - 2}`;
    }

    const showBadges = () => {
        if (!showSelectionBadges || !selectedValues.length) return null;
        
        return (
            <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedValues.map(val => (
                    <Badge
                        key={"badge-" + val.label}
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 cursor-pointer"
                        onClick={() => onSelected(val)}
                    >
                        {val.label}
                        <X className="w-3 h-3 ml-1" />
                    </Badge>
                ))}
            </div>
        )
    }

    return (
        <div>
            {label && <h3 className="text-muted-foreground text-sm font-medium tracking-wider mb-3">
                {label}
            </h3>}
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full focus:outline-none">
                    <Button className="justify-between border bg-background/90 border-border/50 hover:bg-muted cursor-pointer min-w-full">
                        <span className="truncate">{triggerLabel}</span>
                        <ChevronDown className="w-4 h-4 ml-2 shrink-0 text-muted-foreground" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border-border max-h-65 overflow-y-auto">
                    {options.map((option) => (
                        <DropdownMenuCheckboxItem
                            className="data-highlighted:bg-action data-highlighted:text-white" // TODO: Change accent color
                            key={`dropdown-option-${option.value}`}
                            checked={selectedValues.some((val) => val.value === option.value)}
                            onCheckedChange={() => onSelected(option)}
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