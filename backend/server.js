const express = require('express');
const mongoose = require('mongoose');
// const config = require('config');0
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const customerRoutes = require('./routes/customerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config({ path: './backend/.env' }); // Specify the path to the .env file
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors());
// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/customers', customerRoutes);
app.use('/api/payments', paymentRoutes);

// MongoDB Connection
const dbURI = process.env.MONGO_URI;
console.log('Backend:',PORT);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB connection error:', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
