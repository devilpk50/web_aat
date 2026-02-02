require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { join } = require('path');

const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS – allow frontend (static files or different origin)
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded product images
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Vastra Revival API' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
