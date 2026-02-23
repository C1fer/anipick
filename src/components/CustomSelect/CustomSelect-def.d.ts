export interface CustomSelectProps {
    label: string;
    options: Record<string, string> | Record<number, string>;
    onSelected: (value: string) => void;
}