import { MediaService } from "@/services/Media/MediaService";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";
import { Constants } from "../../utils/constants";
import type { SelectableOption, MediaFilterViewProps, MediaTypeOptions } from "./MediaFilterView-def";
import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { BookOpen, Tv } from "lucide-react";
import { useWebHaptics } from "web-haptics/react";
import type { MediaType } from "@/types/media";
import type { FilterOptions } from "@/types/filters";
import { MediaConfig } from "@/services/Media/MediaConfig";

const MEDIA_TYPE_OPTIONS: MediaTypeOptions[] = [
    { label: "Anime", value: "anime", icon: Tv },
    { label: "Manga", value: "manga", icon: BookOpen },
]
const ANIME_LENGTH: SelectableOption[] = [
    { label: "Short", value: "short" },
    { label: "Medium", value: "medium" },
    { label: "Long", value: "long" },
    { label: "Any", value: "any" },
]

const ANIME_STATUS: SelectableOption[] = [
    { label: "Finished", value: "complete" },
    { label: "Airing", value: "airing" },
    { label: "Any", value: "any" },
]

const ANIME_RELEASE_TYPE: SelectableOption[] = [
    { label: "Movie", value: "movie" },
    { label: "ONA", value: "ona" },
    { label: "TV", value: "tv" },
    { label: "Any", value: "any" },
]

const MANGA_LENGTH: SelectableOption[] = [
    { label: "Short", value: "short" },
    { label: "Medium", value: "medium" },
    { label: "Long", value: "long" },
    { label: "Any", value: "any" },
]

const MANGA_STATUS: SelectableOption[] = [
    { label: "Complete", value: "complete" },
    { label: "Publishing", value: "publishing" },
    { label: "Any", value: "any" },
]

const MANGA_RELEASE_TYPE: SelectableOption[] = [
    { label: "Any", value: "any" },
    { label: "Light Novel", value: "lightnovel" },
    { label: "Manga", value: "manga" },
    { label: "Manwha", value: "manhwa" },
    { label: "One-shot", value: "oneshot" },
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
    const { filterOptions: globalFilters, setFilterOptions: setGlobalFilters, } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks, lastVisibleResultsPage, setLastVisibleResultsPage  } = usePicks();
    
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>(globalFilters);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const { trigger } = useWebHaptics();
    

    const handleChange = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
        setFilterOptions((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const onSelectReleaseType = (value: string) => {
        if (value === "movie" || value === "oneshot") {
           setFilterOptions((prev) => ({
                ...prev,
                releaseType: value,
                mediaLength: "any",
                status: "any",
            }))
        } else {
            handleChange('releaseType', value);
        }
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
            filterOptions.mediaType !== globalFilters.mediaType ||
            filterOptions.releaseType !== globalFilters.releaseType ||
            filterOptions.status !== globalFilters.status ||
            filterOptions.mediaLength !== globalFilters.mediaLength ||
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
            const lastPage = hasNewFilters ? null : lastVisibleResultsPage;

            const { picks, toQueue, lastVisiblePageFromApi } = await MediaService.getPicksFromFilters(filterOptions.mediaType, filterOptions, pendingPicks, lastPage);

            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                setCurrentPicks(picks);
                if (lastVisiblePageFromApi) {
                    setLastVisibleResultsPage(lastVisiblePageFromApi);
                }
                props.onFilterSuccess();
            } else {
                triggerWarningToast("No picks found with the selected filters. Try relaxing your criteria!");
            }
        } catch (error) {
            console.error(`Error fetching ${filterOptions.mediaType} picks:`, error);
            triggerErrorToast();
        } finally {
            setIsLoading(false);
        }
    }

    const handleMediaTypeChange = (value: MediaType) => {
       if (value === filterOptions.mediaType) return;

       trigger("medium");

       setFilterOptions({ ...MediaConfig.defaultFilters, mediaType: value });
       setQueuedPicks([]);
    }
    
    const showStatusLengthSection = Boolean(
        filterOptions.mediaType === "anime" && filterOptions.releaseType !== 'movie'
        || filterOptions.mediaType === "manga" && filterOptions.releaseType !== 'oneshot'
    )

    const lists = {
        mediaTypes: MEDIA_TYPE_OPTIONS,
        releaseType: filterOptions.mediaType === "anime" ? ANIME_RELEASE_TYPE : MANGA_RELEASE_TYPE,
        status: filterOptions.mediaType === "anime" ? ANIME_STATUS : MANGA_STATUS,
        mediaLength: filterOptions.mediaType === "anime" ? ANIME_LENGTH : MANGA_LENGTH,
        genres: GENRES,
        demographics: DEMOGRAPHICS,
    }
 
    return {
        showStatusLengthSection,
        isLoading,
        lists,
        state: filterOptions,
        handleChange,
        onSelectReleaseType,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
        handleMediaTypeChange
    }
}