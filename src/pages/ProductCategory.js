import React from "react";
import Header from "../components/Header";
import ProductCategoryBody from "../components/products/ProductCategoryBody";
import Footer from "../components/Footer";
import '../index.css';

const ProductCategory = () => {
  return (
    <>
      <Header />
      <ProductCategoryBody />
      <Footer />
    </>
  );
};

export default ProductCategory;
