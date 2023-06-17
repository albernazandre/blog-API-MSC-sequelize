const webToken = require('../utils/jwtoken');

const tokenValidation = async (request, response, next) => {
    const tok = request.headers.authorization;
    if (!tok) return response.status(401).json({ message: 'Token not found' });
    const tokenDecoding = webToken.tokenVerifying(tok);
    if (tokenDecoding.message) {
        return response.status(401).json({ message: 'Expired or invalid token' });
    }
    console.log(tokenDecoding);
    response.locals.user = tokenDecoding;
    next();
};

module.exports = {
    tokenValidation,
};
