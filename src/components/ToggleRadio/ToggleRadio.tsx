import type { ToggleRadioProps } from "./ToggleRadio-def"

export const ToggleRadio = (props: ToggleRadioProps) : React.ReactElement => {
    const handleChange = (value: string) => {
        if (props.selectedValue !== value) {
            props.onSelected(value)
        }
    }
    return (
        <div>
            {props.headerTitle && (
                <h3 className="text-muted-foreground text-sm font-medium tracking-wider mb-3">
                    {props.headerTitle}
                </h3>
            )}
            <div className="flex p-1 rounded-lg bg-background/90 border border-border/50 ">
                {props.options.map((option) => (
                    <label key={`radio-option-${option.value}`} className="flex-1">
                        <input 
                            className="sr-only peer" 
                            name={props.headerTitle} 
                            type="radio" 
                            value={option.value} 
                            checked={props.selectedValue === option.value} 
                            onChange={() => handleChange(option.value)} />
                        <div className="flex py-2.5 px-4 items-center justify-center rounded-md text-sm font-medium text-muted-foreground/70 transition peer-checked:bg-action peer-checked:text-foreground hover:bg-muted peer-checked:hover:bg-action cursor-pointer peer-checked:cursor-default">
                            {option.label}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}