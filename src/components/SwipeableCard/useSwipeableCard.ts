import { useMotionValue, useTransform, type PanInfo } from "motion/react"
import type { SwipeableCardData, SwipeableCardProps } from "./SwipeableCard-def";
import type { MALEntity } from "@/types/mal";
import { useMediaType } from "@/context/MediaTypeContext";

const DRAG_THRESHOLD: number = 100;
const TILT_THRESHOLD: number = DRAG_THRESHOLD * 2; // Adjust this value to control when the card starts tilting during drag

export const useSwipeableCard = ({ data, onSwipeLeft, onSwipeRight}: SwipeableCardProps) => {
    const { mediaType } = useMediaType();

    const getEpisodeCount = (mediaType: string, episodes?: number | null ): string =>  {
        if (mediaType === "anime") {
            if (!episodes) return "Unknown (Airing)";
            return episodes === 1 ? "1 episode" : `${episodes} episodes`;
        }
        return "Unknown";
    };

    const cardData: SwipeableCardData = {
        title: data.title,
        titleLocalized: data.title_english || null,
        episodeCount: getEpisodeCount(mediaType, data.episodes),
        imgUri: data.images.jpg.large_image_url,
        releaseType: data.type,
        score: data.score ?? null,
        releaseYear: data.year || data.aired.prop.from.year || null,
        genres: data.genres.slice(0, 3).map((g: MALEntity) => g.name),
        demographic: data.demographics.length > 0 ? data.demographics[0].name : null
    }

    const posX = useMotionValue(0);
    
    const cardOpacity = useTransform(
        posX, 
        [-200, -100, 0, 100, 200], 
        [0.5, 1, 1, 1, 0.5]
    );

    const pickOpacity = useTransform(posX, [0, DRAG_THRESHOLD], [0, 1]);

    const skipOpacity = useTransform(posX, [-DRAG_THRESHOLD, 0], [1, 0]);

    const rotate = useTransform(
        posX,
        [-TILT_THRESHOLD, TILT_THRESHOLD],
        [-20, 20]
    );

    const styles = { x: posX, cardOpacity, rotate, pickOpacity, skipOpacity };

    const handleCardDragEnd = ({ offset }: PanInfo) => {
        if (offset.x > DRAG_THRESHOLD) {
            onSwipeRight(data);
        } else if (offset.x < -DRAG_THRESHOLD) {
            onSwipeLeft();
        }         
    };

    return {
        mediaType,
        cardData,
        styles,
        handleCardDragEnd
    }
}