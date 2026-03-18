import React from 'react';
import './AmazonHeader.css';
import { Link } from "react-router-dom";

const AmazonHeader = () => {
  return (
    <header className="amazon-navbar-container">
      {/* Top Main Navbar */}
      <div className="nav-main">
        <div className="nav-left">
          <div className="nav-logo">
            <span className="amazon-logo-text">amazon.in</span>
          </div>
          <div className="nav-location">
            <div className="location-icon">📍</div>
            <div className="location-text">
              <span className="line-1">Delivering to Hyderabad 500001</span>
              <span className="line-2">Update location</span>
            </div>
          </div>
        </div>

        <div className="nav-fill">
          <div className="nav-search-bar">
            <div className="search-category">
              <span>All</span>
              <i className="arrow-down"></i>
            </div>
            <input 
              type="text" 
              placeholder="Search Amazon.in" 
              className="search-input"
            />
            <button className="search-button">
              <img 
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png" 
              alt="AmazonSearchIcon" 
              height={20}
            />
            </button>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-lang">
            <span className="flag">🇮🇳</span>
            <strong>EN</strong>
            <i className="arrow-down-small"></i>
          </div>
          <div className="nav-item">
            <span className="line-1">Hello, sign in</span>
            <span className="line-2">Account & Lists <i className="arrow-down-small"></i></span>
          </div>
          <div className="nav-item">
            <span className="line-1">Returns</span>
            <span className="line-2">& Orders</span>
          </div>
          <div className="nav-cart">
            <div className="cart-count">0</div>
            <span className="cart-icon">🛒</span>
            <span className="cart-label">Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Navbar */}
      <div className="nav-bottom">
        <div className="nav-links">
          <Link to="/amazon/home" className="nav-link-item">
            <div className="nav-all">
              <span className="hamburger">☰</span>
              <strong>All</strong>
            </div>
          </Link>
          <Link className="nav-link-item" to="/amazon/category/Electronics">Electronics</Link>
          <Link className="nav-link-item" to="/amazon/category/Fashion">Fashion</Link>
          <Link className="nav-link-item" to="/amazon/category/Beauty">Beauty & Care</Link>
          <span>Home & Furniture</span>
          <span>Sports, Books & More </span>
          <span>Bestsellers</span>
          <Link to="/amazon/add" className="highlight-link">
            Sell
          </Link>
        </div>
        <div className="nav-promo">
          <span className="promo-text">Great <strong>Republic Day</strong> Sale | <strong>Live Now</strong></span>
          <span className="promo-arrow">›</span>
        </div>
      </div>
    </header>
  );
};

export default AmazonHeader;