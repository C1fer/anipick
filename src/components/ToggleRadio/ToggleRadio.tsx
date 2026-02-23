import type { ToggleRadioProps } from "./ToggleRadio-def"

export const ToggleRadio = (props: ToggleRadioProps) : React.ReactElement => {
    return (
        <div className="">
            {props.headerTitle && <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-3">{props.headerTitle}</h3>}
            <div className="flex bg-background-ultra-dark p-1 rounded-lg border border-border-dark">
                {props.options.map((option) => (
                    <label key={`radio-option-${option.value}`} className="flex-1 cursor-pointer">
                        <input 
                            className="sr-only peer" 
                            name={props.headerTitle} 
                            type="radio" 
                            value={option.value} 
                            checked={props.selectedValue === option.value} 
                            onChange={() => props.onSelected(option.value)} />
                        <div className="flex h-10 items-center justify-center rounded-lg text-sm text-text-muted peer-checked:bg-accent-indigo peer-checked:text-text-off-white font-medium transition-all">
                            {option.label}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}