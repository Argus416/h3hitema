import RickAndMortyApi from "../api/RickAndMorty";

class RickAndMorty {
	async getCharechter(page = "1") {
		try {
			const result = await RickAndMortyApi.getAllCharacters(page);
			return result;
		} catch (err) {
			console.error(`Error getting charechter from controller ${err}`);
		}
	}
}

const rickAndMorty = new RickAndMorty();

export default rickAndMorty;
