import axios from 'axios';
import { getProductsURL } from '../URLs';
import { useQuery } from '@tanstack/react-query';
import { getToken } from '../../utils/authentication';

export const getProducts = () => {
  const token = getToken();
  const URL = getProductsURL();

  return axios.get(URL, {
    headers: {
      Authorization: token,
    },
  });
};

export const useProductsQuery = () => {
  const {
    data: { data: arrayOfProducts },
    isLoading,
    error,
  } = useQuery(['products'], getProducts);

  return { arrayOfProducts, isLoading, error };
};
