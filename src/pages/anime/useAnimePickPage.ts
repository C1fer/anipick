import { useState } from "react";
import type { MALAnime } from "@/types/mal";
import type { TabMode } from "./AnimePickPage-def";

export const useAnimePickPage = () => {
    const [ tabMode, setTabMode ] = useState<TabMode>("filter");
    const [ animeResults, setAnimeResults ] = useState<MALAnime[]>([]);

    const switchToPickMode = (results: MALAnime[]) => {
        setAnimeResults(results);
        setTabMode("pick");
    }

    return {
        tabMode,
        animeResults,
        switchToPickMode
    }
}