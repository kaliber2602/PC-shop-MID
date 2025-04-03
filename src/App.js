import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCategory from "./pages/Product_category";
import Login from "./components/Login&register/Login";
import Register from "./components/Login&register/Register";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} style={"bg-muted"} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-category" element={<ProductCategory />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
