const userSchema = require("./users");
async function createTables(fastify, opts, done) {
    const { knex } = fastify;
    try {
        userSchema(knex);
    } catch (err) {
        console.error("Unable to create Schema, please check in models/index.js");
    }

    done();
}

module.exports = createTables;