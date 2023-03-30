const pg = require("../db");
const { LIKES_TABLE, COMMENTS_TABLE, USER_TABLE, POSTS_TABLE } = require("../env/pgTables");

class Post {
	constructor() {
		this.knex = pg;
	}

	async getPosts() {
		try {
			const knex = this.knex;
			const posts = await knex(POSTS_TABLE)
				.join(`${USER_TABLE}`, `${USER_TABLE}.id`, `${POSTS_TABLE}.userId`)
				.select([`${POSTS_TABLE}.*`, knex.raw(`to_json(${USER_TABLE}.*) as user`)])
				.orderBy("created_at", "desc");

			return posts;
		} catch (err) {
			console.error("Unable to get posts", err);
		}
	}

	async getPost(postId) {
		try {
			const knex = this.knex;
			const post = await knex(POSTS_TABLE)
				.join(`${USER_TABLE}`, `${USER_TABLE}.id`, `${POSTS_TABLE}.userId`)
				.select(`${POSTS_TABLE}.*`, knex.raw(`to_json(${USER_TABLE}.*) as ${USER_TABLE}`))
				.where({ "posts.id": postId });
			return post;
		} catch (err) {
			console.error("Unable to get post");
		}
	}

	async createPost(data) {
		try {
			console.log(data);
			const knex = this.knex;
			const newPost = await knex(POSTS_TABLE).insert(data);
			console.log("new post");
			return newPost;
		} catch (err) {
			console.error("Unable to create new post", err);
		}
	}

	async updatePost(postId, data) {
		try {
			const knex = this.knex;
			const updatePost = await knex(POSTS_TABLE).where({ id: postId }).update(data);
			return updatePost;
		} catch (err) {
			console.error("Unable to update task");
		}
	}

	async deletePost(postId) {
		try {
			const knex = this.knex;
			const deletePost = await knex(POSTS_TABLE).where({ id: postId }).del();
			return deletePost;
		} catch (err) {
			console.error("Unable to delete task", err);
		}
	}
}

const post = new Post();

module.exports = post;
