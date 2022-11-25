const pg = require("../db");
const userSchema = require("./users");
const appointmentSchema = require("./appointment");

async function createTables(fastify, opts, done) {
    try {
        userSchema(pg);
        appointmentSchema(pg);
    } catch (err) {
        console.error("Unable to create Schema, please check in models/index.js");
    }

    done();
}

module.exports = createTables;