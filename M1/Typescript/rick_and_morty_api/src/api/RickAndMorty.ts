import { API_TYPES, RickAndMortyCharacter } from "./../models/RickAndMorty";
import axios from "../utils/Axiso";

class RickAndMorty {
	async getAllCharacters(): Promise<RickAndMortyCharacter | boolean> {
		try {
			const request = await axios.get(API_TYPES.CHARACTER);
			const data = JSON.parse(request.data) as RickAndMortyCharacter;

			return data;
		} catch (err) {
			console.error("Error fetching characters", err);
			return false;
		}
	}
}

const rickAndMorty = new RickAndMorty();

export default rickAndMorty;
