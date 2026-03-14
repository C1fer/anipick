import type { MediaPick } from "@/types/media";
import { useState } from "react";
import type { ViewState } from "./MediaPickerPage-def";

export const useMediaPickerPage = () => {
    const [ viewState, setViewState ] = useState<ViewState>({ phase: "filter" });

    const goToFilter = () => setViewState({ phase: "filter" });

    const goToPick = () => setViewState({ phase: "pick" });

    const goToResult = (selection: MediaPick | null) => setViewState({ phase: "result", selection });
    
    return { 
        viewState, 
        goToFilter, 
        goToPick, 
        goToResult 
    };
}
