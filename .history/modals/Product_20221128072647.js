const mongoose = require("mongoose");

const ProductsScehma = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  availableQty: { type: Number, required: true },
  price: { type: Number, required: true },
  images: { type: Object, required: true },
  size: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
});

export default mongoose.modals.Product ||
  mongoose.model("Product", ProductsScehma);
