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
    { label: "Anime", value: "anime" },
    { label: "Manga", value: "manga" },
]
const ANIME_LENGTH: SelectableOption[] = [
    { label: "Short", value: "short" },
    { label: "Medium", value: "medium" },
    { label: "Long", value: "long" },
    { label: "Any", value: "any" },
]

const ANIME_STATUS: SelectableOption[] = [
    { label: "Finished", value: "complete" },
    { label: "Airing", value: "airing" },
    { label: "Any", value: "any" },
]

const ANIME_RELEASE_TYPE: SelectableOption[] = [
    { label: "Movie", value: "movie" },
    { label: "ONA", value: "ona" },
    { label: "TV", value: "tv" },
    { label: "Any", value: "any" },
]

const MANGA_LENGTH: SelectableOption[] = [
    { label: "Short", value: "short" },
    { label: "Medium", value: "medium" },
    { label: "Long", value: "long" },
    { label: "Any", value: "any" },
]

const MANGA_STATUS: SelectableOption[] = [
    { label: "Complete", value: "complete" },
    { label: "Publishing", value: "publishing" },
    { label: "Any", value: "any" },
]

const MANGA_RELEASE_TYPE: SelectableOption[] = [
    { label: "Any", value: "any" },
    { label: "Light Novel", value: "lightnovel" },
    { label: "Manga", value: "manga" },
    { label: "Manwha", value: "manhwa" },
    { label: "One-shot", value: "oneshot" },
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
    animeLengthOptions: ANIME_LENGTH,
    animeStatusOptions: ANIME_STATUS,
    animeReleaseTypeOptions: ANIME_RELEASE_TYPE,
    mangaLengthOptions: MANGA_LENGTH,
    mangaStatusOptions: MANGA_STATUS,
    mangaReleaseTypeOptions: MANGA_RELEASE_TYPE,
    genreOptions: GENRES,
    explicitGenreOptions: EXPLICIT_GENRES,
    demographicOptions: DEMOGRAPHICS,
})