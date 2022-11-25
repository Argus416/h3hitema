const Appointment = require("../services/Appointment");
const { faker } = require("@faker-js/faker");

exports.getAppointments = async(req, res) => {
    try {
        const getAllAppointment = await Appointment.getAppointments();
        res.send(getAllAppointment);
    } catch (err) {
        console.error(err);
        res.send("Unable to get appointments from the Appointment controller");
    }
};

exports.getAppointment = async(req, res) => {
    try {
        const { appointmentId } = req.params;
        const getAppointment = await Appointment.getAppointment(appointmentId);
        res.send(getAppointment);
    } catch (err) {
        console.error(err);
        res.send("Unable to get appointment from the Appointment controller");
    }
};

exports.createAppointment = async(req, res) => {
    try {
        const data = {
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraph(3),
            userId: 1,
            created_at: new Date(),
        };

        const createAppointment = await Appointment.createAppointment(data);
        console.log("createAppointment");

        res.send("createAppointment");
    } catch (err) {
        console.error(err);
        res.send("Unable to create appointment from the Appointment controller");
    }
};

exports.updateAppointment = async(req, res) => {
    try {
        const { appointmentId } = req.params;

        const data = {
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraph(3),
            updated_at: new Date(),
        };

        const updateAppointment = await Appointment.updateAppointment(appointmentId, data);
        console.log(updateAppointment, "updateAppointment");

        res.send("updateAppointment");
    } catch (err) {
        console.error(err);
        res.send("Unable to update appointment from the Appointment controller");
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const { userId } = req.params;

        const deleteUser = await User.deleteUser(userId);
        console.log(deleteUser, "deleteUser");

        res.send("deleteUser");
    } catch (err) {
        console.error(err);
        res.send("Unable to delete appointment from the Appointment controller");
    }
};