const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Homepage for NodeJS Express' });
});

module.exports = router;
