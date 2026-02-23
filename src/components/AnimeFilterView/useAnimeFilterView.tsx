import { useState } from "react";
import { Constants } from "../../utils/constants";
import type { FilterOptions, SelectableOption, UseAnimeFilterViewResult } from "./AnimeFilterView-def";
import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import { toast } from "sonner";

const DEFAULT_FILTER_OPTIONS: FilterOptions = {
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
    { label: "Finished", value: "finished" },
    { label: "Airing", value: "ongoing" },
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


export const useAnimeFilterView = (): UseAnimeFilterViewResult => {
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>(DEFAULT_FILTER_OPTIONS);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleChange = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
        setFilterOptions((prev) => ({
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

    const onSubmit = async () => {
        const { releaseType, status, genres, demographics, sfw } = filterOptions;

        try {
            setIsLoading(true);
            const malGenresAndDemos : string = Array.from([...genres, ...demographics], (x => x.value)).join(",");

            const response = await JikanAPI.searchAnime({
                type: releaseType !== "any" ? releaseType : undefined,
                status: status !== "any" ? status : undefined,
                genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
                sfw: sfw,
                limit: 25,
                order_by: "score",
                sort: "desc",
            });
            console.log(response);
        } catch (error) {
            toast.error("An error ocurred. Please try again.", 
                { 
                    position: 'top-center', 
                    style: { background: "var(--color-destructive-red)", color: "white", borderColor: "transparent" } 
                });
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