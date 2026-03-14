import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { MediaPick } from "@/types/media";
import { AnimeService } from "../AnimeService";
import { MangaService } from "../MangaService";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import type { FilterOptions } from "@/types/filters";
import type { PicksFromFilters, ShuffledPicks } from "./MediaConfig";

const getPicksFromFilters = async (filters: FilterOptions, queuedPicks: MediaPick[] = [], lastVisiblePageWithFilters: number | null): Promise<PicksFromFilters> => {
    if (queuedPicks.length > 0) {
        const data = getShuffledPicks(queuedPicks);
        return { ...data, lastVisiblePageFromApi: null };
    }

    const isDefaultFilters = Boolean(
        filters.releaseType === "any" 
        && filters.status === "any"  
        && filters.genres.length === 0
        && filters.demographics.length === 0
        && filters.sfw === true
    );

    const malGenresAndDemos = Array.from([...filters.genres, ...filters.demographics], (x => x.value)).join(",");

    const request = {
        type: filters.releaseType !== "any" ? filters.releaseType : undefined,
        status: filters.status !== "any" ? filters.status : undefined,
        genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
        sfw: filters.sfw,
        limit: 25,
        order_by: "popularity",
        sort: "asc",
        page: getRequestedPage(lastVisiblePageWithFilters, isDefaultFilters),
    }

    const response = filters.mediaType === "anime"
        ? await JikanAPI.searchAnime(request)
        : await JikanAPI.searchManga(request);

    // Fetch recursively on initial load if custom filters are set
    if (!isDefaultFilters && lastVisiblePageWithFilters === null) {
        return getPicksFromFilters(filters, queuedPicks, response.pagination.last_visible_page);
    }

    const data = filters.mediaType === "anime"
        ? getShuffledPicks(AnimeService.getPicksData(filters, response.data as MALAnime[]))
        : getShuffledPicks(MangaService.getPicksData(filters, response.data as MALManga[]));

    return {...data, lastVisiblePageFromApi: response.pagination.last_visible_page};
}

const getRequestedPage = (lastVisiblePageWithFilters: number | null,isDefaultFilters: boolean, ): number => {
    if (isDefaultFilters) {
        return Math.floor(Math.random() * 100) + 1; // If no custom filters are set, start with a safe random page to increase variety
    }

    return lastVisiblePageWithFilters        
        ? Math.floor(Math.random() * lastVisiblePageWithFilters) + 1
        : 1; 
}

const getShuffledPicks = (queuedPicks: MediaPick[]): ShuffledPicks => {
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