import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import SignUp from '../pages/sign-up';
import SignIn from '../pages/sign-in';
import Home from '../pages/home';
import Product from '../pages/product';
import {
  ABOUT_US,
  CONTACT,
  HOME,
  PRODUCT_BY_ID,
  SIGN_IN,
  SIGN_UP,
} from './URLs';
import Layout from '../components/layout';
import axios from 'axios';
import { removeToken } from '../utils/authentication';

export default function Routes() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={SIGN_IN} element={<SignIn />} />
        </RoutesWrapper>
        <Layout>
          <RoutesWrapper>
            <Route path={HOME} element={<Home />} />
            <Route path={ABOUT_US} element={<Home />} />
            <Route path={CONTACT} element={<Home />} />
            <Route path={PRODUCT_BY_ID(':id')} element={<Product />} />
          </RoutesWrapper>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location !== SIGN_IN
    ) {
      removeToken();
      window.location.href = SIGN_IN;
    }
    return Promise.reject(error);
  },
);
