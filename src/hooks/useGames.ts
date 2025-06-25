import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import getGames, { Game } from "../services/gameServices";




const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: getGames.bind(gameQuery),
    staleTime: 24 * 60 * 60 * 1000
  });
}

export default useGames;
