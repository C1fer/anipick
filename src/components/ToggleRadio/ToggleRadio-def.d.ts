export interface ToggleRadioProps {
    headerTitle: string;
    options: Record<string, string>;
    onSelected: (value: string) => void;
    selectedValue: string;
}