const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php`;
class Api {
	async getCocktails(length = 0) {
		try {
			let data = await fetch(`${url}?f=a`);
			data = await data.json();
			if (length !== 0) data = data.splice(0, length);

			return data;
		} catch (e) {
			console.error(e);
		}
	}

	async getCocktail(name) {
		try {
			let data = await fetch(`${url}?s=${name}`);
			data = await data.json();
			return data;
		} catch (e) {
			console.error(e);
		}
	}
}

export const api = new Api();
