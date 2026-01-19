import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-title">{product.productName}</div>

      <div className="product-price">₹{product.price}</div>

      <div className="product-rating">
        ⭐ {product.rating} / 5
      </div>

      <div className="product-meta">
        Sold by <strong>{product.seller}</strong>
      </div>
    </div>
  );
}
