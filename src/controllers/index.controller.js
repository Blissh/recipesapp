const indexctrl = {};
const Recipe = require('../models/Recipes');
indexctrl.renderIndex = (req, res) => {
    res.render('index');
};

indexctrl.renderRecipes = async(req, res) => {
    const recipes = await Recipe.find().lean();
    res.render('recipes/recipes',{recipes});
};

indexctrl.renderOneRecipe = async(req, res) => {
    console.log(req.params.id);
    const onerecipe = await Recipe.findById(req.params.id).lean();
    console.log(onerecipe);
    res.render('recipes/recipe', {onerecipe});
};

indexctrl.renderFavorites = (req, res) => { 
    res.render('recipes/favorites');
};




module.exports = indexctrl;