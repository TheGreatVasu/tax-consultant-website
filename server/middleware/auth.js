const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

const authenticateToken = (req, res, next) => {
  // For development purposes, temporarily bypass authentication
  return next();
  
  // TODO: Implement proper authentication later
  /*
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication token required' });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
  */
};

module.exports = {
  authenticateToken
}; 