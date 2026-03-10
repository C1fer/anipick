import { useFilters } from "@/context/FiltersContext";
import { AnimeService } from "@/services/AnimeService";
import { triggerErrorToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { ResultViewProps } from "./ResultView-def";
import { usePicks } from "@/context/PicksContext";
import { useMediaType } from "@/context/MediaTypeContext";
import type { MALStreamingOption } from "@/types/mal";

export const useResultView = ({ selection, onRedrawPicks }: ResultViewProps) => {
    const [ isRedrawing, setIsRedrawing ] = useState(false);
    const [streamingOptions, setStreamingOptions] = useState<MALStreamingOption[]>([]);

    const { filterOptions: globalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks } = usePicks();
    const { mediaType } = useMediaType();   

    const handleRedraw = async () => {
        try {
            setIsRedrawing(true);
            const { picks, toQueue } = await AnimeService.getPicksFromFilters(globalFilters, queuedPicks);
            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                setCurrentPicks(picks);
                onRedrawPicks();
            }
        } catch (error) {
            console.error("Error fetching anime picks:", error);
            triggerErrorToast();
        } finally {
            setIsRedrawing(false);
        }
    }

    const handleWatchNow = async () => {
        try {
            const response = await AnimeService.getStreamingOptions(selection.mal_id);
            setStreamingOptions(response);
        } catch (error) {
            console.error("Error fetching streaming options:", error);
            triggerErrorToast();
        }
    }

    return { 
        mediaType,
        streamingOptions,
        isRedrawing,
        handleRedraw,
        handleWatchNow,
    };
}