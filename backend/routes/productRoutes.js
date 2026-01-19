const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* Add Product */
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product saved", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
