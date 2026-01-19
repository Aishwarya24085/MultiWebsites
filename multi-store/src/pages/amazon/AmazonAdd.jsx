import { useState } from "react";

export default function AmazonAdd() {
  const [showForm, setShowForm] = useState(false);

  const [product, setProduct] = useState({
    productName: "",
    platformName: "Amazon",
    price: "",
    rating: "",
    discount: "",
    seller: "",
    sellerRating: ""
  });

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:7000/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    alert("Product saved to database");
    setShowForm(false);
  }


  return (
    <>
      <h2>Uploads</h2>

      <button className="add-btn" onClick={() => setShowForm(true)}>+</button>

      {showForm && (
        <div className="modal">
          <form className="modal-form" onSubmit={handleSubmit}>
            <h3>Add Product</h3>

            <input name="productName" placeholder="Product Name" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
            <input name="rating" placeholder="Rating" onChange={handleChange} />
            <input name="discount" placeholder="Discount %" onChange={handleChange} />
            <input name="seller" placeholder="Seller" onChange={handleChange} />
            <input name="sellerRating" placeholder="Seller Rating" onChange={handleChange} />

            <div className="form-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
