import axios from "axios";
import { signInURL } from "../URLs";
import { useMutation } from "@tanstack/react-query";

const signIn = async (data) => {
  const URL = signInURL();
  return axios.post(URL, data);
};

export const useApiMutation = (onSuccess, onError) => {
  const { status, error, mutate } = useMutation(signIn, {
    onSuccess,
    onError,
  });

  const handleApiCall = async (data) => {
    try {
      await mutate(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    status,
    error,
    handleApiCall,
  };
};
