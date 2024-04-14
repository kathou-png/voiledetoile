import { Flex } from "@chakra-ui/layout";
import { Navbar } from "./MainPage/SubSection/Menu/Navbar";
import { HStack, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      h={"100vh"}
      direction="column"
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgImage={`
      background-color: #1a1716;
      opacity: 0.8;
      background-image:  radial-gradient(#847c79 1.6px, transparent 1.6px), radial-gradient(#847c79 1.6px, #1a1716 1.6px);
      background-size: 64px 64px;
      background-position: 0 0,32px 32px;
    `}
    >
      <Navbar />
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        A propos
      </Heading>
      <Text color="white" fontSize="2rem">
        Tous les assets de ce site ont été généré à l'aide de ChatGPT4.
      </Text>
      <HStack
        w={"100%"}
        justifyContent={"space-around"}
        paddingX="10rem"
        pt="5rem"
      >
        <Image src="assets/viteLogo.svg" boxSize="3rem" />
        <Image src="assets/typescriptLogo.png" boxSize="3rem" />
        <Image src="assets/reactLogo.webp" boxSize="3rem" />
      </HStack>
    </Flex>
  );
}
