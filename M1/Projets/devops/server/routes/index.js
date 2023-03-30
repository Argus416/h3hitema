const usersRoute = require('./v1/users')
const postsRoute = require('./v1/posts')
const commentsRoute = require('./v1/comments')
const likesRoute = require("./v1/likes");

async function routes(fastify, opts, done) {
	fastify.get("/", async (request, reply) => {
		return { hello: "world" };
	})
	fastify.register(usersRoute, { prefix: "users" });
	fastify.register(postsRoute, { prefix: "posts" });
	fastify.register(commentsRoute, { prefix: "comments" });
	fastify.register(likesRoute, { prefix: "likes" });

	done();
}

module.exports = routes;