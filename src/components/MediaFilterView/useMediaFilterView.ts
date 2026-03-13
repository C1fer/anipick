import { MediaService } from "@/services/MediaService";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";
import { Constants } from "../../utils/constants";
import type { SelectableOption, MediaFilterViewProps, FilterOptions } from "./MediaFilterView-def";
import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { useMediaType } from "@/context/MediaTypeContext";
import { BookOpen, Tv } from "lucide-react";
import { useWebHaptics } from "web-haptics/react";
import type { MediaType } from "@/types/media";

const MEDIA_TYPE_OPTIONS = [
    { label: "Anime", value: "anime", icon: Tv },
    { label: "Manga", value: "manga", icon: BookOpen },
]

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
    { label: "Finished", value: "complete" },
    { label: "Airing", value: "airing" },
    { label: "Any", value: "any" },
]

const ANIME_RELEASE_TYPE: SelectableOption[] = [
    { label: "TV", value: "tv" },
    { label: "ONA", value: "ona" },
    { label: "Movie", value: "movie" },
    { label: "Any", value: "any" },
]

const MANGA_MAX_CHAPTERS: SelectableOption[] = [
    { label: "Short", value: "50" },
    { label: "Medium", value: "150" },
    { label: "Long", value: "250" },
    { label: "Any", value: "0" },
]

const MANGA_STATUS: SelectableOption[] = [
    { label: "Complete", value: "complete" },
    { label: "Publishing", value: "publishing" },
    { label: "Any", value: "any" },
]

const MANGA_RELEASE_TYPE: SelectableOption[] = [
    { label: "Manga", value: "manga" },
    { label: "Manwha", value: "manhwa" },
    { label: "Light Novel", value: "lightnovel" },
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


export const useMediaFilterView = (props: MediaFilterViewProps) => {
    const { filterOptions: globalFilters, setFilterOptions: setGlobalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks } = usePicks();
    const { mediaType, setMediaType } = useMediaType();
    
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>(globalFilters || DEFAULT_FILTER_OPTIONS);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const { trigger } = useWebHaptics();

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

            const pendingPicks = hasNewFilters ? [] : queuedPicks;
            const { picks, toQueue } = await MediaService.getPicksFromFilters(mediaType, filterOptions, pendingPicks);

            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                setCurrentPicks(picks);
                props.onFilterSuccess();
            } else {
                triggerWarningToast("No picks found with the selected filters. Try relaxing your criteria!");
            }
        } catch (error) {
            console.error(`Error fetching ${mediaType} picks:`, error);
            triggerErrorToast();
        } finally {
            setIsLoading(false);
        }
    }

    const handleMediaTypeChange = (value: MediaType) => {
       if (value === mediaType) return;

       trigger("medium");

       setMediaType(value);
       setFilterOptions(DEFAULT_FILTER_OPTIONS);
       setQueuedPicks([]);
    }
    
 
    return {
        
        mediaType,
        isLoading,
        lists: {
            mediaTypes: MEDIA_TYPE_OPTIONS,
            releaseType: mediaType === "anime" ? ANIME_RELEASE_TYPE : MANGA_RELEASE_TYPE,
            status: mediaType === "anime" ? ANIME_STATUS : MANGA_STATUS,
            minEpisodes: mediaType === "anime" ? ANIME_MAX_EPISODES : MANGA_MAX_CHAPTERS,
            genres: GENRES,
            demographics: DEMOGRAPHICS,
        },
        state: filterOptions,
        handleChange,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
        handleMediaTypeChange
    }
}