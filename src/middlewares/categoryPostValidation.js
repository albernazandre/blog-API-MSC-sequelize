const { schemaCateg } = require('./joiSchemas');

const categValidating = async (request, response, next) => {
    const { error } = schemaCateg.validate(request.body);
    if (error) return response.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    categValidating,
};