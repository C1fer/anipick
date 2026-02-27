import type { MALAnime } from "@/types/anime";
import { createContext, useContext, useState } from "react";

type PicksContextType = {
    queuedPicks: MALAnime[];
    setQueuedPicks: (picks: MALAnime[]) => void;
}

const PicksContext = createContext<PicksContextType | null>(null);

export function PicksProvider({ children }: { children: React.ReactNode }) {
    const [queuedPicks, setQueuedPicks] = useState<MALAnime[]>([]);
    
    return (
      <PicksContext.Provider value={{ queuedPicks, setQueuedPicks }}>
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