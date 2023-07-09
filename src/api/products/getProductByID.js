import axios from 'axios';
import { getProductByIdURL } from '../URLs';
import { useQuery } from '@tanstack/react-query';
import { getToken } from '../../utils/authentication';

export const getProductById = (id) => {
  const token = getToken();
  const URL = getProductByIdURL(id);

  return axios.get(URL, {
    headers: {
      Authorization: token,
    },
  });
};

export const useProductByIdQuery = (id) => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(['product'], () => getProductById(id), {
    cacheTime: 0,
    staleTime: Infinity,
  });
  return { product, isLoading, error };
};
