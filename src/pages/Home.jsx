import React from "react";
import Footer from "../components/Footer";
import "./Home.css";

// Hero images
import hero1 from "../assets/Cafeimg/heroimg1.jpg";
import hero2 from "../assets/Cafeimg/heroimg2.jpg";
import hero3 from "../assets/Cafeimg/heroimg3.jpg";


// Food images (also inside Cafeimg folder)

import pasta from "../assets/Cafeimg/cardimgpasta.jpg";
import pizza from "../assets/Cafeimg/cardimgpizza.jpg";
import sandwich from "../assets/Cafeimg/cardimgsandwich.jpg";

function Home() {
  const menuItems = [

    { id: 2, name: "Pasta", price: "₹150", image: pasta },
    { id: 3, name: "Veg Pizza", price: "₹200", image: pizza },
    { id: 4, name: "Grilled Sandwich", price: "₹100", image: sandwich },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-slider">
          <img src={hero1} alt="slide1" />
          <img src={hero2} alt="slide2" />
          <img src={hero3} alt="slide3" />
       
        </div>
        <div className="hero-text">
          <h1>Welcome to My Cafe</h1>
          <p>Enjoy the best coffee, snacks and peaceful vibes with us.</p>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="menu">
        <h2>Best Seller Foods</h2>
        <div className="card-container">
          {menuItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-img" />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="btn">Order Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
