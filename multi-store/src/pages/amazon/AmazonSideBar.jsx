import React from 'react';
import './AmazonSideBar.css';

const AmazonSidebar = () => {
  return (
    <aside className="amazon-sidebar">
      <div className="filter-section">
        <h3>Deals & Discounts</h3>
        <ul>
          <li>All Deals</li>
          <li>Republic Day Deals</li>
        </ul>
      </div>

      <div className="filter-section">
        <h3>Delivery Day</h3>
        <label><input type="checkbox" /> Get It Today</label>
        <label><input type="checkbox" /> Get It by Tomorrow</label>
        <label><input type="checkbox" /> Get It in 2 Days</label>
      </div>

      <div className="filter-section">
        <h3>Customer Reviews</h3>
        <div className="star-rating">⭐⭐⭐⭐ & Up</div>
        <div className="star-rating">⭐⭐⭐ & Up</div>
        <div className="star-rating">⭐⭐ & Up</div>
        <div className="star-rating">⭐ & Up</div>
      </div>

      <div className="filter-section">
        <h3>Price</h3>
        <ul>
          <li>Under ₹500</li>
          <li>₹500 - ₹1,000</li>
          <li>₹1,000 - ₹2,000</li>
          <li>Over ₹2,000</li>
        </ul>
        <div className="price-input-range">
          <input type="text" placeholder="Min" />
          <input type="text" placeholder="Max" />
          <button>Go</button>
        </div>
      </div>
    </aside>
  );
};

export default AmazonSidebar;