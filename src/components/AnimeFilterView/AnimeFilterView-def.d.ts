import type { MALAnime } from "@/types/mal";
import type { ToggleRadioOption } from "../ToggleRadio/ToggleRadio-def";

export type AnimeFilterViewProps = {
    onFilterSuccess: (results: MALAnime[]) => void;
}

export type UseAnimeFilterViewResult = {
    isLoading: boolean;
    lists: Lists;
    state: AnimeFilterOptions;
    handleChange: <K extends keyof AnimeFilterOptions>(key: K, value: AnimeFilterOptions[K]) => void;
    onToggleSFW: () => void;
    onSelectGenre: (genre: SelectableOption) => void;
    onSelectDemographic: (demographic: SelectableOption) => void;
    onSubmit: () => Promise<void>;
}

export type Lists = {
    releaseType: ToggleRadioOption[];
    status: ToggleRadioOption[];
    minEpisodes:ToggleRadioOption[];
    genres: SelectableOption[];
    demographics: SelectableOption[];
}

export type AnimeFilterOptions = {
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