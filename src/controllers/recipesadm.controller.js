const { Router } = require("express");
const router = Router();
const Recipe = require("../models/Recipes");

const recipectrl = {};

//  *FORM de nueva receta
recipectrl.addRecipe = (req, res) => {
  res.render("admin/create");
};

// *Metodo para crear la receta en la BD
recipectrl.createRecipe = async (req, res) => {
  const { name, type, dif, ingredients, steps, time, preview, url } = req.body;
  let ingredientsArr = ingredients.split(",");
  let stepsArr = steps.split(",");
  let imagesArr = url.split(",");
  // console.log(ingredientsArr, stepsArr, imagesArr);

  const newRecipe = new Recipe({
    receta_nombre: name,
    receta_tipo: type,
    receta_dificultad: dif,
    receta_ingredientes: ingredientsArr,
    receta_pasos: stepsArr,
    receta_tiempo: time,
    receta_preview: preview,
    receta_images: imagesArr,
  });
  await newRecipe.save((err) => {
    if (!err) {
      res.render("responses/allright");
    } else {
      res.render("responses/error");
    }
  });
};

// *Get recipes
recipectrl.renderRecipes = async (req, res) => {
  const recipes = await Recipe.find().lean();
  res.render("admin/allrecipes", { recipes });
};
// *get form para editar
recipectrl.renderEditForm = async (req, res) => {
  const params = await Recipe.findById(req.params.id).lean();
  res.render("admin/edit", { params });
};
// put para actualizar en BD
recipectrl.updateRecipe = async (req, res) => {
  const {
    name,
    tipo,
    dificultad,
    tiempo,
    preview,
    ingredientes,
    pasos,
    images,
  } = req.body;

  
  await Recipe.findByIdAndUpdate(req.params.id, {
    receta_nombre: name,
    receta_tipo: tipo,
    receta_dificultad: dificultad,
    receta_ingredientes: ingredientes,
    receta_pasos: pasos,
    receta_tiempo: tiempo,
    receta_preview: preview,
    receta_images: images,
  });
  res.redirect('/recipes/all');
};

// *delete en BD
recipectrl.deleteRecipe = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.redirect("/recipes/all");
};

module.exports = recipectrl;
