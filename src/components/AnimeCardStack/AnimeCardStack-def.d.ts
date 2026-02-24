import type { MALAnime } from "@/types/mal"

export type AnimeCardProps = {
    data: MALAnime;
}


export type AnimeCardStackProps = {
    picks: MALAnime[];
}


export type UseAnimeCardStackResult = {
    currentPickIndex: number;
    // currentPick: MALAnime | null;
    // onSwipeLeft: () => void;
    // onSwipeRight: () => void;
}