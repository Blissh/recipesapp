const express = require("express");
const router = express.Router();

const {
  renderIndex,
  renderFavorites,
  renderRecipes,
} = require("../controllers/index.controller");

const {
  renderSignup,
  renderSignin,
} = require("../controllers/users.controller");

router.get("/", renderIndex);

router.get("/recipes", renderRecipes);

router.get("/favorites", renderFavorites);

router.get("/signup", renderSignup);
router.get("/signin", renderSignin);
module.exports = router;
