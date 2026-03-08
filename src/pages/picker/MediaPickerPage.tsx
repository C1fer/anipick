import { AnimeFilterView } from "@/components/AnimeFilterView/AnimeFilterView";
import { CardStack } from "@/components/CardStack/CardStack";
import { ResultView } from "@/components/ResultView/ResultView";
import { useMediaPickerPage } from "./useMediaPickerPage";
import type { MediaPickerPageProps } from "./MediaPickerPage-def";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo/Logo";

export const MediaPickerPage = ({ mediaType }: MediaPickerPageProps) => {
    const { 
        viewState, 
        goToFilter, 
        goToPick, 
        goToResult 
    } = useMediaPickerPage();
    
    const renderView = () => {
        switch (viewState.phase) {
            case "filter":
                return (
                    <motion.div
                        key="filters"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Logo />
                        {mediaType === "anime" ? <AnimeFilterView onFilterSuccess={goToPick} /> : null}
                    </motion.div>
                )
            case "pick":
                return (
                    <motion.div
                        key="pick"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <CardStack
                            mediaType={mediaType}
                            onGoBack={goToFilter}
                            onPickSelection={goToResult}
                            onPicksExhausted={() => goToResult(null)}
                        />
                    </motion.div> 
                );
            case "result": {
                return (
                    <motion.div 
                        key="result"
                        className="h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <ResultView 
                            selection={viewState.selection} 
                            onGoBack={goToFilter}
                            onRedrawPicks={goToPick}
                        />
                    </motion.div>
                )
            }
        }
    }

    return (
        <div className="flex justify-center items-center h-full w-full p-4 ">
            <AnimatePresence mode="wait">
                {renderView()}
            </AnimatePresence>
        </div>
    );
}