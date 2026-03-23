import type { MALAnime } from "@/types/mal";
import type { MALManga } from "@/types/manga";

export interface ResultViewProps {
    selection: MALAnime | MALManga | null;
    onGoBack: (showSuggestionsOnMount?: boolean) => void;
    onRedrawPicks: () => void;
}