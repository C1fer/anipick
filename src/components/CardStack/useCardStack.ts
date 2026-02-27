import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";


export const useAnimeCardStack = (props: CardStackProps) => {
    const [currentPickIdx, setCurrentPickIndex] = useState<number>(0);
        
    const onCardSkipped = () => {
        if (currentPickIdx < props.picks.length - 1) {
           setCurrentPickIndex((prev) => prev + 1);
        } else {
            props.onPicksExhausted();
        }
    };
    const onCardPicked = (value: MALAnime | MALManga) => {
        props.onPickSelection(value);
    };

    return {
        currentPickIdx,
        onCardSkipped,
        onCardPicked
    }
}