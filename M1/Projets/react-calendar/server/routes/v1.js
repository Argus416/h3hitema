const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users");
const { getAppointments, getAppointment, createAppointment, updateAppointment } = require("../controllers/appointment");

async function routes(fastify, opts, done) {
    // users
    fastify.get("/users", getUsers);
    fastify.get("/users/get/:userId", getUser);
    fastify.post("/users/create", createUser);
    fastify.patch("/users/update/:userId", updateUser);
    fastify.delete("/users/delete/:userId", deleteUser);

    // users
    fastify.get("/appointments", getAppointments);
    fastify.get("/appointments/get/:appointmentId", getAppointment);
    fastify.post("/appointments/create", createAppointment);
    fastify.patch("/appointments/update/:appointmentId", updateAppointment);
    // fastify.delete("/appointments/delete/:userId", deleteUser);

    done();
}

module.exports = routes;