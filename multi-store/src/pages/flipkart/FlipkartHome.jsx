import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function FlipkartHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:7000/api/products/Flipkart")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

  return (
    <>
      <h2>Flipkart Products</h2>

      <div className="product-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
