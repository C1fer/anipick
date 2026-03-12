import type { FilterOptions } from "@/components/MediaFilterView/MediaFilterView-def";
import { createContext, useContext, useState, type ReactNode } from "react";

type FiltersContextType = {
    filterOptions: FilterOptions | null;
    setFilterOptions: (options: FilterOptions ) => void;
}

const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersProvider = ({ children }: { children: ReactNode}) =>  {
    const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);

    return (
        <FiltersContext.Provider value={{ filterOptions, setFilterOptions }}>
            {children}
        </FiltersContext.Provider>
    )
}

export const useFilters = (): FiltersContextType => {
    const ctx = useContext(FiltersContext);
    if (!ctx) throw new Error("useFilters must be used within a FiltersProvider");
    return ctx;
}
    