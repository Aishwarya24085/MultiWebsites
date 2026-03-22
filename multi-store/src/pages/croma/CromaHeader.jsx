import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './CromaHeader.css';

const CromaHeader = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <header className="croma-navbar">
      <div className="croma-nav-content">
        {/* Logo and Menu Section */}
        <div className="croma-nav-left">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Croma_logo.png" 
              alt="Croma" 
              className="croma-logo"
              height={60}
            />
          <div className="croma-menu-btn">
            <span className="hamburger">☰</span>
            <span className="menu-text">Menu</span>
          </div>
          <Link to="/croma/home" className="croma-nav-link">All</Link>
        </div>

        {/* Search Bar Section */}
        <div className="croma-search-container">
          <input 
            type="text" 
            placeholder="What are you looking for ?" 
            className="croma-search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={ (e) => {
              if (e.key === "Enter") {
                navigate(`/croma/search?q=${searchText}`);
                setSearchText("");
              }
            }
            }
          />
          <button className="croma-search-btn"
                  onClick={(e)=>{
                    if (searchText.trim()) {
                      navigate(`/croma/search?q=${searchText}`);
                    }
                    setSearchText("");
                  }}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png" 
              alt="Croma" 
              className="Croma-search"
              height={20}
            />
          </button>
        </div>

        {/* Action Links Section */}
        <div className="croma-nav-right">
          <Link to="/croma/add" className="croma-seller-link">Become a Seller</Link>
          
          <button className="croma-login-btn">
            <span className="user-icon">👤</span> Login
          </button>

          <div className="croma-cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-badge">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CromaHeader;