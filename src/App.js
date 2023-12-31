import React from 'react';
import './App.css';
import ProductList from './features/product-list/ProductList';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "signup",
    element: <SignupPage/>,
  },
  {
    path: "cart",
    element: <Cart/>,
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
