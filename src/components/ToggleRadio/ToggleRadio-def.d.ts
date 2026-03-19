type ToggleRadioOption = {
    label: string;
    value: string;
}

export interface ToggleRadioProps {
    className?: string;
    headerTitle?: string;
    options: ToggleRadioOption[];
    onSelected: (value: string) => void;
    selectedValue: string;
    disabled?: boolean;
    showPopover?: boolean;
    popoverContent?: string;
}