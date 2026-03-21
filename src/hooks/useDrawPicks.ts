import { useFilters } from "@/context/FiltersContext";
import { usePicks } from "@/context/PicksContext";
import { MediaService } from "@/services/Media/MediaService";
import type { FilterOptions } from "@/types/filters";
import type { MediaPick } from "@/types/media";
import { ImageUtils } from "@/utils/ImageUtils";
import { triggerErrorToast, triggerWarningToast } from "@/utils/ToastUtils";
import { useState } from "react";


type DrawPicksArgs = {
    lastPage?: number | null;
    pendingPicks?: MediaPick[];
    filters?: FilterOptions;
    onDrawSuccess: () => void;
    onDrawFailure?: () => void;
    preloadImages?: boolean;
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
    
    const drawPicks = async ({ lastPage, pendingPicks, filters, onDrawSuccess, onDrawFailure, preloadImages = true }: DrawPicksArgs) => {
        try {
            setIsDrawingPicks(true);

            const { picks, toQueue, lastVisiblePageFromApi } = await MediaService.getPicksFromFilters(
                {...globalFilters, ...filters} , 
                pendingPicks ?? queuedPicks, 
                lastPage ?? lastVisibleResultsPage
            );

            if (!picks.length ) {
                triggerWarningToast("No picks found with the selected filters. Try relaxing your criteria!");
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
            triggerErrorToast();
            onDrawFailure?.();
        } finally {
            setIsDrawingPicks(false);
        }
    }

    return {
        isDrawingPicks,
        drawPicks,
    }
}