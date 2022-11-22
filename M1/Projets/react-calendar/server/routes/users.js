const { createUser, getUsers } = require("../controllers/users");
const userSchema = require("../models/users");

async function routes(fastify, opts, done) {
    const { knex } = fastify;

    fastify.get("/", getUsers);
    fastify.get("/get/:userId", getUser);
    fastify.post("/create", createUser);

    fastify.get("/two", (req, res) => {
        res.send("<h1>toto h2</h1>");
    });

    done();
}

module.exports = routes;