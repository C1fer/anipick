import { useState } from "react";
import { useWebHaptics } from "web-haptics/react";
import type { CustomDropdownProps, SelectableOption } from "./CustomDropdown-def";

export const useCustomDropdown = ({ selectedValues, onSelected }: CustomDropdownProps) => {
    const [ showOptions, setShowOptions] = useState(false);

    const { trigger } = useWebHaptics();

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
            trigger("selection");
            setShowOptions(o => !o); // Show popup on finger lift (confirmed tap)
        }
    }

    const onValueChange = (value: SelectableOption) => {
        trigger("selection");
        onSelected(value);
    }

    return {
        triggerLabel, 
        showPlaceholder: !selectedValues.length,
        showOptions,
        setShowOptions,
        onValueChange,
        handlePointerStart,
        handlePointerEnd
    }
}
