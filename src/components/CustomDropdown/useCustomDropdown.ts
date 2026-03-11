import { useState } from "react";
import type { CustomDropdownProps } from "./CustomDropdown-def";

export const useCustomDropdown = ({ selectedValues }: CustomDropdownProps) => {
    const [ showOptions, setShowOptions] = useState(false);

    let triggerLabel = "";

    switch (selectedValues.length) {
        case 0:
            triggerLabel = "Any";
            break;
        case 1:
            triggerLabel = selectedValues[0].label;
            break;
        case 2:
            triggerLabel = `${selectedValues[0].label}, ${selectedValues[1].label}`;
            break;
        default:
            triggerLabel = `${selectedValues[0].label}, ${selectedValues[1].label} +${selectedValues.length - 2}`;
    }

    const handlePointerStart = (e: React.PointerEvent) => {
        if (e.pointerType === 'touch') {
            e.preventDefault(); // Block popup on touch start for mobile devices
        }
    }

    const handlePointerEnd = (e: React.PointerEvent) => {
        if (e.pointerType === 'touch') {
            setShowOptions(o => !o); // Show popup on finger lift (confirmed tap)
        }
    }

    return {
        triggerLabel, 
        showPlaceholder: !selectedValues.length,
        showOptions,
        setShowOptions,
        handlePointerStart,
        handlePointerEnd
    }
}
