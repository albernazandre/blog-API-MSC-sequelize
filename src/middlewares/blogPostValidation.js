const { schemaOfBlogPost } = require('./joiSchemas');

const blogPostValidation = (request, response, next) => {
    const { error } = schemaOfBlogPost.validate(request.body);
    if (error) return response.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    blogPostValidation,
};