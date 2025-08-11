import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import cafeBackground from '../assets/Cafeimg/cafeBAckground.png';




function Login() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData); 
       localStorage.setItem('signupData', JSON.stringify(formData));
    
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };


  return (
 <div className="login">
  <img src={cafeBackground} alt="Cafe Background" className="background-img" />

    <div className="box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name='username'   placeholder="Username" value={formData.username}
            onChange={handleChange}required />
        {/* <input type="email" name='email'   placeholder="Email"value={formData.email}
            onChange={handleChange} required /> */}
        <input type="password" name='password'  placeholder="Password" value={formData.password}
            onChange={handleChange}required />
            <button type='submit' >Login</button>
        <button className='button'><a href="Signup" className='signup-link'> Sign up</a></button>
        
      </form>
    </div>
  </div>
  
  );
}

export default Login;
