import { useState } from "react";
import type { ViewState } from "./MediaPickerPage-def";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";

export const useMediaPickerPage = () => {
    const [viewState, setViewState] = useState<ViewState>({ phase: "filter" });

    const goToFilter = () => setViewState({ phase: "filter" });

    const goToPick = () => setViewState({ phase: "pick" });

    const goToResult = (selection: MALAnime | MALManga | null) => setViewState({ phase: "result", selection });

    return { 
        viewState, 
        goToFilter, 
        goToPick, 
        goToResult 
    };
}
