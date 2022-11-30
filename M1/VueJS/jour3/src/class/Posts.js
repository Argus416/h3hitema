import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/posts`;

class Posts {
	async getPosts() {
		const respons = await axios.get(url);
		const { data } = respons;

		return data;
	}

	async getPost(id) {
		const respons = await axios.get(`${url}/${id}`);
		const { data } = respons;

		return data;
	}
}

const posts = new Posts();

export default posts;
