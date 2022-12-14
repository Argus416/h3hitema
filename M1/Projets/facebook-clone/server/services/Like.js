const pgTables = require("../env/pgTables");
const { USER_TABLE, LIKES_TABLE } = pgTables;
const pg = require("../db");

class Like {
	constructor() {
		this.knex = pg;
	}

	async getLikes(postId) {
		try {
			const knex = this.knex;
			const likes = await knex(LIKES_TABLE)
				.join(`${USER_TABLE}`, `${USER_TABLE}.id`, `${LIKES_TABLE}.userId`)
				.select([`${LIKES_TABLE}.*`, knex.raw(`to_json(${USER_TABLE}.*) as user`)])
				.where({ postId: postId })
				.orderBy("created_at", "desc");

			return likes;
		} catch (err) {
			console.error("Unable to get likes", err);
		}
	}

	async createLike(data) {
		try {
			console.log(data);
			const knex = this.knex;
			const newPost = await knex(LIKES_TABLE).insert(data);

			return data;
		} catch (err) {
			console.error("Unable to create new like", err);
		}
	}

	async updateLike(likeId, data) {
		try {
			const knex = this.knex;
			const updateLike = await knex(LIKES_TABLE).where({ id: likeId }).update(data);
			return updateLike;
		} catch (err) {
			console.error("Unable to update task");
		}
	}

	async deleteLike(likeId) {
		try {
			const knex = this.knex;
			const deletePost = await knex(LIKES_TABLE).where({ id: likeId }).del();
			return deleteUpdate;
		} catch (err) {
			console.error("Unable to delete task", err);
		}
	}
}

const like = new Like();

module.exports = like;
