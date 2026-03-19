import { MediaService } from "@/services/Media/MediaService";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { SelectableOption, MediaFilterViewProps } from "./MediaFilterView-def";
import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { useWebHaptics } from "web-haptics/react";
import type { MediaType } from "@/types/media";
import type { FilterOptions } from "@/types/filters";
import { MediaConfig } from "@/services/Media/MediaConfig";
import { AnimeConfig } from "@/services/Anime/AnimeConfig";
import { MangaConfig } from "@/services/Manga/MangaConfig";


export const useMediaFilterView = (props: MediaFilterViewProps) => {
    const { filterOptions: globalFilters, setFilterOptions: setGlobalFilters, } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks, lastVisibleResultsPage, setLastVisibleResultsPage  } = usePicks();
    
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>(globalFilters);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const { trigger } = useWebHaptics();   
    
    const mediaType = filterOptions.mediaType;

    const getLengthPopoverContent = () => {
        const thresholds = mediaType === "anime" ? AnimeConfig.episodeThresholds : MangaConfig.chapterThresholds;
        const unit = mediaType === "anime" ? "episodes" : "chapters";
       
        const [shortMin, shortMax] = thresholds["short"];
        const [mediumMin, mediumMax] = thresholds["medium"];
        const [longMin] = thresholds["long"];

        return `Refers to the total length of the media.\n\nShort: ${shortMin}-${shortMax} ${unit}\nMedium: ${mediumMin}-${mediumMax} ${unit}\nLong: ${longMin}+ ${unit}`;
    }

    const handleChange = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
        setFilterOptions((prev) => ({ ...prev, [key]: value }));
    }

    const handleChanges = (changes: Partial<FilterOptions>) => {
        setFilterOptions((prev) => ({ ...prev, ...changes }));
    }

    const onSelectReleaseType = (value: string) => {
        const isSpecialType = value === "movie" || value === "oneshot";
        handleChanges({
            releaseType: value,
            ...(isSpecialType && { mediaLength: "any", status: "any" }),
        })
    }

    const onToggleSFW = () => {
        const sfw = !filterOptions.sfw;
        const newGenres = sfw
            ? filterOptions.genres.filter(g => !MediaConfig.explicitGenreOptions.some(eg => eg.value === g.value))
            : filterOptions.genres;

        handleChanges({ sfw, genres: newGenres })
    }

    const onSelectGenre = (genre: SelectableOption) => {
        const isSelected = filterOptions.genres.some(g => g.value === genre.value);
       
        handleChange('genres',  isSelected
            ? filterOptions.genres.filter((g) => g.value !== genre.value)
            : [...filterOptions.genres, genre]
        );
    }

    const onSelectDemographic = (demographic: SelectableOption) => {
        const isSelected = filterOptions.demographics.some(d => d.value === demographic.value);
        
        handleChange('demographics', isSelected
            ? filterOptions.demographics.filter((d) => d.value !== demographic.value)
            : [...filterOptions.demographics, demographic]
        );
    }

    const haveFiltersChanged = (): boolean => {
        if (!globalFilters) return true;
        
        return (
            mediaType !== globalFilters.mediaType ||
            filterOptions.releaseType !== globalFilters.releaseType ||
            filterOptions.status !== globalFilters.status ||
            filterOptions.mediaLength !== globalFilters.mediaLength ||
            filterOptions.sfw !== globalFilters.sfw ||
            filterOptions.genres.some(g => !globalFilters.genres.some(gg => gg.value === g.value)) ||
            filterOptions.demographics.some(d => !globalFilters.demographics.some(dd => dd.value === d.value))
        )
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

            const { picks, toQueue, lastVisiblePageFromApi } = await MediaService.getPicksFromFilters(filterOptions, pendingPicks, lastPage);

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
            console.error(`Error fetching ${mediaType} picks:`, error);
            triggerErrorToast();
        } finally {
            setIsLoading(false);
        }
    }

    const handleMediaTypeChange = (value: MediaType) => {
       if (value === mediaType || isLoading) return;

       trigger("medium");

       handleChanges({
            mediaType: value,
            releaseType: MediaConfig.defaultFilters.releaseType,
            status: MediaConfig.defaultFilters.status,
       });
       setQueuedPicks([]);
    }
    
    const showStatusLengthSection = Boolean(
        mediaType === "anime" && filterOptions.releaseType !== 'movie'
        || mediaType === "manga" && filterOptions.releaseType !== 'oneshot'
    )

    const genreOptionsToDisplay = filterOptions.sfw 
        ? MediaConfig.genreOptions
        : [...MediaConfig.explicitGenreOptions, ...MediaConfig.genreOptions].sort((a, b) => a.label.localeCompare(b.label));

    const lists = {
        mediaTypes: MediaConfig.mediaTypeOptions,
        releaseType: mediaType === "anime" ? AnimeConfig.releaseTypeOptions : MangaConfig.releaseTypeOptions,
        status: mediaType === "anime" ? AnimeConfig.statusOptions : MangaConfig.statusOptions,
        mediaLength: mediaType === "anime" ? AnimeConfig.lengthOptions : MangaConfig.lengthOptions,
        genres: genreOptionsToDisplay,
        demographics: MediaConfig.demographicOptions,
    }
 
    return {
        showStatusLengthSection,
        isLoading,
        lists,
        state: filterOptions,
        lengthPopoverContent: getLengthPopoverContent(),
        handleChange,
        onSelectReleaseType,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
        handleMediaTypeChange
    }
}