const pg = require("../db");
const userSchema = require("./users");
const tasksSchema = require("./tasks");

async function createTables(fastify, opts, done) {
    try {
        userSchema(pg);
        tasksSchema(pg);
    } catch (err) {
        console.error("Unable to create Schema, please check in models/index.js");
    }

    done();
}

module.exports = createTables;