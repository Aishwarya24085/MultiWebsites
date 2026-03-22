import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./CromaProductCard";
import './CromaSearchPage.css';

const CromaSearchPage = () => {
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
        platform: "Croma"
      })
    })
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [searchText]);

    return (
    <div className="search-page">
        {products.length === 0 ? (
        <div className="no-res-found" style={{ textAlign: "center", marginTop: "50px", color:"white"}}>
            <h3>No results found for "{searchText}"</h3>
            <p>Try different keywords or check spelling</p>
        </div>
        ) : (
            <>
              <div className="res-found" style={{ padding:"20px 40px", color:"white"}}>
                <h2>Results for "{searchText}"</h2>
                {
                  products.map((p) => (
                      <ProductCard key={p._id} product={p} />
                  ))
                }
              </div>
            </>
        )}
    </div>
    );
};

export default CromaSearchPage;