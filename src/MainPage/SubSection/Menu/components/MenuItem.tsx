import { Flex, Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
type Props = {
  title: string;
  imgPath: string;
  description: string;
  price: string;
};

export function MenuItem(props: Props) {
  const { title, imgPath, description, price } = props;
  return (
    <Flex
      direction="column"
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign="left"
      padding={"1rem"}
      marginY={"5rem"}
    >
      <Flex justifyContent={"space-between"} width="80vw">
        <Image boxSize="xs" objectFit="cover" src={imgPath} alt="chef" />
        <Flex
          marginLeft={"5rem"}
          direction="column"
          textAlign="right"
          justifyContent="space-between"
        >
          <Heading color="white">{title}</Heading>
          <Text color="white" mt="-100px">
            {description}
          </Text>
          <Text position="relative" fontSize="2rem" color="white" bottom="0">
            {price}$
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
