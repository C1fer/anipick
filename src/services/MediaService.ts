import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def";
import type { MediaPick, MediaType } from "@/types/media";
import { AnimeService } from "./AnimeService";
import { MangaService } from "./MangaService";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";

type PicksFromFilters = {
    picks: MediaPick[];
    toQueue: MediaPick[];
    lastVisiblePageFromApi?: number | null;
}

const getPicksFromFilters = async (mediaType: MediaType, filters: FilterOptions | null, queuedPicks: MediaPick[] = [], lastVisiblePageWithFilters: number | null): Promise<PicksFromFilters> => {
    if (!filters) return { picks: [], toQueue: [], lastVisiblePageFromApi: null };

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
        order_by: "score",
        sort: "desc",
        page: getRequestedPage(lastVisiblePageWithFilters, isDefaultFilters),
    }

    const response = mediaType === "anime"
        ? await JikanAPI.searchAnime(request)
        : await JikanAPI.searchManga(request);


    const data = mediaType === "anime"
        ? getShuffledPicks(AnimeService.getPicksData(filters, response.data as MALAnime[]))
        : getShuffledPicks(MangaService.getPicksData(filters, response.data as MALManga[]));

    return {...data, lastVisiblePageFromApi: response.pagination.last_visible_page};


const getRequestedPage = (lastVisiblePageWithFilters: number | null,isDefaultFilters: boolean, ): number => {
    if (isDefaultFilters) {
        return Math.floor(Math.random() * 200) + 1; // Start with a random page for default filters to increase variety
    }

    return lastVisiblePageWithFilters        
        ? Math.floor(Math.random() * lastVisiblePageWithFilters) + 1
        : 1; 
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