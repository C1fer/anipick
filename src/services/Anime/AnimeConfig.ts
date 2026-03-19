import type { SelectableOption } from "@/components/MediaFilterView/MediaFilterView-def"

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

const ANIME_EPISODE_THRESHOLDS: Record<string,number[]> = {
    short: [1, 13],
    medium: [13, 26],
    long: [26, Infinity],
}

const WHITELISTED_ANIME_RELEASE_TYPES = new Set(["tv", "movie", "ona"]);

export const AnimeConfig = Object.freeze({
    lengthOptions: ANIME_LENGTH,
    statusOptions: ANIME_STATUS,
    releaseTypeOptions: ANIME_RELEASE_TYPE,
    episodeThresholds: ANIME_EPISODE_THRESHOLDS,
    whitelistedReleaseTypes: WHITELISTED_ANIME_RELEASE_TYPES,
})