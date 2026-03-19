
import { ChevronLeft } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { SwipeableCard } from "../SwipeableCard/SwipeableCard";
import type { CardStackProps } from "./CardStack-def";
import { useAnimeCardStack } from "./useCardStack";
import type { MediaPick } from "@/types/media";

export const CardStack = (props: CardStackProps): React.ReactElement => {
    const { 
        cardFrameStyle,
        picks,
        currentPickIdx,
        onCardSkipped,
        onCardPicked,
        handleGoBack
    } = useAnimeCardStack(props);

    const renderCards = (pick: MediaPick, idx: number): React.ReactElement => {
        const isDisplaying: boolean = idx === currentPickIdx;
        const isNextInStack: boolean = Math.min(currentPickIdx + 1, picks.length - 1) === idx;
        
        return (
            <AnimatePresence 
                key={`pick-card-${pick.id}`}
                mode="wait" 
            >
                {isDisplaying || isNextInStack ? (
                    <SwipeableCard
                        data={pick}
                        onSwipeLeft={onCardSkipped}
                        onSwipeRight={() => onCardPicked(pick)}
                        displayedAtTop={isDisplaying}
                    />
                ): null}
            </AnimatePresence>
        )
    }

    return (
        <div className={`flex flex-col h-full items-center justify-center ${cardFrameStyle}`}>
            {/* Header */}
            <div className={`flex items-center justify-between ${cardFrameStyle}`}>
                <button 
                    className="cursor-pointer p-1.5 rounded-lg text-muted-foreground hover:bg-action hover:text-foreground transition-colors" 
                    onClick={handleGoBack}
                >
                   <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-muted-foreground">
                    {`${currentPickIdx + 1} / ${picks.length}`}
                </span>
                <div className="w-10"/> {/* Spacer */}
            </div>
            {/* Card Stack */}
            <div className={`grid place-items-center ${cardFrameStyle} *:w-full`}>
                {picks.map(renderCards)} 
            </div>
        </div>
    )
}