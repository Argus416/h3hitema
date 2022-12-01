const {getUsers, getUser, createUser, updateUser, deleteUser, getUserLogin} = require("../../controllers/users");

async function usersRoute(fastify, opts, done) {
    fastify.get("/users", getUsers);
    fastify.get("/users/get/:userId", getUser);
    fastify.post("/users/login", getUserLogin);
    fastify.post("/users/create", createUser);
    fastify.patch("/users/update/:userId", updateUser);
    fastify.delete("/users/delete/:userId", deleteUser);

    done()
}

module.exports = usersRoute;