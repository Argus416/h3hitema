const pgTables = require("../env/pgTables");
const { USER_TABLE } = pgTables;
const pg = require("../db");
class User {
	constructor() {
		this.knex = pg;
	}

	async getUsers() {
		try {
			const knex = this.knex;
			const user = await knex.from(USER_TABLE).select("*");
			return user;
		} catch (err) {
			console.error("Unable to get users", err);
		}
	}

	async getUserLogin(data) {
		try {
			const { email, password } = data;
			const knex = this.knex;
			const user = await knex.from(USER_TABLE).select("*").where({ email, password });
			return user[0];
		} catch (err) {
			console.error("Unable to get user");
		}
	}

	async getUser(userId) {
		try {
			const knex = this.knex;
			const user = await knex.from(USER_TABLE).select("*").where({ id: userId });
			return user;
		} catch (err) {
			console.error("Unable to get user");
		}
	}

	async getUserByEmail(email) {
		try {
			const knex = this.knex;
			const user = await knex.from(USER_TABLE).select("*").where({ email: email });
			return user;
		} catch (err) {
			console.error("Unable to get user by email");
		}
	}

	async createUser(data) {
		try {
			const knex = this.knex;
			const newUser = await knex(USER_TABLE).insert(data);
			return newUser;
		} catch (err) {
			console.error("Unable to create new user", err);
		}
	}

	async updateUser(userId, data) {
		try {
			const knex = this.knex;
			const updateUser = await knex(USER_TABLE).where({ id: userId }).update(data);
			return updateUser;
		} catch (err) {
			console.error("Unable to update user");
		}
	}

	async deleteUser(userId) {
		try {
			const knex = this.knex;
			const deleteUser = await knex(USER_TABLE).where({ id: userId }).del();
			return deleteUser;
		} catch (err) {
			console.error("Unable to delete user", err);
		}
	}
}

const user = new User();

module.exports = user;