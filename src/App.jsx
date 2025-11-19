import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';




import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Admindashboard from './pages/Admindashboard';


import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admindashboard />} />

      </Routes>

      {/* 👉 Ye ek baar hi lagana hoga, pure app ke liye */}
      <ToastContainer 
       />
    </Router>
  );
}

export default App;
