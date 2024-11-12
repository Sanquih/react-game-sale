import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import backgroundImage from "../../assets/background.jpg";
import useChunck from "./useChuck";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { data, isLoading } = useChunck();
  const navigate = useNavigate();

  return (
    <Flex
      backgroundImage={`linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9)), url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      h={"calc(100vh - 64px)"}
    >
      <Container display={"flex"} maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}
          m={"auto"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"white"}
          >
            Welcome to <br />
            <Text as={"span"} color={"green.400"}>
              Game Sale
            </Text>
          </Heading>
          <Text color={"gray.400"}>
            A website to find deals. We also tell jokes:{" "}
            {isLoading ? "Cargando..." : data?.value}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={()=> navigate("/games")}
            >
              Start now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
