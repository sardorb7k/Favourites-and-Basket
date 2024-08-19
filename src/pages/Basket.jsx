import React from "react";
import {
  Box,
  Stack,
  Card,
  Image,
  CardBody,
  CardFooter,
  Button,
  Text
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const BasketPage = () => {
  const { basketProducts, updateQuantity } = useContext(ProductsContext);

  return (
    <Box p={4}>
      {basketProducts.length === 0 ? (
        <Text textAlign={"center"} color={"purple"}>
          Your basket is empty.
        </Text>
      ) : (
        <Stack spacing={4}>
          {basketProducts.map((product) => (
            <Card
              key={product.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={product?.images[0]}
                alt={product?.title}
              />

              <Stack>
                <CardBody>
                  <Text color={"orange"}>{product?.title}</Text>
                  <Text py="2">{product?.description}</Text>
                </CardBody>

                <CardFooter gap={'30px'}>
                  <Button
                    fontSize={'45px'}
                    variant="solid"
                    colorScheme="red"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    -
                  </Button>
                  <Text fontSize={'25px'}>{product.quantity || 1}</Text>
                  <Button
                    fontSize={'45px'}
                    variant="solid"
                    colorScheme="orange"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    +
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default BasketPage;