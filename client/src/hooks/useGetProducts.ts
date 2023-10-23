import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await axios.get("http://localhost:3001/products");
    setProducts(products.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};
