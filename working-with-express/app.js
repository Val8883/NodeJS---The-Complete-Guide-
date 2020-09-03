const path = require('path');

const express = require('./node_modules/express');
const bodyParses = require('./node_modules/body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./util/path');

const app = express();

// Middleware
app.use(bodyParses.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

// "createServer" options
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
