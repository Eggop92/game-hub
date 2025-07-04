import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import findGenre from '../hooks/findGenre';
import findPlatform from "../hooks/findPlatform";

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  const genre = findGenre(gameQuery.genreId);
  const platform = findPlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading