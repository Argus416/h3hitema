import { Airport, Flight, FlightDetails, localStorageKeys } from "../models/Skyscanner";
import axios from "../utils/Axiso";

class Skyscanner {
	async getAllAirport(city: string): Promise<Airport[]> {
		const request = await axios.get("/searchAirport", { params: city });
		const data = request.data as Airport[];
		return data;
	}

	async getAllFlights(): Promise<Flight[]> {
		const request = await axios.get("/searchFlights");
		const data = request.data;
		return data;
	}

	async getFlight(): Promise<FlightDetails> {
		const request = await axios.get("/getFlightDetails");
		const data = request.data as FlightDetails;
		return data;
	}
}

class SkyscannerWithLocalStorageMethods extends Skyscanner {
	getFavoris() {
		const favoris = JSON.parse(localStorage.getItem(localStorageKeys.airports) || "[]");

		return favoris;
	}

	setFavoris(data: any) {
		const favoris = localStorage.set(localStorageKeys.airports, JSON.stringify(data));

		return favoris;
	}
}

const skyscanner = new SkyscannerWithLocalStorageMethods();

export default skyscanner;

// page permettant de trouver tous les aéroports d'une localité (https://skyscanner50.p.rapidapi.com/api/v1/searchAirport)

// page permettant de chercher des vols (https://skyscanner50.p.rapidapi.com/api/v1/searchFlights)

// page permettant d'obtenir le détail d'un vol (https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails)

// page permettant de consulter les favoris
