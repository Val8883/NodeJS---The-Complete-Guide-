const express = require('./node_modules/express');
const bodyParses = require('./node_modules/body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Middleware
app.use(bodyParses.urlencoded({ extended: false }));

// Routes'
app.use(adminRoutes);
app.use(shopRoutes);

// "createServer" options
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
