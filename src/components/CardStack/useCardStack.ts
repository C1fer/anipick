import { useState } from "react";
import type { CardStackProps } from "./CardStack-def"
import { usePicks } from "@/context/PicksContext";
import { useWebHaptics } from "web-haptics/react";
import type { MediaPick } from "@/types/media";
import { twMerge } from "tailwind-merge";

const baseWidthStyle = "w-[86vw] sm:w-[74vw] md:w-[58vw] lg:w-[44vw] xl:w-[36vw] 2xl:w-[32vw]";
const baseBoundsStyle = "min-w-[16rem] max-w-[30rem]";
const tabletLandscapeWidthStyle = "md:landscape:w-[36vw] lg:landscape:w-[30vw] xl:landscape:w-[26vw]";
const largeLandscapeOverrideStyle = "md:landscape:max-w-[26rem] 2xl:landscape:w-[32vw] 2xl:landscape:max-w-[30rem]";

const cardFrameStyle = twMerge(
    baseWidthStyle,
    baseBoundsStyle,
    tabletLandscapeWidthStyle,
    largeLandscapeOverrideStyle,
);

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
    };
   
    return {
        cardFrameStyle,
        picks: currentPicks,
        currentPickIdx,
        onCardSkipped,
        onCardPicked,
        handleGoBack
    }
}