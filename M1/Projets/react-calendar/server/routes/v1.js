const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users");
const { getTasks, getTask, createTask } = require("../controllers/tasks");
const userSchema = require("../models/users");

async function routes(fastify, opts, done) {
    // users
    fastify.get("/users", getUsers);
    fastify.get("/users/get/:userId", getUser);
    fastify.post("/users/create", createUser);
    fastify.patch("/users/update/:userId", updateUser);
    fastify.delete("/users/delete/:userId", deleteUser);

    // users
    fastify.get("/tasks", getTasks);
    fastify.get("/tasks/get/:taskId", getTask);
    fastify.post("/tasks/create", createTask);
    // fastify.get("/tasks/get/:userId", getUser);
    // fastify.post("/tasks/create", createUser);
    // fastify.patch("/tasks/update/:userId", updateUser);
    // fastify.delete("/tasks/delete/:userId", deleteUser);

    done();
}

module.exports = routes;