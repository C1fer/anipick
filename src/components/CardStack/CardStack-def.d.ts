import type { MediaPick } from "@/types/media";

export type CardStackProps = {
    onGoBack: () => void;
    onPickSelection: (value: MediaPick) => void;
    onPicksExhausted: () => void;
}

