import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Product from "./pages/product";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
