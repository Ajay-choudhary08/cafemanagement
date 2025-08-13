import React from 'react';
import { Link } from 'react-router-dom';
import cafeLogo from '../assets/Cafeimg/cafeLogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
         <Link to="/home">
        <img src={cafeLogo} alt="logo" className='cafelogo' />
      </Link>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
