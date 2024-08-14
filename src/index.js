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
import EditPost from './pages/EditPostt'
import About from './pages/About';
import Cart from './pages/Cart';
import ProfilAkun from './pages/ProfilAkun';
import { createClient } from '@supabase/supabase-js'
import PostDetail from './components/PostDetail';
import Dashboard from './components/Dashboard';
import Posted from './components/Posted'

export const supabase= createClient(
  "https://oxlalzkderqxlakiuzpw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bGFsemtkZXJxeGxha2l1enB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjA1NTIsImV4cCI6MjAzODQ5NjU1Mn0.qylbkH4jv9MCYtsER6OIPukuuvv_d-9_LPES6OEVUa0"
)

AOS.init();

const router = createBrowserRouter([
  {
    path: "/", element: <Home />,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: "register", element: <Register />, lazy},
      {path: "about", element: <About />, lazy},
      {path: "keranjang", element: <Cart />, lazy},
      {path: "jual", element: <Posts />, lazy},
      {path: "login", element: <Login />, lazy},
      {path: "profil", element: <ProfilAkun />, lazy},
      {path: "create", element: <CreatePost />, lazy},
      {path: "edit", element: <EditPost />, lazy},
      {path: "posted", element: <Posted />, lazy},
      {path: "dashboard", element: <Dashboard />, lazy},
      {path: "posts/detail/:id", element: <PostDetail />, lazy},
      {path: "posts/categories/:category", element: <Kategori />, lazy},
    ]
  }
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

