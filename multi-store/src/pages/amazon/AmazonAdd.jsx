import { useState } from "react";
import "./AmazonAdd.css";

export default function AmazonAdd() {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    productName: "",
    platformName: "Amazon",
    price: "",
    rating: "",
    discount: "",
    seller: "",
    sellerRating: "",
    productUrl: "",
    noOfPeopleRated: "",
    productCategory:""
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

    alert("Product successfully listed on Amazon!");
    setShowForm(false);
  }

  return (
    <div className="amz-add-container">
      <div className="amz-add-header">
        <h1>Add a Product: Amazon Seller Central</h1>
        <p>List your inventory for millions of customers to discover.</p>
        {!showForm && (
          <button className="amz-primary-btn" onClick={() => setShowForm(true)}>
            + Create a new listing
          </button>
        )}
      </div>

      {showForm && (
        <div className="amz-form-wrapper">
          <form className="amz-upload-form" onSubmit={handleSubmit}>
            
            <div className="amz-form-section">
              <h3>Vital Info</h3>
              <div className="amz-grid-2">
                <div className="amz-input-group">
                  <label>Product Name</label>
                  <input name="productName" placeholder="e.g., Wireless Bluetooth Earbuds" onChange={handleChange} required />
                </div>
                <div className="amz-input-group">
                  <label>Product URL</label>
                  <input name="productUrl" placeholder="https://amazon.in/dp/..." onChange={handleChange} required />
                </div>
                <div className="amz-input-group">
                  <label>Product Category</label>
                  <input name="productcategory" placeholder="Electronics" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="amz-form-section">
              <h3>Offer & Pricing</h3>
              <div className="amz-grid-2">
                <div className="amz-input-group">
                  <label>Price (₹)</label>
                  <input name="price" type="number" placeholder="0.00" onChange={handleChange} required />
                </div>
                <div className="amz-input-group">
                  <label>Discount %</label>
                  <input name="discount" type="number" placeholder="10" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="amz-form-section">
              <h3>Seller & Ratings</h3>
              <div className="amz-grid-4">
                <div className="amz-input-group">
                  <label>Rating (1-5)</label>
                  <input name="rating" type="number" step="0.1" placeholder="4.5" onChange={handleChange} required />
                </div>
                <div className="amz-input-group">
                  <label>People Rated</label>
                  <input name="noOfPeopleRated" type="number" placeholder="200" onChange={handleChange} required/>
                </div>
                <div className="amz-input-group">
                  <label>Seller Name</label>
                  <input name="seller" placeholder="e.g., Appario Retail" onChange={handleChange} required />
                </div>
                <div className="amz-input-group">
                  <label>Seller Rating</label>
                  <input name="sellerRating" type="number" step="0.1" placeholder="4.5" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="amz-form-section">
              <h3>Images</h3>
              <div className="amz-input-group">
                <label>Main Image File</label>
                <input type="file" accept="image/*" className="amz-file-input" onChange={(e) => setImage(e.target.files[0])} required />
              </div>
            </div>

            <div className="amz-form-actions">
              <button type="submit" className="amz-save-btn">Save and finish</button>
              <button type="button" className="amz-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}