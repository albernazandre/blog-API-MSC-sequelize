const { User } = require('../models');
const webToken = require('../utils/jwtoken');

const userAdding = async ({ displayName, email, password, image }) => {
    const thereIsAnUser = await User.findOne({ where: { email } });
    if (!thereIsAnUser) {
        const newUser = await User.create({ displayName, email, password, image });
        const token = webToken.tokenCreating({ id: newUser.id, email: newUser.email });
        return ({ token });
    } 
    return ({ message: 'User already registered' });
};

const findingAll = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const findingUser = async (id) => {
    const userFinded = await User.findByPk(id, {
        attributes: { exclude: ['password'] } });
    return userFinded;
};

module.exports = {
    userAdding,
    findingAll,
    findingUser,
};