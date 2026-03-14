import type { FilterOptions } from "@/types/filters";
import { createContext, useContext, useState, type ReactNode } from "react";

type FiltersContextType = {
    filterOptions: FilterOptions;
    setFilterOptions: (options: FilterOptions ) => void;
}

const DEFAULT_FILTER_OPTIONS: FilterOptions = {
    releaseType: 'any',
    status: 'any',
    mediaLength: "any",
    genres: [],
    demographics: [],
    sfw: true,
}


const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersProvider = ({ children }: { children: ReactNode}) =>  {
    const [filterOptions, setFilterOptions] = useState<FilterOptions>(DEFAULT_FILTER_OPTIONS);

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
    