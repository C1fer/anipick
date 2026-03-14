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
    
    const renderView = () => {
        switch (viewState.phase) {
            case "filter":
                return (
                    <motion.div
                        className="max-w-full "
                        key="filters"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Logo />
                        <MediaFilterView onFilterSuccess={goToPick}/>
                        <Footer className="mt-10" />
                    </motion.div>
                )
            case "pick":
                return (
                    <motion.div
                        className="max-w-full"
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
                        key="result"
                        className="max-w-full"
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
        <div className="flex justify-center items-start h-full w-full overflow-y-auto scrollbar-subtle md:items-center p-5 md:p-0">
            <AnimatePresence mode="wait">
                {renderView()}
            </AnimatePresence>
        </div>
    );
}