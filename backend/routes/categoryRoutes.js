const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { category, platform } = req.body;

    const query = {
      productCategory: { $regex: new RegExp(category, "i") }
    };

    // ✅ Only filter platform if provided
    if (platform && platform !== "All") {
      query.platformName = platform;
    }

    const products = await Product.find(query);

    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;