import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import { usePicks } from "@/context/PicksContext";


export const useAnimeCardStack = (props: CardStackProps) => {
    const { currentPicks } = usePicks();

    const [currentPickIdx, setCurrentPickIndex] = useState<number>(0);
        
    const onCardSkipped = () => {
        if (currentPickIdx < currentPicks.length - 1) {
           setCurrentPickIndex((prev) => prev + 1);
        } else {
            props.onPicksExhausted();
        }
    };
    const onCardPicked = (value: MALAnime | MALManga) => {
        props.onPickSelection(value);
    };

    return {
        picks: currentPicks,
        currentPickIdx,
        onCardSkipped,
        onCardPicked
    }
}