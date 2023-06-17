const serviceCateg = require('../Services/categories.service');

const categCreating = async (request, response) => {
    const categ = await serviceCateg.categCreating(request.body.name);
    if (categ.error) {
        return response.status(categ.error.status).json({ message: categ.error.message });
    } 
    response.status(201).json(categ);
};

const getAllCateg = async (_request, response) => {
    const categ = await serviceCateg.getAllCateg();
    response.status(200).json(categ);
};

module.exports = {
    categCreating,
    getAllCateg,
};