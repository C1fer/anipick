import { useMotionValue, useTransform, useMotionValueEvent, type PanInfo } from "motion/react"
import type {  SwipeableCardProps } from "./SwipeableCard-def";
import { useWebHaptics } from "web-haptics/react";
import { useRef } from "react";

const DRAG_THRESHOLD: number = 100;
const TILT_THRESHOLD: number = DRAG_THRESHOLD * 2; // Adjust this value to control when the card starts tilting during drag

export const useSwipeableCard = ({ data, onSwipeLeft, onSwipeRight}: SwipeableCardProps) => {
    const thresholdZone = useRef<"none" | "left" | "right">("none");
    
    const { trigger } = useWebHaptics();

    const posX = useMotionValue(0);

    useMotionValueEvent(posX, "change", (x) => {
        if (x > DRAG_THRESHOLD && thresholdZone.current !== "right") {
            thresholdZone.current = "right";
            trigger("medium");
        } else if (x < -DRAG_THRESHOLD && thresholdZone.current !== "left") {
            thresholdZone.current = "left";
            trigger("medium");
        } else if (x >= -DRAG_THRESHOLD && x <= DRAG_THRESHOLD && thresholdZone.current !== "none") {
            thresholdZone.current = "none";
            trigger("light");
        }
    });
    
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
        thresholdZone.current = "none";
        if (offset.x > DRAG_THRESHOLD) {
            onSwipeRight(data);
        } else if (offset.x < -DRAG_THRESHOLD) {
            onSwipeLeft();
        }         
    };

    return {
        styles,
        handleCardDragEnd
    }
}