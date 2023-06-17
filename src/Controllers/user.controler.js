const userServices = require('../Services/user.service');

const userAdding = async (request, response) => {
    const { displayName, email, password, image } = request.body;
    const userAdd = await userServices.userAdding({ displayName, email, password, image });
    if (userAdd.message === 'User already registered') return response.status(409).json(userAdd);
    return response.status(201).json(userAdd);
};

const findingAll = async (_request, response) => {
    const users = await userServices.findingAll();
    return response.status(200).json(users);
};

const findingUser = async (request, response) => {
    const { id } = request.params;
    const userFinded = await userServices.findingUser(id);
    if (!userFinded) return response.status(404).json({ message: 'User does not exist' });
    return response.status(200).json(userFinded);
};

module.exports = {
    userAdding,
    findingAll,
    findingUser,
};