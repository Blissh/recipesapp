const indexctrl = {};

indexctrl.renderIndex = (req, res)=>{
    res.render('index');
};

indexctrl.renderRecipes = (req, res) =>{
    res.render('recipes/recipes');
};

indexctrl.renderFavorites = (req, res) =>{
    res.render('favorites');
};

module.exports = indexctrl;