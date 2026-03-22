import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./AmazonProductCard";

const AmazonSearchPage = () => {
  const [products, setProducts] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const searchText = query.get("q");

  useEffect(() => {
    fetch("http://localhost:7000/api/products/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchText,
        platform: "Amazon"
      })
    })
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [searchText]);

    return (
    <div>
        {products.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>No results found for "{searchText}"</h3>
            <p>Try different keywords or check spelling</p>
        </div>
        ) : (
            <>
                <h2>Results for "{searchText}"</h2>
                {
                    products.map((p) => (
                        <ProductCard key={p._id} product={p} />
                    ))
                }
            </>
        )}
    </div>
    );
};

export default AmazonSearchPage;