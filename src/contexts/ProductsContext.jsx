import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [favoritedProducts, setFavoritedProducts] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  const [basketProducts, setBasketProducts] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  // Fetch single product
  const fetchSingleProduct = async (productId) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  // Handle adding/removing products from favorites
  const handleFavorite = (product) => {
    const newFavList = favoritedProducts.some((fav) => fav.id === product.id)
      ? favoritedProducts.filter((fav) => fav.id !== product.id)
      : [...favoritedProducts, product];

    setFavoritedProducts(newFavList);
    localStorage.setItem("favourites", JSON.stringify(newFavList));
  };

  // Handle removing products from favorites
  const onFavouriteDelete = (product) => {
    const isFavorited = favoritedProducts.some((fav) => fav.id === product.id);

    const newFavList = isFavorited
      ? favoritedProducts.filter((fav) => fav.id !== product.id)
      : favoritedProducts;

    setFavoritedProducts(newFavList);
    localStorage.setItem("favourites", JSON.stringify(newFavList));
  };

  const addToBasket = (product) => {
    let newBasket;
    const productExists = basketProducts.some((item) => item.id === product.id);
  
    if (productExists) {
      newBasket = basketProducts.filter((item) => item.id !== product.id);
    } else {
      newBasket = [...basketProducts, { ...product, quantityyyy: 1 }];
    }
  
    setBasketProducts(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const updateQuantity = (productId, amount) => {
    // Create a new basket with updated quantities
    const newBasket = basketProducts.map((item) => {
      if (item.id === productId) {
        // Ensure the quantity is never less than 1
        return { ...item, quantity: Math.max(item.quantity + amount, 1) };
      } else {
        return item;
      }
    });

    setBasketProducts(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        fetchSingleProduct,
        setProduct,
        product,
        handleFavorite,
        favoritedProducts,
        onFavouriteDelete,
        basketProducts,
        addToBasket,
        updateQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
