import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import type { MALAnime } from "@/types/mal";


export const useAnimeCardStack = (props: CardStackProps) => {
    const [currentPickIdx, setCurrentPickIndex] = useState<number>(0);
        
    const onCardSkipped = () => {
        if (currentPickIdx < props.picks.length - 1) {
           setCurrentPickIndex((prev) => prev + 1);
        } else {
            props.onPicksExhausted();
        }
    };
    const onCardPicked = (value: MALAnime) => {
        props.onPickSelection(value);
    };

    return {
        currentPickIdx,
        onCardSkipped,
        onCardPicked
    }
}