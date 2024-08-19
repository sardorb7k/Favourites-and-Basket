import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BasketPage from "../pages/Basket";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Stars from "../pages/Stars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "stars", element: <Stars /> },
      { path: "basket", element: <BasketPage /> },
    ],
  },
]);

export default router;
