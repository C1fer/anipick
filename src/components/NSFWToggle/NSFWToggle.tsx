import { TriangleAlert } from "lucide-react";
import { Switch } from "../ui/switch";
import { useWebHaptics } from "web-haptics/react";

type NSFWToggleProps = {
    isChecked: boolean;
    onToggle: () => void;
    disabled?: boolean;
}

export const NSFWToggle = ({ isChecked, onToggle, disabled = false }: NSFWToggleProps): React.ReactElement => {
    const { trigger } = useWebHaptics();

    const handleToggle = () => {
        trigger("light");
        onToggle();
    };

    return (
        <div 
            className="flex items-center justify-between gap-4 p-5 q border border-border/50 rounded-md bg-background/90 active:bg-muted sm:hover:bg-muted transition-all cursor-pointer"  
            style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'all'}} 
            onClick={handleToggle}
        >
            <div className="flex items-center gap-3">
                <TriangleAlert className="text-action w-7 h-7" strokeWidth={2}/>
                <div className="flex-col text-start">
                    <p className="text-foreground font-bold text-sm">NSFW Content</p>
                    <p className="text-muted-foreground text-xs">Show mature and R-rated series</p>
                </div>
            </div>
            <Switch 
                className="data-[state=unchecked]:bg-muted/50 data-[state=checked]:bg-primary/65"
                checked={isChecked}
            />
        </div>
    );
}