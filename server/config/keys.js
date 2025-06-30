require('dotenv').config();

module.exports = {
    API_KEYS: {
        GEMINI_API_KEY: process.env.GEMINI_API_KEY
    },
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/tax-consultant',
    PORT: process.env.PORT || 5000
}; 