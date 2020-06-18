const indexctrl = {};

indexctrl.renderIndex = (req, res) => {
    res.render('index');
};

indexctrl.renderRecipes = (req, res) => {
    res.render('recipes/recipes');
};

indexctrl.renderOneRecipe = (req, res) => {
    res.render('recipes/recipe')
};

indexctrl.renderFavorites = (req, res) => { 
    res.render('recipes/favorites');
};




module.exports = indexctrl;