const pgTables = require("../env/pgTables");
const { USER_TABLE, APPOINTMENT_TABLE } = pgTables;
const pg = require("../db");

class Task {
    constructor() {
        this.knex = pg;
    }

    async getAppointments() {
        try {
            const knex = this.knex;
            // const appointment = await knex.from(APPOINTMENT_TABLE).innerJoin("users", "appointment.userId", `users.id`).options({ nestTables: true });
            const appointments = await knex("appointments")
                .select(["appointments.*", knex.raw("to_json(users.*) as users")])
                .innerJoin("users", {
                    "appointments.userId": "users.id",
                });
            return appointments;
        } catch (err) {
            console.error("Unable to get appointments", err);
        }
    }

    async getAppointment(appointmentId) {
        try {
            const knex = this.knex;
            // const task = await knex.from(APPOINTMENT_TABLE).select("*").where({ id: appointmentId });
            const appointment = await knex(APPOINTMENT_TABLE)
                .join("users", "users.id", "appointments.userId")
                .select("appointments.*", knex.raw("to_json(users.*) as users"))
                .where({ "appointments.id": appointmentId });
            return appointment;
        } catch (err) {
            console.error("Unable to get appointment");
        }
    }

    async createAppointment(data) {
        try {
            const knex = this.knex;
            const newUser = await knex(APPOINTMENT_TABLE).insert(data);
            return newUser;
        } catch (err) {
            console.error("Unable to create new appointment", err);
        }
    }

    async updateAppointment(appointmentId, data) {
        try {
            const knex = this.knex;
            const updateUser = await knex(APPOINTMENT_TABLE).where({ id: appointmentId }).update(data);
            return updateUser;
        } catch (err) {
            console.error("Unable to update task");
        }
    }

    async deleteAppointment(appointmentId) {
        try {
            const knex = this.knex;
            const deleteUser = await knex(APPOINTMENT_TABLE).where({ id: appointmentId }).del();
            return deleteUser;
        } catch (err) {
            console.error("Unable to delete task", err);
        }
    }
}

const task = new Task();

module.exports = task;