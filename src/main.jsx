import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import ProductsProvider from "./contexts/ProductsContext";
import { RouterProvider } from "react-router-dom";
import router from "./layout";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </ChakraProvider>
);
