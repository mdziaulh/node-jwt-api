const CustomAPIError = require('../errors/custom-error');
const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No Token Provided');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const {id, username} = decoded;
        req.user = {id, username}
        next();
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access the route');
    }
}

module.exports = authMiddleware;