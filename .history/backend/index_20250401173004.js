require('dotenv').config();
const express = require('express');
const pool = require('./db'); // Import database connection

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON
app.use('/adminuser', require("./routes/adminRoutes"));
app.use('/cities', require("./routes/cityRoutes"));
app.use('/products', require("./routes/productsRoutes"));
app.use('/stock_movements', require("./routes/stockRoutes"));
app.use('/store-inventory', require("./routes/store-inventoryRoutes"));
app.use('/stores', require("./routes/storesRoutes"));
app.use('/suppliers', require("./routes/storesRoutes"));

// Test Route: Fetch all users (Example table: users)
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM admin_users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
