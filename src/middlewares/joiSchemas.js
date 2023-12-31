const joi = require('joi');

const required = 'Some required fields are missing';

const userPostSchema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
}).messages({
    'any.required': 'O campo {#label} é obrigatório',
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.email': '"email" must be a valid email',
});

const schemaId = joi.object({
    id: joi.number().integer().positive().required(),
}).messages({
    'any.required': '{#label} is required',
});

const schemaCateg = joi.object({
    name: joi.string().min(3).required(),
}).messages({
    'any.required': '{#label} is required',
});

const schemaOfBlogPost = joi.object({
    title: joi.string().min(1).required().empty()
    .messages({
        'string.empty': required,
        'string.min': required,
        'any.required': required,
    }),
    content: joi.string().min(1).required()
    .messages({
        'string.empty': required,
        'string.min': required,
    }),
    categoryIds: joi.array().items(joi.number().integer().positive()).min(1).required()
    .messages({
        'array.includes': 'one or more "categoryIds" not found',
        'array.min': 'one or more "categoryIds" not found',
        'categoryIds.required': required,
        'any.required': required,
    }),
});

module.exports = {
    userPostSchema,
    schemaId,
    schemaCateg,
    schemaOfBlogPost,
};
