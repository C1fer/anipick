export type MediaType = "anime" | "manga";

export type MediaTypeOptions = {
    label: string;
    value: MediaType;
}

export type MediaPick = {
    type: MediaType;
    id: number;
    title: string;
    titleLocalized: string | null;
    synopsis: string | null;
    episodeCount: string | null;
    imgUri: string;
    releaseType: string;
    rating?: string | null;
    score: string | null;
    releaseYear: string | null;
    genres: string[];
    demographic: string | null;
    studio?: string | null;
    authors?: string[];
    url: string;
}