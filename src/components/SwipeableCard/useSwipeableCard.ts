import { useMotionValue, useTransform, type PanInfo } from "motion/react"
import type { SwipeableCardData, SwipeableCardProps } from "./SwipeableCard-def";
import type { MALEntity } from "@/types/mal";

const DRAG_THRESHOLD: number = 100;
const TILT_THRESHOLD: number = DRAG_THRESHOLD * 2; // Adjust this value to control when the card starts tilting during drag

export const useSwipeableCard = (props: SwipeableCardProps) => {
     const episodeCount = props.mediaType === "anime" 
        ? props.data.episodes ? `${props.data.episodes} episodes` : "Unknown (Airing)" 
        : props.data.volumes;
    
    const cardData: SwipeableCardData = {
        title: props.data.title,
        episodeCount: episodeCount,
        imgUri: props.data.images.webp.large_image_url,
        releaseType: props.data.type,
        score: props.data.score ?? null,
        releaseYear: props.data.year || props.data.aired.prop.from.year || null,
        genres: props.data.genres.slice(0, 3).map((g: MALEntity) => g.name),
        demographic: props.data.demographics.length > 0 ? props.data.demographics[0].name : null
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
            props.onSwipeRight(props.data);
        } else if (offset.x < -DRAG_THRESHOLD) {
            props.onSwipeLeft();
        }         
    };

    return {
        cardData,
        styles,
        handleCardDragEnd
    }
}