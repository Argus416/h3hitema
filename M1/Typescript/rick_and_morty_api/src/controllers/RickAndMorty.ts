import RickAndMortyApi from "../api/RickAndMorty";

class RickAndMorty {
	async getCharechter() {
		try {
			const result = await RickAndMortyApi.getAllCharacters();
			return result;
		} catch (err) {
			console.error(`Error getting charechter from controller ${err}`);
		}
	}
}

const rickAndMorty = new RickAndMorty();

export default rickAndMorty;
