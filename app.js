const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// register the template engine
app.engine('hanldebars', expressHbs());
// setup default view engine configuration
app.set('view engine', 'handlebars');
// path to the folder with tamplate files (.pug)
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
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: '404' });
});

app.listen(80);
