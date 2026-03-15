import { useFilters } from "@/context/FiltersContext";
import { MediaService } from "@/services/Media/MediaService";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { ResultViewProps } from "./ResultView-def";
import { usePicks } from "@/context/PicksContext";
import type { MALStreamingOption } from "@/types/mal";
import { useWebHaptics } from "web-haptics/react";
import { AnimeService } from "@/services/AnimeService";

export const useResultView = ({ selection, onRedrawPicks, onGoBack }: ResultViewProps) => {
    const [ isRedrawing, setIsRedrawing ] = useState(false);
    const [ isLoadingStreams, setIsLoadingStreams ] = useState(false);
    const [ streamingOptions, setStreamingOptions ] = useState<MALStreamingOption[] | null>(null);
    const [ showModal, setShowModal ] = useState(false);

    const { filterOptions: globalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks, lastVisibleResultsPage, setLastVisibleResultsPage } = usePicks();
    const { trigger } = useWebHaptics();

    const handleRedraw = async () => {
        try {
            setIsRedrawing(true);
            
            const { picks, toQueue, lastVisiblePageFromApi } = await MediaService.getPicksFromFilters(globalFilters, queuedPicks, lastVisibleResultsPage);
                
            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                setCurrentPicks(picks);
                if (lastVisiblePageFromApi) {
                    setLastVisibleResultsPage(lastVisiblePageFromApi);
                }
                onRedrawPicks();
            }
        } catch (error) {
            console.error("Error fetching " + globalFilters.mediaType + " picks:", error);
            triggerErrorToast();
        } finally {
            setIsRedrawing(false);
        }
    }

    const handleWatchNow = async () => {
        try {
            if (streamingOptions) {
                setShowModal(true);
                return;
            }

            setIsLoadingStreams(true);
            const response = await AnimeService.getStreamingOptions(selection.id);
            setStreamingOptions(response ?? []);

            if (!response || response.length === 0) {
                triggerWarningToast("No streaming options found for this title.");
                return;
            }

            setShowModal(true);
        } catch (error) {
            console.error("Error fetching anime streaming options:", error);
            triggerErrorToast();
        } finally {
            setIsLoadingStreams(false);
        }
    }

    const handleGoBack = () => {        
        trigger("light");
        onGoBack()
    }

    return { 
        mediaType: globalFilters.mediaType,
        showModal,
        streamingOptions,
        isRedrawing,
        isLoadingStreams,
        setShowModal,
        handleRedraw,
        handleWatchNow,
        handleGoBack
    };
}