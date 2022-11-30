import axios from "axios";

const url = `http://localhost:3000/taches`;

class Taches {
	async getTaches() {
		const respons = await axios.get(url);
		const { data } = respons;

		return data;
	}

	async getTache(id) {
		const respons = await axios.get(`${url}/${id}`);
		const { data } = respons;

		return data;
	}

    async addTache(body) {
        const respons = await axios.post(`${url}`, body);
        const { data } = respons;

        return data;
    }

    async updateTache(id, body) {
        const respons = await axios.patch(`${url}/${id}`, body);
        const { data } = respons;

        return data;
    }

    async deleteTache(id, body) {
        const respons = await axios.delete(`${url}/${id}`, body);
        const { data } = respons;

        return data;
    }
}

const taches = new Taches();

export default taches;
