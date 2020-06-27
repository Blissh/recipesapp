const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/validators/auth');
const {
  addRecipe, 
  createRecipe, 
  renderRecipes, 
  renderEditForm, 
  updateRecipe, 
  deleteRecipe
} = require('../controllers/recipesadm.controller');

// Nueva receta - form & inserción

router.get('/recipes/add',isAuthenticated, addRecipe);
router.post('/recipes/create',isAuthenticated, createRecipe);

// Obtener todas las recetas
router.get('/recipes/all',isAuthenticated, renderRecipes);

// Editar receta
router.get('/recipes/update/:id',isAuthenticated, renderEditForm);
router.put('/recipes/update/:id',isAuthenticated, updateRecipe);

// Eliminar receta
router.delete('/recipes/delete/:id',isAuthenticated, deleteRecipe);

module.exports = router;
