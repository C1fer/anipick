export type ViewState = 
    | { phase: "filter" ; showSuggestionsOnMount: boolean }
    | { phase: "pick" }
    | { phase: "result"; selection: MALAnime | null }


