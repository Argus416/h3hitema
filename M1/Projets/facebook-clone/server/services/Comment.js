const pgTables = require("../env/pgTables");
const {USER_TABLE, POSTS_TABLE, COMMENTS_TABLE} = pgTables;
const pg = require("../db");

class Comment {
	constructor() {
		this.knex = pg;
	}

	async getComments(postId) {
		try {
			const knex = this.knex;
			const comments = await knex(COMMENTS_TABLE)
				.join(`${USER_TABLE}`, `${USER_TABLE}.id`, `${COMMENTS_TABLE}.userId`)
				.select([`${COMMENTS_TABLE}.*`, knex.raw(`to_json(${USER_TABLE}.*) as user`)])
				.where({ postId: postId })
				.orderBy("created_at", "desc");

			return comments;
		} catch (err) {
			console.error("Unable to get comments", err);
		}
	}

	async getComment(userId, commentId) {
		try {
			const knex = this.knex;
			const comment = await knex(COMMENTS_TABLE)
				.join(`${USER_TABLE}`, `${USER_TABLE}.id`, `${COMMENTS_TABLE}.userId`)
				.select(`${COMMENTS_TABLE}.*`, knex.raw(`to_json(${USER_TABLE}.*) as ${USER_TABLE}`))
				.where({ "comments.id": commentId });
			return comment;
		} catch (err) {
			console.error("Unable to get comment");
		}
	}

	async createComment(data) {
		try {
			console.log(data);
			const knex = this.knex;
			const newPost = await knex(COMMENTS_TABLE).insert(data);

			return data;
		} catch (err) {
			console.error("Unable to create new comment", err);
		}
	}

	async updateComment(commentId, data) {
		try {
			const knex = this.knex;
			const updateComment = await knex(COMMENTS_TABLE).where({ id: commentId }).update(data);
			return updateComment;
		} catch (err) {
			console.error("Unable to update task");
		}
	}

	async deleteComment(commentId) {
		try {
			const knex = this.knex;
			const deletePost = await knex(COMMENTS_TABLE).where({ id: commentId }).del();
			return deleteUpdate;
		} catch (err) {
			console.error("Unable to delete task", err);
		}
	}
}

const comment = new Comment();

module.exports = comment;