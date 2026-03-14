import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import { usePicks } from "@/context/PicksContext";
import { useWebHaptics } from "web-haptics/react";
import type { MediaPick } from "@/types/media";

export const useAnimeCardStack = (props: CardStackProps) => {
    const [currentPickIdx, setCurrentPickIndex] = useState<number>(0);

    const { currentPicks, queuedPicks, setQueuedPicks } = usePicks();

    const { trigger } = useWebHaptics();

    const queueUnseenPicks = () => {
        const remainingFromSwipe = currentPicks.slice(currentPickIdx + 1);

        if (remainingFromSwipe.length > 0) {
            setQueuedPicks([...queuedPicks, ...remainingFromSwipe]);
        }
    }

    const onCardSkipped = () => {
        if (currentPickIdx < currentPicks.length - 1) {
            trigger("error");
           setCurrentPickIndex((prev) => prev + 1);
        } else {
            props.onPicksExhausted();
        }
    };

    const onCardPicked = (value: MediaPick) => {
        queueUnseenPicks();
        props.onPickSelection(value);
    };

    const handleGoBack = () => {
        trigger("light");
        queueUnseenPicks();
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