import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FlipkartHeader.css';
import { Link } from 'react-router-dom';

const FlipkartHeader = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <header className="flipkart-navbar">
      {/* Primary Blue Navbar */}
      <div className="fk-nav-main">
        <div className="fk-nav-content">
          {/* Logo Section */}
          <div className="fk-logo-section">
            <img 
              src="https://static.wixstatic.com/media/c7de0c_4e9f90a28ec8474bbe21d0c8ad56f292~mv2.png/v1/fill/w_600%2Ch_226%2Cal_c%2Cq_90/file.jpg" 
              alt="Flipkart" 
              className="fk-logo"
            />
          </div>

          {/* Search Section */}
          <div className="fk-search-container">
            <input 
              type="text" 
              placeholder="Search for products, brands and more" 
              className="fk-search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/flipkart/search?q=${searchText}`);
                  setSearchText("");
                }
              }}
            />


            <button className="fk-search-btn"
                onClick={() => {
                if (searchText.trim()) {
                  navigate(`/flipkart/search?q=${searchText}`);
                }
                setSearchText("");
              }}
            >
                <img 
              src="https://cdn-icons-png.flaticon.com/512/10629/10629681.png" 
              alt="FlipkartSearchIcon" 
              height={20}
            />
            </button>
          </div>

          {/* Nav Links */}
          <div className="fk-nav-links">
            <button className="fk-login-btn">Login</button>
            <Link to="/flipkart/add" className="fk-link">
              <span className="fk-nav-item">Become a Seller</span>
            </Link>
            <div className="fk-nav-item dropdown">
              More <i className="arrow-down"></i>
            </div>
            <div className="fk-nav-item cart">
              <span className="cart-icon">🛒
                {/* <img 
                    src="https://p7.hiclipart.com/preview/609/434/345/shopping-cart-computer-icons-online-shopping-shopping-cart.jpg" 
                    alt="FlipkartCartIcon" 
                    height={20}
                /> */}
              </span>
              Cart
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Category Navbar */}
      <div className="fk-nav-sub">
        <div className="fk-sub-content">
          <Link to="/flipkart/home" className='fk-link'>
              <span>All</span>
          </Link>
          <Link className="fk-side-links" to="/flipkart/category/Electronics">Electronics</Link>
          <Link className="fk-side-links" to="/flipkart/category/Fashion">Fashion</Link>
          <Link className="fk-side-links" to="/flipkart/category/Beauty">Beauty & Care</Link>
          <span>TVs & Appliances <i className="arrow-down-small"></i></span>
          <span>Home & Furniture <i className="arrow-down-small"></i></span>
          <span>Sports, Books & More <i className="arrow-down-small"></i></span>
          <span>Flights</span>
          <span>Offer Zone</span>
        </div>
      </div>
    </header>
  );
};

export default FlipkartHeader;