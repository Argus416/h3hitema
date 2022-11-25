const pgTables = require("../env/pgTables");
const { USER_TABLE, TASK_TABLE } = pgTables;
const pg = require("../db");

class Task {
    constructor() {
        this.knex = pg;
    }

    async getTasks() {
        try {
            const knex = this.knex;
            // const tasks = await knex.from(TASK_TABLE).innerJoin("users", "tasks.userId", `users.id`).options({ nestTables: true });
            const tasks = knex("tasks")
                .select(["tasks.*", knex.raw("to_json(users.*) as users")])
                .innerJoin("users", {
                    "tasks.userId": "users.id",
                });
            return tasks;
        } catch (err) {
            console.error("Unable to get users", err);
        }
    }

    async getTask(taskId) {
        try {
            const knex = this.knex;
            // const task = await knex.from(TASK_TABLE).select("*").where({ id: taskId });
            const task = knex("tasks")
                .join("users", "users.id", "tasks.userId")
                .select("tasks.*", knex.raw("to_json(users.*) as users"))
                .where({ "tasks.id": taskId });
            return task;
        } catch (err) {
            console.error("Unable to get user");
        }
    }

    async createTask(data) {
        try {
            const knex = this.knex;
            const newUser = await knex(TASK_TABLE).insert(data);
            return newUser;
        } catch (err) {
            console.error("Unable to create new user", err);
        }
    }

    async updateTask(taskId, data) {
        try {
            const knex = this.knex;
            const updateUser = await knex(TASK_TABLE).where({ id: taskId }).update(data);
            return updateUser;
        } catch (err) {
            console.error("Unable to update user");
        }
    }

    async deleteTask(taskId) {
        try {
            const knex = this.knex;
            const deleteUser = await knex(TASK_TABLE).where({ id: taskId }).del();
            return deleteUser;
        } catch (err) {
            console.error("Unable to delete user", err);
        }
    }
}

const task = new Task();

module.exports = task;