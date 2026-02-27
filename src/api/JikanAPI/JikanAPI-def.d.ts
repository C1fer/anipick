import type { MALAnime } from "@/types/anime";

export interface SearchAnimeRequest {
    limit?: number;
    type?: string;
    status?: string;
    genres?: string
    sfw?: boolean;
    order_by?: string;
    sort?: 'desc' | 'asc';
}

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

export interface SearchAnimeResponse {
    pagination: MALPagination;
    data: MALAnime[];
};

