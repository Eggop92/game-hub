import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "./api-client";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const getGames = (gameQuery: GameQuery) => {
    return apiClient.get<FetchResponse<Game>>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }).then(res => res.data);
};

export default getGames;