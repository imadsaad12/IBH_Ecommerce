import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Image,
  Text,
  Banner,
  RatingWrapper,
  Size,
  InfoWrapper,
} from './styles';

export default function ProductCard({ product, stars }) {
  const navigate = useNavigate();
  const { _id, price, name, image, category, size } = product;

  const handleClick = (id) =>
    navigate(`/product/${id}`);

  return (
    <Container onClick={() => handleClick(_id)}>
      <Banner>{category}</Banner>
      <Image src={image} />
      <InfoWrapper>
        <Text>{name}</Text>
        <Size>(Size: {size})</Size>
      </InfoWrapper>
      <RatingWrapper>{stars}</RatingWrapper>
      <Text>${price}</Text>
    </Container>
  );
}
