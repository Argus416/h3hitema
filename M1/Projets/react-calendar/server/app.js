require("dotenv").config();

const path = require("path");
const Fastify = require("fastify");
const cors = require("@fastify/cors");

const fastifyStatic = require("@fastify/static");
const helmet = require("@fastify/helmet");

const fastify = Fastify({
    logger: true,
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public",
});

fastify.register(helmet);

fastify.register(cors, {
    origin: "*",
});

const createTablesRoute = require("./models/index");
const v1_routes = require("./routes/v1");

fastify.register(createTablesRoute);
fastify.register(v1_routes, { prefix: "v1" });

/**
 * Run the fastify!
 */
const start = async() => {
    try {
        await fastify.listen(process.env.PORT || 3000, "0.0.0.0");
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();