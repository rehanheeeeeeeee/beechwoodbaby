const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  available: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: Object, required: true },
  price: { type: Number, required: true },
});
