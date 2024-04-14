import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import LocationTabs from "./LocationTabs";
function RestaurantLocation() {
  return (
    <Flex
      h={"100vh"}
      direction="column"
      justifyContent={"flex-start"}
      alignItems={"center"}
      paddingY="4rem"
      bgImage={`
      background-color: #1a1716;
      opacity: 0.8;
      background-image:  radial-gradient(#847c79 1.6px, transparent 1.6px), radial-gradient(#847c79 1.6px, #1a1716 1.6px);
      background-size: 64px 64px;
      background-position: 0 0,32px 32px;
    `}
    >
      <Heading color="white" size="3xl" pt="3rem">
        Où nous trouver ?
      </Heading>
      <LocationTabs />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" /> */}
    </Flex>
  );
}

export default RestaurantLocation;
