import type { MediaPick } from "@/types/media";
import { createContext, useContext, useState } from "react";

type PicksContextType = {
    currentPicks: MediaPick[];
    queuedPicks:MediaPick[];
    setCurrentPicks: (picks: MediaPick[]) => void;
    setQueuedPicks: (picks: MediaPick[]) => void;
}

const PicksContext = createContext<PicksContextType | null>(null);

export function PicksProvider({ children }: { children: React.ReactNode }) {
    const [currentPicks, setCurrentPicks] = useState<MediaPick[]>([]);
    const [queuedPicks, setQueuedPicks] = useState<MediaPick[]>([]);
    
    return (
      <PicksContext.Provider value={{ queuedPicks, currentPicks, setCurrentPicks, setQueuedPicks }}>
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