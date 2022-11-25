import axios from "axios";
import apiUrl from "./config";
class User {
    async getUsers() {
        try {
            const users = await axios.get(`${apiUrl}/users`);
            console.log("Get users", users);
            return users;
        } catch (err) {
            console.error("Unable to get users", err);
        }
    }

    async getUser(userId) {
        try {
            const user = await axios.get(`${apiUrl}/users/get/${userId}`);
            console.log("Get user", user);

            return user;
        } catch (err) {
            console.error("Unable to get user", err);
        }
    }

    async getUserLogin(data) {
        try {
            const user = await axios.post(`${apiUrl}/users/login`, data);
            console.log("Get user", user);

            return user;
        } catch (err) {
            console.error("Unable to get user", err);
        }
    }

    async createUser(data) {
        try {
            const newUser = await axios.post(`${apiUrl}/users/create`, data);
            console.log("create user", newUser);
            return newUser;
        } catch (err) {
            console.error("Unable to create user", err);
        }
    }

    async updateUser(data, userId) {
        try {
            const updateUser = await axios.patch(`${apiUrl}/users/update/${userId}`, data);
            console.log("Update user", updateUser);
            return updateUser;
        } catch (err) {
            console.error("Unable to update user", err);
        }
    }

    async deleteUser(userId) {
        try {
            const updateUser = await axios.patch(`${apiUrl}/users/delete/${userId}`);
            console.log("Delete user", updateUser);
            return updateUser;
        } catch (err) {
            console.error("Unable to delete user", err);
        }
    }
}

const user = new User();

export default user;