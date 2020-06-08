const { Router } = require('express');
const router = Router();

const recipectrl = {};

// Metodo para añadir nuevas recetas form : admin
recipectrl.addRecipe = (req, res)=>{
    res.send('Aqui pronto, el admin añadirá recetas mediante un form que luego envía')
};

// Metodo para crear la receta en la BD
recipectrl.createRecipe = (req, res)=>{
    res.send('esta ruta creará la nueva rceta en la BD')
};


// Get recipes
recipectrl.renderRecipes = (req, res)=>{
    res.send('Obteniendo todas las recetas uwu');
};
//get form para editar
recipectrl.renderEditForm = (req, res)=>{
    res.send('formulario para editar y actualizar recetas');
};
//put para actualizar en BD
recipectrl.updateRecipe = (req, res)=>{
    res.send('Para hacer update a las recipes')
};

// delete en BD
recipectrl.deleteRecipe = (req, res)=>{
    res.send('Delete recipe');
};

module.exports = recipectrl;