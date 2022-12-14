require("dotenv").config();

const path = require("path");
const Fastify = require("fastify");
const cors = require("@fastify/cors");

// Fastify plugins
const fastifyStatic = require("@fastify/static");
const helmet = require("@fastify/helmet");
const mapRoutes = require('@fastify/routes');


const fastify = Fastify({
	logger: true,
});

fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/public",
});

fastify.register(helmet);
fastify.register(mapRoutes);
fastify.register(cors, {
	origin: "*",
});

const createTablesRoute = require("./models/index");
const v1_routes = require("./routes/index");

fastify.register(createTablesRoute);
fastify.register(v1_routes, {prefix: "v1"});

/**
 * Run the fastify!
 */
const start = async () => {
    try {
		await fastify.listen({ port: 3001, host: "0.0.0.0" });
		// console.log(fastify.routes)
	} catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();