import { Flex } from "@chakra-ui/react";
import { ChiefPresentation } from "./SubSection/ChiefPresentation";
import HeroSection from "./SubSection/HeroSection";
import RestaurantLocation from "./SubSection/Location/Location";
import Menu from "./SubSection/Menu/Menu";
import { Footer } from "./SubSection/Menu/Footer";
import { Navbar } from "./SubSection/Menu/Navbar";
function MainPage() {
  return (
    <Flex direction="column">
      <Navbar />
      <HeroSection />
      <ChiefPresentation />
      <RestaurantLocation />
      <Menu />
      <Footer />
    </Flex>
  );
}

export default MainPage;
