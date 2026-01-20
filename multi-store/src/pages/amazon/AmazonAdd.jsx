import { useState } from "react";

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
    productUrl: ""
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

  // Append product fields
  Object.keys(product).forEach(key => {
    formData.append(key, product[key]);
  });

  // Append image
  formData.append("image", image);

  await fetch("http://localhost:7000/api/products/add", {
    method: "POST",
    body: formData
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

            <input name="productName" placeholder="Product Name" onChange={handleChange}  required />
            <input name="price" placeholder="Price" onChange={handleChange}  required/>
            <input name="rating" placeholder="Rating" onChange={handleChange}  required/>
            <input name="discount" placeholder="Discount %" onChange={handleChange}  required/>
            <input name="seller" placeholder="Seller" onChange={handleChange}  required/>
            <input name="sellerRating" placeholder="Seller Rating" onChange={handleChange}  required/>
            <input name="productUrl" placeholder="product URL" onChange={handleChange}  required/>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />


            <div className="form-actions">
              <button type="submit" className="SaveButton">Save</button>
              <button type="button " className="CancelButton" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
