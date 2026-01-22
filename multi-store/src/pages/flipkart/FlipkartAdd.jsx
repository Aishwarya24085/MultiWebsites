import { useState } from "react";
import "./FlipkartAdd.css";

export default function FlipkartAdd() {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    productName: "",
    platformName: "Flipkart",
    price: "",
    rating: "",
    discount: "",
    seller: "",
    sellerRating: "", // Added to state
    productUrl: "",
    noOfPeopleRated: ""
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

    alert("Product saved to Flipkart database!");
    setShowForm(false);
  }

  return (
    <div className="fk-add-container">
      <div className="fk-add-header">
        <h1>Seller Hub: Manage Listings</h1>
        <p>List your products on India's most trusted marketplace.</p>
        {!showForm && (
          <button className="fk-primary-add-btn" onClick={() => setShowForm(true)}>
            + Add New Listing
          </button>
        )}
      </div>

      {showForm && (
        <div className="fk-form-wrapper">
          <form className="fk-seller-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Product Details</h3>
            
            <div className="fk-grid-layout">
              {/* Row 1: Full Width Title */}
              <div className="fk-form-group span-full">
                <label>Product Title</label>
                <input name="productName" placeholder="e.g. Samsung Galaxy S23" onChange={handleChange} required/>
              </div>

              {/* Row 2: Price and Discount */}
              <div className="fk-form-group">
                <label>Price (₹)</label>
                <input name="price" type="number" placeholder="49999" onChange={handleChange} required/>
              </div>
              <div className="fk-form-group">
                <label>Discount %</label>
                <input name="discount" type="number" placeholder="10" onChange={handleChange} required/>
              </div>

              {/* Row 3: Ratings and Seller Info (3 Columns) */}
              <div className="fk-form-group">
                <label>Product Rating</label>
                <input name="rating" type="number" step="0.1" placeholder="4.5" onChange={handleChange} required/>
              </div>
              <div className="fk-form-group">
                <label>People Rated</label>
                <input name="noOfPeopleRated" type="number" placeholder="1250" onChange={handleChange} required/>
              </div>
              <div className="fk-form-group">
                <label>Seller Name</label>
                <input name="seller" placeholder="RetailNet" onChange={handleChange} required/>
              </div>

              {/* Row 4: Seller Rating and URL */}
              <div className="fk-form-group">
                <label>Seller Rating</label>
                <input name="sellerRating" type="number" step="0.1" placeholder="4.2" onChange={handleChange} required/>
              </div>
              <div className="fk-form-group">
                <label>Product Source URL</label>
                <input name="productUrl" placeholder="https://flipkart.com/..." onChange={handleChange} required/>
              </div>

              {/* Row 5: Full Width Image */}
              <div className="fk-form-group span-full">
                <label>Upload Image</label>
                <input type="file" accept="image/*" className="fk-file-input" onChange={(e) => setImage(e.target.files[0])} required />
              </div>
            </div>

            <div className="fk-form-actions">
              <button type="submit" className="fk-save-btn">Publish Listing</button>
              <button type="button" className="fk-cancel-btn" onClick={() => setShowForm(false)}>Discard</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}