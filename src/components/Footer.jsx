import React from'react';
import styles from './Footer.module.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer footer className={isDarkMode ? styles.darkFooter : styles.lightFooter}>
      <p> &copy; Copyright 2021</p>
    </footer>
  );
};

export default Footer;