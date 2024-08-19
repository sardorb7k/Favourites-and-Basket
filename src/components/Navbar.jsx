import { ShoppingCartOutlined } from "@ant-design/icons";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Navbar = () => {
  const { favoritedProducts, basketProducts } = useContext(ProductsContext);

  return (
    <Box as="header">
      <Box
        as="nav"
        display={"flex"}
        w={"100%"}
        h={"60px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"20px"}
        bg={"rgba(255, 255, 255, 0.2)"}
        position={"fixed"}
        zIndex={"999"}
        top={"0"}
        backdropFilter={"blur(8px)"}
      >
        <Link to={"/"}>
          <Image w={"70px"} src="https://olcha.uz/logo.png" alt="Logo" />
        </Link>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink className={"nav-link"} to={"/products"}>
            Products
          </NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <Link to={"/stars"}>
            <Box position={"relative"}>
              <Box
                w={"20px"}
                h={"20px"}
                borderRadius={"50%"}
                display={favoritedProducts.length > 0 ? "flex" : "none"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"12px"}
                bg={"red"}
                position={"absolute"}
                top={"-8px"}
                right={"-8px"}
              >
                <Text>{favoritedProducts.length}</Text>
              </Box>

              <StarIcon boxSize={"25px"} />
            </Box>
          </Link>
          <Link to={"basket"}>
            <Box position={"relative"}>
              <Box
                w={"20px"}
                h={"20px"}
                borderRadius={"50%"}
                display={basketProducts.length > 0 ? "flex" : "none"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"12px"}
                bg={"red"}
                position={"absolute"}
                top={"-3px"}
                right={"-8px"}
              >
                <Text>{basketProducts.length}</Text>
              </Box>

              <ShoppingCartOutlined
                style={{ fontSize: "30px", marginTop: "5px" }}
              />
            </Box>
          </Link>
          <Button colorScheme={"twitter"}>Login</Button>
        </Box>
      </Box>
      <Box h={"60px"}></Box>
    </Box>
  );
};

export default Navbar;
