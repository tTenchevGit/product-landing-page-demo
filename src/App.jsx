import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Product2 from "./components/Product2";
import './App.css';
// import { Main } from "next/document";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
      <Product2 />
      <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default App;