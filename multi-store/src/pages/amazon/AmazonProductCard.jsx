import "./AmazonProductCard.css";

export default function ProductCard({ product }) {
  // Calculate original price based on current price and discount
  const mrp = Math.round(product.price / (1 - product.discount / 100));

  const handleClick = () => {
    if (product.productUrl) {
      window.open(product.productUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image-container">
        {product.image && (
          <img 
            src={`http://localhost:7000/uploads/${product.image}`} 
            alt={product.productName} 
          />
        )}
      </div>

      <div className="product-info-container">
        <h2 className="product-title">{product.productName}</h2>
        
        <div className="rating-row">
          <span className="stars">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="rating-val">{product.rating}</span>
          <span className="rating-count">({product.noOfPeopleRated})</span>
        </div>

        {/* <p className="bought-count">10K+ bought in past month</p> */}

        <div className="price-row">
          <span className="currency-symbol">₹</span>
          <span className="main-price">{product.price.toLocaleString()}</span>
          <span className="price-details">
            <span className="mrp-label">M.R.P: </span>
            <span className="mrp-value">₹{mrp.toLocaleString()}</span>
            <span className="discount-percent">({product.discount}% off)</span>
          </span>
        </div>

        {/* <p className="prime-delivery">
          FREE delivery <b>Fri, 23 Jan</b> on first order
        </p>
        
        <p className="fast-delivery">
          Or fastest delivery <b>Today</b>
        </p> */}

        <button className="add-to-cart-btn" onClick={(e) => {
          e.stopPropagation(); // Prevents clicking the card twice
          handleClick();
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}