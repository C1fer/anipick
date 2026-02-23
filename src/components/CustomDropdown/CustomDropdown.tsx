import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import type { CustomDropdownProps } from "./CustomDropdown-def"
import { ChevronDown } from "lucide-react"
import { CustomBadge } from "../Badge/CustomBadge"

export const CustomDropdown = (props: CustomDropdownProps): React.ReactElement => {
    let triggerLabel = "";

    switch (props.selectedValues.length) {
        case 0:
            triggerLabel = "Any";
            break;
        case 1:
            triggerLabel = props.selectedValues[0];
            break;
        case 2:
            triggerLabel = `${props.selectedValues[0]}, ${props.selectedValues[1]}`;
            break;
        default:
            triggerLabel = `${props.selectedValues[0]}, ${props.selectedValues[1]} +${props.selectedValues.length - 2}`;
    }

     const showBadges = () => {
            if (!props.showSelectionBadges || !props.selectedValues.length) return null;
            
            return (
                <div className="flex flex-wrap gap-2 mt-2">
                    {props.selectedValues.map((name, idx) => (
                        <CustomBadge 
                            key={idx} 
                            label={name} 
                            onRemove={() => props.onSelected(name)}
                        />
                    ))}
                </div>
            )
        }

    return (
        <div>
            {props.label && <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-3">
                {props.label}
            </h3>}
            <DropdownMenu>
                <DropdownMenuTrigger className="min-w-full focus:outline-none">
                    <Button className="justify-between bg-background-ultra-dark border-border-dark border text-white font-medium focus:border-yellow cursor-pointer min-w-full">
                        <span className="truncate">{triggerLabel}</span>
                        <ChevronDown className="w-4 h-4 ml-2 shrink-0" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background-ultra-dark border-border-dark text-white max-h-80 w-56 overflow-y-auto">
                    {props.options.map(([key, value]) => (
                        <DropdownMenuCheckboxItem
                            className="data-highlighted:bg-accent-indigo data-highlighted:text-white"
                            key={key}
                            checked={props.selectedValues.includes(value)}
                            onCheckedChange={() => props.onSelected(value)}
                        >
                            {value}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {showBadges()}
        </div>
    )
}