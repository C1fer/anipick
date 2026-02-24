export type MALAnimeImages = {
    jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    };
    webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    };
};

export type MALTrailer = {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
        image_url: string | null;
        small_image_url: string | null;
        medium_image_url: string | null;
        large_image_url: string | null;
        maximum_image_url: string | null;
    };
};

export type MALTitle = {
    type: string;
    title: string;
};

export type MALAiredProp = {
    day: number | null;
    month: number | null;
    year: number | null;
};

export type MALAired = {
    from: string | null;
    to: string | null;
    prop: {
        from: MALAiredProp;
        to: MALAiredProp;
    };
    string: string;
};

export type MALBroadcast = {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
};

export type MALEntity = {
    mal_id: number;
    type?: string;
    name: string;
    url?: string;
};

export type MALAnime = {
    mal_id: number;
    url: string;
    images: MALAnimeImages;
    trailer: MALTrailer;
    approved: boolean;
    titles: MALTitle[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string | null;
    episodes: number | null;
    status: string;
    airing: boolean;
    aired: MALAired;
    duration: string | null;
    rating: string | null;
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