import React from "react";
import ErrorPage from "./components/ErrorPage";
import ReactDOM from "react-dom/client";
import { Product } from "./components/Product";
import "./index.css";
import { PPage } from "./components/PPage";
import App from "./App";
import { BuyPage } from "./components/BuyPage";
import { Cart } from "./components/CartContext";

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Cart>
    <Routes>
      <Route path="/" element={<PPage />} />
      <Route path="/search?/:search" element={<App />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/product/:id?/buy/:units" element={<BuyPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
    </Cart>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
