import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { MediaPick } from "@/types/media";
import { AnimeService } from "../Anime/AnimeService";
import { MangaService } from "../Manga/MangaService";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import type { FilterOptions } from "@/types/filters";
import { MediaConfig, type PicksFromFilters, type ShuffledPicks } from "./MediaConfig";
import { PagesExhaustedError } from "@/lib/errors";

const requestedPagesCache = new Set<number>();

const getPicksFromFilters = async (filters: FilterOptions, queuedPicks: MediaPick[] = [], lastVisiblePageWithFilters: number | null, resetCache?: boolean): Promise<PicksFromFilters> => {
    if (queuedPicks.length > 0) {
        const data = getShuffledPicks(queuedPicks);
        return { ...data, lastVisiblePageFromApi: null };
    }

    if (resetCache) {
        requestedPagesCache.clear();
    }

    const isDefaultFilters = Boolean(
        filters.releaseType === "any" 
        && filters.status === "any"  
        && filters.genres.length === 0
        && filters.demographics.length === 0
        && filters.sfw === true
    );

    const requestedPage = getRequestedPage(requestedPagesCache, lastVisiblePageWithFilters, isDefaultFilters);
    if (requestedPage === -1) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Small delay for UX purposes.
        throw new PagesExhaustedError("All possible pages have been requested with the current filters.");
    }

    const malGenresAndDemos = Array.from([...filters.genres, ...filters.demographics], (x => x.value)).join(",");

    const request = {
        type: filters.releaseType !== "any" ? filters.releaseType : undefined,
        status: filters.status !== "any" ? filters.status : undefined,
        genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
        sfw: filters.sfw,
        limit: 25,
        order_by: "popularity",
        sort: "asc",
        page: requestedPage,
    }

    const response = filters.mediaType === "anime"
        ? await JikanAPI.searchAnime(request)
        : await JikanAPI.searchManga(request);

    const isInitialLoadWithCustomFilters = !isDefaultFilters && lastVisiblePageWithFilters === null;

    // Use recursion to fetch results, now with knowledge of the max requestable page
    if (isInitialLoadWithCustomFilters && response.pagination.last_visible_page > 1) {
        if (requestedPage === 1) requestedPagesCache.delete(requestedPage); // Page 1 was only used to determine the total page count. Should not be counted as an actual request.
        return getPicksFromFilters(filters, queuedPicks, response.pagination.last_visible_page);
    }

    const data = filters.mediaType === "anime"
        ? getShuffledPicks(AnimeService.getPicksData(filters, response.data as MALAnime[]))
        : getShuffledPicks(MangaService.getPicksData(filters, response.data as MALManga[]));

    return {...data, lastVisiblePageFromApi: response.pagination.last_visible_page};
}

const getRequestedPage = (pageCache: Set<number>, lastVisiblePageWithFilters: number | null, isDefaultFilters: boolean): number => {
    let maxRequestablePage: number;

    if (lastVisiblePageWithFilters) {
        maxRequestablePage = lastVisiblePageWithFilters;
    } else {
        maxRequestablePage = isDefaultFilters ? 150 : 1;
    }

    if (pageCache.size === maxRequestablePage) {
        return -1;
    }

    for (let pageCount = 1; pageCount <= maxRequestablePage; pageCount++) {
        const randomPage = Math.floor(Math.random() * maxRequestablePage) + 1;
        if (pageCache.has(randomPage)) continue; 
        
        pageCache.add(randomPage);
        return randomPage;
    }

    return -1;
}

const getShuffledPicks = (queuedPicks: MediaPick[]): ShuffledPicks => {
    const shuffledPicks = Array.from(queuedPicks).sort(() => Math.random() - 0.5);
    const picks = shuffledPicks.slice(0, 5);

    return {
        picks,
        toQueue: shuffledPicks.slice(picks.length),
    }
}

const getFiltersWithSuggestions = (filters: FilterOptions, suggestionKeys: Set<string>): FilterOptions => {
    return MediaConfig.filterSuggestions.reduce((acc, suggestion) => {
        if (!suggestionKeys.has(suggestion.type)) return acc;

        return {
            ...acc,
            [suggestion.type]: suggestion.apply(acc),
        };
    }, { ...filters });
}


export const MediaService = Object.freeze({
    getPicksFromFilters,
    getFiltersWithSuggestions
});