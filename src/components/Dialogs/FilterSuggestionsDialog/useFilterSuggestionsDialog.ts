import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import type { FilterSuggestionsDialogProps } from "./FilterSuggestionsDialog-def";
import { useState } from "react";
import { MediaConfig, type FilterSuggestion } from "@/services/Media/MediaConfig";


export const useFilterSuggestionsDialog = ({ onClose, appliedFilters, reason = "pagesExhausted" }: FilterSuggestionsDialogProps) => {
    const { isMobile } = useDeviceDetection();
    const [ appliedSuggestions, setAppliedSuggestions ] = useState<Set<string>>(new Set());
    
    const suggestedChanges: FilterSuggestion[] = MediaConfig.filterSuggestions
        .filter(s => s.validation(appliedFilters));

    const handleOpenStateChange = (open: boolean) => {
        if (!open) {
            onClose(new Set(appliedSuggestions));
        }
    }

    const onApplySuggestion = (key: string) => {
        if (appliedSuggestions.has(key)) return;
        setAppliedSuggestions(prev => new Set(prev).add(key));
    }

    const isSuggestionApplied = (key: string): boolean => {
        return appliedSuggestions.has(key);
    }

    const title = reason === "pagesExhausted" ? "No More Picks Available" : "No Results Found";

    const description = reason === "pagesExhausted" 
        ? "You've gone through all available picks for these filters. Here are some suggestions to broaden your search!" 
        : "Here are some suggestions to broaden your search!";

    return {
        title,
        description,
        suggestedChanges,
        isMobile,
        handleOpenStateChange,
        isSuggestionApplied,
        onApplySuggestion
    }
}