import { API_URL } from "../config/api_config";
import axios from "axios";

class Comment {
	async getComments() {
		try {
			const request = await axios.get(`${API_URL}/comments`);
			const comments = request.data;

			return comments;
		} catch (err) {
			console.error("Error fetching Comments in Comment controller", err);
		}
	}

	async deleteComment(commentId) {
		try {
			const request = await axios.delete(`${API_URL}/comments/delete${commentId}`);
			const comments = request.data;

			return comments;
		} catch (err) {
			console.error("Error deleting Comment in Comment controller", err);
		}
	}

	async updateComment(commentId, data) {
		try {
			const request = await axios.patch(`${API_URL}/comments/update/${commentId}`, data);
			const comments = request.data;

			return comments;
		} catch (err) {
			console.error("Error updating Comments in Comment controller", err);
		}
	}
}

const comment = new Comment();

export default comment;
