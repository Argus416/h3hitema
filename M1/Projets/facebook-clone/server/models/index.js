const pg = require("../db");
const userSchema = require("./users");
const postsSchema = require("./posts");
const commentsSchema = require("./comments");

async function createTables(fastify, opts, done) {
    try {
        userSchema(pg);
        postsSchema(pg);
        commentsSchema(pg);
    } catch (err) {
        console.error("Unable to create Schema, please check in models/index.js");
    }

    done();
}

module.exports = createTables;