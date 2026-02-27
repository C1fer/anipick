import type { MALAnime } from "@/types/anime";
import { createContext, useContext, useState } from "react";

type PicksContextType = {
    currentPicks: MALAnime[];
    queuedPicks: MALAnime[];
    setCurrentPicks: (picks: MALAnime[]) => void;
    setQueuedPicks: (picks: MALAnime[]) => void;
}

const PicksContext = createContext<PicksContextType | null>(null);

export function PicksProvider({ children }: { children: React.ReactNode }) {
    const [currentPicks, setCurrentPicks] = useState<MALAnime[]>([]);
    const [queuedPicks, setQueuedPicks] = useState<MALAnime[]>([]);
    
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