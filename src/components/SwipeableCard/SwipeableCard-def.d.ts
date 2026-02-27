import type { MALAnime } from "@/types/mal";

export interface SwipeableCardProps {
    data: MALAnime;
    displayedAtTop?: boolean;
    onSwipeLeft: () => void;
    onSwipeRight: (value: MALAnime) => void;
}

type SwipeableCardData = {
    title: string;
    episodeCount: number | null;
    imgUri: string;
    releaseType: string;
    score: number | null;
    releaseYear: number | null;
    genres: string[];
    demographic: string | null;
}