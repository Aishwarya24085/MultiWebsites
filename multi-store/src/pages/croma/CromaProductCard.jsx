import "./CromaProductCard.css";

export default function CromaProductCard({ product }) {
  // Calculate original price based on current price and discount
  const mrp = Math.round(product.price / (1 - product.discount / 100));
  const savings = mrp - product.price;

  const handleClick = () => {
    if (product.productUrl) {
      window.open(product.productUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="croma-card" onClick={handleClick}>
      <div className="croma-image-wrapper">
        <div className="card-actions">
           <span className="heart-icon">♡</span>
           <label className="compare-checkbox">
             <input type="checkbox" onClick={(e) => e.stopPropagation()} />
             <span>Compare</span>
           </label>
        </div>
        {product.image && (
          <img 
            src={`http://localhost:7000/uploads/${product.image}`} 
            alt={product.productName} 
            className="croma-main-img"
          />
        )}
      </div>

      <div className="croma-info">
        <h2 className="croma-title">{product.productName}</h2>
        
        <div className="croma-rating-row">
          <span className="rating-pill">{product.rating} ★</span>
          <span className="review-count">({product.noOfPeopleRated})</span>
        </div>

        <div className="croma-price-section">
          <div className="price-top">
            <span className="croma-current-price">₹{product.price.toLocaleString()}</span>
            <span className="croma-mrp">₹{mrp.toLocaleString()}</span>
            <span className="savings-text">(Save ₹{savings.toLocaleString()})</span>
            <span className="discount-pill">{product.discount}% Off</span>
          </div>
        </div>

        {/* <div className="delivery-info">
          <span className="truck-icon">🚚</span>
          Standard Delivery by <b>Tue, 27th Jan</b>
        </div>

        <div className="promo-badge">
          10% off at Payment OTP page
        </div> */}
      </div>
    </div>
  );
}