// Header.js
import React from 'react';
import HBLlogo from "./assets/HBLlogo.png";
import './index.css'; // Ensure this is imported to apply styles

const Header = () => {
  return (
    <header>
      <nav>
        <img src={HBLlogo} alt="Logo" />
        <h1 className="header-title">Carbon Footprint Calculator</h1>
      </nav>
    </header>
  );
};

export default Header;
