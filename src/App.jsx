import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Container py={'100px'} maxW={'1200px'}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default App;
