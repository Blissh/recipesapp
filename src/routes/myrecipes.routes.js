const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/validators/auth');
// Trae las recetas favoritas del user
router.get('/myrecipes/:id', isAuthenticated, (req, res) => {
  res.send('GET request to my recipes')
});

module.exports = router;
