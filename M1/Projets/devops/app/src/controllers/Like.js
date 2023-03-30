import { API_URL } from "../config/api_config";
import axios from "axios";

class Like {
	async getLikes(postId) {
		try {
			const request = await axios.get(`${API_URL}/likes/all/${postId}`);
			const likes = request.data;

			return likes;
		} catch (err) {
			console.error("Error fetching Likes in Like controller", err);
		}
	}

	async addLike(data) {
		try {
			const request = await axios.post(`${API_URL}/likes/add`, data);
			const likes = request.data;

			return likes;
		} catch (err) {
			console.error("Error adding Like in Like controller", err);
		}
	}

	async deleteLike(likeId) {
		try {
			const request = await axios.delete(`${API_URL}/likes/delete/${likeId}`);
			const likes = request.data;

			return likes;
		} catch (err) {
			console.error("Error deleting Like in Like controller", err);
		}
	}

	async updateLike(likeId, data) {
		try {
			const request = await axios.patch(`${API_URL}/likes/update/${likeId}`, data);
			const likes = request.data;

			return likes;
		} catch (err) {
			console.error("Error updating Likes in Like controller", err);
		}
	}
}

const like = new Like();

export default like;
