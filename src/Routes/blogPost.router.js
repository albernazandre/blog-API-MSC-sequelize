const express = require('express');
const blogPostControl = require('../Controllers/blogPost.controller');
const { blogPostValidation } = require('../middlewares/blogPostValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();
router.post('/', tokenValidation, blogPostValidation, blogPostControl.addingBlogPostControl);

module.exports = router;