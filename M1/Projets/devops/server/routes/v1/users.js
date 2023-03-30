const { getUsers, getUser, createUser, updateUser, deleteUser, getUserLogin, getUserByEmail } = require("../../controllers/users");

async function usersRoute(fastify, opts, done) {
	fastify.get("/", getUsers);
	fastify.get("/get/:userId", getUser);
	fastify.get("/getbyemail/:email", getUserByEmail);
	fastify.post("/login", getUserLogin);
	fastify.post("/create", createUser);
	fastify.patch("/update/:userId", updateUser);
	fastify.delete("/delete/:userId", deleteUser);

	done();
}

module.exports = usersRoute;
