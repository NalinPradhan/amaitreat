const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
      }
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: 'Pending' },  // Pending, Completed, Failed
    orderStatus: { type: String, default: 'Placed' },  // Placed, Shipped, Delivered
    createdAt: { type: Date, default: Date.now }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;
  