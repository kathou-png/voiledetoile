import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
type City = {
  city: string;
  imgPath: string;
  address: string;
  description: string;
};
function LocationTabs() {
  const locations: City[] = [
    {
      city: "Paris",
      imgPath: "assets/facadeParis.webp",
      address: "27 Rue des Étoiles, 75006 Paris, France",
      description:
        "Située dans le charmant 6ème arrondissement, cette adresse place le restaurant au cœur du quartier artistique et historique de la capitale, à quelques pas du Jardin du Luxembourg.",
    },
    {
      city: "Japon",
      imgPath: "assets/facadeJapon.webp",
      address: "3-9-20 Hoshizora, Minato-ku, Tokyo 108-0075, Japon",
      description:
        "Niché à Minato, ce quartier mêle innovation futuriste de Tokyo à ses traditions séculaires, offrant une vue imprenable sur la Tokyo Tower et à proximité des jardins de Shiba Park.",
    },
    {
      city: "New York",
      imgPath: "assets/facadeNewYork.webp",
      address: " 5th Avenue at 57th Street, New York, NY 10019, USA",
      description:
        "Située dans le vibrant quartier de Manhattan, cette adresse fictive place le restaurant au centre de l'effervescence culturelle et gastronomique de la ville, près du High Line Park.",
    },
  ];
  const [selectedCity, setSelectedCity] = useState<City>(locations[0]);
  return (
    <HStack mt={"10rem"}>
      <Accordion w="25rem" bg="white">
        {locations.map((city) => (
          <AccordionItem key={city.city}>
            <AccordionButton onClick={() => setSelectedCity(city)}>
              <Text>{city.city}</Text>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontStyle={"italic"}>{city.address}</Text>
              <Text fontSize="xs" pt="20px">
                {city.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Image src={selectedCity.imgPath} boxSize="18rem" />
    </HStack>
  );
}
export default LocationTabs;
