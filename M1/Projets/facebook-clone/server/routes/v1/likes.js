const { getLikes, getLike, createLike, updateLike, deleteLike } = require("../../controllers/like");

async function likesRoute(fastify, opts, done) {
	fastify.get("/all/:postId", getLikes);
	fastify.get("/get/:userId/:likeId", getLike);
	fastify.post("/add", createLike);
	fastify.patch("/update/:likeId", updateLike);
	fastify.delete("/delete/:likeId", deleteLike);

	done();
}

module.exports = likesRoute;
