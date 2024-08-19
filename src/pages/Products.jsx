import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Products = () => {
  const { products, handleFavorite, favoritedProducts, addToBasket } = useContext(ProductsContext);

  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"} gap={"20px"}>
      {products?.map((product) => {
        const isFavorited = favoritedProducts.some((fav) => fav.id === product.id);

        return (
          <Card key={product?.id} borderRadius="md">
            <Link to={`${product?.id}`}>
              <CardBody>
                <Image
                  src={product?.images[0]}
                  alt={product?.title || "Product image"}
                  borderRadius="lg"
                  h={"200px"}
                  mx={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Text fontSize="lg" fontWeight="bold" color={"blue.600"}>
                    {product?.title}
                  </Text>
                  <Text noOfLines={3}>{product?.description}</Text>
                  <Text color="blue.600">${product?.price}</Text>
                </Stack>
              </CardBody>
            </Link>
            <CardFooter>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
              >
                <Button onClick={() => addToBasket(product)}>Add to Basket</Button>
                <Button onClick={() => handleFavorite(product)}>
                  <StarIcon color={isFavorited ? "blue.700" : "gray"} />
                </Button>
              </Box>
            </CardFooter>
          </Card>
        );
      })}
    </Box>
  );
};

export default Products;
