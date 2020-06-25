const express = require("express");
const router = express.Router();
const { validateUser, newUser, logout } = require("../controllers/users.controller");

router.post("/users/validate", validateUser);

router.post("/users/new", newUser);

router.get('/users/logout', logout);

module.exports = router;
