export type ViewState = 
    | { phase: "filter" }
    | { phase: "pick" }
    | { phase: "result"; selection: MALAnime | null }


