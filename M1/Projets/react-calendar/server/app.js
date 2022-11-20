require("dotenv").config();

const path = require("path");
const Fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

const server = Fastify({
    logger: true,
});

server.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public",
});

server.register(
    async(instance, opts, next) => {
        instance.get("/", async(req, rep) => {
            // rep.json()
            return { hello: "world" };
        });
    }, { prefix: "users" }
);

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