import { AnimeFilterView } from "@/components/AnimeFilterView/AnimeFilterView";
import { CardStack } from "@/components/CardStack/CardStack";
import { ResultView } from "@/components/ResultView/ResultView";
import { useMediaPickerPage } from "./useMediaPickerPage";
import type { MediaPickerPageProps } from "./MediaPickerPage-def";

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
                return mediaType === "anime" ? <AnimeFilterView onFilterSuccess={goToPick} /> : null;
            case "pick":
                return (
                    <CardStack
                        mediaType={mediaType}
                        picks={viewState.picks}
                        onGoBack={goToFilter}
                        onPickSelection={goToResult}
                        onPicksExhausted={() => goToResult(null)}
                    />
                );
            case "result": {
                return (
                    <ResultView 
                        selection={viewState.selection} 
                        onGoBack={goToFilter}
                        onRedrawPicks={goToPick}
                    />
                );
            }
                
        }
    }

    return (
        <div className="flex justify-center items-start h-screen w-full">
            {mediaType === "anime" ? renderView(): <span> Manga picking coming soon! </span>}
        </div>
    );
}