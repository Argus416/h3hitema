const { getUsers, getUser, updateUser, createUser } = require("../controllers/users");
const userSchema = require("../models/users");

async function routes(fastify, opts, done) {
    fastify.get("/", getUsers);
    fastify.get("/get/:userId", getUser);
    fastify.post("/create", createUser);
    fastify.patch("/update/:userId", updateUser);

    done();
}

module.exports = routes;