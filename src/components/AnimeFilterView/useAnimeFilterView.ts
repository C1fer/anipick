import { AnimeService } from "@/services/AnimeService";
import { triggerErrorToast } from "@/utils/ToastUtils";
import { useState } from "react";
import { Constants } from "../../utils/constants";
import type { AnimeFilterViewProps, AnimeFilterOptions, SelectableOption, UseAnimeFilterViewResult } from "./AnimeFilterView-def";
import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";

const DEFAULT_FILTER_OPTIONS: AnimeFilterOptions = {
    releaseType: 'any',
    status: 'any',
    minEpisodes: "0",
    genres: [],
    demographics: [],
    sfw: true,
}

const ANIME_MAX_EPISODES: SelectableOption[] = [
    { label: "Short", value: "13" },
    { label: "Medium", value: "25" },
    { label: "Long", value: "26" },
    { label: "Any", value: "0" },
]

const ANIME_STATUS: SelectableOption[] = [
    { label: "Finished", value: "complete" },
    { label: "Airing", value: "airing" },
    { label: "Any", value: "any" },
]

const ANIME_RELEASE_TYPE: SelectableOption[] = [
    { label: "TV", value: "tv" },
    { label: "Movie", value: "movie" },
    { label: "Any", value: "any" },
]

const GENRES: SelectableOption[] = Constants.genres.map((genre) => ({
    label: genre.name,
    value: String(genre.mal_id),
}))

const DEMOGRAPHICS: SelectableOption[] = Constants.demographics.map((demo) => ({
    label: demo.name,
    value: String(demo.mal_id),
}))


export const useAnimeFilterView = (props: AnimeFilterViewProps): UseAnimeFilterViewResult => {
    const { filterOptions: globalFilters, setFilterOptions: setGlobalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks } = usePicks();
    
    const [ filterOptions, setAnimeFilterOptions ] = useState<AnimeFilterOptions>(globalFilters || DEFAULT_FILTER_OPTIONS);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);


    const handleChange = <K extends keyof AnimeFilterOptions>(key: K, value: AnimeFilterOptions[K]) => {
        setAnimeFilterOptions((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const onToggleSFW = () => handleChange('sfw', !filterOptions.sfw);

    const onSelectGenre = (genre: SelectableOption) => {
        if (filterOptions.genres.some(g => g.value === genre.value)) {
            handleChange('genres', filterOptions.genres.filter((g) => g.value !== genre.value));
        } else {
            handleChange('genres', [...filterOptions.genres, genre]);
        }
    }

    const onSelectDemographic = (demographic: SelectableOption) => {
        if (filterOptions.demographics.some(d => d.value === demographic.value)) {
            handleChange('demographics', filterOptions.demographics.filter((d) => d.value !== demographic.value));
        } else {
            handleChange('demographics', [...filterOptions.demographics, demographic]);
        }
    }

    const haveFiltersChanged = (): boolean => {
        if (!globalFilters) return true; 
        
        return Boolean(
            filterOptions.releaseType !== globalFilters.releaseType ||
            filterOptions.status !== globalFilters.status ||
            filterOptions.minEpisodes !== globalFilters.minEpisodes ||
            filterOptions.sfw !== globalFilters.sfw ||
            filterOptions.genres.some(g => !globalFilters.genres.some(gg => gg.value === g.value)) ||
            filterOptions.demographics.some(d => !globalFilters.demographics.some(dd => dd.value === d.value))
        );
    }
    
    const onSubmit = async () => {
        setIsLoading(true);
        try {
            const hasNewFilters = haveFiltersChanged();
            if (hasNewFilters) {
                setGlobalFilters(filterOptions);
            }
            const { picks, toQueue } = await AnimeService.getPicksFromFilters(filterOptions, hasNewFilters ? [] : queuedPicks);
            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                props.onFilterSuccess(picks);
            }
        } catch (error) {
            console.error("Error fetching anime picks:", error);
            triggerErrorToast();
        } finally {
            setIsLoading(false);
        }
    }
 
    return {
        isLoading,
        lists: {
            releaseType: ANIME_RELEASE_TYPE,
            status: ANIME_STATUS,
            minEpisodes: ANIME_MAX_EPISODES,
            genres: GENRES,
            demographics: DEMOGRAPHICS,
        },
        state: filterOptions,
        handleChange,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
    }
}