const express = require('express');
const categControl = require('../Controllers/categories.controller');
const { categValidating } = require('../middlewares/categoryPostValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.get('/', tokenValidation, categControl.getAllCateg);
router.post('/', tokenValidation, categValidating, categControl.categCreating);

module.exports = router;