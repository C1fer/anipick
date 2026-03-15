import type { FilterOptions } from "@/types/filters";
import type { MALEntity } from "@/types/mal";
import type { MALManga } from "@/types/manga";
import type { MediaPick } from "@/types/media";

const MANGA_CHAPTERS_THRESHOLDS: Record<string,number[]> = {
    short: [1, 50],
    medium: [50, 100],
    long: [100, Infinity],
}

const WHITELISTED_MANGA_RELEASE_TYPES = new Set(["manga", "lightnovel", "oneshot", "doujin, manhwa", "manhua"]);

const getEpisodeCount = (count?: number | null ): string =>  {
    if (!count) return "Unknown (Publishing)";
    return count === 1 ? "1 chapter" : `${count} chapters`;
};

const getMangaAuthors = (authors: MALEntity[] | undefined): string[] => {
    if (!authors || authors.length === 0) return [];
    return authors.map(a => a.name.split(",").reverse().join(" ").trim()); // Convert "Last, First" to "First Last"
};


const validateManga = ({ type, chapters }: MALManga, filters: FilterOptions): boolean => {
    if (!type || !WHITELISTED_MANGA_RELEASE_TYPES.has(type.toLowerCase())) {
        return false;
    }

    if (filters.mediaLength !== "any") {
        const [min, max] = MANGA_CHAPTERS_THRESHOLDS[filters.mediaLength];
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
            synopsis: media.synopsis || null,
            episodeCount: getEpisodeCount(media.chapters),
            imgUri: media.images.jpg.large_image_url,
            releaseType: media.type || "Unknown",
            score: media.score || null,
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