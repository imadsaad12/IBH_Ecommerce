import React from 'react';
import { Container, RatingStar } from './styles';
import ProductCard from './product-card';

export default function ProductsList({ products }) {
  
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<RatingStar key={i}>&#9733;</RatingStar>);
    }
    return stars;
  };

  return (
    <Container>
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} stars={renderRatingStars()} />
      ))}
    </Container>
  );
}
