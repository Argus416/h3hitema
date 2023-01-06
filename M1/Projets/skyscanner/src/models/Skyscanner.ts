export enum localStorageKeys {
	airports = "airports",
}

export interface Airport {
	PlaceId: string;
	PlaceName: string;
	LocalizedPlaceName: string;
	CountryId: string;
	CityId: string;
	IataCode: string;
	CountryName: string;
	PlaceNameEn: string;
	CityName: string;
	CityNameEn: string;
	GeoId: string;
	GeoContainerId: string;
	Location: string;
	ResultingPhrase: string;
	UntransliteratedResultingPhrase: string;
}

// flight

export interface Flight {
	id: string;
	price: FlightPrice;
	legs: FlightLeg[];
	is_eco_contender: boolean;
	eco_contender_delta: number;
	score: number;
	totalDuration: number;
}

interface FlightPrice {
	amount: number;
	update_status: string;
	last_updated: string;
	quote_age: number;
	score: number;
	transfer_type: string;
}

interface FlightLeg {
	id: string;
	origin: FlightLegOriginDestination;
	destination: FlightLegOriginDestination;
	departure: string;
	arrival: string;
	duration: number;
	carriers: FlightCarrier[];
	stop_count: 0;
	stops: [];
}

interface FlightCarrier {
	id: number;
	name: string;
	alt_id: string;
	display_code: string;
	display_code_type: string;
}

interface FlightLegOriginDestination {
	id: number;
	entity_id: number;
	alt_id: string;
	parent_id: number;
	parent_entity_id: number;
	name: string;
	type: string;
	display_code: string;
}

// flight details

export interface FlightDetails {
	legs: FlightDetailsLeg[];
	pricingOptions: [];
	linked: {};
}

interface FlightDetailsLeg {
	id: string;
	origin: FlightDetailsLegOriginDestination;
	destination: FlightDetailsLegOriginDestination;
	segments: FlightDetailsLegSegments[];
	layovers: FlightDetailsLegLayovers[];
	duration: number;
	stopCount: number;
	departure: Date;
	arrival: Date;
	dayChange: number;
}

interface FlightDetailsLegLayovers {
	segmentId: string;
	origin: FlightDetailsLegOriginDestination;
	destination: FlightDetailsLegOriginDestination;
	duration: number;
	stopCount: number;
	departure: Date;
	arrival: Date;
	dayChange: number;
}

interface FlightDetailsLegSegments {
	id: string;
	origin: FlightDetailsLegOriginDestination;
	destination: FlightDetailsLegOriginDestination;
	duration: number;
	dayChange: number;
	flightNumber: string;
	departure: string;
	arrival: string;
	marketingCarrier: FlightDetailsLegSegmentsMarketingOperationCarrier;
	operatingCarrier: FlightDetailsLegSegmentsMarketingOperationCarrier;
	goodToKnowItems: {
		icon: string;
		body: {
			value: string;
			isHighlighted: boolean;
			position: number;
		};
	}[];
}

interface FlightDetailsLegSegmentsMarketingOperationCarrier {
	id: string;
	name: string;
	displayCode: string;
	displayCodeType: string;
	brandColor: string;
	logo: string;
	altId: string;
}

interface FlightDetailsLegOriginDestination {
	id: string;
	name: string;
	displayCode: string;
	city: string;
}
