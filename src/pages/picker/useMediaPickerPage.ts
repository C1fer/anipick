import { useState } from "react";
import type { ViewState } from "./MediaPickerPage-def";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import { usePicks } from "@/context/PicksContext";
import { useMediaType } from "@/context/MediaTypeContext";

export const useMediaPickerPage = () => {
    const [ viewState, setViewState ] = useState<ViewState>({ phase: "filter" });
    const { currentPicks, queuedPicks, setQueuedPicks } = usePicks();

    const { mediaType } = useMediaType();

    const goToFilter = () => setViewState({ phase: "filter" });

    const goToPick = () => setViewState({ phase: "pick" });

    const goToResult = (selection: MALAnime | MALManga | null) => {
        if (!selection) {
            setViewState({ phase: "result", selection: null });
            return;
        }
        
        const remainingFromSwipe = currentPicks.slice(currentPicks.findIndex((p) => p.mal_id === selection.mal_id) + 1);

        if (remainingFromSwipe.length > 0) {
            setQueuedPicks([...queuedPicks, ...remainingFromSwipe]);
        }

        setViewState({ phase: "result", selection });
    }
    
    return { 
        mediaType,
        viewState, 
        goToFilter, 
        goToPick, 
        goToResult 
    };
}
