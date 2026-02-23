import { TriangleAlert } from "lucide-react";
import { Switch } from "../ui/switch";

type NSFWToggleProps = {
    isChecked: boolean;
    onToggle: () => void;
}

export const NSFWToggle = (props: NSFWToggleProps): React.ReactElement => (
        <div className="flex items-center justify-between gap-4 p-5 bg-background-ultra-dark rounded-md border border-border-dark ">
            <div className="flex items-center gap-3">
                <TriangleAlert className="text-accent-indigo w-7 h-7" strokeWidth={2}/>
                <div className="flex-col">
                    <p className="text-text-off-white font-bold text-sm">NSFW Content</p>
                    <p className="text-text-muted text-xs">Show mature and R-rated series</p>
                </div>
            </div>
            
            <Switch 
                className="cursor-pointer data-[state=unchecked]:bg-border-dark data-[state=checked]:bg-accent-indigo"
                onClick={props.onToggle} 
                checked={props.isChecked}
            />
        </div>
    )