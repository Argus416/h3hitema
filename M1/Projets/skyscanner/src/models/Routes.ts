export interface routeInterface {
	name: string;
	url: string;
}


export enum flightDetailsUrlQueryParams {
	params = "params",
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
	flights: {
		name: "Flights",
		url: "/flights",
	},
	flightDetails: {
		name: "Flight details",
		url: "/flights/details",
	},

	errors: {
		404: {
			name: "404",
			url: "*",
		},
	},
};
