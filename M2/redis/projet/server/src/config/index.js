require('dotenv').config();

exports.PORT = process.env.PORT || 3000;
exports.REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
