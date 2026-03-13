import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def"
import type { MALAnime } from "@/types/anime";
import type { MALStreamingOption } from "@/types/mal";
import type { MediaPick } from "@/types/media";
import { Constants } from "@/utils/constants";

const getEpisodeCount = (count?: number | null ): string =>  {
    if (!count) return "Unknown (Airing)";
    return count === 1 ? "1 episode" : `${count} episodes`;
};

const getPicksData = (filters: FilterOptions | null, data: MALAnime[]): MediaPick[] => {
    const filteredData = data.filter((media) => {
        if (filters?.minEpisodes === "0" || filters?.releaseType === "movie") {
            return true;
        } 
        if (filters?.status === "airing" || filters?.status === "publishing") {
            return media.episodes === null || media.episodes >= parseInt(filters.minEpisodes);
        }
        return (media.episodes ?? 0) >= parseInt(filters?.minEpisodes ?? "0");
    });

    return filteredData.map((media) => ({
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
        studio: media?.studios?.length > 0 ? media.studios[0].name : "Unknown studio",
    }));
}

const getStreamingOptions = async (id: number): Promise<MALStreamingOption[]> => {
    const response = await JikanAPI.getStreamingOptions({ id });
    return response.data || [];
}


export const AnimeService = {
   getPicksData,
   getStreamingOptions
}