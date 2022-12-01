const {getUsers, getUser, createUser, updateUser, deleteUser, getUserLogin} = require("../../controllers/users");

async function usersRoute(fastify, opts, done) {
    fastify.get("/", getUsers);
    fastify.get("/get/:userId", getUser);
    fastify.post("/login", getUserLogin);
    fastify.post("/create", createUser);
    fastify.patch("/update/:userId", updateUser);
    fastify.delete("/delete/:userId", deleteUser);

    done()
}

module.exports = usersRoute;