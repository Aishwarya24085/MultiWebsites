import React from 'react';
import './FlipkartSideBar.css';

const FlipkartSidebar = () => {
  return (
    <aside className="fk-sidebar">
      <div className="fk-sidebar-header">
        <h2>Filters</h2>
      </div>

      {/* Category Section */}
      <div className="fk-filter-block border-bottom">
        <p className="fk-filter-title">CATEGORIES</p>
        <div className="fk-category-path">
          <span>‹ Beauty and Grooming</span>
          <span>‹ Body & Face Skin Care</span>
          <span>‹ Body and Face Care</span>
          <strong className="fk-active-cat">Sunscreen</strong>
        </div>
      </div>

      {/* Price Slider Section */}
      <div className="fk-filter-block border-bottom">
        <p className="fk-filter-title">PRICE</p>
        <div className="fk-price-range">
          <div className="fk-slider-track">
            <div className="fk-slider-fill"></div>
            <div className="fk-slider-handle left"></div>
            <div className="fk-slider-handle right"></div>
          </div>
          <div className="fk-price-dropdowns">
            <select><option>Min</option></select>
            <span className="to-text">to</span>
            <select><option>₹450+</option></select>
          </div>
        </div>
      </div>

      {/* Flipkart Assured */}
      <div className="fk-filter-block border-bottom fk-assured">
        <label className="fk-checkbox-label">
          <input type="checkbox" />
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Plus" />
        </label>
        <span className="fk-info-icon">?</span>
      </div>

      {/* Brand Section */}
      <div className="fk-filter-block border-bottom expandable">
        <div className="fk-title-row">
          <p className="fk-filter-title">BRAND</p>
          <span className="arrow-down"></span>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="fk-filter-block border-bottom">
        <div className="fk-title-row">
          <p className="fk-filter-title">CUSTOMER RATINGS</p>
          <span className="arrow-up"></span>
        </div>
        <div className="fk-checkbox-group">
          <label><input type="checkbox" /> 4★ & above</label>
          <label><input type="checkbox" /> 3★ & above</label>
          <label><input type="checkbox" /> 2★ & above</label>
          <label><input type="checkbox" /> 1★ & above</label>
        </div>
      </div>

      {/* Collapsible Sections */}
      {['DISCOUNT', 'SKIN TYPE', 'IDEAL FOR', 'NEW ARRIVALS'].map((item) => (
        <div key={item} className="fk-filter-block border-bottom expandable">
          <div className="fk-title-row">
            <p className="fk-filter-title">{item}</p>
            <span className="arrow-down"></span>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FlipkartSidebar;