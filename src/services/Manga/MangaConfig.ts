import type { SelectableOption } from "@/components/MediaFilterView/MediaFilterView-def"

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

const MANGA_CHAPTERS_THRESHOLDS: Record<string,number[]> = {
    short: [1, 50],
    medium: [50, 100],
    long: [100, Infinity],
}

const WHITELISTED_MANGA_RELEASE_TYPES = new Set(["manga", "lightnovel", "oneshot", "doujin, manhwa", "manhua"]);

export const MangaConfig = Object.freeze({
    lengthOptions: MANGA_LENGTH,
    statusOptions: MANGA_STATUS,
    releaseTypeOptions: MANGA_RELEASE_TYPE,
    chapterThresholds: MANGA_CHAPTERS_THRESHOLDS,
    whitelistedReleaseTypes: WHITELISTED_MANGA_RELEASE_TYPES,
})