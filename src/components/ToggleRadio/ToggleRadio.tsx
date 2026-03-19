import { twMerge } from "tailwind-merge";
import type { ToggleRadioProps } from "./ToggleRadio-def"
import { useWebHaptics } from "web-haptics/react";
import { CustomPopover } from "../CustomPopover/CustomPopover";

export const ToggleRadio = ({ options, selectedValue, disabled, onSelected, className, headerTitle, showPopover, popoverContent }: ToggleRadioProps) : React.ReactElement => {
    const { trigger } = useWebHaptics();

    const handleChange = (value: string) => {
        if (selectedValue !== value) {
            trigger("selection");
            onSelected(value)
        }
    }

    return (
        <div className={twMerge("flex flex-col items-start w-full gap-2", className)}>
            <div className="flex items-center">
                {headerTitle && (
                    <h3 className="text-muted-foreground text-sm font-medium tracking-wider">
                        {headerTitle}
                    </h3>
                )}
                {showPopover && popoverContent ? <CustomPopover content={popoverContent} /> : null}
            </div>
            <div 
                className="flex w-full p-1 rounded-lg bg-background/90 border border-border/50"
                style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'all' }}
            >
                {options.map((option) => (
                    <label key={`radio-option-${option.value}`} className="flex-1" >
                        <input 
                            className="sr-only peer" 
                            name={headerTitle} 
                            type="radio" 
                            value={option.value} 
                            checked={selectedValue === option.value} 
                            onChange={() => handleChange(option.value)} 
                            disabled={disabled}
                        />
                        <div className="flex py-2.5 px-4 items-center justify-center rounded-md text-sm font-medium text-muted-foreground/70 transition-colors duration-250 motion-reduce:duration-0 peer-checked:bg-action peer-checked:text-foreground hover:bg-muted peer-checked:hover:bg-action cursor-pointer peer-checked:cursor-default">
                            {option.label}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}