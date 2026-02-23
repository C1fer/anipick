type ToggleRadioOption = {
    label: string;
    value: string;
}

export interface ToggleRadioProps {
    headerTitle: string;
    options: ToggleRadioOption[];
    onSelected: (value: string) => void;
    selectedValue: string;
}