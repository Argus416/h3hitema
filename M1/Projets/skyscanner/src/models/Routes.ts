export interface routeInterface {
	name: string;
	url: string;
}

export const routes = {
	home: {
		name: "Home",
		url: "/",
	},
	airports: {
		name: "Airports",
		url: "/airports",
	},
};
