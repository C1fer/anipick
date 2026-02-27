import { useFilters } from "@/context/FiltersContext";
import { AnimeService } from "@/services/AnimeService";
import { triggerErrorToast } from "@/utils/ToastUtils";
import { useState } from "react";
import type { ResultViewProps } from "./ResultView-def";

export const useResultView = ({ onRedrawPicks }: ResultViewProps) => {
    const [ isRedrawing, setIsRedrawing ] = useState(false);
    const { filterOptions: globalFilters } = useFilters();

     const handleRedraw = async () => {
            try {
                setIsRedrawing(true);
                const response = await AnimeService.getPicksFromFilters(globalFilters);
                if (response.length > 0) {
                    onRedrawPicks(response);
                }
            } catch (error) {
                console.error("Error fetching anime picks:", error);
                triggerErrorToast();
            } finally {
                setIsRedrawing(false);
            }
        }
     

    return { 
        isRedrawing,
        handleRedraw
    };
}