const url = `https://jsonplaceholder.typicode.com/posts`;
class Api {
	async getPosts(length = 0) {
		try {
			let data = await fetch(url);
			data = await data.json();
			if (length !== 0) data = data.splice(0, length);

			return data;
		} catch (e) {
			console.error(e);
		}
	}

	async getPost(id) {
		try {
			let data = await fetch(`${url}/${id}`);
			data = await data.json();

			return data;
		} catch (e) {
			console.error(e);
		}
	}
}

export const api = new Api();
