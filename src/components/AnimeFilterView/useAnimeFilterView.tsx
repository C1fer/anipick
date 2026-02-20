import { useState } from "react";
import { Constants } from "../../utils/constants";
import type { FilterOptions, UseAnimeFilterViewResult } from "./AnimeFilterView-def";

const DEFAULT_FILTER_OPTIONS: FilterOptions = {
    releaseType: 'any',
    status: 'any',
    minEpisodes: "0",
    genres: [],
    demographics: [],
    sfw: true,
}

const ANIME_LENGTH_OPTIONS: Record<string, string> = {
    "<13": "13",
    "13-24": "24",
    "25+": "25",
    "Any": "0",
}

const ANIME_STATUS: Record<string, string> = {
    Finished: "finished",
    Ongoing: "ongoing",
    Any: "any",
}

const ANIME_RELEASE_TYPE: Record<string, string> = {
    TV: "tv",
    Movie: "movie",
    Any: "any",
}

export const useAnimeFilterView = (): UseAnimeFilterViewResult => {
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>(DEFAULT_FILTER_OPTIONS);

    const handleChange = (key: keyof FilterOptions, value: string|boolean|Record<number, string>[]) => {
        setFilterOptions((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const onToggleSFW = () => handleChange('sfw', !filterOptions.sfw);

    const onSelectDemographic = (value: string) => {
        
    }
 
    return {
        lists: {
            releaseType: ANIME_RELEASE_TYPE,
            status: ANIME_STATUS,
            minEpisodes: ANIME_LENGTH_OPTIONS,
            genres: Constants.genres,
            demographics: Constants.demographics,
        },
        state: filterOptions,
        handleChange,
        onToggleSFW,
    }
}