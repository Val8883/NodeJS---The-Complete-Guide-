const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setup default view engine configuration
app.set('view engine', 'pug');
// path to the files
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(80);
