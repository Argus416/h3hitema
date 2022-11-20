require("dotenv").config();

const path = require("path");
const Fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

const fastifyKnex = require("./plugin/fastifyKnex");

const server = Fastify({
    logger: true,
});

server.register(fastifyKnex);

server.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public",
});

const users = require("./routes/users");
server.register(users, { prefix: "users" });

/**
 * Run the server!
 */
const start = async() => {
    try {
        await server.listen({ port: process.env.PORT });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();