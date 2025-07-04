import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0)

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0} //This is important field to render the next data
      next={() => fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page.results.map(game =>
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>)}
          </React.Fragment>)}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
