const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

// Get all products
router.get('/', getProducts);

// Get a single product by ID
// router.get('/:id', getProductById);

module.exports = router;
