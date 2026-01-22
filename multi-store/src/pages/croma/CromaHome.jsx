import { useEffect, useState } from "react";
import ProductCard from "./CromaProductCard";
import "./CromaHome.css";

export default function CromaHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/products/Croma") 
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="croma-home-container">
      <header className="croma-home-header">
        <h1>Croma Products</h1>
      </header>
      
      <div className="croma-product-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}