import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "./useGames";

type Props = {
  game: Game;
};

export default function blogPostWithImage({ game }: Props) {
  return (
    <Center>
      <Box
        onClick={() => {
          window.open(
            `https://www.cheapshark.com/redirect?dealID=${game.dealID}`
          );
        }}
        cursor={"pointer"}
        maxW={"380px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {game.isOnSale == "1" ? "Offer" : ""}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {game.title}
          </Heading>
          <Text color={"gray.500"}>Review: {game.steamRatingText}</Text>
          <Text fontWeight={600}>Score: {game.metacriticScore}</Text>
        </Stack>
        <Center>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar size={"3x1"} src={game.thumb} />/
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"gray.500"}>Before: {game.normalPrice}</Text>
              <Text color={"gray.500"}>Now: {game.salePrice}</Text>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Center>
  );
}
