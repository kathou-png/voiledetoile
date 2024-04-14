import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
export function Footer() {
  return (
    <Flex bg={"grey"} paddingY={"5rem"} textAlign="left" p="4rem">
      <SimpleGrid columns={3} spacing={10}>
        <Text textAlign="left" fontSize="0.8rem" w="100%">
          Propriétaire et Exploitant
        </Text>
        <Text fontSize="0.8rem" w="100%">
          Modification des Informations Légales
        </Text>
        <Text fontSize="0.8rem" w="100%">
          Directeur de la publication
        </Text>
        <Text fontSize="0.7rem">
          Le Voile d'Étoiles SARL27 Rue des Étoiles, 75006 Paris, FranceSIRET :
          123 456 789 01234TVA Intracommunautaire : FR 12 345678901
        </Text>
        <Text fontSize="0.7rem">
          Le Voile d'Étoiles SARL se réserve le droit de modifier à tout moment
          les informations légales mentionnées ici sans préavis.
        </Text>
        <Text fontSize="0.7rem">M. Nicolas NOVA, Chef et Co-fondateur</Text>
      </SimpleGrid>
    </Flex>
  );
}
