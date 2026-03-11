import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import { usePicks } from "@/context/PicksContext";
import { useWebHaptics } from "web-haptics/react";

export const useAnimeCardStack = (props: CardStackProps) => {
    const [currentPickIdx, setCurrentPickIndex] = useState<number>(0);

    const { currentPicks } = usePicks();

    const { trigger } = useWebHaptics();

    const onCardSkipped = () => {
        if (currentPickIdx < currentPicks.length - 1) {
            trigger("error");
           setCurrentPickIndex((prev) => prev + 1);
        } else {
            props.onPicksExhausted();
        }
    };

    const onCardPicked = (value: MALAnime | MALManga) => {
        props.onPickSelection(value);
    };

    const handleGoBack = () => {
        trigger("light");
        props.onGoBack()
    }

    return {
        picks: currentPicks,
        currentPickIdx,
        onCardSkipped,
        onCardPicked,
        handleGoBack
    }
}