import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { PagesExhaustedError } from "@/lib/errors";
import { MediaService } from "@/services/Media/MediaService";
import type { FilterOptions } from "@/types/filters";
import type { MediaPick } from "@/types/media";
import { ImageUtils } from "@/utils/ImageUtils";
import { triggerErrorToast } from "@/utils/ToastUtils";
import { useState } from "react";


export type DrawPicksArgs = {
    lastPage?: number | null;
    pendingPicks?: MediaPick[];
    filters?: FilterOptions;
    onDrawSuccess: () => void;
    onError?: () => void;
    onPagesExhausted?: () => void;
    onNoPicksFound?: () => void;
    preloadImages?: boolean;
    resetRequestedPagesCache?: boolean;
}

export const useDrawPicks = () => {
    const [ isDrawingPicks, setIsDrawingPicks ] = useState<boolean>(false);

    const { 
        queuedPicks, 
        lastVisibleResultsPage, 
        setQueuedPicks, 
        setCurrentPicks, 
        setLastVisibleResultsPage 
    } = usePicks();

    const { filterOptions: globalFilters } = useFilters();

    const preloadCoverImages = async (picks: MediaPick[]): Promise<void> => {
        const imageUris = picks.map(pick => pick.imgUri);
        const criticalImages = imageUris.slice(0, 2); 
        const deferredImages = imageUris.slice(2);

        await ImageUtils.preloadImages(criticalImages)
        ImageUtils.preloadImages(deferredImages);
    }
    
    const drawPicks = async ({ lastPage, pendingPicks, filters, onDrawSuccess, onError, onNoPicksFound, onPagesExhausted, preloadImages = true, resetRequestedPagesCache = false }: DrawPicksArgs) => {
        try {
            setIsDrawingPicks(true);

            const { picks, toQueue, lastVisiblePageFromApi } = await MediaService.getPicksFromFilters(
                filters !== undefined ? filters : globalFilters,
                pendingPicks !== undefined ? pendingPicks : queuedPicks, 
                lastPage !== undefined ? lastPage : lastVisibleResultsPage,
                resetRequestedPagesCache
            );

            if (!picks.length) {
                onNoPicksFound?.();
                return;
            } 

            if (preloadImages) {
               await preloadCoverImages(picks);
            }

            setQueuedPicks(toQueue);
            setCurrentPicks(picks);
            if (lastVisiblePageFromApi) {
                setLastVisibleResultsPage(lastVisiblePageFromApi);
            }
            onDrawSuccess();
        } catch (error) {
            console.error(`Error fetching picks:`, error);
            if (error instanceof PagesExhaustedError) {
                onPagesExhausted?.();
            } else {
                triggerErrorToast();
                onError?.();
            }
        } finally {
            setIsDrawingPicks(false);
        }
    }

    return {
        isDrawingPicks,
        drawPicks,
    }
}