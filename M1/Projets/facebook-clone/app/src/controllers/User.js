import { API_URL } from "../config/api_config";

class User {
	constructor() {
		this.apiUrl = API_URL;
	}

	async getUsers() {
		try {
			const request = await axios.get(`${API_URL}/v1/users`);
			const users = request.data;

			return users;
		} catch (err) {
			console.error("Error fetching users in User controller", err);
		}
	}
	async getUser(id) {
		try {
			const request = await axios.get(`${API_URL}/v1/users/get/${id}`);
			const user = request.data;

			return user;
		} catch (err) {
			console.error("Error fetching user in User controller", err);
		}
	}
	async updateUser(id, body) {
		try {
			const request = await axios.patch(`${API_URL}/v1/users/update/${id}`);
			const user = request.data;

			return user;
		} catch (err) {
			console.error("Error updating user in User controller", err);
		}
	}

	async deleteUser(id) {
		try {
			const request = await axios.delete(`${API_URL}/v1/users/delete/${id}`);
			const user = request.data;

			return user;
		} catch (err) {
			console.error("Error updating user in User controller", err);
		}
	}
}

const user = new User();

export default user;
