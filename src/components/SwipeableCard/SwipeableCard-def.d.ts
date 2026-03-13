import type { MediaPick } from "@/types/media";

export interface SwipeableCardProps {
    data: MediaPick;
    displayedAtTop?: boolean;
    onSwipeLeft: () => void;
    onSwipeRight: (value: MediaPick) => void;
}