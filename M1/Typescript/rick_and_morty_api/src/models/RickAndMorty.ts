// https://rickandmortyapi.com/api/character

interface RickAndMortyCharacterInfo {
	count: number;
	pages: number;
	next: string;
	prev: null | string;
}
interface RickAndMortyCharacterResult {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface RickAndMortyCharacter {
	info: RickAndMortyCharacterInfo;
	results: RickAndMortyCharacterResult[];
}
