import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import type { CustomSelectProps } from "./CustomSelect-def"
import { useCustomSelect } from "./useCustomSelect"

{/* TODO: Fix SVGs color when showing selected value*/}
export const CustomSelect = (props: CustomSelectProps): React.ReactNode => {
    const { label, selectedValue, options  } = props;

    const {
        showOptions,
        setShowOptions,
        onValueChange,
        handlePointerStart,
        handlePointerEnd
    } = useCustomSelect(props)

        return (
            <div>
                <h3 className="text-muted-foreground text-sm font-medium tracking-wider mb-3">
                    {label}
                </h3>
                <Select 
                    open={showOptions} 
                    onOpenChange={setShowOptions}
                    value={selectedValue}
                    onValueChange={onValueChange} 
                >
                    <SelectTrigger 
                        className="w-full cursor-pointer border-border/50 transition-colors duration-250 dark:bg-background/90 dark:hover:bg-muted dark:data-[state=open]:bg-muted text-foreground" 
                        onPointerDown={handlePointerStart} 
                        onPointerUp={handlePointerEnd}
                    >
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border [&>svg]:hidden" position="popper">
                        {options.map((option) => (
                            <SelectItem className="data-highlighted:bg-action data-highlighted:text-foreground" key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )

}
