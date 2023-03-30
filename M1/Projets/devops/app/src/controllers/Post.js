import { API_URL } from "../config/api_config";
import axios from "axios";

class Post {
	async getPosts() {
		try {
			const request = await axios.get(`${API_URL}/posts`);
			const posts = request.data;

			return posts;
		} catch (err) {
			console.error("Error fetching Posts in Post controller", err);
		}
	}
	async addPost(data) {
		try {
			const request = await axios.post(`${API_URL}/posts/add`, data);
			const post = request.data;

			return post;
		} catch (err) {
			console.error("Error adding Post in Post controller", err);
		}
	}

	async deletePost(postId) {
		try {
			const request = await axios.delete(`${API_URL}/posts/delete${postId}`);
			const posts = request.data;

			return posts;
		} catch (err) {
			console.error("Error deleting Post in Post controller", err);
		}
	}

	async updatePost(postId, data) {
		try {
			const request = await axios.patch(`${API_URL}/posts/update/${postId}`, data);
			const posts = request.data;

			return posts;
		} catch (err) {
			console.error("Error updating Posts in Post controller", err);
		}
	}
}

const post = new Post();

export default post;
