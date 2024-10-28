const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  console.log('Runnung addProduct');
  console.log(req.body);
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
 
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error adding product' });
  }
};
