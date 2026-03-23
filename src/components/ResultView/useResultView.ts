import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useMemo, useState } from "react";
import type { ResultViewProps } from "./ResultView-def";
import type { MALStreamingOption } from "@/types/mal";
import { useWebHaptics } from "web-haptics/react";
import { AnimeService } from "@/services/Anime/AnimeService";
import { useDrawPicks } from "@/hooks/useDrawPicks";

export const useResultView = ({ selection, onRedrawPicks, onGoBack }: ResultViewProps) => {
    const [ isLoadingStreams, setIsLoadingStreams ] = useState(false);
    const [ streamingOptions, setStreamingOptions ] = useState<MALStreamingOption[] | null>(null);
    const [ showModal, setShowModal ] = useState(false);

    const { trigger } = useWebHaptics();

    const { isDrawingPicks, drawPicks } = useDrawPicks();

    const handleRedraw = () => drawPicks({
        onDrawSuccess: onRedrawPicks,
        onPagesExhausted: () => onGoBack(true) // Return to FilterView and trigger suggestions modal,
    });

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

    const streamsButtonLabel = useMemo(() => {
        if (!streamingOptions) {
            return "Find Streams";
        }

        return streamingOptions.length > 0 ? "Watch Now" : "No streams available";
    }, [streamingOptions])

    return { 
        mediaType: selection?.type,
        streamsButtonLabel,
        showModal,
        streamingOptions,
        isRedrawing: isDrawingPicks,
        isLoadingStreams,
        setShowModal,
        handleRedraw,
        handleWatchNow,
        handleGoBack
    };
}