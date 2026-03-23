import type { MediaTypeOptions } from "@/types/media";
import type { ToggleRadioOption } from "../ToggleRadio/ToggleRadio-def";
import type { ShowReason } from "../Dialogs/FilterSuggestionsDialog/FilterSuggestionsDialog-def";

export type MediaFilterViewProps = {
    showSuggestionsOnMount?: boolean;
    onFilterSuccess: () => void;
}

export type Lists = {
    mediaTypes: MediaTypeOptions[];
    releaseType: ToggleRadioOption[];
    status: ToggleRadioOption[];
    mediaLength:ToggleRadioOption[];
    genres: SelectableOption[];
    demographics: SelectableOption[];
}

export type SelectableOption = {
    label: string;
    value: string;
}

export type ErrorModalInfo = {
    isVisible: boolean;
    reason: ShowReason;
}