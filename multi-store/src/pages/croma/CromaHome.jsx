import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function CromaHome() {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:7000/api/products/Croma")
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);

  return (
    <>
      <h2>Croma Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
