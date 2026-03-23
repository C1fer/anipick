import type { SelectableOption  } from "@/components/MediaFilterView/MediaFilterView-def";
import type { FilterOptions } from "@/types/filters";
import type { MediaPick, MediaTypeOptions } from "@/types/media";
import { Constants } from "@/utils/constants";

export type ShuffledPicks = {
    picks: MediaPick[];
    toQueue: MediaPick[];
}

export type PicksFromFilters = ShuffledPicks & {
    lastVisiblePageFromApi: number | null;
}

export type FilterSuggestion = {
    type: keyof FilterOptions;
    label: string;
    validation(filters: FilterOptions): boolean;
    apply(filters: FilterOptions): FilterOptions[keyof FilterOptions];
}

const DEFAULT_FILTER_OPTIONS: FilterOptions = {
    mediaType: 'anime',
    releaseType: 'any',
    status: 'any',
    mediaLength: "any",
    genres: [],
    demographics: [],
    sfw: true,
}

const MEDIA_TYPE_OPTIONS: MediaTypeOptions[] = [
    { label: "Watch", value: "anime" },
    { label: "Read", value: "manga" },
]

const GENRES: SelectableOption[] = Constants.genres.map((genre) => ({
    label: genre.name,
    value: String(genre.mal_id),
}))

const EXPLICIT_GENRES: SelectableOption[] = Constants.explicitGenres.map((genre) => ({
    label: genre.name,
    value: String(genre.mal_id),
}))


const DEMOGRAPHICS: SelectableOption[] = Constants.demographics.map((demo) => ({
    label: demo.name,
    value: String(demo.mal_id),
}))

const SUGGESTIONS: FilterSuggestion[] = [
    {
        type: "genres",
        label: "Remove 1-2 genres",
        validation: (filters) => filters.genres.length > 3,
        apply: (filters) => filters.genres.slice(0, -2)
    },
    {
        type: "demographics",
        label: "Expand demographics",
        validation: (filters) => filters.demographics.length > 0,
        apply: () => []
    },
    {
        type: "status",
        label: "Include all statuses",
        validation: (filters) => filters.status === "airing",
        apply: () => "any"
    },
    {
        type: "mediaLength",
        label: "Expand length requirements",
        validation: (filters) => filters.mediaLength !== "any",
        apply: () => "any"
    }
]


export const MediaConfig = Object.freeze({
    defaultFilters: DEFAULT_FILTER_OPTIONS,
    mediaTypeOptions: MEDIA_TYPE_OPTIONS,
    genreOptions: GENRES,
    explicitGenreOptions: EXPLICIT_GENRES,
    demographicOptions: DEMOGRAPHICS,
    filterSuggestions: SUGGESTIONS
})