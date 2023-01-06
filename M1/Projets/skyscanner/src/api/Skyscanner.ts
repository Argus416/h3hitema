import { Airport, Flight, FlightDetails, GetFlightsParams, localStorageKeys } from "../models/Skyscanner";
import axios from "../utils/Axiso";

class Skyscanner {
	async getAllAirport(city: string): Promise<Airport[] | boolean> {
		try {
			const request = await axios.get("/searchAirport", { params: { query: city } });
			const data = request.data.data as Airport[];
			return data;
		} catch (err) {
			console.error(`Error fetching airports`, err);
			return false;
		}
	}

	async getAllFlights({ ...params }: GetFlightsParams): Promise<Flight[] | boolean> {
		try {
			console.log(params);
			const request = (await axios.get("/searchFlights", { params: { ...params } })) as any;
			if (request.status) {
				const data = request.data.data as Flight[];
				console.log(request, "data");
				return data;
			}
			throw new Error(request.message);
			return false;
		} catch (err) {
			console.error(`Error fetching flights`, err);
			return false;
		}
	}

	async getFlight(): Promise<FlightDetails | boolean> {
		try {
			const request = await axios.get("/getFlightDetails");
			const data = request.data as FlightDetails;
			return data;
		} catch (err) {
			console.error(`Error fetching flight`, err);
			return false;
		}
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


