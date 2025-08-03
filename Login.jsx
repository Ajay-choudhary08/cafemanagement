import React from "react";


function Login() {
  const handleSubmit = (e) => {
     
    alert("Login successful!");
  };

  return (
    <div className="app">
      <h2>Login Form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          User Name: <input type="text" name="uname" required />
        </label>
        <br /><br />
        <label>
          Password: <input type="password" name="pwd" required />
        </label>
        <br /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
