import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";
import { createContext, useContext, useState } from "react";

type PicksContextType = {
    currentPicks: MALAnime[] | MALManga[];
    queuedPicks: MALAnime[] | MALManga[];
    setCurrentPicks: (picks: MALAnime[] | MALManga[]) => void;
    setQueuedPicks: (picks: MALAnime[] | MALManga[]) => void;
}

const PicksContext = createContext<PicksContextType | null>(null);

export function PicksProvider({ children }: { children: React.ReactNode }) {
    const [currentPicks, setCurrentPicks] = useState<MALAnime[] | MALManga[]>([]);
    const [queuedPicks, setQueuedPicks] = useState<MALAnime[] | MALManga[]>([]);
    
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