const express = require('express');
const router = express.Router();
const { initiatePayment, confirmPayment } = require('../controllers/paymentController');

// Initiate a payment
router.post('/initiate', initiatePayment);

// Confirm a payment (Webhook or callback)
router.post('/confirm', confirmPayment);

module.exports = router;
