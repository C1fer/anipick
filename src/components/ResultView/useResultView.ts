import { useFilters } from "@/context/FiltersContext";
import { AnimeService } from "@/services/AnimeService";
import { triggerErrorToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { ResultViewProps } from "./ResultView-def";
import { usePicks } from "@/context/PicksContext";

export const useResultView = ({ onRedrawPicks }: ResultViewProps) => {
    const [ isRedrawing, setIsRedrawing ] = useState(false);
    const { filterOptions: globalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks } = usePicks();

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

    const getStreamingOptions = async (id: number) => {
        try {
            const response = await AnimeService.getStreamingOptions(id);
            return response;
        } catch (error) {
            console.error("Error fetching streaming options:", error);
            triggerErrorToast();
            return [];
        }
    }
     

    return { 
        isRedrawing,
        handleRedraw,
        getStreamingOptions,
    };
}