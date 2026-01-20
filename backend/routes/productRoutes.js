const express = require("express");
const Product = require("../models/Product");
const upload = require("../middleware/upload");

const router = express.Router();

/* Add Product */
router.post("/add", upload.single("image"), async (req, res) => {
  const exists = await Product.findOne({
    productName: req.body.productName,
    platformName: req.body.platformName,
    productUrl: req.body.productUrl
  });

  if (exists) {
    return res.status(409).json({ message: "Product already exists" });
  }

  const product = new Product({
    ...req.body,
    image: req.file.filename
  });

  await product.save();
  res.json({ message: "Product added successfully" });
});


/* Get Products by Platform */
router.get("/:platform", async (req, res) => {
  try {
    const products = await Product.find({
      platformName: req.params.platform,
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
