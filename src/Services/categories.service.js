const { Category } = require('../models');

const categCreating = async (name) => {
    const existVerifying = await Category.findOne({ where: { name } });
    if (existVerifying) return { error: { status: 409, message: 'Category already registered' } };
    const categ = await Category.create({ name });
    return { id: categ.id, name: categ.name };
};

const getAllCateg = async () => {
    const categ = await Category.findAll();
    return categ;
};

module.exports = {
    categCreating,
    getAllCateg,
};