import { getObjectAsQueryParams } from "@/utils/HttpUtils";
import { ApiManager } from "../ApiManager";
import type { 
    GetAnimeStreamingRequest, 
    GetAnimeStreamingResponse, 
    SearchAnimeRequest, 
    SearchAnimeResponse 
} from "./JikanAPI-def";

const BASE_URL = "https://api.jikan.moe/v4";
const API_TIMEOUT = 10000;

export const JikanAPI = {
    searchAnime: async (request: SearchAnimeRequest): Promise<SearchAnimeResponse> => {
       const url = `${BASE_URL}/anime?${getObjectAsQueryParams(request)}`;

       return await ApiManager.get<SearchAnimeResponse>(url, API_TIMEOUT);
    },
    
    getStreamingOptions: async (request: GetAnimeStreamingRequest): Promise<GetAnimeStreamingResponse> => {
      const url = `${BASE_URL}/anime/${request.id}/streaming`;

      return await ApiManager.get<GetAnimeStreamingResponse>(url, API_TIMEOUT);
    }
}