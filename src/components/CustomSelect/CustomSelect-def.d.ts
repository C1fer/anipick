type SelectableOption = {
    label: string;
    value: string;
}

export interface CustomSelectProps {
    label: string;
    options: SelectableOption[];
    onSelected: (value: string) => void;
}