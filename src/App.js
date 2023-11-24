import React from 'react';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/product-details",
    element: <ProductDetailPage/>,
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <LoginPage/> */}
      {/* <Home/> */}
      {/* <SignupPage/> */}
    </div>
  );
}

export default App;
