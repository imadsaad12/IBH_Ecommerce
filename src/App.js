import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Product from "./pages/product";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-us" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
