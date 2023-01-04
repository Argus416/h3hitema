import { API_TYPES, RickAndMortyCharacter } from "./../models/RickAndMorty";
import axios from "../utils/Axiso";

class RickAndMorty {
	async getAllCharacters(page = "1"): Promise<RickAndMortyCharacter | boolean> {
		try {
			const request = await axios({
				method: "get",
				url: API_TYPES.CHARACTER,
				params: {
					page,
				},
			});
			const data = request.data as RickAndMortyCharacter;

			return data;
		} catch (err) {
			console.error("Error fetching characters", err);
			return false;
		}
	}
}

const rickAndMorty = new RickAndMorty();

export default rickAndMorty;
