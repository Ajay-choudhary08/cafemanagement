import React,{useState} from 'react';
import './Signup.css';
import cafeBackground from '../assets/Cafeimg/cafeBAckground.png';


import { toast } from 'react-toastify';

function Signup() {
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

    // Signup data save in localStorage
    localStorage.setItem('signupData', JSON.stringify(formData));

    // Toast message show
    toast.success("Signup Successful! Please login now.");

    //Reset form
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="signup">
      <img src={cafeBackground} alt="Cafe Background" className="background-img" />

      <div className="box">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit} >
          <input 
            type="text" 
            name='username'   
            placeholder="Username" 
            value={formData.username}
            onChange={handleChange}
            required 
          />

          <input 
            type="email" 
            name='email'   
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <input 
            type="password" 
            name='password'  
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
