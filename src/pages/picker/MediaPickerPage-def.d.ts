import type { MediaType } from "@/types/media";

export type ViewState = 
    | { phase: "filter" }
    | { phase: "pick"; picks: MALAnime[] }
    | { phase: "result"; selection: MALAnime | null }


export interface MediaPickerPageProps {
    mediaType: MediaType;
}