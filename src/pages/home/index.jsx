import { useProductsQuery } from '../../api/products/getProducts.js';
import ProductsList from '../../components/products-list/index.jsx';
import { Container } from './styles.js';

const Home = () => {
  const { data } = useProductsQuery();

  return (
    <Container>
      <ProductsList data={data} />
    </Container>
  );
};
export default Home;
