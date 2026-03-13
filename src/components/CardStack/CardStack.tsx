
import { ChevronLeft } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { SwipeableCard } from "../SwipeableCard/SwipeableCard";
import type { CardStackProps } from "./CardStack-def";
import { useAnimeCardStack } from "./useCardStack";
import type { MediaPick } from "@/types/media";

export const CardStack = (props: CardStackProps): React.ReactElement => {
    const { 
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
        <div className="flex flex-col items-center justify-center ">
            {/* Header */}
            <div className="flex items-center w-full justify-between">
                <button 
                    className="cursor-pointer p-2.5 rounded-lg text-muted-foreground hover:bg-action hover:text-foreground transition-all" 
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
            <div className="grid w-[350px] md:w-[400px]">
                {picks.map(renderCards)} 
            </div>
        </div>
    )
}