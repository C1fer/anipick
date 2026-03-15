import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { MALAnime } from "@/types/anime";
import type { FilterOptions } from "@/types/filters";
import type { MALStreamingOption } from "@/types/mal";
import type { MediaPick } from "@/types/media";
import { Constants } from "@/utils/constants";

const ANIME_EPISODE_THRESHOLDS: Record<string,number[]> = {
    short: [1, 13],
    medium: [13, 26],
    long: [26, Infinity],
}

const WHITELISTED_ANIME_RELEASE_TYPES = new Set(["tv", "movie", "ona"]);

const getEpisodeCount = (count?: number | null ): string =>  {
    if (!count) return "Unknown (Airing)";
    return count === 1 ? "1 episode" : `${count} episodes`;
};

const validateAnime = ({ type, episodes }: MALAnime, filters: FilterOptions): boolean => {
    if (!type || !WHITELISTED_ANIME_RELEASE_TYPES.has(type.toLowerCase())) {
        return false;
    }

    if (filters.mediaLength !== "any") {
        const [min, max] = ANIME_EPISODE_THRESHOLDS[filters.mediaLength];
        return episodes !== null && episodes >= min && episodes <= max;
    }

    return true;
};

const getPicksData = (filters: FilterOptions, data: MALAnime[]): MediaPick[] => {
    return data
        .filter((media) => validateAnime(media, filters))
        .map((media) => ({
            type: "anime",
            id: media.mal_id,
            title: media.title,
            titleLocalized: media.title_english || null,
            synopsis: media.synopsis || null,
            episodeCount: getEpisodeCount(media.episodes),
            imgUri: media.images.jpg.large_image_url,
            releaseType: media.type || "Unknown",
            score: media.score || null,
            releaseYear: String(media.aired?.prop?.from?.year) || "Unknown",
            genres: media.genres.slice(0, 3).map((g) => g.name),
            demographic: media.demographics.length > 0 ? media.demographics[0].name : null,
            url: media.url, 
            rating: media.rating ? Constants.ratings[media.rating] ?? media.rating : null,
            studio: media?.studios?.length > 0 ? media.studios[0].name : "Unknown Studio",
        })
    );
}

const getStreamingOptions = async (id: number): Promise<MALStreamingOption[]> => {
    const response = await JikanAPI.getStreamingOptions({ id });
    return response.data || [];
}

export const AnimeService = {
   getPicksData,
   getStreamingOptions
}