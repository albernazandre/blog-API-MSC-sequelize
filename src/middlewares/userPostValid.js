const { userPostSchema } = require('./joiSchemas');

const userValidation = (request, response, next) => {
    const { error } = userPostSchema.validate(request.body);
    if (error) return response.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    userValidation,
};
