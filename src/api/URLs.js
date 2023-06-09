const BaseURL = process.env.REACT_APP_DEV_URL;

export const getProductsURL = () => `${BaseURL}/products`;
export const getProductByIdURL = (id) => `${BaseURL}/products/${id}`;
export const signUpURL = () => `${BaseURL}/accounts/signup`;
export const signInURL = () => `${BaseURL}/accounts/signin`;
