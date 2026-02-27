import type { MALAnime } from "@/types/anime";
import type { MALStreamingOption } from "@/types/mal";

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

export interface SearchAnimeRequest {
    limit?: number;
    type?: string;
    status?: string;
    genres?: string
    sfw?: boolean;
    order_by?: string;
    sort?: 'desc' | 'asc';
    page?: number;
}

export interface SearchAnimeResponse {
    pagination: MALPagination;
    data: MALAnime[];
};

export type GetAnimeStreamingRequest = {
    id: number;
}


export type GetAnimeStreamingResponse = {
    data: MALStreamingOption[];
}