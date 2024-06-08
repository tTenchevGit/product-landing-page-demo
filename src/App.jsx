// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import styles from './App.module.css'; // Import your global CSS module
import Product2 from './components/Product2';

const App = () => {
  const [isDarkMode, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className={styles.mainContent}>
        <div className={styles.products}>
          <Product2 />
          <ProductDetails />
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
