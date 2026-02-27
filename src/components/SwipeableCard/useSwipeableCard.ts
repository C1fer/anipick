import { animate, useMotionValue, useMotionValueEvent, useTransform, type PanInfo } from "motion/react"
import type { SwipeableCardData, SwipeableCardProps } from "./SwipeableCard-def";
import type { MALEntity } from "@/types/mal";
import { useState } from "react";

const DRAG_CONSTRAINT: number = 150;
const TILT_THRESHOLD: number = DRAG_CONSTRAINT * 0.5; // Adjust this value to control when the card starts tilting during drag

const dragConstraints = { left: -DRAG_CONSTRAINT, right: DRAG_CONSTRAINT };

export const useSwipeableCard = (props: SwipeableCardProps) => {
    const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(null);

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

    useMotionValueEvent(posX, "change", (latest) => {
        const newDirection = latest === 0 
            ? null 
            : latest > 0 ? "right" : "left";
            
        if (newDirection !== dragDirection) {
            setDragDirection(newDirection);
        }
    });

    const { opacity, dragIndicatorColor } = useTransform(
        posX,
        [-DRAG_CONSTRAINT, 0, DRAG_CONSTRAINT],
        {
            opacity: [0.7, 1, 0.7],
            dragIndicatorColor: ['#a84032', 'rgba(0,0,0,0)', '#32a852'],
        }
    );

    const rotate = useTransform(
        posX,
        [-TILT_THRESHOLD, 0, TILT_THRESHOLD],
        [-15, 0, 15]
    );

    const dynamicStyles = { x: posX, opacity, rotate };

    const handleCardDragEnd = ({ offset }: PanInfo) => {
        if (offset.x > DRAG_CONSTRAINT) {
            props.onSwipeRight(props.data);
        } else if (offset.x < -DRAG_CONSTRAINT) {
            animate(posX, -DRAG_CONSTRAINT * 2, { duration: 0.2 }).then(props.onSwipeLeft);
        } else {
            animate(posX, 0);
        } 
    };

    return {
        cardData,
        dragDirection,
        dragIndicatorColor,
        dynamicStyles,
        dragConstraints,
        handleCardDragEnd
    }
}