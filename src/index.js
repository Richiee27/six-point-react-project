import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/main.css";
import 'animate.css';

import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos"
import "aos/dist/aos.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Posts from './components/Posts';
import Login from './components/Login';
import CreatePost from './pages/CreatePost';
import Kategori from './pages/Kategori';
import Error from './pages/Error';
import Layout from './components/Layout';
import About from './pages/About';
import Cart from './pages/Cart';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: "register", element: <Register />, lazy},
      {path: "about", element: <About />, lazy},
      {path: "keranjang", element: <Cart />, lazy},
      {path: "jual", element: <Posts />},
      {path: "login", element: <Login />},
      {path: "create", element: <CreatePost />},
      {path: "posts/categories/:category", element: <Kategori />},
    ]
  }
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

