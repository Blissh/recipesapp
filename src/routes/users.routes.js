const express = require("express");
const router = express.Router();
const { validateUser, newUser, logout } = require("../controllers/users.controller");
const { isAuthenticated } = require('../middlewares/validators/auth');
router.post("/users/validate", validateUser);

router.post("/users/new", newUser);

router.get('/users/logout',isAuthenticated, logout);

module.exports = router;
