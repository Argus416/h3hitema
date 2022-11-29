import axios from "axios";
import apiUrl from "./config";
class Appointment {
    async getAppointments(userId) {
        try {
            const appointments = await axios.get(`${apiUrl}/appointments/${userId}`);
            return appointments;
        } catch (err) {
            console.error("Unable to get appointments", err);
        }
    }

    async getAppointment(appointmentId) {
        try {
            const appointment = await axios.get(`${apiUrl}/appointments/get/${appointmentId}`);
            return appointment;
        } catch (err) {
            console.error("Unable to get appointment", err);
        }
    }

    async createAppointment(data) {
        try {
            const newAppointment = await axios.post(`${apiUrl}/appointments/create`, data);
            return newAppointment;
        } catch (err) {
            console.error("Unable to create appointment", err);
        }
    }

    async updateAppointment(data, appointmentId) {
        try {
            const updateAppointment = await axios.patch(`${apiUrl}/appointments/update/${appointmentId}`, data);
            return updateAppointment;
        } catch (err) {
            console.error("Unable to update appointment", err);
        }
    }

    async deleteAppointment(appointmentId) {
        try {
            const updateAppointment = await axios.delete(`${apiUrl}/appointments/delete/${appointmentId}`);
            return updateAppointment;
        } catch (err) {
            console.error("Unable to delete appointment", err);
        }
    }
}

const appointment = new Appointment();

export default appointment;