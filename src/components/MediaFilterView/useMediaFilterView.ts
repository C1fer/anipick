import { useState } from "react";
import type { SelectableOption, MediaFilterViewProps, ErrorModalInfo } from "./MediaFilterView-def";
import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { useWebHaptics } from "web-haptics/react";
import type { MediaType } from "@/types/media";
import type { FilterOptions } from "@/types/filters";
import { MediaConfig } from "@/services/Media/MediaConfig";
import { AnimeConfig } from "@/services/Anime/AnimeConfig";
import { MangaConfig } from "@/services/Manga/MangaConfig";
import { useDrawPicks, type DrawPicksArgs } from "@/hooks/useDrawPicks";
import { MediaService } from "@/services/Media/MediaService";

export const useMediaFilterView = (props: MediaFilterViewProps) => {
    const { filterOptions: globalFilters, setFilterOptions: setGlobalFilters } = useFilters();
    const { setQueuedPicks } = usePicks();
    const { isDrawingPicks, drawPicks } = useDrawPicks();
    
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions>({...globalFilters});
    const [ errorModalInfo, setErrorModalInfo ] = useState<ErrorModalInfo>({ isVisible: props.showSuggestionsOnMount || false, reason: "pagesExhausted" });
    const [ blockedFilterSignature, setBlockedFilterSignature ] = useState<FilterOptions | null>(props.showSuggestionsOnMount ? {...globalFilters} : null);

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

    const haveFiltersChanged = (refFilters: FilterOptions, newFilters: FilterOptions): boolean => {
        const refGenres = new Set(refFilters.genres.map(g => g.value));
        const refDemographics = new Set(refFilters.demographics.map(d => d.value));

        const hasSameGenres =
            newFilters.genres.length === refFilters.genres.length &&
            newFilters.genres.every(g => refGenres.has(g.value));
        
        const hasSameDemographics =
            newFilters.demographics.length === refFilters.demographics.length &&
            newFilters.demographics.every(d => refDemographics.has(d.value));
        
        return (
            newFilters.mediaType !== refFilters.mediaType ||
            newFilters.releaseType !== refFilters.releaseType ||
            newFilters.status !== refFilters.status ||
            newFilters.mediaLength !== refFilters.mediaLength ||
            newFilters.sfw !== refFilters.sfw ||
            !hasSameGenres ||
            !hasSameDemographics
        )
    }

    const onSubmit = async () => {
        if (blockedFilterSignature) setBlockedFilterSignature(null);
        
        const baseArgs: DrawPicksArgs = {
            onDrawSuccess: props.onFilterSuccess,
            onNoPicksFound: () => { 
                setErrorModalInfo({ isVisible: true, reason: "noPicks" });
                setBlockedFilterSignature(filterOptions);
            },
            onPagesExhausted: () => {
                setErrorModalInfo({ isVisible: true, reason: "pagesExhausted" });
                setBlockedFilterSignature(filterOptions);
            }
        }

        if (haveFiltersChanged(globalFilters, filterOptions)) {
            setGlobalFilters(filterOptions);
            drawPicks({ 
                resetRequestedPagesCache: true,
                filters: filterOptions, 
                pendingPicks: [],
                lastPage: null, 
                ...baseArgs
            });
        } else {
            drawPicks(baseArgs);
        }

    }

    const handleMediaTypeChange = (value: MediaType) => {
       if (value === mediaType || isDrawingPicks) return;

       trigger("medium");

       handleChanges({
            mediaType: value,
            releaseType: MediaConfig.defaultFilters.releaseType,
            status: MediaConfig.defaultFilters.status,
       });
       setQueuedPicks([]);
    }
    
    const onCloseErrorModal = (appliedSuggestionKeys: Set<string>) => {
        if (appliedSuggestionKeys.size > 0) {
            const newFilters = MediaService.getFiltersWithSuggestions(filterOptions, appliedSuggestionKeys);
            handleChanges(newFilters);
        } 
        setErrorModalInfo({ isVisible: false, reason: "pagesExhausted" });
    }

    const showStatusLengthSection = Boolean(
        mediaType === "anime" && filterOptions.releaseType !== 'movie'
        || mediaType === "manga" && filterOptions.releaseType !== 'oneshot'
    )

    const genreOptionsToDisplay = filterOptions.sfw 
        ? MediaConfig.genreOptions
        : [...MediaConfig.explicitGenreOptions, ...MediaConfig.genreOptions].sort((a, b) => a.label.localeCompare(b.label));


    const getSubmitButtonData = () => {
        if (blockedFilterSignature && !haveFiltersChanged(blockedFilterSignature, filterOptions)) {
           return { disabled: true, label: "Filters unchanged" }
        }
        return { disabled: false, label: "Find Picks" };
    }

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
        isLoading: isDrawingPicks,
        submitButtonData: getSubmitButtonData(),
        lists,
        state: filterOptions,
        lengthPopoverContent: getLengthPopoverContent(),
        errorModalInfo,
        handleChange,
        onSelectReleaseType,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
        handleMediaTypeChange,
        onCloseErrorModal
    }
}