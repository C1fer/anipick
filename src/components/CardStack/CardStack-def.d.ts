import type { MALAnime } from "@/types/mal"

export type CardStackProps = {
    picks: MALAnime[];
    onGoBack: () => void;
    onPickSelection: (value: MALAnime) => void;
    onPicksExhausted: () => void;
}

