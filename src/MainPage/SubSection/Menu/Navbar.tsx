import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Flex position="absolute" p={4} m={4} gap={4} right="0" color="white">
      <Link to={`/`}>Accueil</Link>
      <Link to={`/`}>Menu</Link>
      <Link to={`about`}>A propos</Link>
      <Link to={`/`}>Contact</Link>
    </Flex>
  );
}
