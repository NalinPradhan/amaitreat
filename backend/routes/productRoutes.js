const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

// Get all products
router.get('/', getProducts);

// Get a single product by ID
// router.get('/:id', getProductById);
router.post('/save', addProduct);

module.exports = router;
