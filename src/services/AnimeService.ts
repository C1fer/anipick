import { JikanAPI } from "@/api/JikanAPI/JikanAPI";
import type { FilterOptions } from "@/components/AnimeFilterView/AnimeFilterView-def"
import type { MALAnime } from "@/types/anime";
import { mockData } from "@/utils/MockData";

const getPicksFromFilters = async (filters: FilterOptions): Promise<MALAnime[]> => {
    return mockData;
    
    const malGenresAndDemos : string = Array.from(
        [...filters.genres, ...filters.demographics], 
        (x => x.value)
    ).join(",");

    const response = await JikanAPI.searchAnime({
        type: filters.releaseType !== "any" ? filters.releaseType : undefined,
        status: filters.status !== "any" ? filters.status : undefined,
        genres: malGenresAndDemos.length ? malGenresAndDemos : undefined,
        sfw: filters.sfw,
        limit: 5,
        order_by: "score",
        sort: "desc",
    });

    return response.data;
};


export const AnimeService = {
    getPicksFromFilters,
}