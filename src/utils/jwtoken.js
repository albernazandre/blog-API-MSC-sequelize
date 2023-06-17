const webToken = require('jsonwebtoken');

const tokenCreating = (payload) => {
    const token = webToken.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
};

const tokenVerifying = (tok) => {
    try {
        const decoded = webToken.verify(tok, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = {
    tokenCreating,
    tokenVerifying,
};