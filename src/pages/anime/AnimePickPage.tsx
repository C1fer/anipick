import { AnimeFilterView } from "@/components/AnimeFilterView/AnimeFilterView";
import { useAnimePickPage } from "./useAnimePickPage";
import { AnimeCardStack } from "@/components/AnimeCardStack/AnimeCardStack";

export const AnimePickPage = () => {
    const 
    {
        animeResults,
        tabMode,
        switchToPickMode
     } = useAnimePickPage();

    return (
        <div className="flex justify-center items-start h-screen w-full">
            {tabMode === "filter" ? <AnimeFilterView onFilterSuccess={switchToPickMode}/> : null}
            {tabMode === "pick" ? <AnimeCardStack picks={animeResults}/> : null}
        </div>
    )
}