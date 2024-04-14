import { Flex, Heading } from "@chakra-ui/react";
import { MenuItem } from "./components/MenuItem";

const entry = [
  {
    title: "Galaxie de chèvre chaud",
    imgPath: "assets/galaxieChevreChaud.webp",
    description:
      "Salade de chèvre chaud, noix, et vinaigrette au miel et balsamique",
    price: "5",
  },
  {
    title: "Soupe de l'espace",
    imgPath: "assets/SoupedeLespace.webp",
    description:
      "Crème de champignon sauvages truffées, servie avec un croûton croustillant",
    price: "6",
  },
];
const meal = [
  {
    title: "Asteroïdes du pêcheur",
    imgPath: "assets/lobster.webp",
    description:
      "Médaillons de hopmard poêlés, accompagnés de quinoa aux herves et légumes de saison",
    price: "15",
  },
  {
    title: "Orbite de boeuf",
    imgPath: "assets/boeuf.webp",
    description:
      "Filet mignon en croûte de poivre, purée de pommes de terre à l’ail et légumes glacés",
    price: "17",
  },
];
const dessert = [
  {
    title: "Nébuleuse au chocolat",
    imgPath: "assets/gateauChocolat.webp",
    description: "Fondant au chocolat avec coeur coulant, glace à la vanille",
    price: "8",
  },
  {
    title: "Comète citronnée",
    imgPath: "assets/tarteCitron.webp",
    description:
      "Tarte au citron meringuée, avec zestes de citron confits et coulis de framboises",
    price: "6",
  },
];
const boisson = [
  {
    title: "Cocktail cosmique",
    imgPath: "assets/cosmicCocktail.webp",
    description:
      "Cocktail à base de fin, jus de citron vert, sirop de lavande et eau pétillande",
    price: "13",
  },
  {
    title: "Infusion stellaire",
    imgPath: "assets/the.webp",
    description: "Thé vert avec des éclats d’étoiles de fruits",
    price: "11",
  },
];
const wine = [
  {
    title: "Nébuleuse de pinot noir",
    imgPath: "assets/pinotNoir.webp",
    description:
      "Un pinot noir léger et fruité, parfait pour accompagner les plats de viande",
    price: "15",
  },
  {
    title: "Galaxie de Chardonnay",
    imgPath: "assets/chardonnay.webp",
    description:
      "Un chardonnay riche et crémeux, idéal avec les fruits de mer ou en apéritif",
    price: "55",
  },
];
const autre = [
  {
    title: "Pain de l'univers",
    imgPath: "assets/pain.webp",
    description:
      "Pain artisanal aux graines de courge, servi avec du beurre d’étoiles à la truffe",
    price: "5",
  },
  {
    title: "Constellation de fromage",
    imgPath: "assets/cheese.webp",
    description:
      "Sélection de fromages accompagnés de fruits secs et de miel d’étoile",
    price: "8",
  },
];
function RestaurantLocation() {
  const entries = entry.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));
  const meals = meal.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));
  const desserts = dessert.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));
  const boissons = boisson.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));
  const wines = wine.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));
  const other = autre.map((item) => (
    <MenuItem
      title={item.title}
      imgPath={item.imgPath}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <Flex
      justifyContent={"center"}
      bgImage={`
      background-color: #1a1716;
      opacity: 0.8;
      background-image:  radial-gradient(#847c79 1.6px, transparent 1.6px), radial-gradient(#847c79 1.6px, #1a1716 1.6px);
      background-size: 64px 64px;
      background-position: 0 0,32px 32px;
    `}
      alignItems={"center"}
      direction="column"
    >
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Entrée
      </Heading>
      {entries}
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Plats
      </Heading>
      {meals}
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Desserts
      </Heading>
      {desserts}
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Boissons
      </Heading>
      {boissons}
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Hors d'oeuvre
      </Heading>
      {other}
      <Heading color="white" size="3xl" marginY={"5rem"} pt="3rem">
        Carte des vins
      </Heading>
      {wines}
    </Flex>
  );
}

export default RestaurantLocation;
