import { useEffect, useState } from "react";
import ProductCard from "./AmazonProductCard";
import "./AmazonHome.css"; // Import the new CSS file

export default function AmazonHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/products/Amazon")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="amazon-home-container">
      <h2>Amazon Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}