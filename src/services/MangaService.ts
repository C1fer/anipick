import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def";
import type { MALManga } from "@/types/manga";
import { mockManga } from "@/utils/MockData";

type PicksFromFilters = {
    
    picks: MALManga[];
    toQueue: MALManga[];
}

const getPicksFromFilters = async (filters: FilterOptions | null, queuedPicks: MALManga[] = []): Promise<PicksFromFilters> => {
    if (!filters) return { picks: [], toQueue: [] };

    if (queuedPicks.length > 0) {
        return getShuffledPicks(queuedPicks);
    }

    await new Promise((resolve) => setTimeout(resolve, 200)); // Simulating network delay

    // const response = { data: mockManga }
    const malGenresAndDemos : string = Array.from(
        [...filters.genres, ...filters.demographics], 
        (x => x.value)
    ).join(",");

    const response = await JikanAPI.searchManga({
        type: filters.releaseType !== "any" ? filters.releaseType : undefined,
        status: filters.status !== "any" ? filters.status : undefined,
        genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
        sfw: filters.sfw,
        limit: 25,
        order_by: "score",
        sort: "desc",
        page: Math.floor(Math.random() * 10) + 1, // Randomizing requested page since Jikan API does not expose a random endpoint.
    });

    if (filters.minEpisodes === "0" || filters.releaseType === "movie") {
        return getShuffledPicks(response.data);
    } 
        return getShuffledPicks(response.data.filter((manga: MALManga) => {
            if (filters.status === "publishing") {
                return manga.chapters === null || manga.chapters >= parseInt(filters.minEpisodes);
            }
            return (manga.chapters ?? 0) >= parseInt(filters.minEpisodes);
        }));
};

const getShuffledPicks  = (queuedPicks: MALManga[]): PicksFromFilters => {
    const shuffledPicks = queuedPicks.sort(() => Math.random() - 0.5);
    const picks = shuffledPicks.slice(0, 10);

    return {
        picks,
        toQueue: shuffledPicks.slice(picks.length),
    }
}

export const MangaService = Object.freeze({
    getPicksFromFilters,
});