const Appointment = require("../services/Appointment");
const { faker } = require("@faker-js/faker");

exports.getAppointments = async(req, res) => {
    try {
        const { userId } = req.params;
        const getAllAppointment = await Appointment.getAppointments(userId);
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
        console.log(req.body, "reqBody");
		let { rdv } = req.body;
		delete req.body.rdv;
		rdv = new Date(rdv);
        const data = {
			...req.body,
			rdv,
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
			...req.body,
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

exports.deleteAppointment = async(req, res) => {
    try {
        const { appointmentId } = req.params;

        const deleteAppointment = await Appointment.deleteAppointment(appointmentId);
        console.log(deleteAppointment, "deleteAppointment");

        res.send("deleteAppointment");
    } catch (err) {
        console.error(err);
        res.send("Unable to delete appointment from the Appointment controller");
    }
};