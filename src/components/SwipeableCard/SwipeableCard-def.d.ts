import type { MALAnime } from "@/types/mal";
import type { MALManga } from "@/types/manga";
import type { MediaType } from "@/types/media";

export interface SwipeableCardProps {
    mediaType: MediaType
    data: MALAnime | MALManga;
    displayedAtTop?: boolean;
    onSwipeLeft: () => void;
    onSwipeRight: (value: MALAnime | MALManga) => void;
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