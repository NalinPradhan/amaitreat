const Customer = require('../models/Customer');

// Save or update customer info
exports.saveCustomerInfo = async (req, res) => {
  try {
    const { email } = req.body;
    const customer = await Customer.findOneAndUpdate({ email }, req.body, { new: true, upsert: true });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: 'Error saving customer info' });
  }
};
