import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import cafeBackground from '../assets/Cafeimg/cafeBAckground.png';
import { toast } from 'react-toastify';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem('signupData'));

    if (storedData) {
      if (
        storedData.username === formData.username && 
        storedData.password === formData.password
      ) {
        toast.success("Login Successful ");

        //Save login
        localStorage.setItem("isLoggedIn", true);

        navigate("/home");
      } else {
        toast.error("Invalid username or password ");
      }
    } else {
      toast.warn("No user found");
    }
  };

  return (
    <div className="login">
      <img src={cafeBackground} alt="Cafe Background" className="background-img" />

      <div className="box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username"   
            placeholder="Username" 
            value={formData.username}
            onChange={handleChange} 
            required 
          />

          <input 
            type="password" 
            name="password"  
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange} 
            required 
          />

          <button type="submit">Login</button>

          {/* 👉 Signup line */}
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>    
    </div>
  ); 
}

export default LoginPage;
