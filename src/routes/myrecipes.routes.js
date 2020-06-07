const express = require('express');
const router = express.Router();

router.get('/myrecipes', (req, res) => {
  res.send('GET request to my recipes')
});

module.exports = router;
