const express = require('express');

// Exportano rota de login
const router = express.Router();
const loginControl = require('../Controllers/login.controler');
const loginValidation = require('../middlewares/loginMiddleware');

router.post('/', loginValidation, loginControl.login);

module.exports = router;