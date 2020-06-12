const express = require('express');
const { route } = require('./index.routes');
const router = express.Router();

const { validateUser, newUser } = require('../controllers/users.controller');

router.get('/users/validate', validateUser);

router.post('/users/new', newUser);

module.exports = router;
