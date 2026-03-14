import type { MediaPick } from "@/types/media";
import { createContext, useContext, useState } from "react";

type PicksContextType = {
    currentPicks: MediaPick[];
    queuedPicks:MediaPick[];
    setCurrentPicks: (picks: MediaPick[]) => void;
    setQueuedPicks: (picks: MediaPick[]) => void;
    lastVisibleResultsPage: number | null;
    setLastVisibleResultsPage: (page: number | null) => void;
}

const PicksContext = createContext<PicksContextType | null>(null);

export function PicksProvider({ children }: { children: React.ReactNode }) {
    const [currentPicks, setCurrentPicks] = useState<MediaPick[]>([]);
    const [queuedPicks, setQueuedPicks] = useState<MediaPick[]>([]);
    const [lastVisibleResultsPage, setLastVisibleResultsPage] = useState<number | null>(null);
    
    return (
      <PicksContext.Provider value={{ queuedPicks, currentPicks, setCurrentPicks, setQueuedPicks, lastVisibleResultsPage, setLastVisibleResultsPage }}>
        {children}
      </PicksContext.Provider>  
    )
}

export const usePicks = (): PicksContextType => {
    const context = useContext(PicksContext);
    if (!context) {
        throw new Error("usePicks must be used within a PicksProvider");
    }
    return context;
}