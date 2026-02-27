import type { MALAnime } from "@/types/anime"
import type { MALManga } from "@/types/manga";
import type { MediaType } from "@/types/media";

export type CardStackProps = {
    mediaType: MediaType
    picks: MALAnime[] | MALManga[];
    onGoBack: () => void;
    onPickSelection: (value: MALAnime | MALManga) => void;
    onPicksExhausted: () => void;
}

