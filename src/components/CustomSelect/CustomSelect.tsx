import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import type { CustomSelectProps } from "./CustomSelect-def"

export const CustomSelect = (props: CustomSelectProps): React.ReactElement => {
        return (
            <div>
                <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-3">
                    {props.label}
                </h3>
                <Select onValueChange={props?.onSelected}>
                    <SelectTrigger className="w-full bg-background-ultra-dark border-border-dark text-white font-medium cursor-pointer">
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-ultra-dark border-border-dark text-white" position="popper">
                        {Object.entries(props.options).map(([id, name]) => (
                            <SelectItem className="data-highlighted:bg-accent-indigo data-highlighted:text-white data-[state=checked]:stroke-white" key={id} value={id}>
                                {name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )

}
