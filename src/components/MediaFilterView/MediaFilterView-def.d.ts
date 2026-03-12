import type { ToggleRadioOption } from "../ToggleRadio/ToggleRadio-def";

export type MediaFilterViewProps = {
    onFilterSuccess: () => void;
}

export type Lists = {
    releaseType: ToggleRadioOption[];
    status: ToggleRadioOption[];
    minEpisodes:ToggleRadioOption[];
    genres: SelectableOption[];
    demographics: SelectableOption[];
}

export type FilterOptions = {
    releaseType: string;
    status: string;
    minEpisodes: string;
    genres: SelectableOption[];
    demographics: SelectableOption[];
    sfw: boolean;
}

export type SelectableOption = {
    label: string;
    value: string;
}