const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('In the default middleware');
  res.send('<h1>Default route</h1>');
});

module.exports = router;
