export enum flightDetailsUrlQueryParams {
	params = "params",
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
	flights: {
		name: "Flights",
		url: "/flights",
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
