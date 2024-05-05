import React from "react";
import Home from "./pages/Home";
import './css/main.css';
import './css/about.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import { lazy } from "react";
import ProductComp from "./components/ProductComp";
import Forum from "./pages/Forum";

const LazyAbout = React.lazy(() => import('./pages/About'))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/product" element={<ProductComp />} />
      </Routes>
    </Router>
  );
}

export default App;
