import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { AnimeFilterOptions } from "@/components/AnimeFilterView/AnimeFilterView-def"
import type { MALAnime } from "@/types/anime";
import type { MALStreamingOption } from "@/types/mal";
import { mockDataV2, mockDataV3 } from "@/utils/MockData";

type PicksFromFilters = {
    
    picks: MALAnime[];
    toQueue: MALAnime[];
}

const getPicksFromFilters = async (filters: AnimeFilterOptions | null, queuedPicks: MALAnime[] = []): Promise<PicksFromFilters> => {
    if (!filters) return { picks: [], toQueue: [] };

    if (queuedPicks.length > 0) {
        return getShuffledPicks(queuedPicks);
    }

    const response = { data: mockDataV3 }
    // const malGenresAndDemos : string = Array.from(
    //     [...filters.genres, ...filters.demographics], 
    //     (x => x.value)
    // ).join(",");

    // const response = await JikanAPI.searchAnime({
    //     type: filters.releaseType !== "any" ? filters.releaseType : undefined,
    //     status: filters.status !== "any" ? filters.status : undefined,
    //     genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
    //     sfw: filters.sfw,
    //     limit: 25,
    //     order_by: "score",
    //     sort: "desc",
    //     page: Math.floor(Math.random() * 10) + 1, // Randomizing requested page since Jikan API does not expose a random endpoint.
    // });

    if (filters.minEpisodes === "0" || filters.releaseType === "movie") {
        return getShuffledPicks(response.data);
    } 
        return getShuffledPicks(response.data.filter((anime) => {
            if (filters.status === "airing") {
                return anime.episodes === null || anime.episodes >= parseInt(filters.minEpisodes);
            }
            return (anime.episodes ?? 0) >= parseInt(filters.minEpisodes);
        }));
};

const getShuffledPicks  = (queuedPicks: MALAnime[]): PicksFromFilters => {
    const shuffledPicks = queuedPicks.sort(() => Math.random() - 0.5);
    const picks = shuffledPicks.slice(0, 10);

    return {
        picks,
        toQueue: shuffledPicks.slice(picks.length),
    }
}

const getStreamingOptions = async (id: number): Promise<MALStreamingOption[]> => {
    const response = await JikanAPI.getStreamingOptions({ id });
    return response.data || [];
}


export const AnimeService = {
    getPicksFromFilters,
    getStreamingOptions,
}