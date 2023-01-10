export enum flightDetailsUrlQueryParams {
	params = "params",
}
export interface routeInterface {
	name: string;
	url: string;
	displayInNavBar: boolean;
}

export const routes = {
	home: {
		name: "Home",
		url: "/",
		displayInNavBar: true,
	},
	airports: {
		name: "Airports",
		url: "/airports",
		displayInNavBar: true,
	},
	favorite: {
		name: "Favorite",
		url: "/favorite",
		displayInNavBar: true,
	},
	flightDetails: {
		name: "Flight details",
		url: "/flights/details",
		displayInNavBar: false,
	},

	errors: {
		404: {
			name: "404",
			url: "*",
		},
	},
};
