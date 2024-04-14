import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function HeroSection() {
  return (
    <Flex
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgPosition="center"
      zIndex="-2"
      bgImage={"assets/background.avif"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity (0.5) for darkness
      />
      <Flex
        width={"70%"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"90%"}
      >
        <Flex
          p={10}
          direction="column"
          m={4}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          bgPosition="center"
        >
          <Heading
            color="white"
            fontSize="12rem"
            fontWeight="1px"
            fontFamily="Waterfall"
          >
            Voile d'étoile
          </Heading>
          <Text color="white" fontSize="1.6rem" fontFamily="Karla">
            Où chaque bouchée est une découverte cosmique
          </Text>
          <Button marginTop={"5rem"}>Découvrir</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HeroSection;
