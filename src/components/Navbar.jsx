import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo"><img src="/src/assets/portfolio 2.png" height={60} width={75} /></h1>
        <div className={`navbar-menu ${isMobile ? 'active' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={handleToggle}>
          <i className={`fa ${isMobile ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
