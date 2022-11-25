require("dotenv").config();

const DB_CONNECTION_CONFIG = {
    host: process.env.DB_SQL_HOST,
    user: process.env.DB_SQL_USER,
    password: process.env.DB_SQL_PASSWORD,
    database: process.env.DB_SQL_NAME,
    port: process.env.DB_SQL_PORT,
};

module.exports = DB_CONNECTION_CONFIG;