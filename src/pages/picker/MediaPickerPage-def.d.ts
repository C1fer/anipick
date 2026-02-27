import type { MediaType } from "@/types/media";

export type ViewState = 
    | { phase: "filter" }
    | { phase: "pick" }
    | { phase: "result"; selection: MALAnime | null }


export interface MediaPickerPageProps {
    mediaType: MediaType;
}