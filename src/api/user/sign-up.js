import axios from 'axios';
import { signUpURL } from '../URLs';
import { useMutation } from '@tanstack/react-query';

const signUp = async (data) => {
  const URL = signUpURL();
  return axios.post(URL, data);
};

export const useApiMutation = (onSuccess, onError) => {
  const { status, error, mutate } = useMutation(signUp, {
    onSuccess,
    onError,
  });

  const handleApiCall = async (data) => {
    try {
      await mutate(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    status,
    error,
    handleApiCall,
  };
};
