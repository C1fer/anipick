import type { MALAnime } from "@/types/anime";
import type { MALStreamingOption } from "@/types/mal";
import type { MALManga } from "@/types/manga";

export type MALPagination = {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
};

export interface SearchRequest {
    limit?: number;
    type?: string;
    status?: string;
    genres?: string
    sfw?: boolean;
    order_by?: string;
    sort?: string;
    page?: number;
}

export interface SearchAnimeResponse {
    pagination: MALPagination;
    data: MALAnime[];
};

export interface SearchMangaResponse {
    pagination: MALPagination;
    data: MALManga[];
};

export type GetAnimeStreamingRequest = {
    id: number;
}


export type GetAnimeStreamingResponse = {
    data: MALStreamingOption[];
}