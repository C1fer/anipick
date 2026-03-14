import type { MediaType } from "./media";

export type FilterOptions = {
    mediaType: MediaType;
    releaseType: string;
    status: string;
    mediaLength: string;
    genres: SelectableOption[];
    demographics: SelectableOption[];
    sfw: boolean;
}