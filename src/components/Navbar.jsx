import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cafeLogo from "../assets/Cafeimg/cafeLogo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = (e) => {
    e.preventDefault(); // Link ka default reload rokne ke liye
    localStorage.removeItem("isLoggedIn");
    toast.info("Logged out successfully 🚪");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo click = home page */}
      <Link to="/home">
        <img src={cafeLogo} alt="logo" className="cafelogo" />
      </Link>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
        {isLoggedIn && (
 <li><Link to="/admin">Admin</Link></li>
)}


        {/* 👉 Conditional rendering based on login */}
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/signup">Signup</Link></li> */}
          </>
        ) : (
          <li>
            {/* ✅ Link style logout */}
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
