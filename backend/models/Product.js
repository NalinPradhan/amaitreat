const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ingredients: { type: [String] },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },  // In grams
  stock: { type: Number, default: 0 },  // Track availability
  imageUrl: { type: Array },  // URL to product image
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
