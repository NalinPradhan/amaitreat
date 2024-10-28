const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controllers/orderController');

// Place a new order
router.post('/', placeOrder);

// Get order details by ID
router.get('/:id', getOrders);

module.exports = router;
