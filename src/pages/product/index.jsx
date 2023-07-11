import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductByIdQuery } from '../../api/products/getProductByID.js';
import SpinnerLoading from '../../components/SpinnerLoading';
import { PRODUCT_NOT_FOUND, FULL_PAGE } from '../../global/strings';
import InformationContainer from './InformationContainer';
import { Container, Image, NotFoundContainer, NotFoundMessage } from './styles';
export default function Product() {
  const { id } = useParams();
  const { product, isLoading, error } = useProductByIdQuery(id);
  return (
    <>
      {isLoading ? (
        <SpinnerLoading position={FULL_PAGE} />
      ) : (
        <Container>
          {error ? (
            <NotFoundContainer>
              <NotFoundMessage>{PRODUCT_NOT_FOUND}</NotFoundMessage>
            </NotFoundContainer>
          ) : (
            <>
              <Image src={product.data.image} />
              <InformationContainer product={product.data} />
            </>
          )}
        </Container>
      )}
    </>
  );
}
