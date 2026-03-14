import { MediaConfig } from "@/services/Media/MediaConfig";
import type { FilterOptions } from "@/types/filters";
import { createContext, useContext, useState, type ReactNode } from "react";

type FiltersContextType = {
    filterOptions: FilterOptions;
    setFilterOptions: (options: FilterOptions ) => void;
}

const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersProvider = ({ children }: { children: ReactNode}) =>  {
    const initFilters = {
        ...MediaConfig.defaultFilters,
        mediaType: window.location.pathname === "manga" ? "manga" : "anime" as FilterOptions["mediaType"],
    };

    const [filterOptions, setFilterOptions] = useState<FilterOptions>(initFilters);

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
    