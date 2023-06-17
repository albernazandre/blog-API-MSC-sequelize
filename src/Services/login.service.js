const { User } = require('../models');
const webToken = require('../utils/jwtoken');

const access = async (email, password) => {
    const signUser = await User.findOne({ where: { email } });
    if (signUser === null || signUser.password !== password) {
      return {
        message: 'Invalid fields',
      }; 
    }
    const token = webToken.tokenCreating({ id: signUser.id, email: signUser.email });
    return { token };
};

module.exports = {
    access,
};