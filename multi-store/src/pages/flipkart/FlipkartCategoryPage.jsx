import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./FlipkartProductCard";
import "./FlipkartHome";

const FlipkartCategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category, platform: "Flipkart" })
    })
      .then(res => res.json())
      .then((data) => {
        console.log("API DATA:", data.products);
        setProducts(data.products);
      })
      .catch((err) => console.error("Error:", err));
  }, [category]);

  return (
    <div>
      <h2>{category} Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default FlipkartCategoryPage;