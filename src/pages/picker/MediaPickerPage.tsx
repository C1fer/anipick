import { MediaFilterView } from "@/components/MediaFilterView/MediaFilterView";
import { CardStack } from "@/components/CardStack/CardStack";
import { ResultView } from "@/components/ResultView/ResultView";
import { useMediaPickerPage } from "./useMediaPickerPage";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo/Logo";
import { Footer } from "@/components/Footer";

export const MediaPickerPage = () => {
    const { 
        viewState, 
        goToFilter, 
        goToPick, 
        goToResult 
    } = useMediaPickerPage();

    const phaseViewportStyle = "w-full h-full min-h-0 overflow-y-auto overflow-x-hidden scrollbar-none p-4 md:py-6";
    const phaseContentStyle = "min-h-full box-border flex flex-col items-center justify-start md:justify-center";
    
    const renderView = () => {
        switch (viewState.phase) {
            case "filter":
                return (
                    <motion.div
                        id="filter-view"
                        className={phaseContentStyle}
                        key="filters"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Logo />
                        <MediaFilterView onFilterSuccess={goToPick}/>
                        <Footer className="mt-8" />
                    </motion.div>
                )
            case "pick":
                return (
                    <motion.div
                        id="pick-view"
                        className={phaseContentStyle}
                        key="pick"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <CardStack
                            onGoBack={goToFilter}
                            onPickSelection={goToResult}
                            onPicksExhausted={() => goToResult(null)}
                        />
                    </motion.div> 
                );
            case "result": {
                return (
                    <motion.div 
                        id="result-view"
                        key="result"
                        className={phaseContentStyle}
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
        <div id="media-picker-root" className={phaseViewportStyle}>
            <AnimatePresence mode="wait">
                {renderView()}
            </AnimatePresence>
        </div>
    );
}