import type { MALAired, MALEntity, MALImages, MALTitle } from "./mal";

export type MALMangaReleaseType = 
    |"manga"
    |"novel"
    |"lightnovel"
    |"oneshot"
    |"doujin"
    |"manhwa"
    |"manhua"


export type MALMangaStatus =
    |"publishing"
    |"complete"
    |"hiatus"
    |"discontinued"
    |"upcoming"

export type MALManga = {
    mal_id: number;
    url: string;
    images: MALImages
    approved: boolean;
    titles: MALTitle[];
    title: string;
    title_english: string | null;
    title_japanese: string | null;
    title_synonyms: string[];
    type: MALMangaReleaseType | null;
    chapters: number | null;
    volumes: number | null;
    status: MALMangaStatus | null;
    publishing: boolean;
    published: MALAired;
    score: number | null;
    scored: number | null;
    scored_by: number | null;
    rank: number | null;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string | null;
    background: string | null;
    authors: MALEntity[];
    serializations: MALEntity[];
    genres: MALEntity[];
    explicit_genres: MALEntity[];
    themes: MALEntity[];
    demographics: MALEntity[];
}