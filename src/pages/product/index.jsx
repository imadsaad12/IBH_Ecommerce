import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductByIdQuery } from '../../api/products/getProductByID.js';
import SpinnerLoading from '../../components/SpinnerLoading';
import { PRODUCT_NOT_FOUND } from '../../global/strings';
import {
  Container,
  Image,
  InformationContainer,
  Name,
  Description,
  Price,
  Category,
  Size,
  AddToCartButton,
  NotFoundContainer,
  NotFoundMessage,
} from './styles';
export default function Product() {

  const { id } = useParams();
  const { product, isLoading, error, isErrorProductNotFound } =
    useProductByIdQuery(id);

  return (
    <>
      {isLoading ? (
        <SpinnerLoading top="50%" right="50%" />
      ) : (
        <Container>
          {isErrorProductNotFound || error ? (
            <NotFoundContainer>
              <NotFoundMessage>{PRODUCT_NOT_FOUND}</NotFoundMessage>
            </NotFoundContainer>
          ) : (
            <>
              <Image src={product.data.image} />
              <InformationContainer>
                <Name>{product.data.name}</Name>
                <Description>{product.data.description}</Description>
                <Price>Price: ${product.data.price}</Price>
                <Category>Category: {product.data.category}</Category>
                <Size>Size: {product.data.size}</Size>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </InformationContainer>
            </>
          )}
        </Container>
      )}
    </>
  );
}
