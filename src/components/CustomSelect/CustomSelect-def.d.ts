type SelectableOption = {
    label: string;
    value: string;
}

export interface CustomSelectProps {
    label: string;
    options: SelectableOption[];
    selectedValue: string;
    onSelected: (value: string) => void;
    disabled?: boolean;
}