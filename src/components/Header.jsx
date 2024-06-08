// src/components/Header.js
import React, { useState } from 'react';
import styles from './Header.module.css';
import ToggleSwitch from './ToggleSwitch';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isOn, setIsOn] = useState(isDarkMode);

  const handleToggle = () => {
    setIsOn(!isOn);
    toggleTheme();
  };

  return (
    <header className={isDarkMode ? styles.darkHeader : styles.lightHeader}>
      <h1 className={styles.title}>With Love</h1>
      <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
    </header>
  );
};

export default Header;
