const express = require('express');
const router = express.Router();

// Trae las recetas favoritas del user
router.get('/myrecipes/:id', (req, res) => {
  res.send('GET request to my recipes')
});

module.exports = router;
