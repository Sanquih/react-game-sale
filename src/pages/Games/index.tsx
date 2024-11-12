import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./useGames";
import SkeletonCard from "./SkeletonCard";

type Props = {};

function Games({}: Props) {
  const { data, isLoading } = useGames();

  return (
    <div>
      {isLoading ? (
        <SimpleGrid p={5} columns={[1, null, 3]} spacing="20px">
          {Array(8).fill("").map((_, index) => (
            <SkeletonCard key={index}/>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid p={5} columns={[1, null, 3]} spacing="20px">
          {data?.map((game) => (
            <GameCard key={game.dealID} game={game} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}

export default Games;
