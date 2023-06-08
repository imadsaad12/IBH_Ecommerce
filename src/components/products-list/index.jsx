import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import ProductCard from "./product-card";
import { isEmpty } from "lodash";
import { getProducts } from "../../api/products/getProducts";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    if (isEmpty(products)) {
      fetchProducts();
    }
  }, []);

  return (
    <Container>
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Container>
  );
}
