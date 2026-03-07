import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import type { CustomSelectProps } from "./CustomSelect-def"

export const CustomSelect = (props: CustomSelectProps): React.ReactElement => {
        return (
            <div>
                <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-3">
                    {props.label}
                </h3>
                <Select onValueChange={props?.onSelected}>
                    <SelectTrigger className="w-full bg-background border-border text-white font-medium cursor-pointer">
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-white" position="popper">
                        {props.options.map((option) => (
                            <SelectItem className="data-highlighted:bg-action data-highlighted:text-white data-[state=checked]:stroke-white" key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )

}
