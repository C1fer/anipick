export type FilterSuggestionsDialogProps = {
    appliedFilters: FilterOptions;
    reason?: ShowReason;
    isOpen: boolean;
    onClose: (appliedSuggestions: Set<string>) => void;
}

export type ShowReason = "noPicks" | "pagesExhausted";