import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ProductsContext } from "../contexts/ProductsContext";
import { DeleteIcon } from "@chakra-ui/icons";

const Stars = () => {
  const { favoritedProducts, onFavouriteDelete } = useContext(ProductsContext);

  if (!favoritedProducts || favoritedProducts.length === 0) {
    return (
      <Text textAlign={"center"} color={"orange"}>
        No favorited products found.
      </Text>
    );
  }

  return (
    <Box p={5}>
      <Stack spacing={4}>
        {favoritedProducts.map((product) => (
          <Card key={product.id}>
            <CardBody>
              <Image
                src={product.images[0]}
                alt={product.title}
                borderRadius="lg"
                h={"200px"}
                mx={"auto"}
              />
              <Stack mt="6" spacing="3">
                <Text color={"blue.600"}>{product.title}</Text>
                <Text noOfLines={3}>{product.description}</Text>
                <Text color="blue.600">${product.price}</Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
              >
                <Tag color={"pink"}>Favorited</Tag>
                <Button onClick={() => onFavouriteDelete(product)}>
                  <DeleteIcon color={"pink"} />
                </Button>
              </Box>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Stars;
