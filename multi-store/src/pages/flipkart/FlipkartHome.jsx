import { useState, useEffect } from "react";
import ProductCard from "./FlipkartProductCard";
import "./FlipkartHome.css";

export default function FlipkartHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/products/Flipkart")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="fk-home-results-area">
      <h2>Flipkart Products</h2>
      <div className="fk-product-grid-container">
        {products.map(p => (
          <ProductCard key={p._id || p.id} product={p} />
        ))}
      </div>
    </div>
  );
}