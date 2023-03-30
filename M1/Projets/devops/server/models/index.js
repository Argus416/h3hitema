const pg = require("../db");
const userSchema = require("./users");
const postsSchema = require("./posts");
const commentsSchema = require("./comments");
const likesSchema = require("./likes");

async function createTables(fastify, opts, done) {
	try {
		userSchema(pg);
		postsSchema(pg);
		commentsSchema(pg);
		likesSchema(pg);
	} catch (err) {
		console.error("Unable to create Schema, please check in models/index.js");
	}

	done();
}

module.exports = createTables;