const { getUsers, getUser, createUser, updateUser, deleteUser, getUserLogin } = require("../controllers/users");
const { getAppointments, getAppointment, createAppointment, updateAppointment, deleteAppointment } = require("../controllers/appointment");

async function routes(fastify, opts, done) {
    // users
    fastify.get("/users", getUsers);
    fastify.get("/users/get/:userId", getUser);
    fastify.post("/users/login", getUserLogin);
    fastify.post("/users/create", createUser);
    fastify.patch("/users/update/:userId", updateUser);
    fastify.delete("/users/delete/:userId", deleteUser);

    // appointments
    fastify.get("/appointments/:userId", getAppointments);
    fastify.get("/appointments/get/:appointmentId", getAppointment);
    fastify.post("/appointments/create", createAppointment);
    fastify.patch("/appointments/update/:appointmentId", updateAppointment);
    fastify.delete("/appointments/delete/:appointmentId", deleteAppointment);

    done();
}

module.exports = routes;