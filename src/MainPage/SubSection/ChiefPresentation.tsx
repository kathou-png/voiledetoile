import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export function ChiefPresentation() {
  return (
    <Flex
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#211f1b"}
    >
      <Flex width={"70%"}>
        <Flex
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign="left"
        >
          <Image
            boxSize="13rem"
            objectFit="cover"
            src="assets/nicolasnova.png"
            alt="chef"
          />
          <Text color={"white"} fontFamily="Karla" paddingTop="2rem">
            “Au Voile d'Étoiles, l'innovation est au cœur de notre démarche.
            Nous réinventons la cuisine traditionnelle avec audace et
            créativité, explorant de nouvelles associations de saveurs pour
            surprendre et enchanter nos convives.”
          </Text>
          <Text
            color={"white"}
            fontFamily="Karla"
            fontWeight={"bold"}
            fontSize={"1.1rem"}
            w="100%"
          >
            - Nicolas Nova
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
