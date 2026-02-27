import { useState } from "react";
import type { MALAnime } from "@/types/mal";
import type { TabMode } from "./AnimePickPage-def";

export const useAnimePickPage = () => {
    const [ tabMode, setTabMode ] = useState<TabMode>("filter");
    const [ animeResults, setAnimeResults ] = useState<MALAnime[]>([]);
    const [ pickedSelection, setPickedSelection ] = useState<MALAnime | null>(null);

    const switchToPickMode = (results: MALAnime[]) => {
        setAnimeResults(results);
        setTabMode("pick");
    }

    const switchToFilterMode = () => {
        setAnimeResults([]);
        setTabMode("filter");
    };

    const switchToResultsMode = (choice: MALAnime | null) => {
        setTabMode("result");
        setPickedSelection(choice);
    }

    return {
        tabMode,
        animeResults,
        pickedSelection,
        switchToPickMode,
        switchToFilterMode,
        switchToResultsMode
    }
}