import React from 'react';
import '../CSS/Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> 
        Trackway
      </div>
      <div className="nav-links">
        <a href="#front-wart">Services</a>
        <a href="#repeated">Features</a>
        <a href="#prevent">About</a>
        <a href="#certifications">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

