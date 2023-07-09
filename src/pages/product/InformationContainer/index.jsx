import React from 'react';
import { ADD_TO_CART } from '../../../global/strings';
import {
  Container,
  Name,
  Description,
  Price,
  Category,
  Size,
  AddToCartButton,
} from './styles';

export default function InformationContainer({ product }) {
  const displayDescription = (price) => `Description: $${price}`;
  const displayPrice = (price) => `Price: $${price}`;
  const displayCategory = (category) => `Category: ${category}`;
  const displaySize = (size) => `Size: ${size}`;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Description>{displayDescription(product.description)}</Description>
      <Price>{displayPrice(product.price)}</Price>
      <Category>{displayCategory(product.category)}</Category>
      <Size>{displaySize(product.size)}</Size>
      <AddToCartButton>{ADD_TO_CART}</AddToCartButton>
    </Container>
  );
}
