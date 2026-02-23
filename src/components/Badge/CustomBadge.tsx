import { X } from "lucide-react";
import type { CustomBadgeProps } from "./CustomBadge-def";

export const CustomBadge = (props: CustomBadgeProps ): React.ReactElement => {
    
    return (
        <div 
            className="px-3 py-1 rounded-full border cursor-pointer flex gap-1 items-center select-none border-border-dark bg-accent-indigo hover:bg-accent-indigo/70"
            onClick={props.onRemove}
            >
                <span className=" text-text-off-white text-xs font-medium">
                    {props.label}
                </span>
                {props.onRemove ? (
                    <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={props.onRemove} 
                        color="white"
                        strokeWidth={4}
                    />
                ) : null}
        </div>
    )
} 