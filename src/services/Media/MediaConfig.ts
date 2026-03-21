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


export const MediaConfig = Object.freeze({
    defaultFilters: DEFAULT_FILTER_OPTIONS,
    mediaTypeOptions: MEDIA_TYPE_OPTIONS,
    genreOptions: GENRES,
    explicitGenreOptions: EXPLICIT_GENRES,
    demographicOptions: DEMOGRAPHICS,
})