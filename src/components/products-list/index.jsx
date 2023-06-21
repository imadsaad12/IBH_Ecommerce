import React from "react";
import { Container } from "./styles";
import ProductCard from "./product-card";

export default function ProductsList() {
  const products = [
    { image: "test", size: 23, name: "T-shirt", category: "asaa", price: 190 },
  ];

  return (
    <Container>
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Container>
  );
}
