import { useFilters } from "@/context/FiltersContext";
import { AnimeService } from "@/services/AnimeService";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { ResultViewProps } from "./ResultView-def";
import { usePicks } from "@/context/PicksContext";
import { useMediaType } from "@/context/MediaTypeContext";
import type { MALStreamingOption } from "@/types/mal";
import { useWebHaptics } from "web-haptics/react";
import { MangaService } from "@/services/MangaService";
import type { MALAnime } from "@/types/anime";
import type { MALManga } from "@/types/manga";

export const useResultView = ({ selection, onRedrawPicks, onGoBack }: ResultViewProps) => {
    const [ isRedrawing, setIsRedrawing ] = useState(false);
    const [ isLoadingStreams, setIsLoadingStreams ] = useState(false);
    const [ streamingOptions, setStreamingOptions ] = useState<MALStreamingOption[] | null>(null);
    const [ showModal, setShowModal ] = useState(false);

    const { filterOptions: globalFilters } = useFilters();
    const { queuedPicks, setQueuedPicks, setCurrentPicks } = usePicks();
    const { mediaType } = useMediaType();  

    const { trigger } = useWebHaptics();

    const handleRedraw = async () => {
        try {
            setIsRedrawing(true);
            
            const { picks, toQueue } = mediaType === "anime" 
                ? await AnimeService.getPicksFromFilters(globalFilters, queuedPicks as MALAnime[])
                : await MangaService.getPicksFromFilters(globalFilters, queuedPicks as MALManga[]) ;
                
            if (picks.length > 0) {
                setQueuedPicks(toQueue);
                setCurrentPicks(picks);
                onRedrawPicks();
            }
        } catch (error) {
            console.error("Error fetching " + mediaType + " picks:", error);
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
            const response = await AnimeService.getStreamingOptions(selection.mal_id);
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
        mediaType,
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