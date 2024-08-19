import React, { useEffect, useContext, useState } from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Badge,
  Divider,
  VStack,
  HStack,
  Tag,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const { fetchSingleProduct, product } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      await fetchSingleProduct(productId);
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProduct();
  });

  if (loading) {
    return (
      <Box textAlign="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={5}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box maxW="800px" mx="auto" p={5}>
      <Stack spacing={4}>
        <HStack spacing={4}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src={product?.images}
            alt={product?.title || "Product image"}
          />
          <VStack align="start" spacing={2}>
            <Heading size="lg">{product?.title}</Heading>
            <Text color="gray.600">{product?.description}</Text>
            <Stack spacing={1}>
              <HStack>
                <Tag colorScheme="blue">{product?.category}</Tag>
                <Tag colorScheme="green">${product?.price}</Tag>
              </HStack>
              <HStack>
                <Text>Rating:</Text>
                <Tag colorScheme="teal">{product?.rating}</Tag>
              </HStack>
              <HStack>
                <Text>Brand:</Text>
                <Tag colorScheme="purple">{product?.brand}</Tag>
              </HStack>
            </Stack>
          </VStack>
        </HStack>
        <Divider />
      </Stack>
    </Box>
  );
};

export default ProductDetail;
