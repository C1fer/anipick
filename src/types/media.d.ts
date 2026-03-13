export type MediaType = "anime" | "manga";


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
    score: number | null;
    releaseYear: string | null;
    genres: string[];
    demographic: string | null;
    studio?: string | null;
    authors?: string[];
    url: string;
}