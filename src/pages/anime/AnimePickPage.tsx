import { AnimeFilterView } from "@/components/AnimeFilterView/AnimeFilterView";
import { useAnimePickPage } from "./useAnimePickPage";
import { CardStack } from "@/components/CardStack/CardStack";
import { ResultView } from "@/components/ResultView/ResultView";

export const AnimePickPage = () => {
    const 
    {
        animeResults,
        tabMode,
        pickedSelection,
        switchToPickMode,
        switchToFilterMode,
        switchToResultsMode
     } = useAnimePickPage();

    return (
        <div className="flex justify-center items-start h-screen w-full">
            {tabMode === "filter" ? <AnimeFilterView onFilterSuccess={switchToPickMode}/> : null}
            {tabMode === "pick" ? (
                <CardStack 
                    picks={animeResults} 
                    onGoBack={switchToFilterMode}
                    onPickSelection={switchToResultsMode}
                    onPicksExhausted={() => switchToResultsMode(null)}
                />
            ) : null}
            {tabMode === "result" ? (<ResultView selection={pickedSelection}/>) : null}
            
        </div>
    )
}