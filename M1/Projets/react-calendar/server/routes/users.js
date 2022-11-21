const userSchema = require("../models/users");
async function routes(fastify, opts, done) {
    fastify.get("/", (req, res) => {
        res.send("<h1>toto h1</h1>");
    });

    fastify.get("/two", (req, res) => {
        res.send("<h1>toto h2</h1>");
    });

    done();
}

module.exports = routes;