const fastifyPlugin = require("fastify-plugin");
const knex = require("knex");
require("dotenv").config();

// const { DB_SQL_CLIENT, DB_SQL_HOST, DB_SQL_USER, DB_SQL_PASSWORD, DB_SQL_NAME, DB_SQL_PORT } = require("../environment");

const knexConnector = async(server, options = {}) => {
    const db = knex({
        client: process.env.DB_SQL_CLIENT,
        connection: {
            host: process.env.DB_SQL_HOST,
            user: process.env.DB_SQL_USER,
            password: process.env.DB_SQL_PASSWORD,
            database: process.env.DB_SQL_NAME,
            port: process.env.DB_SQL_PORT,
            ...options.connection,
        },
        ...options,
    });
    server.decorate("knex", db);
};

// Wrapping a plugin function with fastify-plugin exposes the decorators,
// hooks, and middlewares declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(knexConnector);