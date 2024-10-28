const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ingredients: { type: [String] },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },  // In grams
  stock: { type: Number, default: 0 },  // Track availability
  imageUrl: { type: String },  // URL to product image
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
