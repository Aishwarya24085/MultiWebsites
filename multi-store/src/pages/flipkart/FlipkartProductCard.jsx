import "./FlipkartProductCard.css";

export default function FlipkartProductCard({ product }) {
  // Calculate original price based on current price and discount
  const mrp = Math.round(product.price / (1 - product.discount / 100));

  const handleClick = () => {
    if (product.productUrl) {
      window.open(product.productUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fk-product-card" onClick={handleClick}>
      {/* Heart Icon for Wishlist */}
      <div className="fk-wishlist-icon">❤</div>

      <div className="fk-image-section">
        {product.image && (
          <img 
            src={`http://localhost:7000/uploads/${product.image}`} 
            alt={product.productName} 
            className="fk-main-img"
          />
        )}
      </div>

      <div className="fk-details-section">
        <h2 className="fk-product-title">{product.productName}</h2>
        {/* <p className="fk-product-subtext">30 g</p> */}

        <div className="fk-rating-row">
          <div className="fk-rating-badge">
            {product.rating} ★
          </div>
          <span className="fk-rating-count">({product.noOfPeopleRated})</span>
          <img 
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 
            alt="Assured" 
            className="fk-assured-logo" 
          />
        </div>

        <div className="fk-price-row">
          <span className="fk-current-price">₹{product.price.toLocaleString()}</span>
          <span className="fk-mrp">₹{mrp.toLocaleString()}</span>
          <span className="fk-discount">{product.discount}% off</span>
        </div>

        {/* <div className="fk-offers-row">
          Buy 2 items, save extra ₹30
        </div> */}
      </div>
    </div>
  );
}