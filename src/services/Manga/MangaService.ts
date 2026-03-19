import type { FilterOptions } from "@/types/filters";
import type { MALEntity } from "@/types/mal";
import type { MALManga } from "@/types/manga";
import type { MediaPick } from "@/types/media";
import { StringUtils } from "@/utils/StringUtils";
import { MangaConfig } from "./MangaConfig";

const getEpisodeCount = (count?: number | null ): string =>  {
    if (!count) return "Unknown (Publishing)";
    return count === 1 ? "1 chapter" : `${count} chapters`;
};

const getMangaAuthors = (authors: MALEntity[] | undefined): string[] => {
    if (!authors || authors.length === 0) return [];
    return authors.map(a => a.name.split(",").reverse().join(" ").trim()); // Convert "Last, First" to "First Last"
};


const validateManga = ({ type, chapters }: MALManga, filters: FilterOptions): boolean => {
    if (!type || !MangaConfig.whitelistedReleaseTypes.has(type.toLowerCase())) {
        return false;
    }

    if (filters.mediaLength !== "any") {
        const [min, max] = MangaConfig.chapterThresholds[filters.mediaLength];
        return chapters !== null && chapters >= min && chapters <= max;
    }

    return true;
};

const getPicksData = (filters: FilterOptions, data: MALManga[]): MediaPick[] => {
    return data
        .filter((media) => validateManga(media, filters))
        .map((media) => ({
            type: "manga",
            id: media.mal_id,
            title: media.title,
            titleLocalized: media.title_english || null,
            synopsis: StringUtils.cleanSynopsis(media.synopsis) || null,
            episodeCount: getEpisodeCount(media.chapters),
            imgUri: media.images.jpg.large_image_url,
            releaseType: media.type || "Unknown",
            score: media.score?.toFixed(2) || null,
            releaseYear: String(media.published?.prop?.from?.year) || "Unknown",
            genres: media.genres.slice(0, 3).map((g) => g.name),
            demographic: media.demographics.length > 0 ? media.demographics[0].name : null,
            url: media.url, 
            authors: getMangaAuthors(media.authors),
        }));
}

export const MangaService = {
   getPicksData,
}