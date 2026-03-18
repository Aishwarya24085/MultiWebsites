import { useState } from "react";
import "./CromaAdd.css"

export default function CromaAdd() {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    productName: "",
    platformName: "Croma",
    price: "",
    rating: "",
    discount: "",
    seller: "",
    sellerRating: "", // Added field
    productUrl: "",
    noOfPeopleRated: "",
    productCategory: ""
  });

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function isFormValid() {
    return Object.values(product).every(value => value !== "");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid() || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    Object.keys(product).forEach(key => formData.append(key, product[key]));
    formData.append("image", image);

    await fetch("http://localhost:7000/api/products/add", {
      method: "POST",
      body: formData
    });

    alert("Product saved to Croma database");
    setShowForm(false);
  }

  return (
    <div className="croma-add-container">
      <div className="croma-add-header">
        <h2>Seller Portal: Add New Inventory</h2>
        <p>Upload product details to the Croma database</p>
        {!showForm && (
          <button className="croma-primary-btn" onClick={() => setShowForm(true)}>
            + Create New Listing
          </button>
        )}
      </div>

      {showForm && (
        <div className="croma-form-overlay">
          <form className="croma-upload-form" onSubmit={handleSubmit}>
            <h3>Product Specifications</h3>
            
            <div className="croma-grid-layout">
              {/* Row 1: Full Name */}
              <div className="input-group span-full">
                <label>Product Name</label>
                <input name="productName" placeholder="e.g. Apple iPhone 15 Pro" onChange={handleChange} required/>
              </div>

              {/* Row 2: Price Discount and category */}
              <div className="input-group span-3">
                <label>Price (₹)</label>
                <input name="price" type="number" placeholder="45000" onChange={handleChange} required/>
              </div>
              <div className="input-group span-3">
                <label>Discount (%)</label>
                <input name="discount" type="number" placeholder="10" onChange={handleChange} required/>
              </div>
              <div className="input-group span-3">
                <label>Category</label>
                <input name="productCategory" placeholder="Electornics" onChange={handleChange} required/>
              </div>

              {/* Row 3: Product Rating and People Rated */}
              <div className="input-group span-3">
                <label>Product Rating</label>
                <input name="rating" type="number" step="0.1" placeholder="4.5" onChange={handleChange} required/>
              </div>
              <div className="input-group span-3">
                <label>People Rated</label>
                <input name="noOfPeopleRated" type="number" placeholder="1250" onChange={handleChange} required/>
              </div>

              {/* Row 4: Seller Info */}
              <div className="input-group span-3">
                <label>Seller Name</label>
                <input name="seller" placeholder="Croma Retail" onChange={handleChange} required/>
              </div>
              <div className="input-group span-3">
                <label>Seller Rating</label>
                <input name="sellerRating" type="number" step="0.1" placeholder="4.2" onChange={handleChange} required/>
              </div>

              {/* Row 5: URL and Image */}
              <div className="input-group span-full">
                <label>Product URL</label>
                <input name="productUrl" placeholder="https://www.croma.com/..." onChange={handleChange} required/>
              </div>

              <div className="input-group span-full">
                <label>Product Image</label>
                <input type="file" accept="image/*" className="file-input" onChange={(e) => setImage(e.target.files[0])} required />
              </div>
            </div>

            <div className="croma-form-actions">
              <button type="submit" className="SaveButton">List Product</button>
              <button type="button" className="CancelButton" onClick={() => setShowForm(false)}>Discard</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}