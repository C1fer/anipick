import type { MALAnime } from "@/types/anime"
import type { MALManga } from "@/types/manga";

export type CardStackProps = {
    onGoBack: () => void;
    onPickSelection: (value: MALAnime | MALManga) => void;
    onPicksExhausted: () => void;
}

