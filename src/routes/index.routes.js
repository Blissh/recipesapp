const express = require('express');
const router = express.Router();

const { renderIndex, renderFavorites, renderRecipes} = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/recipes', renderRecipes);

router.get('/favorites', renderFavorites);

module.exports = router;
