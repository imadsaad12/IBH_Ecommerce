import { useProductsQuery } from '../../api/products/getProducts.js';
import ProductsList from '../../components/products-list/index.jsx';
import { Container } from './styles.js';
import SpinnerLoading from '../../components/SpinnerLoading';
import { FULL_PAGE } from '../../global/strings.js';
const Home = () => {
  const { arrayOfProducts, isLoading, error } = useProductsQuery();
  const shouldDisplaySpinner = isLoading || error;
  return (
    <>
      {shouldDisplaySpinner ? (
        <SpinnerLoading position={FULL_PAGE} />
      ) : (
        <Container>
          <ProductsList products={arrayOfProducts.data} />
        </Container>
      )}
    </>
  );
};
export default Home;
