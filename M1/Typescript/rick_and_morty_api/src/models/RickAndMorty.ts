// https://rickandmortyapi.com/api/character

export enum API_TYPES {
	CHARACTER = "character",
	LOCATIONS = "locations",
	EPISODES = "episodes",
}

export interface RickAndMortyCharacterInfo {
	count: number;
	pages: number;
	next: string;
	prev: null | string;
}
export interface RickAndMortyCharacterResult {
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
