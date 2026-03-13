import { useState } from "react";
import type { CustomSelectProps } from "./CustomSelect-def"
import { useWebHaptics } from "web-haptics/react";

export const useCustomSelect = ({ selectedValue, onSelected }: CustomSelectProps) => {
    const [ showOptions, setShowOptions] = useState<boolean>(false);

    const { trigger } = useWebHaptics();

    const handlePointerStart = (e: React.PointerEvent) => {
        if (e.pointerType === 'touch') {
            e.preventDefault(); // Block popup on touch start for mobile devices
        }
    }

    const handlePointerEnd = (e: React.PointerEvent) => {
        if (e.pointerType === 'touch') {
            trigger("selection");
            setShowOptions(o => !o); // Show popup on finger lift (confirmed tap)
        }
    }

    const onValueChange = (value: string) => {
        if (selectedValue === value) return;
        
        trigger("selection");
        onSelected(value);
    }

    return {
        showOptions,
        setShowOptions,
        onValueChange,
        handlePointerStart,
        handlePointerEnd
    }
}