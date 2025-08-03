import React from 'react';
import './Signup.css'

function Signup() {
  const handleSubmit = (e) => {
  // e.preventDefault();
    alert("submitted");
    
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
