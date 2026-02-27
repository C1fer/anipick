import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SwipeableCard } from "../SwipeableCard/SwipeableCard";
import type { CardStackProps } from "./CardStack-def";
import { useAnimeCardStack } from "./useCardStack";

export const CardStack = (props: CardStackProps): React.ReactElement => {
    const { 
        picks,
        currentPickIdx,
        onCardSkipped,
        onCardPicked
    } = useAnimeCardStack(props);

    const renderCards = (pick: MALAnime | MALManga, idx: number): React.ReactElement => {
        const isDisplaying: boolean = idx === currentPickIdx;
        const isNextInStack: boolean = Math.min(currentPickIdx + 1, picks.length - 1) === idx;
        
        return (
            <AnimatePresence 
                key={pick.mal_id}
                mode="wait" 
            >
                {isDisplaying || isNextInStack ? (
                    <SwipeableCard
                        mediaType={props.mediaType} 
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
        <div className="flex flex-col items-center justify-center w-full h-auto max-w-md">
            <div className="flex px-3 items-center w-full justify-between">
                <button 
                    className="cursor-pointer p-2.5 rounded-lg text-text-muted hover:bg-accent-indigo hover:text-white transition-all" 
                    onClick={props.onGoBack}
                >
                    <ArrowLeft 
                        size={16}
                        strokeWidth={2.5}
                    />
                </button>
                <span className="text-sm text-text-muted tracking-tight">
                    {`${currentPickIdx + 1} / ${picks.length}`}
                </span>
                <div/>
            </div>
            <div className="grid columns-3 grid-rows-1">
                {picks.map(renderCards)} 
            </div>
        </div>
    )
}