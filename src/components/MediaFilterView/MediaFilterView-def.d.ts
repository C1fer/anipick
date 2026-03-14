import type { ToggleRadioOption } from "../ToggleRadio/ToggleRadio-def";

export type MediaFilterViewProps = {
    onFilterSuccess: () => void;
}

export type Lists = {
    releaseType: ToggleRadioOption[];
    status: ToggleRadioOption[];
    mediaLength:ToggleRadioOption[];
    genres: SelectableOption[];
    demographics: SelectableOption[];
}

export type SelectableOption = {
    label: string;
    value: string;
}