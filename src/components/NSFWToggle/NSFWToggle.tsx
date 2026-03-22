import { TriangleAlert } from "lucide-react";
import { Switch } from "../ui/switch";
import type { NSFWToggleProps } from "./NSFWToggle-def";
import { useNSFWToggle } from "./useNSFWToggle";
import { motion}  from "motion/react";

export const NSFWToggle = (props: NSFWToggleProps): React.ReactElement => {
    const { isChecked } = props;

    const {
        rootClassName,
        iconWrapperClassName,
        iconClassName,
        hintText,
        handleToggle
    } = useNSFWToggle(props);

    return (
        <motion.div
            aria-label="Toggle mature content"
            onClick={handleToggle}
            className={rootClassName}
            whileTap={{ scale: 0.99 }}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className={iconWrapperClassName}>
                        <TriangleAlert className={iconClassName} strokeWidth={2.2}/>
                    </div>
                    <div className="flex-col text-start">
                        <p className="text-sm font-semibold text-foreground">Mature Content</p>
                        <p className="text-xs text-muted-foreground/90">{hintText}</p>
                    </div>
                </div>
                <Switch
                    className="pointer-events-none data-[state=unchecked]:bg-muted data-[state=checked]:bg-destructive/85"
                    checked={isChecked}
                />
            </div>
        </motion.div>
    );
}