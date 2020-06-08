const express = require('express');
const router = express.Router();

const {
  addRecipe, 
  createRecipe, 
  renderRecipes, 
  renderEditForm, 
  updateRecipe, 
  deleteRecipe
} = require('../controllers/recipesadm.controller');

// Nueva receta - form & inserción

router.get('/recipes/add', addRecipe);
router.post('/recipes/add', createRecipe);

// Obtener todas las recetas
router.get('/recipes', renderRecipes);

// Editar receta
router.get('/recipes/update/:id', renderEditForm);
router.put('/recipes/update/:id', updateRecipe);

// Eliminar receta
router.delete('/recipes/delete/:id', deleteRecipe);

module.exports = router;
