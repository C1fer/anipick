import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def"
import type { MALEntity } from "@/types/mal";
import type { MALManga } from "@/types/manga";
import type { MediaPick } from "@/types/media";

const getEpisodeCount = (count?: number | null ): string =>  {
    if (!count) return "Unknown (Publishing)";
    return count === 1 ? "1 chapter" : `${count} chapters`;
};


const getMangaAuthor = (authors: MALEntity[] | undefined): string[] => {
    if (!authors || authors.length === 0) return [];
    return authors.map(a => a.name.split(",").reverse().join(" ").trim()); // Convert "Last, First" to "First Last"
}


const getPicksData = (filters: FilterOptions | null, data: MALManga[]): MediaPick[] => {
    const filteredData = data.filter((media) => {
        if (filters?.minEpisodes === "0") return true;

        if (filters?.status === "publishing") {
            return media.chapters === null || media.chapters >= parseInt(filters.minEpisodes);
        }
        return (media.chapters ?? 0) >= parseInt(filters?.minEpisodes ?? "0");
    });

    return filteredData.map((media) => ({
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
        authors: getMangaAuthor(media.authors),
    }));
}

export const MangaService = {
   getPicksData,
}