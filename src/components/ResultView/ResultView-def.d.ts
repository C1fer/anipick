import type { MALAnime } from "@/types/mal";

export interface ResultViewProps {
    selection: MALAnime | null;
    onGoBack: () => void;
    onRedrawPicks: () => void;
}