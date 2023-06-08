import axios from "axios";
import { getProductsURL } from "../URLs";

export const getProducts = async () => {
  const URL = getProductsURL();
  return axios.get(URL);
};
