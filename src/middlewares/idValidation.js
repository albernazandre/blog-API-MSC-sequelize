const { schemaId } = require('./joiSchemas');

const validId = async (request, reponse, next) => {
    const { error } = schemaId.validate(request.params);
    if (error) return reponse.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = validId;
