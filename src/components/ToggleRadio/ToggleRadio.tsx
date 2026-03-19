import { twMerge } from "tailwind-merge";
import type { ToggleRadioProps } from "./ToggleRadio-def"
import { useWebHaptics } from "web-haptics/react";

export const ToggleRadio = (props: ToggleRadioProps) : React.ReactElement => {
    const { trigger } = useWebHaptics();

    const handleChange = (value: string) => {
        if (props.selectedValue !== value) {
            trigger("selection");
            props.onSelected(value)
        }
    }

    return (
        <div className={twMerge("flex flex-col items-start w-full gap-3", props.className)}>
            {props.headerTitle && (
                <h3 className="text-muted-foreground text-sm font-medium tracking-wider">
                    {props.headerTitle}
                </h3>
            )}
            <div 
                className="flex w-full p-1 rounded-lg bg-background/90 border border-border/50"
                style={{ opacity: props.disabled ? 0.5 : 1, pointerEvents: props.disabled ? 'none' : 'all' }}
            >
                {props.options.map((option) => (
                    <label key={`radio-option-${option.value}`} className="flex-1" >
                        <input 
                            className="sr-only peer" 
                            name={props.headerTitle} 
                            type="radio" 
                            value={option.value} 
                            checked={props.selectedValue === option.value} 
                            onChange={() => handleChange(option.value)} 
                            disabled={props.disabled}
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