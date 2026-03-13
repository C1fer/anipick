import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def";
import type { MediaPick, MediaType } from "@/types/media";
import { AnimeService } from "./AnimeService";
import { MangaService } from "./MangaService";

type PicksFromFilters = {
    picks: MediaPick[];
    toQueue: MediaPick[];
}

const getPicksFromFilters = async (mediaType: MediaType, filters: FilterOptions | null, queuedPicks: MediaPick[] = []): Promise<PicksFromFilters> => {
    if (!filters) return { picks: [], toQueue: [] };

    if (queuedPicks.length > 0) {
        return getShuffledPicks(queuedPicks);
    }

    const malGenresAndDemos = Array.from([...filters.genres, ...filters.demographics], (x => x.value)).join(",");

    const request = {
        type: filters.releaseType !== "any" ? filters.releaseType : undefined,
        status: filters.status !== "any" ? filters.status : undefined,
        genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
        sfw: filters.sfw,
        limit: 25,
        order_by: "score",
        sort: "desc",
        page: Math.floor(Math.random() * 10) + 1, // Randomizing requested page since Jikan API does not expose a random endpoint.
    }

    if (mediaType === "anime") {
        const response = await JikanAPI.searchAnime(request);
        return getShuffledPicks(AnimeService.getPicksData(filters, response.data));
    } else {   
        const response = await JikanAPI.searchManga(request);
        return getShuffledPicks(MangaService.getPicksData(filters, response.data));
    }
}


const getShuffledPicks = (queuedPicks: MediaPick[]): PicksFromFilters => {
    const shuffledPicks = Array.from(queuedPicks).sort(() => Math.random() - 0.5);
    const picks = shuffledPicks.slice(0, 5);

    return {
        picks,
        toQueue: shuffledPicks.slice(picks.length),
    }
}

export const MediaService = Object.freeze({
    getPicksFromFilters,
});