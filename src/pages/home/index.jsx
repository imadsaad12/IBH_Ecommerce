import { useProductsQuery } from '../../api/products/getProducts.js';
import ProductsList from '../../components/products-list/index.jsx';
import { Container } from './styles.js';
import SpinnerLoading from '../../components/SpinnerLoading';
const Home = () => {
  const { arrayOfProducts, isLoading, error } = useProductsQuery();

  return (
    <>
      {isLoading || error ? (
        <SpinnerLoading top="50%" right="50%" />
      ) : (
        <Container>
          <ProductsList products={arrayOfProducts.data} />
        </Container>
      )}
    </>
  );
};
export default Home;
