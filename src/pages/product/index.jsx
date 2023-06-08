import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, InformationContainer, Text } from "./styles";

export default function Product() {
  const location = useLocation();
  const product = location.state;

  return (
    <Container>
      <Image src={product.image} />
      <InformationContainer>
        <Text>Price : {product.price}</Text>
        <Text>Description : {product.description}</Text>
        <Text>Category : {product.category}</Text>
        <Text>Size : {product.size}</Text>
      </InformationContainer>
    </Container>
  );
}
