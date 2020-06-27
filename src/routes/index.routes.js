const express = require("express");
const router = express.Router();

const {
  renderIndex,
  renderFavorites,
  renderRecipes,
  renderOneRecipe,
} = require("../controllers/index.controller");

const { isAuthenticated } = require('../middlewares/validators/auth');

const {
  renderSignup,
  renderSignin,
} = require("../controllers/users.controller");

router.get("/", renderIndex);

router.get("/recipes", isAuthenticated, renderRecipes);
router.get("/recipes/justone/:id", renderOneRecipe)
router.get("/favorites", isAuthenticated ,renderFavorites);

router.get("/signup", renderSignup);
router.get("/signin", renderSignin);
module.exports = router;
