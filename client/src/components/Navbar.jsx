import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

function Navbar() {
  return (
    <header className="site-Navbar">
      <div className="logo">Pradeep T M</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
