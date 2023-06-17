const express = require('express');
const userControl = require('../Controllers/user.controler');
const { userValidation } = require('../middlewares/userPostValid');
const { tokenValidation } = require('../middlewares/tokenValidation');
const validatingId = require('../middlewares/idValidation');

const router = express.Router();
router.post('/', userValidation, userControl.userAdding);
router.get('/', tokenValidation, userControl.findingAll);
router.get('/:id', validatingId, tokenValidation, userControl.findingUser);

module.exports = router;
