require("dotenv").config();

const path = require("path");
const Fastify = require("fastify");
const cors = require("@fastify/cors");

const fastifyStatic = require("@fastify/static");
const fastifyKnex = require("./plugin/fastifyKnex");

const fastify = Fastify({
    logger: true,
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public",
});

fastify.register(fastifyKnex, {});

fastify.register(cors, {});

const createTablesRoute = require("./models/index");
const usersRoutes = require("./routes/users");

fastify.register(createTablesRoute);
fastify.register(usersRoutes, { prefix: "users" });

/**
 * Run the fastify!
 */
const start = async() => {
    try {
        await fastify.listen({ port: process.env.PORT });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();