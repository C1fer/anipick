import { ArrowLeft } from "lucide-react";
import type {  CardStackProps } from "./CardStack-def"
import { useAnimeCardStack } from "./useCardStack"
import type { MALAnime } from "@/types/mal";
import { AnimatePresence, motion } from "motion/react"
import { SwipeableCard } from "../SwipeableCard/SwipeableCard";

export const CardStack = (props: CardStackProps): React.ReactElement => {
    const { 
        currentPickIdx,
        onCardSkipped,
        onCardPicked
    } = useAnimeCardStack(props);

    const renderCards = (pick: MALAnime, idx: number): React.ReactElement => {
        const isDisplaying: boolean = idx === currentPickIdx;
        const isNextInStack: boolean = Math.min(currentPickIdx + 1, props.picks.length - 1) === idx;
        
        return (
            <AnimatePresence 
                key={pick.mal_id}
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
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full h-auto max-w-md"
        >
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
                    {`${currentPickIdx + 1} / ${props.picks.length}`}
                </span>
                <div/>
            </div>
            <div className="grid columns-3 grid-rows-1">
                {props.picks.map(renderCards)} 
            </div>
        </motion.div>
    )
}