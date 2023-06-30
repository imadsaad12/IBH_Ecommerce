import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Image, Text } from './styles';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { price, name, image } = product;

  const handleClick = () =>
    navigate(`/product/${product._id}`, { state: product });

  return (
    <Container onClick={handleClick}>
      <Image src={image} />
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
    </Container>
  );
}
