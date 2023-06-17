const serviceLogin = require('../Services/login.service');

const login = async (request, response) => {
    const { email, password } = request.body;
    const accessingUser = await serviceLogin.access(email, password);
    if (accessingUser.message === 'Invalid fields') return response.status(400).json(accessingUser);
    return response.status(200).json(accessingUser);
};

module.exports = {
    login,
};