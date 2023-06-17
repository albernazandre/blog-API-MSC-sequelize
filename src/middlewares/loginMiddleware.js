// Middleware de login

const middleLogin = (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    next();
};

module.exports = middleLogin;