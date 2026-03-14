import type { FilterOptions } from "@/types/filters";

export const DEFAULT_FILTER_OPTIONS: FilterOptions = {
    mediaType: 'anime',
    releaseType: 'any',
    status: 'any',
    mediaLength: "any",
    genres: [],
    demographics: [],
    sfw: true,
}

export const MediaConfig = Object.freeze({
    defaultFilters: DEFAULT_FILTER_OPTIONS,
})