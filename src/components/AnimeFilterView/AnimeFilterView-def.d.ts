import type { ToggleRadioOption } from "../ToggleRadio/ToggleRadio-def";

export type UseAnimeFilterViewResult = {
    lists: Lists;
    state: FilterOptions;
    handleChange: <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => void;
    onToggleSFW: () => void;
    onSelectGenre: (genre: SelectableOption) => void;
    onSelectDemographic: (demographic: SelectableOption) => void;
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