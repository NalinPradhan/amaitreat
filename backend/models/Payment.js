const paymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentId: { type: String, required: true },  // Provided by gateway
    paymentAmount: { type: Number, required: true },
    paymentStatus: { type: String, required: true },  // Success, Failed
    paymentDate: { type: Date, default: Date.now }
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
  module.exports = Payment;
  