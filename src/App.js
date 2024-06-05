import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
// import { Main } from "next/document";

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default App;