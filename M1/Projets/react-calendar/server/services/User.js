const pgTables = require("../env/pgTables");
const fastifyKnex = require("../plugin/fastifyKnex");
const { USER_TABLE } = pgTables;

module.exports = class User {
    constructor(knex) {
        this.knex = knex;
    }

    async createUser(data) {
        try {
            const knex = this.knex;
            const newUser = await knex(USER_TABLE).insert(data);
            return newUser;
        } catch (err) {
            console.error("Unable to create new user");
        }
    }

    async deleteUser(userId) {
        try {
            const knex = this.knex;
            const deleteUser = await knex(USER_TABLE).where({ id: userId }).del();
            return deleteUser;
        } catch (err) {
            console.error("Unable to delete user");
        }
    }

    async updateUser(userId) {
        try {
            const knex = this.knex;
            const updateUser = await knex(USER_TABLE).where({ id: userId }).update(data);
            return updateUser;
        } catch (err) {
            console.error("Unable to update user");
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

    async getUsers() {
        try {
            const knex = this.knex;
            const user = await knex.from(USER_TABLE).select("*");
            return user;
        } catch (err) {
            console.error("Unable to get users");
        }
    }
};