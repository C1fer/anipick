import type { MALAired, MALBroadcast, MALEntity, MALTrailer, MALImages, MALRating, MALTitle, M } from "./mal";

export type MALAnimeReleaseType = 
    |"TV"
    |"OVA"
    |"Movie"
    |"Special"
    |"ONA"
    |"Music"

export type MALAnimeStatus = 
    |"Finished Airing"
    |"Currently Airing"
    |"Not yet aired"

export type MALAnime = {
    mal_id: number;
    url: string;
    images: MALImages;
    trailer: MALTrailer;
    approved: boolean;
    titles: MALTitle[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: MALAnimeReleaseType | null;
    source: string | null;
    episodes: number | null;
    status: MALAnimeStatus | null;
    airing: boolean;
    aired: MALAired;
    duration: string | null;
    rating: MALRating | null;
    score: number | null;
    scored_by: number | null;
    rank: number | null;
    popularity: number | null;
    members: number;
    favorites: number;
    synopsis: string | null;
    background: string | null;
    season: string | null;
    year: number | null;
    broadcast: MALBroadcast;
    producers: MALEntity[];
    licensors: MALEntity[];
    studios: MALEntity[];
    genres: MALEntity[];
    explicit_genres: MALEntity[];
    themes: MALEntity[];
    demographics: MALEntity[];
};